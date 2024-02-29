import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json;
        return NextResponse.json({message: "User registered"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An error occurred registering the user"}, {status:  500})
    }
}