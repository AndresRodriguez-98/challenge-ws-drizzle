import { InsertValue, SelectCounter} from "@/db/Queries";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { counterValue } = await request.json();
  console.log("Valor recibido en el servidor:", counterValue);
  if (typeof counterValue !== "number") {
    return NextResponse.json(
      { error: "El valor debe ser un número" },
      { status: 400 }
    );
  }
  try {
    const res = await InsertValue([
      {
        value: counterValue,
      },
    ]);

    console.log("Resultado de la inserción:", res);

    return NextResponse.json(res, {
      status: 200,
    });
  } catch (error) {
    console.error("Error en la inserción:", error);
    return NextResponse.json(error, {
      status: 500,
    });
  }
}