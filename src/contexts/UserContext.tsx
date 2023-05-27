'use client'

import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react'

import { User } from 'src/entities/user-entity';
import { userMount } from 'src/helpers';
import { API } from 'src/services/api';


interface AuthMesageProps{
  success?:string;
  error?:string;
}

interface ContextUserProps{
  user?:User;
  authLoading:boolean;
  logOut:()=>void;
  signInAuto:()=>Promise<void>;
  authMessage:AuthMesageProps;
  signInWithPassword:(email:string,password:string)=>Promise<void>;
  signUpWithPassword:(name:string,email:string,password:string)=>Promise<void>;
}

const ContextUser = React.createContext({} as ContextUserProps)

export default function UserContext({children}:PropsWithChildren) {

  const router = useRouter();

  const [user,setUser] = React.useState<User|undefined>();
  const [authMessage,setAuthMessage] = React.useState<AuthMesageProps>({});
  const [authLoading,setAuthLoading] = React.useState<boolean>(false);

  const signInWithPassword = async (email:string,password:string) => {

    setAuthLoading(true);

    const { data, error } = await API.services.user.auth.signInWithPassword( email, password );

    if(!error)
    {
      if(data.session)
      {
        const userPayload = await userMount(data.session.access_token);

        if(userPayload instanceof User)
        {
          setUser(userPayload);
          setAuthMessage({success:'usuário logado'})
          if(window.location.pathname.includes('signin'))
          {
            router.push('/account');
          }
        }
      }
    }
    else if(error)
    {
      setAuthMessage( { error:error.message } )
    }
    setAuthLoading(false);
  }

  const signUpWithPassword = async ( name:string, email:string, password:string )=> {
    setAuthLoading(true);
    const { data, error } = await  API.services.user.auth.signUpWithPassword( email, password );
    
    if(data)
    {
      // setAuthMessage({success:"Confirme seu email para ativar cadastro"})
      router.push('/signup/success');
    }
    else if(error)
    {
      setAuthMessage({error:error.message});
    }
    setAuthLoading(false);
  }

  const logOut = async ()=> {
    setAuthLoading(true);
    const { error } = await  API.services.user.auth.logOut();
    
    if(!error)
    {
      setUser(undefined);
      console.warn('user is logout!');
      router.push('/signin');
    }
    setAuthLoading(false);
  }

  const signInAuto = async() => {
    
    const autentication = localStorage.getItem(API.services.localStorage.key_autentication);
    if(autentication) 
    {
      const { access_token } = JSON.parse(autentication);

      setAuthLoading(true);

      const userPayload = await userMount(access_token);

      setAuthLoading(false);

      if(userPayload instanceof User)
      {
        setUser(userPayload);
        setAuthMessage({success:'usuário logado'})
        
        if(window.location.pathname.includes('signin') || window.location.pathname.includes('signup') )
        {
          router.push('/account');
        }
        
      }
    }
    
  }
  
  React.useEffect(()=>{
    
    if(!user)
    {
      signInAuto()
    }
  },[])

  return (
    <ContextUser.Provider value={{
      user,
      authLoading,
      logOut,
      signInAuto,
      authMessage,
      signInWithPassword,
      signUpWithPassword
    }}>
      {children}
    </ContextUser.Provider>
  )
}


export const Auth = () => {
  return React.useContext(ContextUser);
}