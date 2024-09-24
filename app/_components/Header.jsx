
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between py-2 px-4 shadow-sm items-center'>
      <Link href={'/'} className='font-black'>
        AI Course GenX
        </Link>
        <Link href={'/dashboard'}>
          <button className="rounded-md px-4 py-2 bg-black text-white">Get Started</button>
        </Link>
    </div>
  )
}

export default Header