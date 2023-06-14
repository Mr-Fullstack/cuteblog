import { Message , ValidationValue } from 'react-hook-form';
import { User } from 'src/entities/user-entity';
import { API } from 'src/services/api';

export async function fetchData<T>(url:string,init?:RequestInit) 
{

  const request = await fetch(url,init);
  const data = await request.json() as T;

  return data;
}

export async function userMount(access_token:string)
{
  const response:ResponseData<User> = {
    statusCode : 200
  }

  if(access_token) 
  {
    const {payload, statusCode, error} = await API.services.user.getUser(access_token);
    if(payload)
    {
      response.payload = payload
    }
    if(error)
    {
      response.error = error;
      response.statusCode = statusCode;
    }
  }
  return response;
}

export  const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? 
    process?.env?.NEXT_PUBLIC_VERCEL_URL as string;
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export function validatePassword (
  minLength:number = 8,
  message:Message ='sua senha deve conter no mínimo 8 caracteres.')
  {
  return {
    value:minLength,
    message:message
  }
}

export function validateInputRequired (message:Message ='necessário preencher com um valor')
{
  return {
    value:true,
    message:message
  }
}
