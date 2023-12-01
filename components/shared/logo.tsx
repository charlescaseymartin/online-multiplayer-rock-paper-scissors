import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' className='relative flex items-center gap-3'>
      <div className='relative w-12 h-12 p-2 overflow-hidden flex rounded-xl bg-emerald-500'>
        <img src='/images/logo.png' alt='logo' />
      </div>
      <div className='inline-flex text-xl text-heading-1'>
        Simple Web Games
      </div>
    </Link>
  )
}