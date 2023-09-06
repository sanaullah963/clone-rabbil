import React from 'react';
import logo from '@/Images/logo.png';
import Image from 'next/image';
export default function Header() {
  return (
    <main>
      <nav className='bg-gray-100 flex items-center lg:px-10'>
  
        {/* logo */}
        <div className='w-1/4'>
          <Image src={logo} className='w-1/4 cursor-pointer' />
        </div>
        {/* nav item */}
        <div className='w-2/4'>
          <ul className='flex gap-5 justify-center'>
            <li>Home</li>
            <li>Servics</li>
            <li>pages</li>
            <li>About</li>
            <li>Conract</li>
          </ul>
        </div>
        {/* search icon */}
        <div className='w-1/4 flex justify-end gap-3'>
          <button className='py-2 px-5 rounded-md text-white text-xl bg-green-900'>Login</button>
          <button className='py-2 px-5 rounded-md text-white text-xl bg-gray-950'>Sign up</button>
        </div>
      </nav>

    </main>
  )
}
