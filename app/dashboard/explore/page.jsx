"use client"
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard';
import { Button } from '@/components/ui/button';
import axios from 'axios';

function Explore() {

  const [courseList,setCourseList]=useState([]);
  const [pageIndex,setPageIndex]=useState(1);
  useEffect(()=>{
    GetAllCourse();
  },[pageIndex])

  const GetAllCourse=async()=>{
    const result=await axios.post('/api/getAllCourse',{pageIndex});
    setCourseList(result.data.courseList);
    console.log(result);
  }

  return (
    <div>
      <h2 className='font-bold text-3xl'>Explore More Projects</h2>
      <p>Explore more project build with AI by other users</p>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
        {courseList?.length>0?courseList?.map((course,index)=>(
          <div>
            <CourseCard course={course} displayUser={true} />
          </div>
        )):
        [1,2,3,4,5].map((item,index)=>(
          <div key={index} className='w-full h-[230px] bg-slate-200 rounded-lg'>
          </div>
        ))
        }
      </div>

        <div className='flex justify-between mt-5'>
         {pageIndex!=0&& <Button onClick={()=>setPageIndex(pageIndex-1)}>Previous Page</Button>}

          <Button onClick={()=>setPageIndex(pageIndex+1)}>Next Page</Button>
      </div>
    </div>
  )
}

export default Explore