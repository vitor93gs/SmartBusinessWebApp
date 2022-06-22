import Image from "next/dist/client/image";
import botao from "../../assets/botaoWhats.svg";
import texto from "../../assets/Banner1_texto.png";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function FollowUs(props) {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div className="max-w-tela text-gray1 text-opacity-70 text-3xl text-center flex justify-around items-center pl-1/5 h-screen">
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
        <div className="mt-5 h-10 w-10">
          <ul className="ulSocial opacity-80">
            <li className="liSocial">
              <a href="#" className="aSocial">
                <i className="fab" aria-hidden="true">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </i>
              </a>
            </li>
            <li className="liSocial">
              <a href="#" className="aSocial">
                <i className="fab" aria-hidden="true">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" ml-24 w-1/2">
        <div className="absolute flex justify-center bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-celular" />

        <Transition
          show={showLuz}
          enter="transition-all ease-in duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-fumaca5 " />
        </Transition>
      </div>
    </div>
  );
}
