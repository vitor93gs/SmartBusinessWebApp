import Image from "next/dist/client/image";
import texto from "../../assets/Banner1_texto.png";
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
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen pl-1/5 py-7">
      <div className="flex flex-col items-left w-1/2 text-left mb-10 justify-start">
        <h1 className="text-white2 w-full text-4xl">
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("<strong>BAIXE NOSSO</strong>")
                .typeString(' <strong style="color:#D6A84C">EBOOK!</strong>')
                .start();
            }}
          />
        </h1>
        <div
          className="mt-6 w-imagemTexto z-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="h-40 text-4xl font-thin tracking-wider text-white2 text-left before:-left-0.5 before:absolute before:w-0.5 before:bg-golden before:bg-opacity-100 before:h-44 before:top-0">
            <h1 className="pl-3 mb-2">AS CRIPTOMOEDAS SÃO</h1>
            <h1 className="text-preto mb-2">
              <span className="bg-golden pr-1 pl-3 font-medium">
                O FUTURO DO DINHEIRO,
              </span>
            </h1>
            <h1 className="pl-3 mb-2">
              PREPARE-SE PARA A <br />
              ERA DIGITAL!
            </h1>
          </div>
        </div>
        <h1 className="text-gray1 w-full text-lg mt-5 font-thin h-14">
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1800)
                .typeString("APRENDA AGORA CONCEITOS E<br/>")
                .typeString("CURIOSIDADES DA CRIPTOECONOMIA")
                .start();
            }}
          />
        </h1>
        <div className="mt-6" data-aos="slide-up" data-aos-duration="2000">
          <Link href="">
            <div className="div-neon opacity-60 text-center m-0 text-sm z-50">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button>BAIXAR AGORA</button>
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
          <div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela lg:bg-fumaca1 " />
        </Transition>
      </div>
    </div>
  );
}
