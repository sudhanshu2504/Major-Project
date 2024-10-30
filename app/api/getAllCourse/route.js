import connectDB from "@/configs/db";
import CourseList from "@/schemas/CourseListSchemas";
import { NextResponse } from "next/server";

export async function POST(req) {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { pageIndex } = await req.json();

    // Validate the body parameters
    if (!pageIndex) {
        return NextResponse.json(
            { success: false, message: "Missing pageIndex" },
            { status: 400 }
        );
    }

    try {
        // Find all courses
        const courseList = await CourseList.find({publish:true})
            .skip((pageIndex-1) * 10) // Skip the first n courses
            .limit(10); // Limit the number of courses to 10

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