import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { usersDTO } from "src/dtos";

export async function GET(request:NextRequest)
{
  let res:ResponseData<any> = {
    statusCode:200
  } 

  let limitRequest = request.nextUrl.searchParams.get('limit');
  let offsetRequest = request.nextUrl.searchParams.get('offset');

  const limit = ( limitRequest ? parseInt(limitRequest) : 10 );
  const offset = ( offsetRequest ? parseInt(offsetRequest) : 0 );

  const { payload } = await usersDTO.usersCount();
  const count = payload ? payload : 0;

  const totalPage = (count / limit) > 1 ? Math.round(Math.ceil(count / limit)): 1;
  const users = await usersDTO.findAll({
    skip: offset,
    take: limit,
  });

  const back = offset-limit >= 0 && (offset <= count) ? `offset=${offset-limit}&limit=${limit}` : undefined
  const next = (offset+limit < count) ? `offset=${offset+limit}&limit=${limit}` : undefined

  const filter:{
    currentPage:number,
    totalPage:number,
    back?:string,
    next?:string, 
    users:any[],
  } = { currentPage: Math.round(Math.ceil( offset / limit))+1,totalPage, users:[],back, next}; 

  if(users.payload)
  {
    users.payload.map( user => { 
      const { email, name } = user.getAllProps();
      filter.users.push ({email, name })
    })
    
    res.payload = filter;
  }
  else
  {
    res.statusCode=400
  }
  // console.log(res,filter)
  return NextResponse.json(res,{status:res.statusCode})
}

