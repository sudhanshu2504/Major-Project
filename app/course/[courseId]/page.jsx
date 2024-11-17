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
        <div className='px-10 p-10 md:px-20 lg:px-44 bg-black text-white'>
        <CourseBasicInfo course={course} edit={false} />

        <CourseDetail course={course} />

        <ChapterList course={course} edit={false} />
</div>
    </div>
  )
}

export default Course
