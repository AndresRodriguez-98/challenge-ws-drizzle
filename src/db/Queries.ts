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
