import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest & { query: { id?: string } }) {
    // If there is an id in the query, attempt to find and return the user with that id
    if (req.query.id) {
        const id = parseInt(req.query.id, 10); // Use the second argument to specify the radix
        if (!isNaN(id)) { // Check if parsing was successful
            const user = users.find(u => u.id === id);
            return NextResponse.json(user ? { user } : { message: "User not found" }, user ? undefined : { status: 404 });
        }
    }
    // If no id is provided or parsing fails, return the full users list
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