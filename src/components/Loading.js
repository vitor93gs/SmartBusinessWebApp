import Image from "next/image";
import myGif from "../assets/myGif.gif";
import CountUp from "react-countup";

export function Loading() {
  return (
    <div className="absolute flex items-center justify-center h-full w-full bg-theme ">
      <div className="absolute">
        <Image src={myGif} alt="my gif" height={200} width={204} />
      </div>

      <div className="absolute opacity-75 ">
        <img src="/myGif2.svg" alt="my gif" height={350} width={350} />
      </div>

      <div className="absolute">
        <p className="text-gray1 text-l text-right mt-56">
          <CountUp start={0} end={100} duration={1.5} />%
        </p>
      </div>
    </div>
  );
}
