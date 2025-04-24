'use client';

import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Orbitron } from "next/font/google";
import { getCounter, updateCounter } from "@/app/actions";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(true);

  useEffect(() => {
    const fetchValue = async () => {
      const data = await getCounter();  // Ahora llama a la server action para obtener el contador
      if (data.length > 0) {
        setCount(data[0].value);
      }
      setIsSubmitting(false);
    };

    fetchValue();
  }, []);
    

  const handleUpdateCount = async (newValue: number) => {
    const res = await updateCounter(newValue);  // lo mismo que antes, lo hacemos desde el actions
    if (res) {
      setCount(newValue);
    } else {
      console.error("Error al actualizar el contador");
    }
    setIsSubmitting(false);
  };

  return (
    // BOTON DE RESTAR
    <div className="flex items-center gap-6 my-8">
      <button
        onClick={() => handleUpdateCount((count ?? 0) - 1)}
        disabled={isSubmitting}
        className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
      >
        –
      </button>

      {/* CONTADOR */}
      <div className="w-40 h-40 border-8 border-gray-400 rounded-full flex items-center justify-center">
        <div id="result" className={`hits ${orbitron.className}`}>
          {count !== null ? (
            count
          ) : (
            <ReactLoading
              type="spin"
              color="#6b7280"
              height={50}
              width={50}
            />
          )}
        </div>
      </div>

      {/* BOTON DE SUMAR */}
      <button
        onClick={() => handleUpdateCount((count ?? 0) + 1)}
        disabled={isSubmitting}
        className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
      >
        +
      </button>
    </div>

  );
}