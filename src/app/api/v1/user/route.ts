import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

import { usersDTO } from "src/dtos";
import { User } from "src/entities/user-entity";

const supabase = createClient(  
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})

export async function GET(request: Request)
{
 
  let statusCode = 200;
  let payload = {};
  const authorization = request.headers.get('authorization');

  if(!authorization)
  {
    statusCode = 400
    payload ={
      messsage:'Authorization header request bearer token required!',
    }
  }
  else if(request.headers.get('authorization'))
  {
    const token = authorization.split(" ")[1] ;

    const { data, error } = await supabase.auth.getUser(token);

    if( error )
    {
      statusCode = 401;
      payload = {
        messsage:error,
      }
    }
    else
    {
      const { id, email, } = data.user
    
      const user = {
        id,
        email,
        token
      }

      payload = {
        user
      }
    }
  }

  return NextResponse.json({payload},{status:statusCode})

}

export async function POST(request: Request)
{
  const { email, name, password } =  await request.json();

  const newUser = await usersDTO.create({email, name,password});

  if ( newUser instanceof User)
  {
    const payload : UserCreateApiResponseSucess = {
      data:{   
        user:{
          ...newUser.getAllProps()
        }
      } 
    }
    return NextResponse.json(payload);
  }
  else
  {
    const payload : UserCreateApiResponseError = {
      data:{ ...newUser }
    }
    return NextResponse.json(payload,{ status:newUser.code,})
  }
  
}

