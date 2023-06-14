import { API_URL } from "config"
import { createUser, getUser, getUserToEmail,checkIfEmaiIsFree } from "./user-services"
import { fetchData } from "src/helpers";
import { SupabaseAdapter } from "src/adapters/auths/supabase-auth-adapter";

//just replace this authProvider adapter with another created adapter if necessary exemple (firebase,amazon)
const authProvider = new SupabaseAdapter(); 

const API  = {
  services:{
    user:{
      auth:authProvider,
      createUser,
      getUser,
      getUserToEmail,
      checkIfEmaiIsFree
    },
    localStorage:{
      key_autentication:'sb-vrarinbefozckvflthma-auth-token'
    }
  },
  request: <T>(url:string,init?:RequestInit) => fetchData<T>(url,init),
  routes:{
    user:API_URL+"user",
    users:API_URL+"users",
    post:API_URL+"post",
    posts:API_URL+"posts"
  }
}

export { API } ;