import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import showroom from "@/models/showroom";

export async function GET(req: Request) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const state = url.searchParams.get("state");

    if (!state) {
      return NextResponse.json(
        { error: "State parameter is required" },
        { status: 400 }
      );
    }

    const showroomsStateVise = await showroom.findOne({ state });

    if (showroomsStateVise.length === 0) {
      return NextResponse.json(
        { error: "No showrooms found for the specified state" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: showroomsStateVise }, { status: 200 });
  } catch (error) {
    console.error("Error fetching showrooms:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
