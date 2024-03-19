import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Contest GET" });
}
    
export async function POST() {
    return NextResponse.json({ message: "Contest POST" });
}

export async function PUT() {
    return NextResponse.json({ message: "Contest PUT" });
}

export async function DELETE() {
    return NextResponse.json({ message: "Contest DELETE" });
}
