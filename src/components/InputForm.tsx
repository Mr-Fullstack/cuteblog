import React, { InputHTMLAttributes } from 'react'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
  placeholder?:string;
}

export function InputForm({ label,type, value,placeholder }:InputFormProps) {
  return (
    <div className='w-100 pb-5'>
        <label htmlFor="" className='text-primaryLight dark:text-textDark font-body text-body-x2'>{label}</label><br/>
        <input type={type} value={value} placeholder={placeholder} className='flex h-10 w-full pl-[10px] rounded-[4px] bg-textDark border-gray border dark:bg-secondaryDark dark:border-textLight'/>
        <span className='font-body text-body-x4'>mensagem referente o input</span>
    </div>
  )
}
