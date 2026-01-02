import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

if (!supabaseUrl || !supabaseAnonKey) {
  // Avoid leaking keys — only warn in dev when variables are missing
  console.warn('VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. Supabase client will be unusable until configured.')
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')

// This function is used to verify the Supabase connection.
export async function testSupabaseConnection() {
  try {
    // This query is safe even if the table does not exist, thanks to PostgREST.
    // It will return an empty array if the table or RLS prevents access, but it
    // confirms the connection and ANON_KEY are valid.
    const { data, error } = await supabase.from('profiles').select('id').limit(1)

    if (error) {
      // Specifically ignore "relation does not exist" errors, as they are expected
      // if the table is not present. This allows the test to pass without a schema.
      if (error.code === '42P01') {
        console.log('Test passed: Supabase connection is valid (table not found, but query was successful).')
        return { ok: true, data: null }
      }
      return { ok: false, error }
    }

    return { ok: true, data }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) }
  }
}
