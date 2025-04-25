// aca solo nos encargamos de hacer las consultas a la base de datos e interactuar con ella.

import { Insert, Select, counter } from "./schema";
import { supabase } from "./supabase";
import { desc } from "drizzle-orm";

export async function InsertValue(counterValue: Insert[]): Promise<Insert[]> {
    const insertedValueData = await supabase.insert(counter).values(counterValue).returning();
    console.log("Datos insertados:", insertedValueData);
    return insertedValueData;
}

export async function SelectCounter(): Promise<Select[]> {
    const valueData = await supabase.select().from(counter).orderBy(desc(counter.id)).limit(1);
    return valueData;
}

export async function ResetCounter(): Promise<Insert[]> {
    const reset = await supabase.insert(counter).values({ value: 0 }).returning();
    console.log("Contador reseteado:", reset);
    return reset; // devuelvo el numero 0
}
