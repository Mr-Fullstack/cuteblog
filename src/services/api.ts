import { API_URL } from "config"
import { createUser, getUser } from "./user-services"
import { fetchData } from "src/helpers";
import { SupabaseAdapter } from "src/adapters/auths/supabase-auth-adapter";

//just replace this authProvider adapter with another created adapter if necessary exemple (firebase,amazon)
const authProvider = new SupabaseAdapter(); 

const API  = {
  services:{
    user:{
      auth:authProvider,
      createUser,
      getUser
    },
    localStorage:{
      key_autentication:'sb-vrarinbefozckvflthma-auth-token'
    }
  },
  request: <T>(url:string,init?:RequestInit) => fetchData<T>(url,init),
  routes:{
    users:API_URL+"user",
    posts:API_URL+"post"
  }
}

export { API } ;