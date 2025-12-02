import { ResidencyCountry } from "@sana/types/residency/residency";
import { VisaCountry } from "@sana/types/visa/visa";
import Image from "next/image";
import Link from "next/link";

function CountryCard(props: { country: ResidencyCountry }) {
  return (
    <Link
      href={`/residency/${props.country.id}`}
      className="w-full h-[480px] border bg-white relative overflow-hidden rounded-[25px] "
    >
      <Image
        src={props.country.assets.find((a) => a.type.name === "THUMBNAIL")?.preview ?? ""}
        alt=""
        className="rounded-[25px]"
        fill
      />

      <div className="w-full h-full absolute z-[10] bg-black/30 hover:bg-black/10 transition-all"></div>

      <p className="absolute top-1/2 z-[20] text-white -translate-x-1/2 left-1/2 -translate-y-1/2 text-[38px] font-semibold">
        {props.country.countryFaName}
      </p>
    </Link>
  );
}

export default CountryCard;
