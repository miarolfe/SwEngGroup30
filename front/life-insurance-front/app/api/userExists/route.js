import {connectMongoDB} from "@/lib/mongodb";
import User from "@/models/user";
import {NextResponse} from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const obj = await req.json();
        const user = await User.findOne({email: obj.email}).select("_id");
        console.log("user: " + user);
        return NextResponse.json({user});
    } catch (error) {
        return NextResponse.json({message: "An error occurred connecting to database"}, {status:  500})
    }
}