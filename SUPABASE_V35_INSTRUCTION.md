# Supabase: инструкция для МЯТЫ после интеграции v0.35

## Что требуется

Новая интеграция использует существующие таблицы и Storage из `supabase/upgrade-v22.sql` МЯТЫ.
Дополнительно добавлены только два необязательных поля Telegram в `venue_settings`:
- `telegram_url`
- `telegram_label`

## Порядок

1. Если `upgrade-v22.sql` МЯТЫ уже выполнялся раньше, повторять его не обязательно.
2. В Supabase Dashboard откройте SQL Editor.
3. Выполните файл `supabase/migration-myata-v35-functions.sql`.
4. Никакие данные ПосиДыма этим SQL не добавляются.
5. Bucket `menu-media` и политики Storage остаются существующими из `upgrade-v22.sql`.
6. Edge Functions не нужны.
7. Новых Vercel env не требуется. Остаются:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

Если `upgrade-v22.sql` ещё никогда не выполнялся, сначала выполните именно версию из проекта МЯТЫ, затем `migration-myata-v35-functions.sql`.
