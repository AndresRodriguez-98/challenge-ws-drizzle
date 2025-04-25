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
  const [value, setValue] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // capturamos el ultimo valor de la db
  useEffect(() => {
    const fetchValue = async () => {
      setIsSubmitting(true);
      const data = await getCounter();  // Ahora llama a la server action para obtener el contador
      if (data.length > 0) {
        setValue(data[0].value);
      }
      setIsSubmitting(false);
    };

    fetchValue();
  }, []);
    

  const handleUpdateCount = async (newValue: number) => {
    const res = await updateCounter(newValue);  // lo mismo que antes, lo hacemos desde el actions
    if (res) {
      setValue(newValue);
    } else {
      console.error("Error al actualizar el contador");
    }
    setIsSubmitting(false);
  };

  return (
    // BOTON DE RESTAR
    <div className="flex items-center gap-6 my-8">
      <button
        onClick={() => handleUpdateCount((value ?? 0) - 1)}
        disabled={isSubmitting}
        className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 sm:text-6xl text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
      >
        –
      </button>

      {/* CONTADOR */}
      <div className="w-40 h-40 sm:w-80 sm:h-80 border-8 border-gray-400 rounded-full flex items-center justify-center">
        <div id="result" className={`${orbitron.className} sm:text-8xl text-6xl text-gray-100 font-bold uppercase`}>
          {value !== null ? (
            value
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
        onClick={() => handleUpdateCount((value ?? 0) + 1)}
        disabled={isSubmitting}
        className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 sm:text-6xl text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
      >
        +
      </button>
    </div>

  );
}