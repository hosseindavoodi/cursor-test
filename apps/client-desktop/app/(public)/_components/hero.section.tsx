import Image from "next/image";

function Hero(props: { title: string }) {
  return (
    <div className="w-full relative overflow-visible  bg-gradient-to-b from-transparent to-white/10  ">
      <div className="relative w-full h-[700px]">
        <Image
          src={"/hero.png"}
          alt=""
          objectFit="cover"
          fill
          objectPosition="bottom"
          className="w-full "
        />

        <p className="absolute left-1/2 text-[64px] text-[#2C2C2C] -translate-x-1/2 top-60 z-[10] font-bold">{props.title}</p>
        <div className="absolute  bottom-0   w-full h-[400px]  z-[10] ">
          <Image
            alt=""
            objectFit="cover"
            objectPosition="left"
            src={"/cloud.png"}
            fill
          />

          <div className="w-full bg-gradient-to-b absolute -bottom-0  from-transparent  from-0% to-white h-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
