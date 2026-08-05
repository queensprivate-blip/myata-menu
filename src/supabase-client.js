const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase не настроен. Укажите VITE_SUPABASE_URL и VITE_SUPABASE_PUBLISHABLE_KEY.');
}

export const supabase = globalThis.supabase.createClient(
  supabaseUrl || 'https://example.supabase.co',
  supabaseKey || 'missing-key',
);
