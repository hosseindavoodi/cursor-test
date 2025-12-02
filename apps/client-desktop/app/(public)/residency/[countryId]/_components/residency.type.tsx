import { ResidencyCountry } from "@sana/types/residency/residency";

function ResidencyType(props: { type: ResidencyCountry["types"][1] }) {
  return (
    <div className="w-full p-[25px] flex flex-col gap-y-[24px] border rounded-[25px]">
      <p className="font-semibold text-[24px]">{props.type.name}</p>
      <p className="text-gray-600">{props.type.description}</p>
    </div>
  );
}

export default ResidencyType;
