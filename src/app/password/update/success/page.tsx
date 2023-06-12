'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Container from 'src/components/Container'
import Header from 'src/components/Header'
import { IconKittyCongratulations } from 'src/components/Icons'

export default function page() {

  const [time,setTime] = React.useState(5);
  const router = useRouter();

  useEffect(()=>{

      if(time === 0)
      {
        router.push('/');
      }

      const timeInterval = setInterval(()=>{
            if(time > 0)
            {
              setTime(time-1);
            }
            else
            {
              clearInterval(timeInterval)
            }
      },1000);

      return (()=>{
        clearInterval(timeInterval)
      })
  },[time])

  return (
    <React.Fragment>
    <Container className='mb-20 sm:flex sm:justify-center gap-16 mt-8 sm:mt-36'>
      <div className='flex-1'>
        <p className='text-primaryLight mb-4 translate-y-8 opacity-0 animate-greatings delay-1000 font-heading text-heading-x3 font-semibold mr-auto ml-auto w-full md:w-[250px] text-center'>Uhu! você conseguir alterar sua senha!</p>  
        <IconKittyCongratulations className='w-[120px] mr-auto ml-auto sm:w-[250px]' />
      </div>
      <div className='flex-1'>
        <h1 className='font-heading text-heading-x1 text-primaryLight dark:text-textDark font-extrabold'>Senha alterada com sucesso!</h1>
        <p className='mt-4 font-body text-body-x2 text-textLight'>redirecionando você para a página inicial em: <br/> {time}seg</p>
      </div>
    </Container>
  </React.Fragment>
  )
}
