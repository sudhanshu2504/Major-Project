"use client"
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { UserCourseListContext } from '../_context/UserCourseListContext'

function DashboardLayout({children}) {
  return (
    <div className='bg-black text-white min-h-screen'>
        <Header/>
        <div className='md:w-64 hidden md:block'>
            <SideBar/>
        </div>
        <div className='md:ml-64 '>
          <div className='p-8'>
          {children}
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout