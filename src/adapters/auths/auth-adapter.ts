export interface AuthAdapter<R,E> {
  signInWithPassword:(email:string,password:string)=>Promise<R>;
  signUpWithPassword:(email:string,password:string)=>Promise<R>;
  logOut:()=>Promise<{error: E | null}>;
}