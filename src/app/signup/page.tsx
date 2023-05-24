import React from 'react'
import Container from 'src/components/Container'
import Header from 'src/components/Header'

// import kittyCadastroLight from '@images/kitty_signup_light.webp';
import { InputForm } from 'src/components/InputForm';
import Button from 'src/components/Button';
import { IconKittySignup } from 'src/components/Icons';
import Link from 'next/link';

export default function cadastro() {
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
          <form action="" className='mt-5'>
            <InputForm label='Nome'  type='text'/>
            <InputForm label='Email' type='email'/>
            <InputForm label='Senha' type='password'/>
            <Button title='Continuar' className='mt-4'/>
          </form>
        </div>
      </Container>
  </React.Fragment>
  )
}
