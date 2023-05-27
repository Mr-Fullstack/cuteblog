import { AuthError, AuthResponse } from "@supabase/supabase-js";
import { AuthAdapter } from "./auth-adapter";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

export class SupabaseAdapter implements AuthAdapter<AuthResponse,AuthError>{

  async signInWithPassword(email: string, password: string):Promise<AuthResponse> {
    return supabase.auth.signInWithPassword({email, password})
  } 

  async signUpWithPassword(email: string, password: string):Promise<AuthResponse> {
    return supabase.auth.signUp({email, password})
  } 

  async logOut():Promise<{error:AuthError| null}> {
    return supabase.auth.signOut();
  } 
}