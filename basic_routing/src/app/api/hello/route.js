import { NextResponse } from "next/server";

export async function GET(request){

    return NextResponse.json({message:'hello, Next.js'},{statusL:400});
}