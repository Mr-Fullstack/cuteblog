import { usersDTO } from "src/dtos";
import { NextResponse } from "next/server";
import { User } from "src/entities/user-entity";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "src/firebase";

export async function GET()
{

  const users = await usersDTO.findAll();

  return NextResponse.json({
    payload:{
      users
    }
  })
}

export async function POST(request: Request)
{
  const { email, name, password } =  await request.json();

  const userFirebase =  await createUserWithEmailAndPassword(firebaseAuth, email, password)

  console.log( userFirebase.user )

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

