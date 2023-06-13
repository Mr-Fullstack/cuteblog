'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { Auth } from 'src/contexts/UserContext';
import ProtectedRouter from 'src/routes/ProtectedRouter'

export default function Admin() 
{
  const { user } = Auth();
  const router = useRouter();
  
  const handlerSignin= (path:string)=>{
    router.push(path);
  }

  const AdminContent = ()=>{
    if(user && user.typeUser.label === 'ADMIN')
    {
      return (
        <>
          admin
        </>
      )
    }

    return (
      <>
       <p>OI tudo bem? para acessar o painel você precisar ser um usuário admin!</p>
       <button onClick={()=>handlerSignin('./')}>Voltar ao inicio</button>
      </>
    )
  }

  return (
    <ProtectedRouter>
      <AdminContent/>
    </ProtectedRouter>
  )
}
