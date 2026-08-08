-- МЯТА PLATINUM СПАРТАК: расширенная админка. Выполнить после schema.sql.

alter table public.menu_items add column if not exists archived boolean not null default false;
alter table public.menu_items add column if not exists badge text not null default '';

create table if not exists public.menu_sections (
  section_id text primary key,
  type text not null check (type in ('bar','hookah')),
  title text not null,
  note text not null default '',
  parent_group text not null default '',
  sort_order integer not null default 0,
  visible boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists public.promotions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  text text not null default '',
  type_label text not null default 'Акция',
  image_url text,
  visible boolean not null default true,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.rules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  text text not null default '',
  visible boolean not null default true,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.venue_settings (
  id integer primary key default 1 check (id = 1),
  venue_name text not null default 'МЯТА PLATINUM СПАРТАК',
  address text not null default 'Волоколамское ш., 71, корп. 1',
  phone text not null default '+7 (985) 006-62-61',
  hours text not null default 'пн-чт 12:00-01:00, пт 12:00-02:00, сб 14:00-02:00, вс 14:00-01:00',
  review_url text not null default '',
  updated_at timestamptz not null default now()
);

insert into public.venue_settings (id) values (1) on conflict (id) do nothing;

alter table public.menu_sections enable row level security;
alter table public.promotions enable row level security;
alter table public.rules enable row level security;
alter table public.venue_settings enable row level security;

-- Публичное чтение
do $$ begin
  create policy "Public can read sections" on public.menu_sections for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Public can read promotions" on public.promotions for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Public can read rules" on public.rules for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Public can read venue" on public.venue_settings for select using (true);
exception when duplicate_object then null; end $$;

-- Полный доступ администраторам
DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['menu_sections','promotions','rules','venue_settings'] LOOP
    EXECUTE format('drop policy if exists "Admins manage %s" on public.%I', t, t);
    EXECUTE format('create policy "Admins manage %s" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', t, t);
  END LOOP;
END $$;

grant select on public.menu_sections, public.promotions, public.rules, public.venue_settings to anon, authenticated;
grant insert, update, delete on public.menu_sections, public.promotions, public.rules, public.venue_settings to authenticated;

-- Storage для изображений меню
insert into storage.buckets (id, name, public) values ('menu-media', 'menu-media', true)
on conflict (id) do update set public = true;

drop policy if exists "Public read menu media" on storage.objects;
create policy "Public read menu media" on storage.objects for select using (bucket_id = 'menu-media');
drop policy if exists "Admins upload menu media" on storage.objects;
create policy "Admins upload menu media" on storage.objects for insert to authenticated
with check (bucket_id = 'menu-media' and public.is_admin());
drop policy if exists "Admins update menu media" on storage.objects;
create policy "Admins update menu media" on storage.objects for update to authenticated
using (bucket_id = 'menu-media' and public.is_admin()) with check (bucket_id = 'menu-media' and public.is_admin());
drop policy if exists "Admins delete menu media" on storage.objects;
create policy "Admins delete menu media" on storage.objects for delete to authenticated
using (bucket_id = 'menu-media' and public.is_admin());

-- Начальные разделы из уже импортированных позиций
insert into public.menu_sections(section_id,type,title,sort_order)
select section_id, min(type), min(section_title), min(sort_order)
from public.menu_items group by section_id
on conflict(section_id) do update set title=excluded.title, type=excluded.type;

-- Демонстрационные данные не добавляются автоматически.
-- Создайте акции и правила через админку или выполните seed-demo.sql.
