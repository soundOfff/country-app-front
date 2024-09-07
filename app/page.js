import { getAll } from "@/actions/countries";
import Table from "@/components/table";
import { redirect } from "next/navigation";

export default async function Home() {
  const countries = await getAll();

  if (!countries) redirect("/error");
  return (
    <div className="w-full flex items-center justify-center pt-6 font-[family-name:var(--font-geist-sans)]">
      <div className="w-1/2 ">
        <Table
          countries={countries}
          title="Countries"
          description="A list of all countries"
        />
      </div>
    </div>
  );
}
