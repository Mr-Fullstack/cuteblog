"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'src/components/Button'
import Container from 'src/components/Container'
import Header from 'src/components/Header'
import { IconKittyHelper } from 'src/components/Icons'
import InputForm from 'src/components/InputForm'
import { Auth } from 'src/contexts/UserContext'

interface FormInputProps{
  password:string;
  confirm_password:string;
}

export default function page() {
  const router = useRouter();
  const { authLoading , authMessage, updatePassword } = Auth();

  const { register, handleSubmit, formState:{ errors, isValid } } = useForm<FormInputProps>({mode:'onChange',criteriaMode:"all",shouldFocusError:true});
 
  const  handlerResetPassword = async( { password, confirm_password }: FormInputProps )=> {
  
    if( confirm_password === password ) 
    {
      const userUpdatePassword = await updatePassword( password );

      if(userUpdatePassword)
      {
        router.push('/password/update/success');
      }
    }
    else
    {

    }
  }

  return (
    <React.Fragment>
    <Header/>
    <Container className='mb-20 sm:flex sm:justify-center gap-16 mt-8 sm:mt-36'>
      <div className='flex-1'>
        <p className='text-primaryLight mb-4 translate-y-8 opacity-0 animate-greatings delay-1000 font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Ajudarei você a criar sua nova senha!</p>  
        <IconKittyHelper className='w-[120px] mr-auto ml-auto sm:w-[250px]' />
      </div>
      <div className='flex-1'>
        <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Recuperar a senha</h1>
        <p className='font-body text-body-x3'>Lembrou a senha? <Link href='/signin' className='text-primaryLight font-semibold'>Entre aqui!</Link></p> 
        <form action="" className='mt-5' onSubmit={handleSubmit(handlerResetPassword)}>
          <InputForm 
            label='Nova senha' 
            type='password' placeholder='digite seu email'  
            aria-invalid={errors.password?.message ? "true" : "false"}  
            error={errors.password?.message}
            {...register('password',{required:true})}
          />
          <InputForm 
            label='Confirme a senha' 
            type='password' placeholder='Confirme sua senha'  
            aria-invalid={errors.confirm_password?.message ? "true" : "false"}  
            error={errors.confirm_password?.message}
            {...register('confirm_password',{required:true})}
          />

          {authMessage.error && <p>{authMessage.error}</p>}
          <Button title='Criar'className='mt-10' loading={authLoading} disabled={!isValid}/>
        </form>
      </div>
    </Container>
  </React.Fragment>
  )
}
