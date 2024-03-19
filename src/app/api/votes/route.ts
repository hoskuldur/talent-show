import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Vote GET" });
}
    
export async function POST() {
    return NextResponse.json({ message: "Vote POST" });
}

export async function PUT() {
    return NextResponse.json({ message: "Vote PUT" });
}

export async function DELETE() {
    return NextResponse.json({ message: "Vote DELETE" });
}
