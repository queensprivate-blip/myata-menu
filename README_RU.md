# МЯТА PLATINUM СПАРТАК — QR-меню v24

Vite + Vanilla JS + Supabase + Vercel. Функционально проект приведён к базе Posidym v24, но сохраняет фирменный дизайн МЯТЫ.

## Что работает

- Бар с группами и быстрым переходом по подразделам.
- Кальянная карусель.
- Акции и правила.
- «Мой выбор» с локальным сохранением, суммой и удалением позиций.
- Информация о заведении и ссылка на отзывы.
- Полная админка `/#admin`.
- Редактирование категорий, позиций, цен, описаний, порядка и видимости.
- Стоп-лист / архив.
- Управление акциями, правилами и данными заведения.
- Загрузка фотографий в Supabase Storage `menu-media`.
- Supabase Auth + RLS.

## Supabase: новый проект

В SQL Editor выполнить по порядку:

1. `supabase/schema.sql`
2. `supabase/upgrade-v22.sql`
3. `supabase/update-review-url-v24.sql`
4. `supabase/seed.sql`
5. Создать пользователя в Authentication → Users.
6. В `supabase/make-admin.sql` заменить email на email администратора и выполнить запрос.

## Vercel

Добавить переменные окружения:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

После изменения переменных сделать Redeploy.

## Админка

`https://myata-menu.vercel.app/#admin`
