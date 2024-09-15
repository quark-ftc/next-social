'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <div
        className='flex flex-col gap-1 cursor-pointer'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'rotate-45' : ''} origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'opacity-0' : ''} ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? '-rotate-45' : ''} origin-left ease-in-out duration-500`}
        />
      </div>

      {isOpen && (
        <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] flex flex-col justify-center items-center bg-white gap-8 font-medium text-xl z-10'>
          <Link href='/'>Friends</Link>
          <Link href='/'>Home</Link>
          <Link href='/'> Groups</Link>
          <Link href='/'>Stories</Link>
          <Link href='/'>Login</Link>
          <Link href='/'></Link>
          <Link href='/'></Link>
        </div>
      )}
    </div>
  );
}
