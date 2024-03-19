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

// Fake db
var votes = [
    { id: 1, voterID: 1, performanceID: 1, score: 1 },
    { id: 2, voterID: 2, performanceID: 1, score: 1 },
    { id: 3, voterID: 3, performanceID: 1, score: 1 },
    { id: 4, voterID: 4, performanceID: 1, score: 1 },
    { id: 5, voterID: 5, performanceID: 1, score: 1 },
    { id: 6, voterID: 1, performanceID: 2, score: 2 },
    { id: 7, voterID: 2, performanceID: 2, score: 2 },
    { id: 8, voterID: 3, performanceID: 2, score: 2 },
    { id: 9, voterID: 4, performanceID: 2, score: 2 },
    { id: 10, voterID: 5, performanceID: 2, score: 2 },
    { id: 11, voterID: 1, performanceID: 3, score: 3 },
    { id: 12, voterID: 2, performanceID: 3, score: 3 },
    { id: 13, voterID: 3, performanceID: 3, score: 3 },
    { id: 14, voterID: 4, performanceID: 3, score: 3 },
    { id: 15, voterID: 5, performanceID: 3, score: 3 },
    { id: 16, voterID: 1, performanceID: 4, score: 4 },
    { id: 17, voterID: 2, performanceID: 4, score: 4 },
    { id: 18, voterID: 3, performanceID: 4, score: 4 },
    { id: 19, voterID: 4, performanceID: 4, score: 4 },
    { id: 20, voterID: 5, performanceID: 4, score: 4 },
    { id: 21, voterID: 1, performanceID: 5, score: 5 },
    { id: 22, voterID: 2, performanceID: 5, score: 5 },
    { id: 23, voterID: 3, performanceID: 5, score: 5 },
    { id: 24, voterID: 4, performanceID: 5, score: 5 },
    { id: 25, voterID: 5, performanceID: 5, score: 5 },
]
