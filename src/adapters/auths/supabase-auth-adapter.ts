import { AuthError, AuthResponse, UserResponse } from "@supabase/supabase-js";
import { AuthAdapter } from "./auth-adapter";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

export class SupabaseAdapter implements AuthAdapter{

  async signInWithPassword(email: string, password: string): Promise<AuthResponse> {
    return supabase.auth.signInWithPassword({email, password});
  } 

  async signUpWithPassword(email: string, password: string):Promise<AuthResponse> {
    return supabase.auth.signUp({email, password});
  } 

  async logOut():Promise<{error:AuthError| null}> {
    return supabase.auth.signOut();
  } 

  async resetPassword(email:string,redirectTo?:string): 
  Promise<{ data: {}; error: null;} |
  {
    data: null;
    error: AuthError;
  }>{
    return supabase.auth.resetPasswordForEmail(email, {redirectTo:redirectTo})
  } 

  async updatePassword(new_password:string,redirectTo?:string): Promise<UserResponse> { 

    return supabase.auth.updateUser({password:new_password},{emailRedirectTo:redirectTo})
  } 

  async getUser(token:string): Promise<UserResponse> {
    return supabase.auth.getUser(token);
  }
  
}
