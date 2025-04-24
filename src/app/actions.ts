'use server'

import { InsertValue, SelectCounter } from "@/db/Queries";

export async function updateCounter(counterValue: number) {
  const res = await InsertValue([{ value: counterValue }]);
  return res;
}
export async function getCounter() {
  const res = await SelectCounter();
  return res;
}