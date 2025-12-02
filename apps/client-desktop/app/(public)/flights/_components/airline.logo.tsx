import { cn } from "@sana/ui/lib/utils";
import Image from "next/image";

function AirlineLogo(props: { airlineCode: string; index: number; size?: number; parentClassName?: string; offset?: number }) {
  return (
    <div
      style={{ marginRight: -props.index * (props.offset ?? 30) }}
      className={cn("hover:z-[99] transition-all rounded-full bg-white border p-3 right-0  ", props.parentClassName)}
    >
      <Image
        alt=""
        width={props.size ?? 60}
        height={props.size ?? 60}
        className="rounded-full"
        src={`${process.env.NEXT_PUBLIC_MINIO_URL}/public-assets/airlines/${props.airlineCode}.png`}
      />
    </div>
  );
}

export default AirlineLogo;
