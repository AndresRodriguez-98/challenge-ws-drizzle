import { SelectCounter } from "@/db/Queries";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const res = await SelectCounter();
      return NextResponse.json(res);
    } catch (error) {
      return NextResponse.json({ error: "Error fetching counter" }, { status: 500 });
    }
  }