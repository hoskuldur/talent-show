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

// Fake db
var performances = [
    { id: 1, userID: 1, contestID: 1, songName: "Qélé, Qélé" },
    { id: 2, userID: 2, contestID: 1, songName: "Tout l'univers" },
    { id: 3, userID: 3, contestID: 1, songName: "My Number One" },
    { id: 4, userID: 4, contestID: 1, songName: "Hard Rock Hallelujah" },
    { id: 5, userID: 5, contestID: 1, songName: "Cha Cha Cha" },
    { id: 6, userID: 3, contestID: 2, songName: "Bohemian Rhapsody" },
    { id: 7, userID: 4, contestID: 2, songName: "I Will Always Love You" },
    { id: 8, userID: 5, contestID: 2, songName: "I Believe I Can Fly" },
    { id: 9, userID: 1, contestID: 3, songName: "I Want to Hold Your Hand" },
    { id: 10, userID: 2, contestID: 3, songName: "I Will Survive" },
    { id: 11, userID: 3, contestID: 3, songName: "Tutti Frutti" },
    { id: 12, userID: 5, contestID: 3, songName: "I'm a Believer" }
]