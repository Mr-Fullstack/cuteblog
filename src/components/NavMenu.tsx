'use client'

import React, { HTMLAttributes } from 'react'
import NavButtonMenu from './NavButtonMenu'

type NavHeaderMenuProps = {
  dataSlot?:DataSlotProps;
  menus:SlotMenuProps[];
}

interface DataSlotProps {
  [key: string] : React.JSX.Element
}

interface SlotMenuProps{
  title?:string;
  icon?:React.ReactNode;
  slotOpen?:string;
  action?:()=>void;
}

interface ShowSlotProps{
  open:string;
}
export default function NavMenu({menus,dataSlot}:NavHeaderMenuProps) {

  const nav = React.useRef<HTMLDivElement>(null)
  const [slotOpen, setSlotOpen] = React.useState<string>('');

  const openSlotMenu = (slotNumber:string)=> {
    setSlotOpen(slotNumber)
  } 

  const closeSlotMenu = (evt:MouseEvent)=> {
    const currentTarget = evt.target as HTMLElement;

    if(nav.current && !nav.current.contains(currentTarget))
    {
      setSlotOpen('');
    }
  } 

  const ShowSlot = ({open}:ShowSlotProps) => {
    return dataSlot ? dataSlot[open] : null
  }

  React.useEffect(()=>{
    document.addEventListener('click',closeSlotMenu)
    return(() => document.removeEventListener('click',closeSlotMenu))
  },[])


  return (
    <nav ref={nav} className='relative'>
      {menus.map((menu,index) => {
        
        return(
          <NavButtonMenu key={'menu-item-'+index} title={menu.title} onClick={ menu.action ? menu.action : ()=> openSlotMenu(menu.slotOpen ? menu.slotOpen : '')}>
            {menu.icon && menu.icon}
          </NavButtonMenu>
        )
        })
      }
      { slotOpen && 
        <div className='absolute top-[0.625rem] right-0 z-20'>
          <ShowSlot open={slotOpen}/>
        </div>
      }

    </nav>
  )
}
