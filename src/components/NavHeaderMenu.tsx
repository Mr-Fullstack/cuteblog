'use client'

import React from 'react'
import NavMenu from './NavMenu'
import { Menu, User, Tool, LogOut } from 'react-feather'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavHeaderMenu() {
  
  const activeSegment = useSelectedLayoutSegment();
  const hover = 'before:content-[""] before:block before:h-6 hover:before:bg-primaryLight before:rounded-full before:w-1';
  console.log(activeSegment)
                                                                                                                                                                 ' '  
  const slots = {
    "menu-main":<div className='rounded-[16px] drop-shadow bg-backgroundLight'>
      <ul>
        <li>        
          <Link href={"/admin"} className={ ( activeSegment == 'admin' ? 'before:bg-primaryLight' : 'before:bg-transparent' ) +hover + ' flex gap-2.5 items-center p-4 pl-5 pb-2.5'}>
            <Tool size={18}/> <span className={ ( activeSegment == 'admin' ? 'font-semibold' : 'font-normal' ) + ' text-body-x2'}>Admin</span> 
          </Link>
          <Link href={"/account"} className={ ( activeSegment == 'account' ? 'before:bg-primaryLight' : 'before:bg-transparent' ) + hover +  ' flex gap-2.5 items-center pr-4 pl-5 pb-2.5'}> 
            <User size={18}/> <span className={ ( activeSegment == 'account' ? 'font-semibold' : 'font-normal' ) +  ' text-body-x2'}>Account</span> 
          </Link>
          <Link href={"/logout"} className={ ( activeSegment == 'logout' ? 'before:bg-primaryLight' : 'before:bg-transparent' ) + hover+ ' flex gap-2.5 items-center pr-4 pl-5 pb-4'}>
            <LogOut size={18}/> <span className={( activeSegment == 'logout' ? 'font-semibold' : 'font-normal' ) +  ' text-body-x2'}>logout</span> 
          </Link>
        </li>
      </ul>
    </div> ,
  }
  return (
    <div className='absolute right-[20px] top-[20px]'>
      <NavMenu
          dataSlot={slots}
          menus={[{
            icon:<Menu/>,
            slotOpen:"menu-main"
          }]}
        />
    </div>
  )
}
