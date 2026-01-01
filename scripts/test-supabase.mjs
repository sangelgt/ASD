#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY must be provided as environment variables or repository secrets.')
  process.exit(2)
}

const supabase = createClient(supabaseUrl, supabaseKey)

;(async () => {
  try {
    // This query is safe even if the table does not exist, thanks to PostgREST.
    // It will return an empty array if the table or RLS prevents access, but it
    // confirms the connection and ANON_KEY are valid.
    const { error } = await supabase.from('profiles').select('id').limit(1)

    if (error && error.code !== '42P01') {
      console.error(`Supabase returned an error: ${error.message}`)
      process.exit(1)
    }

    console.log('Supabase connection OK')
    process.exit(0)
  } catch (err) {
    console.error(`Connection failed: ${err.message}`)
    process.exit(1)
  }
})()
