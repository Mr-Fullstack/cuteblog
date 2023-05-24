import React from 'react'
import Image from 'next/image';

import Container from 'src/components/Container'
import Header from 'src/components/Header'
import { InputForm } from 'src/components/InputForm'

import Button from 'src/components/Button';
import { IconKittySignin } from 'src/components/Icons';
import Link from 'next/link';

export default function login() {
  return (
    <React.Fragment>
      <Header/>
      <Container className='mb-20 sm:flex sm:justify-center gap-16 mt-8 sm:mt-36'>
        <div className='flex-1'>
          <p className='text-primaryLight mb-4 translate-y-8 opacity-0 animate-greatings delay-1000 font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Oi, estou feliz que você está aqui</p>  
          <IconKittySignin className='w-[120px] mr-auto ml-auto sm:w-[250px]' />
        </div>
        <div className='flex-1'>
          <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Login</h1>
          <p className='font-body text-body-x3'>Ainda não tem conta? <Link href='/signup' className='text-primaryLight font-semibold'>Cadastre-se aqui!</Link> </p> 
          <form action="" className='mt-5'>
            <InputForm label='Email' type='email' />
            <InputForm label='Senha' type='password' />
            <p className='font-body text-body-x4 -mt-2'> <Link href='/password' className='text-backgroundDark font-semibold'>Esqueceu a senha?</Link> </p> 
            <Button title='Entrar'className='mt-10'/>
          </form>
        </div>
      </Container>
    </React.Fragment>
  )
}
