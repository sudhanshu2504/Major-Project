"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard'
import ChapterContent from './_components/ChapterContent'

function CourseStart({params}) {

    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState(0);
    const [chapterContent, setChapterContent] = useState();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        GetCourse();
    }, []);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(eq(CourseList?.courseId, params?.courseId));

        setCourse(result[0]);
    }

    const GetSelectedChapterContent = async (chapterId) => {
        const result = await db.select().from(Chapters)
            .where(and(eq(Chapters.chapterId, chapterId),
                eq(Chapters.courseId, course?.courseId)));

        setChapterContent(result[0]);
        console.log(result);
    }

    return (
        <div>
            {/* Sidebar Toggle Button for Mobile */}
            <button
                className='md:hidden p-4 bg-primary text-white'
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Close Chapters' : 'Open Chapters'}
            </button>

            {/* Chapter list Side Bar */}
            <div className={`fixed top-0 left-0 h-full z-10 bg-white border-r shadow-sm md:w-72 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
                <h2 className='font-medium text-lg bg-primary p-4 text-white'>
                    {course?.courseOutput?.course?.name}
                </h2>

                <div>
                    {course?.courseOutput?.course?.chapters.map((chapter, index) => (
                        <div key={index}
                            className={`cursor-pointer hover:bg-purple-50 ${selectedChapter?.name == chapter?.name && 'bg-purple-100'}`}
                            onClick={() => {
                                setSelectedChapter(chapter);
                                GetSelectedChapterContent(index);
                                setIsSidebarOpen(false); // Close the sidebar on mobile after selection
                            }}
                        >
                            <ChapterListCard chapter={chapter} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Div */}
            <div className={`md:ml-72 p-4`}>
                <ChapterContent chapter={selectedChapter} content={chapterContent} />
            </div>
        </div>
    )
}

export default CourseStart;
