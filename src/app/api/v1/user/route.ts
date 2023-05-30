import { NextResponse } from "next/server";
import { usersDTO } from "src/dtos";
import { User } from "src/entities/user-entity";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "config";


const res:ResponseData = {
  statusCode:200
}

export async function GET(request: NextApiRequest)
{
 
  if(!request.headers.authorization)
  {
    res.statusCode = 400
    res.message='Authorization header request bearer token required!'
    
  }
  else if(request.headers.authorization)
  {
    const token = request.headers.authorization.split(" ")[1] ;

    const { data, error } = await supabase.auth.getUser(token);

    if( error )
    {
      res.statusCode = 401;
      res.message = error.message
      
    }
    else
    {
      const { id, email, } = data.user
    
      const user = {
        id,
        email,
        token
      }

      res.payload = user;
      
    }
  }
  
  return NextResponse.json(res,{status:res.statusCode})

}

export async function POST(request: Request)
{
  const { email, name, password } =  await request.json();

  const requestNewUser = await usersDTO.create({email, name,password});

  if ( requestNewUser instanceof User)
  {
    res.payload = {...requestNewUser.getAllProps()}
  }
  else
  {
    
    res.message = requestNewUser.message
    res.statusCode = requestNewUser.code
  }

  return NextResponse.json(res,{status:res.statusCode})
}

