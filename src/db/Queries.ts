import { Insert, Select, counter } from "./schema";
import { supabase } from "./supabase";

export async function InsertValue(counterValue: Insert[]): Promise<Insert[]> {
  const insertedValueData = await supabase.insert(counter).values(counterValue).returning();
    return insertedValueData;
}

export async function SelectCounter(): Promise<Select[]> {
  const valueData = await supabase.select().from(counter);
    return valueData;
}