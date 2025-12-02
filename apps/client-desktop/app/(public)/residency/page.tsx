"use client";
import { getServices } from "../../../lib/services";
import Padding from "../../_components/padding";
import Hero from "../_components/hero.section";
import CountryCard from "./_components/country.card";

function Residency() {
  const { residency } = getServices();

  const { data, isPending } = residency.useResiencyCountries({ queryKey: [{ page: 1, perPage: 20 }, "residency"] });

  return (
    <div className="w-full">
      <Hero title="دریافت اقامت" />
      <Padding>
        <div className="w-full gap-[20px] grid grid-cols-4">
          {isPending &&
            Array.from({ length: 10 }).map((_, index) => (
              <div className="w-full h-[480px] rounded-[25px] border bg-gray-100 animate-pulse" />
            ))}

          {data?.countries.map((country) => (
            <CountryCard
              country={country}
              key={country.id}
            />
          ))}
        </div>
      </Padding>
    </div>
  );
}

export default Residency;
