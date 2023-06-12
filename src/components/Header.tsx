import React from 'react'
import Logo from './Logo'
import Container from './Container'
import Link from 'next/link'
import NavHeaderMenu from './NavHeaderMenu'

export default function Header() {

  return (
    <Container className='flex align-middle justify-between p-[1.125rem]'>
     <Link href={'./'}>
      <Logo/>
     </Link> 
     <NavHeaderMenu/>
    </Container>
  )
}
