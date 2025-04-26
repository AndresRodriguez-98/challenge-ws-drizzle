// app/components/List.tsx
import { getAllModels } from "@/app/actions";

export default async function List() {
    const data = await getAllModels();

    return (
        <section className="my-10">
            {data.length > 0 ? (
                <ul className="flex flex-row sm:flex-wrap max-h-[24rem] overflow-y-auto gap-4">
                    {data.map((item) => (
                        <li
                            key={item.id}
                            className="text-lg bg-zinc-800 text-gray-100 px-4 py-2 rounded-md shadow w-full sm:w-20 text-center"
                        >
                            {item.value}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-400">No hay registros aún</p>
            )}
        </section>
    );
}
