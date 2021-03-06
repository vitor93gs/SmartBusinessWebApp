import Typewriter from "typewriter-effect";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function SmartBusiness() {
  const [showLuz, setShowLuz] = useState(false);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);
  return (
    <div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen px-36 py-7">
      <div>
        <div className="absolute bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-logo" />
        <Transition
          show={showLuz}
          enter="transition-all ease-in duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela lg:bg-fumaca7 " />
        </Transition>
      </div>
      <div className=" relative xl:mr-1/6">
        <h1 className="text-white2 text-right text-4xl h-12">
          <Typewriter
            options={{
              delay: 30,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("<strong>SMART BUSINESS!</strong>")
                .start();
            }}
          />
        </h1>
        <div className="h-40 text-4xl font-thin tracking-wider text-white2 text-right after:-right-0.5 after:absolute after:w-0.5 after:bg-golden after:bg-opacity-100 after:h-44 after:mt-12 after:top-0">
          <h1 className="pr-3 mb-2">AS CRIPTOMOEDAS SÃO</h1>
          <h1 className="text-preto mb-2">
            <span className="bg-golden pl-1 pr-3 font-medium">
              O FUTURO DO DINHEIRO,
            </span>
          </h1>
          <h1 className="pr-3 mb-2">
            PREPARE-SE PARA A <br />
            ERA DIGITAL!
          </h1>
        </div>
        <h1 className="text-gray1 w-full text-right text-lg mb-5 mt-5 font-thin h-14">
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
          className="absolute right-0"
          data-aos="zoom-out-down"
          data-aos-duration="3000"
        >
          <Link href="">
            <button className="btn-5 btn-52">SAIBA MAIS!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
