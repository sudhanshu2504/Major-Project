// "use client"
import React from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContextProvider } from '../_context/UserInputContext'

function CreateCourseLayout({children}) {
  return (
    <div>
      <UserInputContextProvider>
        <Header/>
        {children}
      </UserInputContextProvider>
      </div>
  )
}

export default CreateCourseLayout