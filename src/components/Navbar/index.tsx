import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
export default function Navbar() {
  return (
    <div className='h-24 flex items-center justify-between'>
      <div className='md:hidden lg:block w-[20%]'>
        <Link
          href='/'
          className='font-bold text-xl text-blue-500 whitespace-nowrap'
        >
          NEXT SOCIAL
        </Link>
      </div>

      <div className='hidden md:flex justify-between items-center text-sm w-[50%]'>
        <div className='flex gap-6 text-gray-600'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/home.png'
              width={16}
              height={16}
              alt='home'
              className='w-4 h-4'
            />
            <span>HomePage</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/friends.png'
              width={16}
              height={16}
              alt='home'
              className='w-4 h-4'
            />
            <span>Friends</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/stories.png'
              width={16}
              height={16}
              alt='home'
              className='w-4 h-4'
            />
            <span>Stories</span>
          </Link>
        </div>

        <div className='hidden xl:flex p-2 bg-slate-100 items-center  rounded-xl '>
          <input
            placeholder='search...'
            className='outline-none bg-transparent'
          />
          <Image src='/search.png' alt='' width={14} height={14} />
        </div>
      </div>

      <div className='flex items-center gap-4 xl:gap-8 justify-end w-[30%]'>
        <ClerkLoading>
          <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white' />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer'>
              <Image src='/people.png' alt='' width={20} height={20} />
            </div>

            <div className='cursor-pointer'>
              <Image src='/messages.png' alt='' width={20} height={20} />
            </div>

            <div className='cursor-pointer'>
              <Image src='/notifications.png' alt='' width={20} height={20} />
            </div>

            <UserButton />
          </SignedIn>

          <SignedOut>
            <div className='flex items-center gap-2 text-sm'>
              <Image src='/login.png' alt='' width={20} height={20} />
              <Link href='/sign-in'>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>

        <MobileMenu />
      </div>
    </div>
  );
}
