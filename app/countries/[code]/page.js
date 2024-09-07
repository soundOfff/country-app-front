import { show } from "@/actions/countries";
import { ChartGraph } from "@/components/chart";
import Tab from "@/components/tab";
import Table from "@/components/table";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function DetailsPage({
  params: { code },
  searchParams: { tab },
}) {
  const country = await show(code);
  console.log(country);

  if (!country) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
        <span className="flex items-center gap-2">
          <h3 className="text-3xl font-semibold leading-6 text-gray-900 pb-2">
            {country.population.country}
          </h3>
          <Image src={country.flag.flag} alt="" width={30} height={30} />
        </span>
        <Tab />
      </div>
      {tab === "population" || !tab ? (
        <div className="mt-8">
          <ChartGraph
            title={`Total population of ${country.population.country}`}
            population={country.population.populationCounts}
          />
        </div>
      ) : (
        <div className="mt-8">
          <Table
            countries={country.borders}
            title="Border Countries"
            description="A list of border countries"
          />
        </div>
      )}
    </>
  );
}
