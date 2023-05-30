import React, { ButtonHTMLAttributes, PropsWithChildren} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
  title:string;
  loading?:boolean;
}
export default function Button({loading, title,className,children, ...props}:ButtonProps) {
  return (
    <button className={'flex justify-center items-center w-full h-12 rounded-e rounded-s bg-primaryLight text-textDark dark:bg-textLight disabled:opacity-[0.5] ' + className} {...props}>
      {children}
      {loading && 
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      }
      <span className='font-heading font-extrabold text-heading-x3'>{title}</span>
    </button>
  )
}
