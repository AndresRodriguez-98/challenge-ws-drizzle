"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [counterValue, setCounterValue] = useState<number | string>("");

  // Validamos que el número esté presente y sea un número válido
  const isFormValid: Boolean = counterValue !== "" && !isNaN(Number(counterValue));

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();

    // Hacemos el fetch para enviar el número a la base de datos
    const res = await fetch("/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ counterValue }),
    });

    if (res.ok) {
      setCounterValue("");  // Limpiamos el valor si la inserción fue exitosa
    }

    if (!res.ok) {
      // Mantener el valor del input si hubo algún error
      console.error("Error al insertar el número");
    }
  };

  return (
    <form onSubmit={formHandler} className={"my-6"}>
      <input
        className={"bg-neutral-900 rounded-xl py-3 px-4"}
        type={"number"}  // Cambiamos a tipo "number"
        name={"counterValue"}
        placeholder={"Enter number"}
        required={true}
        value={counterValue}
        onChange={(e) => setCounterValue(e.target.value)}  // Actualizamos el estado con el valor del input
      />
      <button
        className={
          "bg-white text-black rounded-xl py-2 px-4 mx-3 hover:bg-neutral-300"
        }
        type={"submit"}
        disabled={!isFormValid}  // Deshabilitamos el botón si el número no es válido
      >
        Enviar
      </button>
    </form>
  );
}
