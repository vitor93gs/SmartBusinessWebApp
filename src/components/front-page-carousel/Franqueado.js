import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function Franqueado() {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen px-36 py-7">
      <div className="flex flex-col items-center w-1/2 text-left mr-auto">
        <div data-aos="zoom-in-left" data-aos-duration="2500">
          <h1
            data-aos="fade-up"
            data-aos-duration="2500"
            className="text-gray1 text-2xl text-opacity-70 text-center mb-12 h-36 w-full ml-10"
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
      <div className="w-1/2 mr-28 mb-24">
        <div className="absolute flex justify-center bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-franquia" />
        <Transition
          show={showLuz}
          enter="transition-all ease-in duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-fumaca3 " />
        </Transition>
      </div>
    </div>
  );
}
