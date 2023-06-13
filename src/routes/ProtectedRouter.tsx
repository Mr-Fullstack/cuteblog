'use client'

import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react'
import { Auth } from 'src/contexts/UserContext'

export default function ProtectedRouter({children}:PropsWithChildren) 
{
  const { user } = Auth();
  const router = useRouter();
  
  const handlerSignin= (path:string)=>{
    router.push(path);
  }

  if(user)
  {
    return (
      <>{children}</>
    )
  }

  return (
    <div>
      <p>Oi tudo bem? para acessar essa página você precisa esta logado!</p>
      <button onClick={()=>handlerSignin('/signin')}>Efetuar o login</button>
      <button onClick={()=>handlerSignin('/')}>Voltar para inicio</button>   
    </div>
  )
}

