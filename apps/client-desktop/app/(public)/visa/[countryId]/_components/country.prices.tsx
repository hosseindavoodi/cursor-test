import { VisaDetailResponse } from "@sana/types/visa/visa";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";

function CountryPrices(props: { country: VisaDetailResponse }) {
  return (
    <div className="w-full border rounded-[25px] flex flex-col gap-y-5 p-[25px] ">
      <p className="font-semibold text-[24px]">جدول قیمتی ویزای {props.country.countryFaName}</p>

      {props.country.groups.map((group) => (
        <PriceGroup
          key={group.id}
          country={props.country}
          group={group}
        />
      ))}
    </div>
  );
}

export default CountryPrices;

const PriceGroup = (props: { country: VisaDetailResponse; group: VisaDetailResponse["groups"][1] }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="bg-gray-100 text-gray-600 rounded-full font-medium py-[10px] w-fit px-[20px]">{props.group.title}</p>

      <PriceTable
        country={props.country}
        group={props.group}
      />
    </div>
  );
};

const PriceTable = (props: { country: VisaDetailResponse; group: VisaDetailResponse["groups"][1] }) => {
  return (
    <table className="w-full border-separate text-center border-spacing-x-0 ">
      <thead className="">
        <tr className="bg-gray-100 text-gray-600 font-semibold text-[14px]  h-[50px]">
          <td className="border-y border-r  rounded-tr-lg">نوع ویزا</td>
          {props.country.durations.map((duration, durationIndex, durations) => (
            <td className={` border-y ${durations.length - 1 !== durationIndex ? "" : "border-l rounded-tl-lg"}`}>
              {duration.durationInDays} روزه
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {props.country.types.map((type, typeIndex, types) => (
          <tr className="h-[50px] ">
            <td className="border-r border-b">{visaTypeMapper[type]}</td>
            {props.country.durations.map((duration, durationIndex, durations) => (
              <td className={`${durations.length - 1 !== durationIndex ? "border-b" : "border-b border-l"}`}>
                {props.group.prices.find((p) => p.durationId === duration.id && p.type === type)?.priceAmount.toLocaleString() ?? "-"}{" "}
                {props.group.prices.find((p) => p.durationId === duration.id && p.type === type)?.priceUnit}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
