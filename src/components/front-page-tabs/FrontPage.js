import Image from "next/dist/client/image";
import logoBig from "../../assets/logoBig.png";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export function FrontPage() {
  return (
    <div className="bg-background bg-center bg-no-repeat bg-cover flex justify-center items-center h-screen px-36">
      <div className="flex flex-col items-center justify-between w-1/2 text-left mr-96">
        <h1 className="text-gray1 text-2xl text-opacity-70 text-left mb-12 h-36 w-1/2">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(40)
                .typeString("BAIXE NOSSOS EBOOKS!")
                .start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(40)
                .typeString("Criptoeconomia ( Conceitos e Curiosidades )")
                .start();
            }}
          />
        </h1>

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
  );
}
