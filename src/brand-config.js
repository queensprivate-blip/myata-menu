export const brand = {
  venueName: 'МЯТА PLATINUM СПАРТАК',
  venueType: 'Hookah Lounge · Bar',
  address: 'Волоколамское ш., 71, корп. 1',
  phone: '+7 (985) 006-62-61',
  hours: 'пн-чт 12:00-01:00, пт 12:00-02:00, сб 14:00-02:00, вс 14:00-01:00',
  reviewUrl: '',
  telegramUrl: '',
  telegramLabel: '',
  currency: '₽',
  locale: 'ru-RU',
  storagePrefix: 'qr-menu-myata-platinum-spartak',
  colors: {
    accent: '#c9a15c',
    accentLight: '#e4c98f',
    accentMuted: 'rgba(201, 161, 92, 0.55)',
    text: '#f3eadb',
    muted: '#b8a894',
    surface: 'rgba(43, 27, 14, 0.92)',
    surfaceSoft: 'rgba(52, 32, 16, 0.84)',
    border: 'rgba(201, 161, 92, 0.27)',
    background: '#120b06',
  },
};

const brownThemeOverrides = `
.site {
  background:
    linear-gradient(180deg, rgba(18, 10, 4, 0.34), rgba(22, 13, 6, 0.66)),
    var(--hero-image) 50% center / cover fixed;
}

.site::before {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.16), rgba(24, 14, 6, 0.26) 50%, rgba(18, 10, 4, 0.68)),
    radial-gradient(circle at 50% 6%, rgba(213, 173, 97, 0.04), transparent 30%),
    linear-gradient(90deg, rgba(18, 10, 4, 0.40), transparent 28%, transparent 72%, rgba(18, 10, 4, 0.40));
}

.home-card {
  background: rgba(37, 23, 12, 0.76);
}

.home-card:hover {
  background: rgba(49, 30, 15, 0.88);
}

.venue-dialog::backdrop {
  background: rgba(20, 12, 5, 0.80);
}

.venue-dialog-card {
  background: linear-gradient(180deg, rgba(51, 32, 17, 0.98), rgba(35, 22, 11, 0.99));
}

.inner-page::after {
  background: rgba(31, 19, 9, 0.42);
}

.inner-header {
  background: rgba(28, 17, 8, 0.92);
}

.round-button {
  background: rgba(43, 27, 14, 0.82);
}

.product-card {
  background: rgba(43, 27, 14, 0.92);
}

.promotion-card {
  background: linear-gradient(145deg, rgba(70, 43, 22, 0.96), rgba(45, 28, 14, 0.96));
}

.rule-card {
  background: rgba(46, 29, 15, 0.93);
}

/* Акции: карточки и карусель */
.promotion-slide {
  background: rgba(43, 27, 14, 0.94);
}

.promotion-slide > img {
  background: #160d07;
}

.promotion-slide-copy {
  background: rgba(43, 27, 14, 0.96);
}

/* Отзывы */
.review-dialog::backdrop {
  background: rgba(20, 12, 5, 0.80);
}

.review-dialog-card {
  background: linear-gradient(180deg, rgba(51, 32, 17, 0.99), rgba(35, 22, 11, 0.99));
}

.review-dialog-icon {
  background: rgba(201, 161, 92, 0.10);
}

.review-dialog-link {
  background: linear-gradient(180deg, rgba(201, 161, 92, 0.20), rgba(201, 161, 92, 0.10));
}

/* Верхние быстрые столбцы/кнопки внутри разделов меню */
.menu-quick-nav button {
  color: rgba(246, 238, 218, 0.88);
  background: rgba(47, 30, 17, 0.90);
  border: 1px solid rgba(201, 161, 92, 0.12);
}

.menu-quick-nav button:hover,
.menu-quick-nav button:focus-visible {
  color: var(--gold-light);
  background: rgba(58, 36, 18, 0.96);
}

.menu-quick-nav button:active,
.menu-quick-nav button.is-active {
  color: var(--gold-light);
  background: rgba(68, 42, 21, 0.98);
}

/* Новые элементы патча v35 тоже держим в старой коричневой гамме */
.admin-shell,
.admin-panel,
.admin-card,
.admin-section,
.admin-toolbar,
.admin-modal-card,
.admin-form-card,
.admin-item-card,
.admin-list-card,
.admin-category-card,
.admin-search,
.admin-input,
.admin-select,
.admin-textarea,
.admin-upload,
.admin-image-box,
.admin-empty {
  --admin-brown: rgba(43, 27, 14, 0.96);
  --admin-brown-soft: rgba(52, 32, 16, 0.90);
}

.admin-panel,
.admin-card,
.admin-section,
.admin-toolbar,
.admin-modal-card,
.admin-form-card,
.admin-item-card,
.admin-list-card,
.admin-category-card,
.admin-pro-card {
  background-color: var(--admin-brown);
  border-color: rgba(201, 161, 92, 0.24);
}

.admin-input,
.admin-select,
.admin-textarea,
.admin-search,
.admin-upload,
.admin-image-box,
.admin-tab-toolbar input,
.admin-tab-toolbar select,
.admin-field input,
.admin-field select,
.admin-field textarea {
  background-color: rgba(31, 19, 9, 0.88);
  border-color: rgba(201, 161, 92, 0.24);
  color: var(--text);
}

.admin-tabs button {
  background: rgba(52, 32, 16, 0.78);
  color: #d8c8b3;
}

.admin-tabs button.is-active,
.admin-primary,
.admin-toast {
  background: #c9a15c;
  color: #24160b;
}

.admin-banner-preview,
.admin-file-picker,
.admin-file-preview {
  background-color: rgba(24, 14, 7, 0.92);
}

dialog::backdrop {
  background-color: rgba(20, 12, 5, 0.78);
}
`;

export function applyBrandTheme() {
  const root = document.documentElement;
  const map = {
    '--gold': brand.colors.accent,
    '--gold-light': brand.colors.accentLight,
    '--gold-muted': brand.colors.accentMuted,
    '--text': brand.colors.text,
    '--muted': brand.colors.muted,
    '--surface': brand.colors.surface,
    '--surface-soft': brand.colors.surfaceSoft,
    '--border': brand.colors.border,
    '--bg': brand.colors.background,
  };

  Object.entries(map).forEach(([key, value]) => root.style.setProperty(key, value));

  let style = document.querySelector('#myata-brown-theme');
  if (!style) {
    style = document.createElement('style');
    style.id = 'myata-brown-theme';
    document.head.appendChild(style);
  }
  style.textContent = brownThemeOverrides;

  document.title = brand.venueName;
}
