// Logica de negocio, del lado del servidor. Acá es donde corresponde hacer el reseteo a los 20 min.
'use server'

import { InsertValue, SelectCounter, ResetCounter } from "@/db/Queries";

export async function updateCounter(counterValue: number) {
  const res = await InsertValue([{ value: counterValue }]);
  return res;
}
export async function getCounter() {
  const res = await SelectCounter();
  return res;
}

/* ASI SERIA SI NO USAMOS UN CRONJOB, PERO SOLO SE RESETEARIA EL NUMERO CUANDO SE USE LA APP.

  export async function getCounter() {
  const res = await SelectCounter();

  const lastCounter = res[0]; // ultimo contador
  const lastDate = new Date(lastCounter.createdAt); // ultima fecha
  const currentDate = new Date(); // fecha actual
  const diff = Math.abs(currentDate.getTime() - lastDate.getTime()); // diferencia entre fechas
  const diffMinutes = Math.floor(diff / (1000 * 60)); // diferencia en minutos
  if (diffMinutes > 20) {
    const reset = await ResetCounter(); // reseteo el contador
    return reset; // devuelvo el numero 0
  }
  // si no se resetea, devuelvo el contador actual
  return res;
} */