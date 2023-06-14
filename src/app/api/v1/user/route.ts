import { NextRequest, NextResponse } from "next/server";
import { usersDTO } from "src/dtos";
import { User } from "src/entities/user-entity";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "config";


export async function GET(request: NextRequest)
{
 
  const res:ResponseData<User> = {
    statusCode : 400
  }

  if(!request.headers.get("Authorization"))
  {
    res.statusCode = 400;
    res.error='Authorization header request bearer token required!';
  }

  else if(request.headers.get("Authorization"))
  {
    const token = request.headers.get("Authorization")?.toString().split(" ")[1];

    const getUserAuth = await supabase.auth.getUser(token);
    if( getUserAuth.error )
    {
      res.statusCode = 401;
      res.error = getUserAuth.error.message
    }
    else
    {
      if(getUserAuth.data.user.email)
      {
        
        const { payload, error, statusCode } = await usersDTO.find(getUserAuth.data.user.email);
        res.payload = payload;
        res.error = error;
        res.statusCode = statusCode;
      }

    }
  }
  
  return NextResponse.json(res,{status:res.statusCode})

}

export async function POST(request: Request)
{
  const { email, name } =  await request.json();

  console.log(email,name)
  const res = await usersDTO.create({email, name});
  
  return NextResponse.json(res,{status:res.statusCode})
}

