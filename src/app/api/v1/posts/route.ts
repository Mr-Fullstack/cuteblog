import { NextRequest, NextResponse } from "next/server";
import { postDTO } from "src/dtos";
import { User } from "src/entities/user-entity";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "config";
import { Post } from "src/entities/post-entity";


export async function GET(request: NextRequest)
{
 
  const res:ResponseData<any> = {
    statusCode:200
  }

  
  return NextResponse.json(res,{status:res.statusCode})

}

