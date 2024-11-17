"use client";

import { useUser } from '@clerk/nextjs';

import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { useRouter } from 'next/navigation';
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import axios from 'axios';

function FinishScreen({params}) {
    const { user } = useUser();
    const [course,setCourse]=useState(null);
    const router=useRouter();
    useEffect(() => {
      params && GetCourse();
    }, [params,user])
  
    const GetCourse = async () => {
      const result = await axios.post(`/api/getCourse`, {courseId: params?.courseId});
      setCourse(result.data.course);
      console.log("Course : ",result.data.course);
    }
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
        <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats! Your course is Ready</h2>

        <CourseBasicInfo course={course} refreshData={()=>console.log()} />
       <h2 className='mt-3'>Course URL:</h2>
       <div>

        <div className='flex w-full gap-4'>
       <span className='text-center text-gray-400 w-full border p-2 rounded flex gap-5 items-center'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseId}</span>
        <button className='text-center text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-600 px-6 py-2 rounded-lg' onClick={()=>router.push(`/course/${course?.courseId}`)}>Start</button>
       </div>
       </div>
        
    </div>
  )
}

export default FinishScreen;