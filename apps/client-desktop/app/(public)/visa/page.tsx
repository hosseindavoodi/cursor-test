"use client";
import { useSearchParams } from "next/navigation";
import { getServices } from "../../../lib/services";
import Hero from "../_components/hero.section";
import Padding from "../../_components/padding";
import CountryCard from "./_components/country.card";

function VisaPage() {
  const services = getServices();

  const searchParams = useSearchParams();

  const { data } = services.visa.useVisaCountryList({ queryKey: [{ page: 1, perPage: 20 }, "visa"] });

  return (
    <div className="w-full">
      <Hero title="دریافت ویزا" />
      <Padding>
        <div className="w-full pb-10 -mt-[80px] z-[9999] relative grid grid-cols-4 gap-[20px]">
          {data?.countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
            />
          ))}
        </div>
      </Padding>
    </div>
  );
}

export default VisaPage;
