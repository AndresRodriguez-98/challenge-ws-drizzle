// Logica de negocio, del lado del servidor. Acá es donde corresponde hacer el reseteo a los 20 min.
"use server";

import { SelectCounter, ResetCounter, updateCounter, SelectAllCounters } from "@/db/Queries";
import timeHelper from "@/utils/timeHelper";

export async function updateModel(sign: String) {
    const res = await SelectCounter();
    const diff = timeHelper(res[0].createdAt);
    // si pasaron 20 minutos, reseteo el contador
    if (diff >= 20) {
        const reset = await ResetCounter();
        return reset;
    }

    if (sign === "+") {
        const newCounter = { value: res[0].value + 1 };
        const updatedData = await updateCounter(newCounter);
        return updatedData[0].value;
    }
    if (sign === "-") {
        const newCounter = { value: res[0].value - 1 };
        const updatedData = await updateCounter(newCounter);
        return updatedData[0].value;
    }
}

export async function getModel() {
    const res = await SelectCounter(); // agarro el ultimo
    const diff = timeHelper(res[0].createdAt);

    if (diff >= 20) {
        // si pasaron 20 minutos, reseteo el contador
        const reset = await ResetCounter();
        return reset;
    }
    // si no pasaron 20 minutos, devuelvo el contador actual
    return {
        value: res[0].value,
        diff,
      };
}

export async function getAllModels() {
    const res = await SelectAllCounters();
    return res;
}
