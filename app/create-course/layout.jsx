// "use client"
import React from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContextProvider } from '../_context/UserInputContext'

function CreateCourseLayout({children}) {
  return (
    <div className='bg-black text-white min-h-screen'>
      <UserInputContextProvider>
        <Header/>
        {children}
      </UserInputContextProvider>
      </div>
  )
}

export default CreateCourseLayout