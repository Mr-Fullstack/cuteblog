import Link from 'next/link'
import React from 'react'
import Container from 'src/components/Container'
import Header from 'src/components/Header'
import { IconKittyCongratulations } from 'src/components/Icons'

export default function PasswordSended() {
  return (
    <React.Fragment>
    <Container className='mb-20 sm:flex sm:justify-center gap-16 mt-8 sm:mt-36'>
      <div className='flex-1'>
        <p className='text-primaryLight mb-4 translate-y-8 opacity-0 animate-greatings delay-1000 font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Parabéns! falta pouco para conectar-se novamente!</p>  
        <IconKittyCongratulations className='w-[120px] mr-auto ml-auto sm:w-[250px]' />
      </div>
      <div className='flex-1'>
        <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Link enviado com sucesso!</h1>
        <p className='font-body text-body-x3'>Lembrou a senha? <Link href='/signin' className='text-primaryLight font-semibold'>Entre aqui!</Link></p> 
        <p className='mt-4 font-body text-body-x2 text-textLight'>Feche essa página, e cheque seu email <br/> (lembre-se de olhar no spam). </p>
      </div>
    </Container>
  </React.Fragment>
  )
}
