// aca solo nos encargamos de hacer las consultas a la base de datos e interactuar con ella.

import { Select, counter } from "./schema";
import { supabase } from "./supabase";
import { desc, eq } from "drizzle-orm";

export async function updateCounter(newCounter: { value: number }) {
    // obtenemos el último contador
    const latest = await supabase.select().from(counter).orderBy(desc(counter.id)).limit(1);
  
    if (!latest || latest.length === 0) {
      throw new Error("No hay contadores para actualizar");
    }
  
    const lastId = latest[0].id;

    // actualizamos usando ese id
    const updatedData = await supabase
      .update(counter)
      .set(newCounter)
      .where(eq(counter.id, lastId))
      .returning();
  
    return updatedData;
  }

export async function SelectCounter(): Promise<Select[]> {
    let valueData = await supabase.select().from(counter).orderBy(desc(counter.id)).limit(1);
    if(valueData.length === 0) {
        valueData = await supabase.insert(counter).values({ value: 0 }).returning();
    }
    return valueData;
}

export async function SelectAllCounters(): Promise<Select[]> {
    const allData = await supabase.select().from(counter).orderBy(counter.id);
    return allData;
}

export async function ResetCounter(): Promise<number> {
    const resetData = await supabase.insert(counter).values({ value: 0 }).returning();
    const value = resetData[0].value
    console.log("Contador reseteado:", value);
    return value;
}
