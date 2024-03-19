import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "User GET" });
}
    
export async function POST() {
    return NextResponse.json({ message: "User POST" });
}

export async function PUT() {
    return NextResponse.json({ message: "User PUT" });
}

export async function DELETE() {
    return NextResponse.json({ message: "User DELETE" });
}
