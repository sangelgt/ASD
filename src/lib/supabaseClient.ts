import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

if (!supabaseUrl || !supabaseAnonKey) {
  // This error will be caught by the dynamic import in main.tsx
  throw new Error('VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required but not set.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
