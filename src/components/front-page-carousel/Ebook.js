import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import AOS from "aos";
import "aos/dist/aos.css";

import logoBig from "../../assets/book_-_livro.png";
import luz from "../../assets/luz_livro.png";

export function Ebook() {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="bg-transparent flex justify-around items-center max-w-tela w-screen h-screen sm:px-36 px-7 py-7 z-0">
        <div className="flex flex-col items-center sm:w-1/2 w-1/3 text-left sm:mt-20">
          <h1 className="text-gray1 sm:text-2xl text-opacity-70 sm:mb-12 h-36 w-full sm:ml-20 2xl:ml-48">
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
            className="ml-10 invisible sm:visible"
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
        <div className="sm:w-1/2 w-1/3 ">
          <div className="absolute bottom-0 left-0 bg-no-repeat h-screen w-screen bg-cover sm:bg-contain bg-center pointer-events-none max-w-tela sm:bg-livro">
            <div className="mt-48 sm:invisible ml-1/3 w-3/4 mr-0">
              <Image src={logoBig} alt="celular" width={215} height={285} />
            </div>
          </div>
          <Transition
            show={showLuz}
            enter="transition-all ease-in duration-2000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all ease-out duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute invisible sm:visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-fumaca1 "></div>
          </Transition>
        </div>
      </div>
      <div
        className="ml-10 sm:invisible absolute bottom-24 left-0"
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
  );
}
