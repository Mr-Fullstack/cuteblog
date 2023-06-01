import { User } from "src/entities/user-entity"
import { fetchData } from "src/helpers";
import { API } from "./api";


export async function getUser(token:string) {

  const headers = new Headers();

  headers.set("Authorization",`bearer ${token}`);

  const user = await fetchData<User>(API.routes.users,{
    method:'GET',
    headers
  })

  if(user)
  {
    return user.data;
  }

  return undefined
  
}

export async function createUser() {

  const user = await fetchData(API.routes.users,{
    method:'POST',
  })

  return user.data;

}

export async function getUserToEmail(email:string) {

  const { data } = await fetchData<ResponseData>(API.routes.users+`/to-email/?email=${email}`,{
    method:'GET',
  })

  return data;
  
}
