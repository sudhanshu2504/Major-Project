import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiOutlinePuzzle } from "react-icons/hi";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/firebaseConfig';
import CourseList from '@/schemas/CourseListSchemas';
import Link from 'next/link';
import connectDB from '@/configs/db'; // Assuming you have MongoDB connection logic

function CourseBasicInfo({ course, refreshData, edit = true }) {
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (course) {
      setSelectedFile(course?.courseBanner);
    }
  }, [course]);

  /**
   * Select file and Upload to Firebase Storage
   * @param {*} event 
   */
  const onFileSelected = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));

    const fileName = Date.now() + '.jpg';
    const storageRef = ref(storage, 'ai-course/' + fileName);

    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('File upload complete');
    }).then(async (resp) => {
      getDownloadURL(storageRef).then(async (downloadUrl) => {
        console.log(downloadUrl);

        // MongoDB Update Logic
        try {
          await connectDB(); // Ensure that the MongoDB connection is established

          await CourseList.updateOne(
            { _id: course._id }, // Find the course by its MongoDB _id
            { $set: { courseBanner: downloadUrl } } // Update the courseBanner field with the download URL
          );
          console.log("Course banner updated");
          refreshData(true); // Refresh data if needed after update
        } catch (error) {
          console.error("Error updating course banner: ", error);
        }

      });
    });
  }

  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5 relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <h1 className='text-2xl font-bold'>{course?.courseOutput?.course?.name}</h1>
          <p className='text-sm text-gray-400 mt-3 '>{course?.courseOutput?.course?.description}</p>
          <h2 className='font-medium mt-2 flex gap-2 items-center text-base text-white bg-gradient-to-br from-purple-700 to-blue-400 rounded w-fit px-2'>
            <HiOutlineRectangleStack />{course?.category}
          </h2>
          {!edit && <Link href={'/course/' + course?.courseId + "/start"}>
            <Button className="w-full mt-5">Start</Button>
          </Link>}
        </div>
        <div>
          <label htmlFor='upload-image'>
            <Image src={selectedFile ? selectedFile : '/placeholder.png'} width={300} height={300}
              className='w-full rounded-xl h-[250px] object-cover cursor-pointer' />
          </label>
          {edit && <input type="file" id="upload-image" 
            className='opacity-0' onChange={onFileSelected} />}
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
