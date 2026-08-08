export const brand = {
  venueName: 'МЯТА PLATINUM СПАРТАК',
  venueType: 'Hookah Lounge · Bar',
  address: 'Волоколамское ш., 71, корп. 1',
  phone: '+7 (985) 006-62-61',
  hours: 'пн-чт 12:00-01:00, пт 12:00-02:00, сб 14:00-02:00, вс 14:00-01:00',
  reviewUrl: '',
  currency: '₽',
  locale: 'ru-RU',
  storagePrefix: 'qr-menu-myata-platinum-spartak',
  colors: {
    accent: '#c9a15c',
    accentLight: '#e4c98f',
    accentMuted: 'rgba(201, 161, 92, 0.55)',
    text: '#f3eadb',
    muted: '#b8a894',
    surface: 'rgba(43, 27, 14, 0.94)',
    surfaceSoft: 'rgba(52, 32, 16, 0.88)',
    border: 'rgba(201, 161, 92, 0.28)',
    background: '#120b06',
  },
};

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
  document.title = brand.venueName;
}
