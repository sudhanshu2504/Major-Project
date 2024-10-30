"use client"
import Header from '@/app/_components/Header'
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList'
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo'
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail'

import axios from 'axios'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Course({params}) {
    const [course,setCourse]=useState();
    useEffect(()=>{
        params&&GetCourse();
    },[params])

    const GetCourse=async()=>{
        const result=await axios.post('/api/getCourse',{courseId:params?.courseId});
        setCourse(result.data.course);
        console.log(result);
    }

  return (
    <div>
        <Header/>
        <div className='px-10 p-10 md:px-20 lg:px-44'>
        <CourseBasicInfo course={course} edit={false} />

        <CourseDetail course={course} />

        <ChapterList course={course} edit={false} />
</div>
<h2 className='text-sm text-gray-400 text-center mb-10'>
  This course was created by {' '}
  <Link href='https://www.linkedin.com/in/sourabh-vishwakarma-a947a92a8/' className='text-blue-500 hover:underline'>
  Sourabh Vishwakarma
  </Link>
</h2>
    </div>
  )
}

export default Course
