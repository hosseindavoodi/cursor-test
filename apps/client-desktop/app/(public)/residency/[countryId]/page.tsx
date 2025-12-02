"use client";
import { useParams } from "next/navigation";
import { getServices } from "../../../../lib/services";
import Header from "../../_components/header.image";
import Padding from "../../../_components/padding";
import RequestConsult from "./_components/request.consult";
import ResidencyTypes from "./_components/residency.types";
import ResidencyType from "./_components/residency.type";

function ResidencyDetailPage() {
  const { residency } = getServices();

  const params: { countryId: string } = useParams();

  const { data } = residency.useResidencyCountryDetail({ queryKey: [{ countryId: params.countryId }] });

  return (
    <div className="w-full">
      <Header imageUrl={data?.assets.find((a) => a.type.name === "HEADER")?.preview ?? ""}>
        <p className="absolute top-1/2 -translate-y-1/2 right-[200px] text-[64px] font-semibold text-white">اقامت {data?.countryFaName}</p>
      </Header>
      <Padding>
        <div className="flex gap-x-[20px] mt-[50px] w-full">
          <div className="w-full flex flex-col gap-y-[20px]">
            <ResidencyTypes data={data} />
            {data?.types.map((type) => (
              <ResidencyType
                type={type}
                key={type.id}
              />
            ))}
          </div>
          <RequestConsult />
        </div>
      </Padding>
    </div>
  );
}

export default ResidencyDetailPage;
