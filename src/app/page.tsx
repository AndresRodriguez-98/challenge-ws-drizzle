import Counter from "@/ui/Counter";
import { orbitron } from "@/lib/fonts";
import List from "@/ui/List";

export default async function Home() {
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1 className={`${orbitron.className} sm:text-3xl md:text-4xl text-2xl bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent font-bold uppercase`}>WE SPEAK COUNTER</h1>
      <div className={"flex flex-col"}>
        <Counter />
      </div>
      <h3 className="text-gray-400 font-light">Ultimos valores guardados (cada 20 minutos) : </h3>
      <List />
    </main>
  );
}
