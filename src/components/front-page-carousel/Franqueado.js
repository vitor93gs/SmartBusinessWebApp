import Image from "next/dist/client/image";
import logoBig from "../../assets/franquia.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Franqueado() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen sm:px-36 px-7 py-7">
      <div className="w-1/2 mt-36">
        <Image src={logoBig} alt="logoBig" width={561} height={602} />
      </div>
      <div className="flex flex-col items-center sm:w-1/2 w-1/3 text-left  mr-auto">
        <div data-aos="zoom-in-left" data-aos-duration="2500">
          <h1
            data-aos="fade-up"
            data-aos-duration="2500"
            className="text-gray1 sm:text-2xl text-base text-opacity-70 text-center sm:mb-12 h-36 w-full sm:ml-10"
          >
            SEJA NOSSO FRANQUEADO!
          </h1>
        </div>
        <div className="ml-10" data-aos="fade-right" data-aos-duration="3000">
          <Link href="">
            <button className="btn btn-three"> SAIBA MAIS! </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
