import Image from "next/dist/client/image";
import logoBig from "../../assets/book_-_livro.png";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Ebook() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-transparent flex justify-between items-center max-w-tela w-screen h-screen sm:px-36 px-7 py-7">
      <div className="flex flex-col items-center sm:w-1/2 w-1/3 text-left sm:mt-20 mr-auto">
        <h1 className="text-gray1 sm:text-2xl text-base text-opacity-70 text-left sm:mb-12 h-36 w-full sm:ml-10">
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
          className="ml-10"
          data-aos="zoom-out-down"
          data-aos-duration="3000"
        >
          <Link href="">
            <div className="div-neon opacity-60 rounded-sm text-center text-sm">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button>SAIBA MAIS</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 sm:mt-40">
        <Image src={logoBig} alt="logoBig" width={500} height={675} />
      </div>
    </div>
  );
}
