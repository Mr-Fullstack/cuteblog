'use client'

import React, { InputHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
  error?:string;
  placeholder?:string;
}

const InputForm = React.forwardRef<any,InputFormProps>((props,ref)=>{

 const  {type, value, label, placeholder, error ,...rest} = props


  React.useEffect(()=>{
    
  },[error])
  
  return (
    <div className='w-100 pb-5'>
        <label htmlFor="" className='text-primaryLight dark:text-textDark font-body text-body-x2'>{label}</label><br/>
        <input ref={ref} type={props.type} value={props.value} placeholder={placeholder} className={'flex h-10 w-full pl-[10px] rounded-[4px] bg-textDark border-gray border dark:bg-secondaryDark dark:border-textLight ' + ( error ? 'border-errorMessage': '')} {...rest}/>
        { error && <span className='font-body text-body-x4 text-errorMessage' role="alert">{ error }</span> } 
    </div>
  )
})

export default InputForm;