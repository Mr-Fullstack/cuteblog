import { NextRequest, NextResponse } from "next/server";
import { usersDTO } from "src/dtos";
import { User } from "src/entities/user-entity";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "config";


export async function GET(request: NextRequest)
{
 
  const response:ResponseData<UserEntityProps> = {
    statusCode : 200
  }

  if(!request.headers.get("Authorization"))
  {
    response.statusCode = 400;
    response.error='Authorization header request bearer token required!';
  }

  else if(request.headers.get("Authorization"))
  {
    const token = request.headers.get("Authorization")?.toString().split(" ")[1];

    const getUserAuth = await supabase.auth.getUser(token);
    if( getUserAuth.error )
    {
      response.statusCode = 401;
      response.error = getUserAuth.error.message
    }
    else
    {
      if(getUserAuth.data.user.email)
      {
        const { payload, error, statusCode } = await usersDTO.find(getUserAuth.data.user.email);
        if(payload)
        {
          const { typeUserId,typeUser ,...rest} = payload;
          const convertTypeuser = typeUser as UserTypeProps;
          response.payload = {...rest,typeUser:convertTypeuser};
        }
        if(error)
        {
          response.error = error;
          response.statusCode = statusCode;
        }
      }
    }
  }
  
  // console.log(response.payload)
  return NextResponse.json(response,{status:response.statusCode})

}

export async function POST(request: Request)
{
  const { email, name } =  await request.json();

  const response = await usersDTO.create({email, name});
  
  return NextResponse.json(response,{status:response.statusCode})
}

