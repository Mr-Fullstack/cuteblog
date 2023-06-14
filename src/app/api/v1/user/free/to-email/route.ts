import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { usersDTO } from "src/dtos";


export async function GET(request: NextRequest)
{
  const email  =  request.nextUrl.searchParams.get('email');

  const res:ResponseData<any> = {
    statusCode:200
  }

  // console.log(email)
  if( email && new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) )
  {
    const { statusCode, payload } = await usersDTO.findToEmail(email);

    if(!payload)
    {
      res.payload="Email is free!"
    }
    else
    {
      res.statusCode = statusCode;
      res.error="User was found for this email!"
    }
  }
  else
  {
    res.statusCode = 400;
    res.error="Badly formatted request!"
  }

  return NextResponse.json(res,{status:res.statusCode})
}