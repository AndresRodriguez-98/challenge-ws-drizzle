'use client';

import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(true);

  useEffect(() => {
    const fetchValue = async () => {
      const res = await fetch("/api/get");
      const data = await res.json();

      if (data.length > 0) {
        setCount(data[0].value);
      }
      setIsSubmitting(false);

    };

    fetchValue();
  }, []);

  const updateCount = async (newValue: number) => {
    setIsSubmitting(true);
    const res = await fetch("/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ counterValue: newValue }),
    });

    if (res.ok) {
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
        onClick={() => updateCount((count ?? 0) - 1)}
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
        onClick={() => updateCount((count ?? 0) + 1)}
        disabled={isSubmitting}
        className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
      >
        +
      </button>
    </div>

  );
}