import React, { HTMLAttributes } from 'react'

function NavButtonMenu({title,children,...props}:HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>{title}{children}</button>
  )
}

export default NavButtonMenu