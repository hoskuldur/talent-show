import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//     const params = req.headers.get("params");
//     return NextResponse.json({ users });
// }

export async function GET(req: NextRequest & { query: { id?: string } }) {
    const { id } = req.query;
    // Check if id is present in the query
    return id
        ? // If id is present, search for the user
          (() => {
              const user = users.find(user => user.id === Number(id));
              return user
                  ? NextResponse.json({ user }) // User found
                  : NextResponse.json({ message: "User not found" }, { status: 404 }); // User not found
          })()
        : // If no id is present, return all users
          NextResponse.json({ users });
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