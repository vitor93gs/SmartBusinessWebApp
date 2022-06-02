import Image from "next/image";
import myGif from "../assets/myGif.gif";

export function Loading() {
  return (
    <div className="absolute flex items-center justify-center h-full w-full bg-gradient-to-r from-theme to-theme2">
      <div className="absolute">
        <Image src={myGif} alt="my gif" height={200} width={300} />
      </div>

      <div className="absolute">
        <img src="/myGif2.svg" alt="my gif" height={350} width={350} />
      </div>
    </div>
  );
}
