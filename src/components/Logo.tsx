import React from 'react'
import logoLight from '@images/logo-light.webp';

export default function Logo() {
  
  return (
    <div>
      <React.Suspense fallback={<h1>carregando...</h1>}>
          <img src={logoLight.src}  className='w-[154px]' alt=""  />
      </React.Suspense>  
    </div>
  )
}
