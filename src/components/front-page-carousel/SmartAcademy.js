import Image from "next/dist/client/image";
import logoBig from "../../assets/SmartAcademy.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function SmartAcademy() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-transparent flex justify-between items-center w-screen h-screen sm:px-36 px-7 py-7">
      <div className="flex flex-col items-center sm:w-1/2 w-1/3 mr-auto">
        <h1
          data-aos="zoom-out-down"
          data-aos-duration="2500"
          className="text-gray1 sm:text-2xl text-base text-opacity-70 text-center sm:mb-12 h-36 w-full sm:ml-10"
        >
          SMART ACADEMY!
        </h1>
        <div className="ml-10" data-aos="fade-left" data-aos-duration="3000">
          <Link href="">
            <button className="btn-6 btn-62">SAIBA MAIS</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={logoBig} alt="logoBig" width={400} height={540} />
      </div>
    </div>
  );
}
