import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { usersDTO } from "src/dtos";


export async function GET(request: NextRequest)
{
  const email  =  request.nextUrl.searchParams.get('email');
  let res:ResponseData = {}

  console.log(email)
  if( email && new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) )
  {
    const user = await usersDTO.findToEmail(email);

    if(user)
    {
      
      res.payload = {
        id:user.id,
        name:user.name,
        email:user.email
      }

    }
    else
    {
      res.statusCode = 404;
      res.message="No user was found for this email!"
    }
  }
  else
  {
    res.statusCode = 400;
    res.message="Badly formatted request!"
  }

  return NextResponse.json(res,{status:res.statusCode})
}