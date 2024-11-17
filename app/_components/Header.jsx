
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between py-2 px-4 shadow-lg shadow-white items-center bg-black border-b-2 border-opacity-80 border-gray-600'>
      <Link href={'/'} className='font-black text-white'>
        AI Course GenX
        </Link>
        <Link href={'/dashboard'}>
          <button className="rounded-md px-4 py-2 bg-gradient-to-br from-purple-700 to-blue-400 text-white text-sm">Get Started</button>
        </Link>
    </div>
  )
}

export default Header