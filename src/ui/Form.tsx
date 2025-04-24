'use client';

import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading"; // Importamos la librería

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
      setIsSubmitting(false); // Aseguramos que esto se ejecute después del setTimeout

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
    <div className="flex items-center gap-6 my-8">
      <button
        onClick={() => updateCount((count ?? 0) - 1)}
        disabled={isSubmitting}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 text-2xl"
      >
        –
      </button>

      <div className="text-6xl font-bold flex items-center justify-center">
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

      <button
        onClick={() => updateCount((count ?? 0) + 1)}
        disabled={isSubmitting}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 text-2xl"
      >
        +
      </button>
    </div>

  );
}