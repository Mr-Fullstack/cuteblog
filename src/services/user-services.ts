import { User } from "src/entities/user-entity"
import { fetchData } from "src/helpers";
import { API } from "./api";


export async function getUser(token:string) {

  const headers = new Headers();

  headers.set("Authorization",`bearer ${token}`);

  const res = await fetchData<ResponseData<User>>(API.routes.user,{
    method:'GET',
    headers
  })

  return res;
}

export async function createUser(userData:UserProps):Promise<ResponseData<User>> {

  const res = await fetchData<ResponseData<User>>(API.routes.user,{
    method:'POST',
    body:JSON.stringify(userData)
  })

  return res;
}

export async function getUserToEmail(email:string): Promise<ResponseData<User>> {

  const res = await fetchData<ResponseData<User>>(API.routes.user+`/to-email?email=${email}`,{
    method:'GET',
  })

  return res;
}

export async function checkIfEmaiIsFree(email:string): Promise<ResponseData<User>> {

  const res = await fetchData<ResponseData<User>>(API.routes.user+`/free/to-email?email=${email}`,{
    method:'GET',
  })

  return res;
}