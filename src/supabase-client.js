const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!window.supabase?.createClient) {
  throw new Error('Supabase client library was not loaded');
}

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn('Supabase не настроен. Укажите VITE_SUPABASE_URL и VITE_SUPABASE_PUBLISHABLE_KEY.');
}

export const supabase = window.supabase.createClient(
  supabaseUrl || 'https://example.supabase.co',
  supabasePublishableKey || 'missing-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);
