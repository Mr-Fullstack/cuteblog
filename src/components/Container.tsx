import React, { HTMLAttributes, PropsWithChildren } from 'react'

export default function Container({children,className}:PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <div className={'max-w-[min(100vw,860px)] mr-auto ml-auto pl-[1.125rem] pr-[1.125rem] ' + className}>{children}</div>
  )
}
