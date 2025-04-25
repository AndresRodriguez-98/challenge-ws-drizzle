export function timeHelper(lastCreatedAt: Date) {
    const currentDate = new Date(); // fecha actual
    const diff = Math.abs(currentDate.getTime() - lastCreatedAt.getTime()); // diferencia entre fechas
    const diffMinutes = Math.floor(diff / (1000 * 60)); // diferencia en minutos
    return diffMinutes;
}
export default timeHelper;
