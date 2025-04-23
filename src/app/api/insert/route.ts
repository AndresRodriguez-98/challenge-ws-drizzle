import { InsertValue} from "@/db/Queries";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { counterValue } = await request.json();
  try {
    const res = await InsertValue([
      {
        value: counterValue,
        createdAt: 4000000000, // Cambiar esto por el valor real de createdAt
      },
    ]);

    return NextResponse.json(res, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
