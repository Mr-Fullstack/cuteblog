import { createClient } from '@supabase/supabase-js';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const API_URL = BASE_URL + "/api/v1/";

const supabase = createClient(  
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})

export {
  BASE_URL,
  API_URL,
  supabase
}



