import { Hero, SearchBar, CarsCard, ShowMore } from "@/components";
import { HomeProps } from "@/types/interfaces";
import { fetchCarsApi } from "@/utils/carsApi";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCarsApi({
    manifacture: searchParams.manifacture || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  //  console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className=" md:px-5 lg:px-24 sm:px-5 px-2">
      <Hero />
      <div>
        <SearchBar />
      </div>
      {!isDataEmpty ? (
        <section className="my-10">
          <div className=" grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
            {allCars.map((cars, i) => (
              <CarsCard cars={cars} key={i} />
            ))}
          </div>
          <ShowMore pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) > allCars.length}
        />
        </section>
      ) : (
        <>
          <h1>Result no show! some thing worng</h1>
          <p>{allCars.message}</p>
        </>
      )}
    </main>
  );
}
