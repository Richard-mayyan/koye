import Link from 'next/link'
import React from 'react'
import { UserIcon } from 'lucide-react'
import CartModal from '@/components/cart/modal'

function Navbar() {
  return (
    <div  className='pt-2 bg-appyellow'>
    <h1 className="text-center text-white text-[8px] mb-5">FREE DELIVERY OVER $24.99</h1>

    <div className="max-w-[80%] flex justify-between items-center uppercase  mx-auto">
      <Link href={"/"}>
      <h1 className='uppercase text-xl'>KÔYé</h1>
      </Link>
      <ul className="md:flex space-x-16 text-xs hidden ">
        <li>
          <Link href="#">About US</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="/shop-all">SHOP ALL</Link>
        </li>

      </ul>
      <div className="flex items-center space-x-8">
        <UserIcon className="w-6 h-6" />
        <div className="flex justify-end md:w-1/3">
        <CartModal />
      </div>
      
      </div>
    </div>

  </div>
  )
}

export default Navbar