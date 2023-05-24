import React, { InputHTMLAttributes } from 'react'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
  placeholder?:string;
}

export function InputForm({ label,type, value }:InputFormProps) {
  return (
    <div className='w-100 mb-8'>
        <label htmlFor="" className='text-primaryLight dark:text-textDark font-body text-body-x2'>{label}</label><br/>
        <input type={type} value={value} className='flex h-10 w-full pl-[10px] border-2 rounded-[4px] bg-gray border-textDark dark:bg-secondaryDark dark:border-textLight'/>
        <span>mensagem referente o input</span>
    </div>
  )
}
