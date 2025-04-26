'use client';

import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { orbitron } from "@/lib/fonts";
import { getModel, updateModel } from "@/app/actions";

export default function Counter() {
  const [value, setValue] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minutesRemaining, setMinutesRemaining] = useState(20);

  // capturamos el ultimo valor de la db
  useEffect(() => {
    const fetchValue = async () => {
      setIsSubmitting(true);
      const data = await getModel();

      if (data) {
        if (typeof data === 'object' && data !== null) { // como data puede ser un objeto o un numero, lo chequeamos
          const { value, diff } = data;  // destructuramos para obtener ambos valores
          if (typeof diff === 'number') {
            setValue(value);
            setMinutesRemaining(20 - diff);  // Restamos a 20 minutos
          } else {
            console.error("Error: 'diff' is not a number");
          }
        }
      }
      setIsSubmitting(false);
    };

    fetchValue();
  }, [value]);


  const handleUpdateCount = async (sign: string) => {
    setIsSubmitting(true); // <-- empieza el loading 
    const newValue = await updateModel(sign);  // lo mismo que antes, lo hacemos desde el actions
    if (newValue) {
      setValue(newValue);
    } else {
      console.error("Error al actualizar el contador");
    }
    //setIsSubmitting(false); acá no hace falta porque ya lo manejamos en el useEffect
  };

  return (
    <div className="flex flex-col items-center gap-6 my-8">
      {/* Minutos restantes centrado arriba */}
      {minutesRemaining !== null && (
        <h2 className="text-gray-300 text-center text-lg sm:text-base">
          Minutos restantes para el reinicio: {minutesRemaining} minutos
        </h2>
      )}

      {/* Zona de botones y contador */}
      <div className="flex items-center gap-6">
        {/* BOTON DE RESTAR */}
        <button
          onClick={() => handleUpdateCount("-")}
          disabled={isSubmitting}
          className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 sm:text-6xl text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
        >
          –
        </button>

        {/* CONTADOR */}
        <div className="w-40 h-40 sm:w-80 sm:h-80 border-8 border-gray-400 rounded-full flex items-center justify-center">
          <div
            id="result"
            className={`${orbitron.className} sm:text-8xl text-6xl text-gray-100 font-bold uppercase`}
          >
            {value !== null ? (
              value
            ) : (
              <ReactLoading type="spin" color="#6b7280" height={50} width={50} />
            )}
          </div>
        </div>

        {/* BOTON DE SUMAR */}
        <button
          onClick={() => handleUpdateCount("+")}
          disabled={isSubmitting}
          className="font-mono bg-zinc-800 text-gray-100 px-6 py-3 sm:text-6xl text-3xl rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};  