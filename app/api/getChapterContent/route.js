import connectDB from "@/configs/db";
import Chapters from "@/schemas/ChapterSchemas";
import { NextResponse } from "next/server";

export async function POST(req) {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { courseId, chapterId } = await req.json();
    // Validate the body parameters
    if (!courseId && !chapterId) {
        return NextResponse.json(
            { success: false, message: "Missing courseId or chapterId" },
            { status: 400 }
        );
    }

    try {
        // Find chapter content based on courseId and chapterId
        const chapterContent = await Chapters.findOne({
            courseId: courseId,
            chapterId: parseInt(chapterId) // Ensure chapterId is treated as a number
        });

        // Check if content was found
        if (!chapterContent) {
            return NextResponse.json(
                { success: false, message: "Chapter content not found" },
                { status: 404 }
            );
        }

        // Return the chapter content if found
        return NextResponse.json(
            { success: true, chapterContent: chapterContent },
            { status: 200 }
        );
    } catch (error) {
        // Handle any server or database errors
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
