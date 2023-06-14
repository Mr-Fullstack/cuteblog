import { NextRequest, NextResponse } from "next/server";
import { postDTO } from "src/dtos";
import { User } from "src/entities/user-entity";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "config";
import { Post } from "src/entities/post-entity";


export async function GET(request: NextRequest)
{
  const { id } = await request.json();

  const res:ResponseData<Post> = {
    statusCode:200
  }

  const token = request.headers.get("Authorization")?.split(" ")[1];

  const { error } = await supabase.auth.getUser(token);

  if( error )
  {
    res.statusCode = 401;
    res.error = error.message
    
  }
  else
  {
    const post = await postDTO.find(id);
    res.payload = post;
  }

  return NextResponse.json(res,{status:res.statusCode})

}

export async function POST(request: Request)
{

  const { 
    authorId,
    categories,
    content,
    title
  } =  await request.json();

  const res:ResponseData<Post> = {
    statusCode:200
  }


  if(!request.headers.get("Authorization"))
  {
    res.statusCode = 400
    res.error='Authorization header request bearer token required!'
    
  }
  else if(request.headers.get("Authorization"))
  {
    const token = request.headers.get("Authorization")?.split(" ")[1];

    const { data, error } = await supabase.auth.getUser(token);

    if( error )
    {
      res.statusCode = 401;
      res.error = error.message
      
    }
    else
    {
      const post = await postDTO.create({
        authorId,
        categories,
        content,
        title
      });
    
      if ( post instanceof Post )
      {
        res.payload = post
      }
      else
      {
        
        res.error = post.message
        res.statusCode = post.code
      }
      res.payload = post;
    }

  }

  return NextResponse.json(res,{status:res.statusCode})
}

