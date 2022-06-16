import Image from "next/dist/client/image";
import logoBig from "../../assets/personagem.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function FreeCourse() {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);
  
  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen sm:px-36 px-7 py-7">
      <div className="w-1/2 mr-72">
        <Image src={logoBig} alt="logoBig" width={450} height={482} />
        <Transition
          show={showLuz}
          enter="transition-all ease-in duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute bottom-0 left-0 bg-fumaca2 bg-no-repeat  bg-cover h-screen w-screen bg-center pointer-events-none"></div>
        </Transition>
      </div>
      <div className="flex flex-col items-center sm:w-1/2 w-1/3 text-left  mr-auto">
        <h1
          data-aos="zoom-in"
          data-aos-duration="2500"
          className="text-gray1 sm:text-2xl text-base text-opacity-70 text-center sm:mb-12 h-36 w-full sm:ml-10"
        >
          CURSO GRATUITO!
        </h1>

        <div className="ml-10" data-aos="fade-up" data-aos-duration="3000">
          <Link href="">
            <button className="btn-1">SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
