import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

if (!supabaseUrl || !supabaseAnonKey) {
  // Avoid leaking keys — only warn in dev when variables are missing
  console.warn('VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. Supabase client will be unusable until configured.')
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')

export async function testSupabaseConnection() {
  try {
    // Non-invasive check: request auth session (does not require database tables)
    const { data, error } = await supabase.auth.getSession()
    if (error) return { ok: false, error }
    return { ok: true, data }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) }
  }
}
