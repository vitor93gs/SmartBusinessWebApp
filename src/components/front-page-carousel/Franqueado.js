import Image from "next/dist/client/image";
import texto from "../../assets/Banner1_texto.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Typewriter from "typewriter-effect";

export function Franqueado() {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen pl-1/6 py-7">
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
                .typeString("<strong>SEJA UM</strong>")
                .typeString(
                  ' <strong style="color:#D6A84C"> FRANQUEADO!</strong>'
                )
                .start();
            }}
          />
        </h1>

        <div className="mt-2 z-10" data-aos="fade-up" data-aos-duration="2000">
          <div className="h-40 text-4xl font-thin tracking-wider text-white2 text-left w-full">
            <h1 className="mb-2">A SMARTBUSINESS TEM A</h1>
            <h1 className="mb-2">OPORTUNIDADE DE</h1>
            <h1 className="mb-2 ">
              NEGÓCIO CERTO PARA VOCÊ VENHA
              <span className="text-golden pl-3">TRABALHAR CONOSCO!</span>
            </h1>
          </div>
        </div>
        <h1 className="text-gray1 text-lg mt-5 font-thin h-18">
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1800)
                .typeString("NOSSO SISTEMA DE FRANQUIA OFERECE<br/>")
                .typeString("TREINAMENTO E FERRAMENTAS PARA O<br/>")
                .typeString("SUCESSO DO SEU NEGÓCIO")
                .start();
            }}
          />
        </h1>
        <div
          className="mt-5 text-2xl"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
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
          <div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela lg:bg-fumaca3 " />
        </Transition>
      </div>
    </div>
  );
}
