import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Performance GET" });
}
    
export async function POST() {
    return NextResponse.json({ message: "Performance POST" });
}

export async function PUT() {
    return NextResponse.json({ message: "Performance PUT" });
}

export async function DELETE() {
    return NextResponse.json({ message: "Performance DELETE" });
}
