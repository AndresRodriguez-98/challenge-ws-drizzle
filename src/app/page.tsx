import { SelectCounter} from "@/db/Queries";
import Counter from "@/ui/Counter";
import { orbitron } from "@/lib/fonts";

export default async function Home() {
  const counterData = await SelectCounter();
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1 className={`${orbitron.className} sm:text-8xl text-6xl text-gray-100 font-bold uppercase`}>WE SPEAK COUNTER</h1>
      <div className={"flex flex-col"}>
        <Counter />
      </div>
    </main>
  );
}
