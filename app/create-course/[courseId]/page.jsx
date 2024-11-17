"use client";

import { useUser } from '@clerk/nextjs'

import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '@/components/ui/button'

import LoadingDialog from '../_components/LoadingDialog'

import { useRouter } from 'next/navigation'
import axios from 'axios';

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course,setCourse]=useState([]);
  const [loading,setLoading]=useState(false);
  const router=useRouter();
  useEffect(() => {
    params && GetCourse();
  }, [params,user])

  const GetCourse = async () => {
    const result = await axios.post(`/api/getCourse`, {courseId: params?.courseId});
    setCourse(result.data.course);
    console.log(result);
  }

  const GenerateChapterContent = async () => {
    setLoading(true);
  
    try {
      // Make a POST request to the backend API
      const response = await axios.post('/api/generateCourseContent', { course : course });
  
      if (response.success) {
        console.log('Chapters generated successfully:', response);
        router.push(`/create-course/${course?.courseId}/finish`);
      } else {
        console.error('Error generating chapters:', response.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

      <LoadingDialog loading={loading} />
      {/* Basic Info  */}
        <CourseBasicInfo course={course} refreshData={()=>GetCourse()} />
      {/* Course Detail  */}
        <CourseDetail course={course} />
      {/* List of Lesson  */}
        <ChapterList course={course} refreshData={()=>GetCourse()}/>

      <Button onClick={GenerateChapterContent} className="my-10 bg-gradient-to-br from-blue-500 to-purple-700">Generate Course Content</Button>
    </div>
  )
}

export default CourseLayout