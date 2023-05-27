'use client'
import React from 'react'
import Container from 'src/components/Container'
import Header from 'src/components/Header'

// import kittyCadastroLight from '@images/kitty_signup_light.webp';
import  InputForm  from 'src/components/InputForm';
import Button from 'src/components/Button';
import { IconKittySignup } from 'src/components/Icons';
import Link from 'next/link';
import { Auth } from 'src/contexts/UserContext';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';


type FormSignupInputs = {
  name:string;
  email: string,
  password: string,
};

export default function Signup() {
  
  const { user, authLoading, signUpWithPassword, authMessage } =  Auth();
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormSignupInputs>({mode:"onChange",criteriaMode:"all",shouldFocusError:true});

  const handlerSignup = async ({name,email,password}:FormSignupInputs) => {
    await signUpWithPassword(name,email,password);
  }

  return (
    <React.Fragment>
      <Header/>
      <Container className='mb-20 sm:flex sm:justify-center gap-16 mt-8 sm:mt-36'>
        <div className='flex-1'>
          <p className='text-primaryLight mb-4 translate-y-8 opacity-0 animate-greatings delay-1000 font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Eba! mais um inscrito, Obrigado!</p>  
          <IconKittySignup className='w-[120px] mr-auto ml-auto sm:w-[250px]'/>
        </div>
        <div className='flex-1'>
          <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Cadastro</h1>
          <p className='font-body text-body-x3'> Já tem conta? <Link href='/signin' className='text-primaryLight font-semibold'>Entre aqui!</Link></p> 
          <form action="" className='mt-5' onSubmit={handleSubmit(handlerSignup)}>
            <InputForm 
              label='Nome'  
              type='text' 
              placeholder='digite seu nome' 
              aria-invalid={errors.name?.message ? "true" : "false"}  
              error={errors.name?.message} 
              {...register('name',{required:true})}
            />
            <InputForm 
              label='Email' 
              type='email' 
              placeholder='digite seu email'
              aria-invalid={errors.email?.message ? "true" : "false"}  
              error={errors.email?.message} 
              {...register('email',{required:true})}
            />
            <InputForm 
              label='Senha' 
              type='password'
              placeholder='crie sua senha secreta'
              aria-invalid={errors.password?.message ? "true" : "false"}  
              error={errors.password?.message}  
              {...register('password',{required:true,minLength:8})}
            />
            <p>{authMessage.error && authMessage.error}</p>
            <Button title={ authLoading ? 'Processando...' :'Continuar'} className='mt-4'  disabled={!isValid}>
              {
                authLoading && 
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              }
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  )
}
