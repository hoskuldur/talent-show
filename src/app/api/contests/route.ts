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

// Fake db
var contests = [
    { id: 1, name: "Eurovision" },
    { id: 2, name: "Idol" },
    { id: 3, name: "The Voice" }
]