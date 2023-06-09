"use client"
import React, { useState } from 'react'
import { RegisterOptions, useForm } from "react-hook-form";
import Container from 'src/components/Container'
import Header from 'src/components/Header'
import InputForm from 'src/components/InputForm'

import Button from 'src/components/Button';
import { IconKittySignin } from 'src/components/Icons';
import Link from 'next/link';
import { Auth } from 'src/contexts/UserContext';
import { validateInputRequired, validatePassword } from 'src/helpers';


type FormSigninInputs = {
  email: string,
  password: string,
};

export interface FormSigninValidateProps{
  email:RegisterOptions<FormSigninInputs,"email">;
  password:RegisterOptions<FormSigninInputs,"password">;
}

export default function Login() {
  
  const { signInWithPassword,authMessage } =  Auth();
  const [message,setMessage] = useState<string | null>(null);

  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors,isValid } } = useForm<FormSigninInputs>({mode:'all',criteriaMode:"all",shouldFocusError:true});

  const handlerSignin = async ( data:FormSigninInputs ) => {

    const { email, password } = data;
  
    if(email && password)
    {
      await signInWithPassword( email, password );

      if(authMessage)
      {
        reset(data);
      }
    }
    else
    {
      setMessage("Por favor! preencha os dados corretamente.")
    }
    
  }

  const formLoginValidate = (): FormSigninValidateProps => {
    return {
      email:{
        required:validateInputRequired(),
        validate: (val: string) => {
          if (!val.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ) 
          {
            return "Email inserido não é válido.";
          }
        }
      },
      password: {
        required:validateInputRequired(),
        minLength:validatePassword(),
      }
    }
  }
  
  return (
    <React.Fragment>
      <Container className='mb-20 sm:flex sm:justify-center gap-16 mt-8 sm:mt-36'>
        <div className='flex-1'>
          <p className='text-primaryLight mb-4 translate-y-8 opacity-0 animate-greatings delay-1000 font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Oi, estou feliz que você está aqui</p>  
          <IconKittySignin className='w-[120px] mr-auto ml-auto sm:w-[250px]' />
        </div>
        <div className='flex-1'>
          <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Login</h1>
          <p className='font-body text-body-x3'>Ainda não tem conta? <Link href='/signup' className='text-primaryLight font-semibold'>Cadastre-se aqui!</Link> </p> 
          <form className='mt-5' onSubmit={handleSubmit(handlerSignin)} >
            
            <InputForm 
              label='Email' 
              type='email' 
              aria-invalid={errors.email?.message ? "true" : "false"} 
              error={errors.email && errors.email?.message} 
              {...register("email",formLoginValidate().email)} 
            />

            <InputForm 
              label='Senha' 
              type='password'
              aria-invalid={errors && errors.password?.message ? "true" : "false"}  
              error={errors.password && errors.password?.message} 
              {...register("password",formLoginValidate().password)}
            />
            <p className='font-body text-body-x4 -mt-2'> <Link href='/password' className='text-backgroundDark font-semibold'>Esqueceu a senha?</Link> </p> 
            <p>{authMessage.error && authMessage.error}</p>
            <p>{authMessage.success && authMessage.success}</p>
            <p>{message && message}</p>
            <Button title='Entrar'className='mt-10' type='submit' disabled={!isValid}/> 
          </form>
        </div>
      </Container>
    </React.Fragment>
  )
}
