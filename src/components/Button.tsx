import React, { ButtonHTMLAttributes, PropsWithChildren} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
  title:string
}
export default function Button({title,className,children, ...props}:ButtonProps) {
  return (
    <button className={'flex justify-center items-center w-full h-12 rounded-e rounded-s bg-primaryLight text-textDark dark:bg-textLight disabled:opacity-[0.5] ' + className} {...props}>
      {children}
      <span className='font-heading font-extrabold text-heading-x3'>{title}</span>
    </button>
  )
}
