import CourseList from "@/schemas/CourseListSchemas";
import { NextResponse } from "next/server";
import connectDB from "@/configs/db";

export async function POST(req, res) {
    // Ensure that the database is connected
    await connectDB();
    if (req.method === "POST") {
        const {
            courseId,
            name,
            category,
            level,
            courseOutput,
            createdBy,
            username,
            userProfileImage,
            includeVideo,
            courseBanner,
            publish,
        } = await req.json();
        try {
            const course = new CourseList({
                courseId,
                name,
                category,
                level,
                courseOutput,
                createdBy,
                username,
                userProfileImage,
                includeVideo,
                courseBanner,
                publish,
            });
            await course.save();
            return NextResponse.json(
                { success: true, course: course },
                { status: 201 }
            );
        } catch (error) {
            return NextResponse.json(
                { success: false, error: error },
                { status: 400 }
            );
        }
    } else {
        return NextResponse.json(
            { success: false, message: "Method not allowed" },
            { status: 405 }
        );
    }
}
