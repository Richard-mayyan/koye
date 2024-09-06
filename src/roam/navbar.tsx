"use client"
import React from 'react'
import MenuButton from './homepage/MenuButton'
import { UserIcon } from 'lucide-react'
import CartModal from '@/components/cart/modal'
import { cn } from '@/lib/utils'
import ScrollBasedComponents from './ScrollBasedComponents'
import { div } from 'framer-motion/client'
import { config } from './config'
import { MyNavigationList } from './MyNavigationList'
import { CardProp } from './homepage/homepage'
// import MyNavigationList from './MyNavigationList'


function MyCmp({isUp,items} : {isUp : boolean,items : CardProp[]}) {
    const a = {
        'text-secondBg' : isUp,
        'text-textColor' : !isUp,
    }
  return (
    <div className='w-full '>
        <div className={cn("flex justify-between items-center  py-1 text-secondBg px-2",{
            "bg-secondBg" : !isUp,
            'text-textColor' : isUp,

        })}>
          <div className='md:hidden'>
            <MenuButton className={cn("",a)}/>
          </div>
            <p className={cn("text-5xl text-textColor text-center  ml-10 md:ml-0",a)}>{config.siteName}</p>

           <div className='hidden md:flex'>
           <MyNavigationList items={items} />
           </div>

            <div className="flex items-center  md:space-x-4">
                <UserIcon className={cn("w-8 h-8",a)} />
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
function Navbar({items} : {items : CardProp[]}) {
   
  return (
    <div className='relative bg-green-700 p-4 bg-transparent md:bg-primaryBg w-full'>

    <ScrollBasedComponents UP={<MyCmp items={items} isUp={false} />}  DOWN={<MyCmp items={items} isUp={true} />} />

    </div>

  )
}

//  function MyNavigationList() {
//   return (
//     <ul className='hidden md:flex space-x-4'>
//     {Array(6).fill(0).map((v,index) => {
//       return <li className='text-secondBg'>
//       DEVICES
//       </li>
//     })}
//   </ul>
//   )
// }

export default Navbar