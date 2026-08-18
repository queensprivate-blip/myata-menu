-- МЯТА PLATINUM СПАРТАК: безопасная добавочная миграция для интеграции функций v0.35.
-- Выполнить ПОСЛЕ существующих schema.sql и upgrade-v22.sql.
-- Не содержит данных ПосиДыма и не меняет меню МЯТЫ.

alter table public.venue_settings
  add column if not exists telegram_url text not null default '',
  add column if not exists telegram_label text not null default '';

-- Существующие RLS/Storage/CRUD-таблицы уже создаются в upgrade-v22.sql МЯТЫ.
