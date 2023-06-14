import React from 'react'
import logoLight from '@images/logo-light.webp';
import Image from 'next/image';

export default function Logo({className}:React.HTMLAttributes<HTMLDivElement>) {
  
  return (
    <div className={className}>
        <Image src={logoLight.src}  className='w-[154px]' alt=""  width={154} height={24}/>
    </div>
  )
}
