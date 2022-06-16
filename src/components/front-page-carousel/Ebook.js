import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import AOS from "aos";
import "aos/dist/aos.css";



export function Ebook() {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen px-36 py-7">
      <div className="flex flex-col items-center w-1/2 text-left mb-10">
        <h1 className="text-gray1 w-full text-opacity-70 mt-1/3 text-2xl mb-12 ml-20 2xl:ml-48">
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("BAIXE NOSSOS EBOOKS!")
                .start();
            }}
          />
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("Criptoeconomia ( Conceitos e Curiosidades )")
                .start();
            }}
          />
        </h1>
        <div
          className="ml-10 visible"
          data-aos="zoom-out-down"
          data-aos-duration="3000"
        >
          <Link href="">
            <div className="div-neon opacity-60 rounded-sm text-center text-sm z-50">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button>SAIBA MAIS</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <div className="absolute flex justify-center bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-livro" />
        <Transition
          show={showLuz}
          enter="transition-all ease-in duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-fumaca1 " />
        </Transition>
      </div>
    </div>
  );
}
