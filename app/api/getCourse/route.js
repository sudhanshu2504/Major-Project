import CourseList from "@/schemas/CourseListSchemas";
import { NextResponse } from "next/server";
import connectDB from "@/configs/db";

export async function POST(req, res) {
    // Ensure that the database is connected
    await connectDB();
    if(req.method === "POST"){
        const {courseId} = await req.json();
        try {
            const course = await CourseList.findOne({ courseId });
            return NextResponse.json(
                { success: true, course },
                { status: 200 }
            );
        }
        catch (error) {
            console.log(error);
            return NextResponse.json(
                { success: false, error: error },
                { status: 400 }
            );
        }
    }
    else {
        return NextResponse.json(
            { success: false, message: "Method not allowed" },
            { status: 405 }
        );
    }
}
