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
    // Safe check: auth.getSession() does not expose secrets and is non-invasive
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      console.error('Supabase returned an error:', error.message || error)
      process.exit(1)
    }
    console.log('Supabase connection OK')
    process.exit(0)
  } catch (err) {
    console.error('Connection failed:', err)
    process.exit(1)
  }
})()
