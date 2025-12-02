import Image from "next/image";
import BannerImage from "@sana/assets/icons/account/overview/banner.png";
import { Button } from "@sana/ui/components/button";
import { CircleArrowLeft } from "lucide-react";

function Banner() {
  return (
    <div className="relative h-[263px]  w-full ">
      <Image
        className="rounded-[20px]"
        src={BannerImage}
        alt=""
        fill
      />

      <Button className="bg-gradient-to-tr absolute z-[100] bottom-5 right-5 h-[52px] rounded-full from-primary-400 to-primary-500 flex items-center justify-center ">
        <p>دکمه در این قسمت</p>
        <CircleArrowLeft
          strokeWidth={1}
          size={32}
        />
      </Button>
    </div>
  );
}

export default Banner;
