import React from 'react'
import Image from 'next/image';

import Container from 'src/components/Container'
import Header from 'src/components/Header'
import { InputForm } from 'src/components/InputForm'
import kittyLight from '@images/kitty_login_light.webp';
import Button from 'src/components/Button';

export default function login() {
  return (
    <React.Fragment>
      <Header/>
      <Container className='mb-20 sm:flex sm:align-middle sm:justify-center gap-16 mt-8 sm:mt-48'>
        <div className='flex-1'>
          <p className='font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Oi, estou feliz que você está aqui</p>  
          <img src={kittyLight.src} alt="" className='w-[120px] mr-auto ml-auto  sm:w-[250px]' />
        </div>
        <div className='flex-1'>
          <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Login</h1>
          <form action="" className='mt-5'>
            <InputForm label='Email' type='email' />
            <InputForm label='Senha' type='password' />
            <Button title='Entrar'/>
          </form>
        </div>
      </Container>
    </React.Fragment>
  )
}
