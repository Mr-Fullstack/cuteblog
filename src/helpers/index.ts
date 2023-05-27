import { User } from 'src/entities/user-entity';
import { API } from 'src/services/api';

export async function fetchData<T>(url:string,init?:RequestInit) 
{

  const data = await fetch(url,init)

  return { data : data.json() as T }

}

export async function userMount(access_token:string)
{
  
  if(access_token) 
  {
   
    const userDatabase = await API.services.user.getUser(access_token);
  
    if(userDatabase)
    {

    const { id, email, name } = userDatabase;

      const user = new User({
        name:name,
        id:id,
        email:email,
        token:access_token,
      });

      return user;

    }
   
    return undefined;
    
  }
}
