import { SelectCounter} from "@/db/Queries";
import Form from "@/ui/Form";

export default async function Home() {
  const counterData = await SelectCounter();
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1>CONTADOR RE FACHERO</h1>
      <div className={"flex flex-col"}>
        <Form />
      </div>
    </main>
  );
}
