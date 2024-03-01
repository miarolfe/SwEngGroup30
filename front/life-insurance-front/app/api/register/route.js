import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const obj = await req.json();
        const hashedPassword = await bcrypt.hash(obj.password, 10);
        console.log(hashedPassword);
        await connectMongoDB();
        await User.create({email: obj.email, password: hashedPassword, employeeStatus: false})

        return NextResponse.json({message: "User registered"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An error occurred registering the user"}, {status:  500})
    }
}