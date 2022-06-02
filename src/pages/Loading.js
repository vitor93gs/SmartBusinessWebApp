import Image from "next/image";
import myGif from "../assets/myGif.gif";
import myGif2 from "../assets/myGif2.svg";

export function Loading() {
  return (
    <div className="absolute flex items-center justify-center h-full w-full bg-gradient-to-r from-theme to-theme2">
      <div className="absolute">
        <Image src={myGif} alt="my gif" height={200} width={200} />
      </div>

      <div className="absolute">
        <Image src={myGif2} alt="my gif" height={350} width={350} />
      </div>
    </div>
  );
}
