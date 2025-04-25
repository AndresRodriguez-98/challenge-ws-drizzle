import { NextResponse } from 'next/server';
import { SelectCounter, ResetCounter } from '@/db/Queries';

export async function GET() {
  const res = await SelectCounter();

  if (res.length === 0) {
    return NextResponse.json({ message: 'No hay valores aún.' });
  }

  const lastCounter = res[0];
  const lastDate = new Date(lastCounter.createdAt);
  const now = new Date();
  const diffMinutes = (now.getTime() - lastDate.getTime()) / 1000 / 60; // diferencia en minutos
  console.log('Diferencia en minutos:', diffMinutes);

  if (diffMinutes >= 20 && lastCounter.value !== 0) {
    const reset = await ResetCounter();
    return NextResponse.json({ message: 'Contador reseteado', reset });
  }

  return NextResponse.json({ message: 'No es necesario resetear aún.' });
}
