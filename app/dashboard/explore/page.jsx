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

      <div className='flex flex-wrap gap-5'>
        {courseList?.length>0?courseList?.map((course,index)=>(
          <div className='w-96'>
            <CourseCard course={course} displayUser={true} />
          </div>
        )):
        [1,2,3,4,5].map((item,index)=>(
          <div key={index} className='w-full h-[230px] bg-slate-200 rounded-lg'>
          </div>
        ))
        }
      </div>

        <div className='flex justify-between mt-10'>
         {pageIndex!=0 && <Button  className="bg-gradient-to-br from-purple-600 to-blue-600" onClick={()=>setPageIndex(pageIndex-1)}>Previous Page</Button>}

          <Button className="bg-gradient-to-br from-purple-600 to-blue-600" onClick={()=>setPageIndex(pageIndex+1)}>Next Page</Button>
      </div>
    </div>
  )
}

export default Explore