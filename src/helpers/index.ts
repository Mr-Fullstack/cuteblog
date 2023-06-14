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
  
  if(access_token) 
  {
    const userDatabase = await API.services.user.getUser(access_token);
  
    if(userDatabase.payload)
    {
      const { id, email, name, typeUser } = userDatabase.payload;
      const user = new User({
        id,
        name,
        email,
        typeUser
      });

      return user;
    }
    return undefined;
  }
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
