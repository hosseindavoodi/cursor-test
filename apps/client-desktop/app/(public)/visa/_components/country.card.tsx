import { VisaCountry } from "@sana/types/visa/visa";
import Image from "next/image";
import Link from "next/link";

function CountryCard(props: { country: VisaCountry }) {
  return (
    <Link
      href={`/visa/${props.country.id}`}
      className="w-full h-[480px] border bg-white relative rounded-[25px] "
    >
      <Image
        src={props.country.assets.find((a) => a.type.name === "THUMBNAIL")?.preview ?? ""}
        alt=""
        className="rounded-[25px]"
        fill
      />

      <p className="absolute top-1/2 text-white -translate-x-1/2 left-1/2 -translate-y-1/2 text-[38px] font-semibold">
        {props.country.countryFaName}
      </p>
    </Link>
  );
}

export default CountryCard;
