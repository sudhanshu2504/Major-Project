import connectDB from "@/configs/db";
import CourseList from "@/schemas/CourseListSchemas";
import { NextResponse } from "next/server";

export async function POST(req) {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { createdBy } = await req.json();

    // Validate the body parameters
    try {
        // Find all courses
        const courseList = await CourseList.find({createdBy});

        // Return the course list
        return NextResponse.json(
            { success: true, courseList: courseList },
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