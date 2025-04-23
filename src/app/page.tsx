import { SelectCounter} from "@/db/Queries";
import Form from "@/ui/Form";
import ListView from "@/ui/List";

export default async function Home() {
  const counterData = await SelectCounter();
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1>DRIZZLE SUPABASE NEXTJS TEMPLATE</h1>
      <div className={"flex flex-col"}>
        <Form />
        {counterData.map((d) => (
          <ListView key={d.id} id={d.id} value={d.value} createdAt={d.createdAt} />
        ))}
      </div>
    </main>
  );
}
