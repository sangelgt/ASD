# Supabase setup

This document explains how to securely configure Supabase for local development and CI.

1. Create a Supabase project and copy the **Project URL** and **ANON public key**.
2. Locally, create a `.env` file (this file is ignored by git):

VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

3. Do not commit `.env` to the repo. Use `.env.example` as a template for contributors.
4. In GitHub repository Settings -> Secrets -> Actions, add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

5. The CI step `Test Supabase Connection` runs `npm run test:supabase` only if both secrets are present. It performs a non-invasive check (auth.getSession) to validate connectivity without exposing keys in logs.
