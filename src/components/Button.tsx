import React, { HtmlHTMLAttributes } from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
  title:string
}
export default function Button({title,className,...props}:ButtonProps) {
  return (
    <button className={'flex justify-center items-center w-full h-12 rounded-e rounded-s bg-primaryLight text-textDark dark:bg-textLight ' + className} {...props}>
      <span className='font-heading font-extrabold text-heading-x3'>{title}</span>
    </button>
  )
}
