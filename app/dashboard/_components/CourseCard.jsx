import Image from 'next/image'
import React from 'react'
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import DropdownOption from './DropdownOption';
import Link from 'next/link';


function CourseCard({course,refreshData,displayUser=false}) {
    const handleOnDelete=async()=>{
        alert('Are you sure you want to delete this course?')

    }

  return (
    <div className='shadow-sm rounded-lg border flex flex-col justify-between border-gray-600 p-3
     cursor-pointer mt-4 w-96 h-96'>
        <div className='flex flex-col'>
        <Link href={'/course/'+course?.courseId}>
            <Image src={course?.courseBanner} width={300} height={200}
            className='w-full h-[200px] object-cover rounded-lg'
            />
        </Link>
        <div className='p-2'>
            <h2 className='font-medium text-lg flex justify-between items-center'>{course?.courseOutput?.course?.name}           
           {!displayUser&& <DropdownOption
            handleOnDelete={()=>handleOnDelete()}
            ><HiMiniEllipsisVertical/></DropdownOption>}
            </h2>
            <p className='text-sm text-gray-400 my-1'>{course?.category}</p>
        </div>
        </div>
        <div className='flex items-center justify-between'>
            <h2 className='flex gap-2 items-center
                py-1 bg-blue-500 text-primary text-sm rounded px-2'>
                <HiOutlineBookOpen/>{course?.courseOutput?.course?.numberOfChapters} Chapters</h2>
            <h2 className='text-sm bg-blue-500 text-primary px-2 py-1 rounded'>{course?.level}</h2>
        </div>
    </div>
  )
}

export default CourseCard