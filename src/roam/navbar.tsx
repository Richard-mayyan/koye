"use client"
import React from 'react'
import MenuButton from './homepage/MenuButton'
import { UserIcon } from 'lucide-react'
import CartModal from '@/components/cart/modal'
import { cn } from '@/lib/utils'
import ScrollBasedComponents from './ScrollBasedComponents'
import { div } from 'framer-motion/client'


function MyCmp({isUp} : {isUp : boolean}) {
    const a = {
        'text-secondBg' : isUp,
        'text-textColor' : !isUp,
    }
  return (
    <div className='bg-transparent w-full '>
        <div className={cn("flex justify-between items-center  py-1 text-secondBg px-2",{
            "bg-secondBg" : !isUp,
            'text-textColor' : isUp,

        })}>
            <MenuButton className={cn("",a)}/>
            <p className={cn("text-5xl text-textColor text-center  ml-10",a)}>roam</p>
            <div className="flex items-center">
                <UserIcon className={cn("w-6 h-6",a)} />
                <div className="flex justify-end md:w-1/3">
                <CartModal className={cn("text-textColor",{
                        'text-secondBg' : isUp,
                })} />
                </div>
            </div>


        </div>
    </div>
  )
}

// bg-secondBg
function Navbar() {
   
  return (
    <div className='relative'>

    <ScrollBasedComponents UP={<MyCmp isUp={false} />}  DOWN={<MyCmp isUp={true} />} />

    </div>

  )
}

export default Navbar