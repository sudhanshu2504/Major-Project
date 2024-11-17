import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='flex w-full justify-between items-center p-5 shadow-lg shadow-gray-800 bg-black'>
      <h2 className='text-xl font-bold'>AI Course GenX</h2>
        <UserButton/>
    </div>
  )
}

export default Header