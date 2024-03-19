import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest & { query: { id?: string } }) {
    return NextResponse.json({ users });
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

// Fake db
var users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jill" },
    { id: 4, name: "Jack" },
    { id: 5, name: "Jen" }
]