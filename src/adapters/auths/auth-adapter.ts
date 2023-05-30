export interface AuthAdapter{
  signInWithPassword:(email:string,password:string)=>Promise<any>;
  signUpWithPassword:(email:string,password:string)=>Promise<any>;
  logOut:()=>Promise<any>;
  resetPassword:(email:string,redirectTo?:string)=>Promise<any>
  updatePassword:(new_password:string)=>Promise<any>
  getUser:(token:string)=>Promise<any>
}