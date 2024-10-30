import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='flex w-full justify-end items-center p-5 shadow-sm'>
        <UserButton/>
    </div>
  )
}

export default Header