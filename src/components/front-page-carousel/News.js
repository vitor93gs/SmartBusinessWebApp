import Image from "next/dist/client/image";
import texto from "../../assets/Banner1_texto.png";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function News() {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen pl-1/6 py-7">
      {/* <div className="flex flex-col items-center w-1/2 text-left  mr-auto">
        <h1
          data-aos="fade-left"
          data-aos-duration="2500"
          className="text-gray1 text-2xl text-opacity-70 text-center mb-12 h-36 w-fullml-10"
        >
          FIQUE POR DENTRO DAS NOVIDADES!
        </h1>
        <div className="ml-10" data-aos="zoom-in" data-aos-duration="3000">
          <Link href="">
            <button className="btn-4">SAIBA MAIS</button>
          </Link>
        </div>
      </div> */}
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
          <Image src={texto} alt="texto do banner" />
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
        <div
          className="mt-5 text-2xl"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <Link href="">
            <button className="btn-4">SAIBA MAIS</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2 text-left  mr-auto">
        <div className="absolute bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-megafone" />
        <Transition
          show={showLuz}
          enter="transition-all ease-in duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute invisible sm:visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-fumaca6 " />
        </Transition>
      </div>
    </div>
  );
}
