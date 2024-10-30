import CourseList from "@/schemas/CourseListSchemas";
import Chapters from "@/schemas/ChapterSchemas";  // Assuming you have a schema for chapters
import connectDB from "@/configs/db";
import { NextResponse } from "next/server";
import {GenerateChapterContent_AI} from "@/configs/AiModel";  // AI content generation utility
import service from "@/configs/service";  // For video fetching service

export async function POST(req, res) {
  // Ensure that the database is connected
  await connectDB();

  if (req.method === "POST") {
    const { course } = await req.json();  // Parse request body

    if (!course || !course?.courseOutput?.course?.chapters) {
      return NextResponse.json(
        { success: false, message: "Invalid course data" },
        { status: 400 }
      );
    }

    try {
      const chapters = course?.courseOutput?.course?.chapters;

      await Promise.all(
        chapters.map(async (chapter, index) => {
          const PROMPT = `Explain the concept in Detail on Topic: ${course?.name}, Chapter: ${chapter?.name}, in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable`;

          let videoId = '';

          // Generate Video URL
          const videoResp = await service.getVideos(`${course?.name}:${chapter?.name}`);
          videoId = videoResp[0]?.id?.videoId;

          // Generate chapter content using AI
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          const content = JSON.parse(result?.response?.text());

          // Save Chapter Content + Video URL to MongoDB
          const chapterData = new Chapters({
            chapterId: index,
            courseId: course?.courseId,
            content: content,
            videoId: videoId
          });

          await chapterData.save();
        })
      );

      // Update CourseList publish status
      await CourseList.updateOne(
        { courseId: course?.courseId },
        { $set: { publish: true } }
      );

      // Return success response
      return NextResponse.json(
        { success: true, message: "Chapters generated successfully", chapters },
        { status: 201 }
      );
    } catch (error) {
      // Error handling
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
  } else {
    // If method is not POST, return method not allowed
    return NextResponse.json(
      { success: false, message: "Method not allowed" },
      { status: 405 }
    );
  }
}
