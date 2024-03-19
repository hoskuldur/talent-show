import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "John GET" });
}
    
export async function POST() {
    return NextResponse.json({ message: "John POST" });
}

export async function PUT() {
    return NextResponse.json({ message: "John PUT" });
}

export async function DELETE() {
    return NextResponse.json({ message: "John DELETE" });
}
