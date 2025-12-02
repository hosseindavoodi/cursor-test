import Image from "next/image";
import { ReactNode } from "react";

function Header(props: { children?: ReactNode; imageUrl: string }) {
  return (
    <div className="w-full bg-gray-100 h-[700px] relative">
      <Image
        src={props.imageUrl}
        fill
        objectFit="cover"
        objectPosition="bottom"
        alt=""
      />
      {props.children}
      <div className="w-full bg-gradient-to-t from-white  to-transparent h-[90px] -bottom-0 absolute backdrop-blur-[3px] "></div>
    </div>
  );
}

export default Header;
