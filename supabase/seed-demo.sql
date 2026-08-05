insert into public.menu_items(item_key,type,section_id,section_title,name,description,volume,price,available,sort_order)
values
('bar:vdsiob-uwa:firmennyi-limonad','bar','vdsiob-uwa','Напитки','Фирменный лимонад','Сезонные фрукты и ягоды.','400 мл',450,true,10),
('bar:tpzfbqwhfe:assam','bar','tpzfbqwhfe','Чай','Ассам','Насыщенный чёрный чай.','900 мл',650,true,10),
('bar:jlabxgucjm:kapuchino','bar','jlabxgucjm','Кофе','Капучино','','250 мл',320,true,10),
('bar:euazcndqwm:avtorskiy-kokteil','bar','euazcndqwm','Коктейли','Авторский коктейль','Демонстрационная позиция.','250 мл',650,true,10),
('hookah:hookah:klassicheskiy-kalyan','hookah','hookah','Кальяны','Классический кальян','Демонстрационная позиция.','',2000,true,10)
on conflict(item_key) do update set price=excluded.price, name=excluded.name;

insert into public.promotions(title,text,type_label,sort_order)
select 'Пример акции','Добавьте описание и изображение через админку.','Акция',10
where not exists(select 1 from public.promotions);

insert into public.rules(title,text,sort_order)
select * from (values
('Возрастные ограничения','Укажите правила посещения заведения.',10),
('Бронирование','Опишите условия бронирования столов.',20)
) v(title,text,sort_order)
where not exists(select 1 from public.rules);
