-- v24: поле ссылки на отзывы. Безопасно выполнять повторно.
alter table public.venue_settings
  add column if not exists review_url text not null default '';

-- Ссылку на отзывы можно указать в админке: /#admin → Заведение.
