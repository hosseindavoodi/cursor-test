"use client";

import { useParams } from "next/navigation";
import { getServices } from "../../../../lib/services";
import Image from "next/image";
import CountryDetail from "./_components/country.detail";
import Padding from "../../../_components/padding";
import CountryPrices from "./_components/country.prices";
import Documents from "./_components/documents";
import VisaTypes from "./_components/visa.types";
import Conditions from "./_components/conditions";
import VisaRequest from "./_components/visa.request";
import VisaConsult from "../_components/consult";
import Header from "../../_components/header.image";

function VisaCountryDetail() {
  const params: { countryId: string } = useParams();

  const { visa } = getServices();

  const { data } = visa.useRetrieveVisaDetails({ queryKey: [{ countryId: params.countryId }] });
  return (
    <div className="w-full">
      <Header imageUrl={data?.assets.find((a) => a.type.name === "HEADER")?.preview ?? ""}>
        <p className="absolute top-1/2 -translate-y-1/2 right-[200px] text-[64px] text-white font-semibold">ویزای {data?.countryFaName}</p>
      </Header>
      <Padding>
        {data && (
          <div className="w-full py-10 mt-10 gap-x-4 flex">
            <div className="w-full flex flex-col gap-y-[20px]">
              <CountryDetail country={data} />
              <CountryPrices country={data} />
              <Documents />
              <VisaTypes />
              <Conditions />
            </div>
            <div className="flex flex-col min-w-[360px] w-[360px] gap-y-4">
              <VisaRequest country={data} />
              <VisaConsult />
            </div>
          </div>
        )}
      </Padding>
    </div>
  );
}

export default VisaCountryDetail;
