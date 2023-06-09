import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { usersDTO } from "src/dtos";
import { User } from "src/entities/user-entity";


export async function GET(request: NextRequest)
{
  const email  =  request.nextUrl.searchParams.get('email');
  let res:ResponseData<User> = {
    statusCode:200
  }

  if( email && new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) )
  {
    const user = await usersDTO.findToEmail(email);

    if(user.payload)
    {
      
      res.payload = user.payload;
    }
    else
    {
      res.statusCode = 404;
      res.error="No user was found for this email!";
    }
  }
  else
  {
    res.statusCode = 400;
    res.error="Badly formatted request!";
  }

  return NextResponse.json(res,{ status: res.statusCode })
}