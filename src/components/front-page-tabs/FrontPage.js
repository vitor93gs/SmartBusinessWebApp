import Image from "next/dist/client/image";
import logoBig from "../../assets/logoBig.png";
import Typewriter from "typewriter-effect";

export function FrontPage() {
  return (
    <div className="bg-background bg-center bg-no-repeat bg-cover flex justify-center items-center h-screen pr-36 pl-36">
      <Image src={logoBig} alt="Logo smart Business" width="940" height="620" />
      <div className="flex flex-col items-center justify-between w-1/2 text-left">
        <h1 className="text-gray1 text-4xl text-opacity-70 text-right mb-12 h-36">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(40)
                .typeString("BAIXE NOSSOS EBOOKS!")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Criptoeconomia ( Conceitos e Curiosidades )")
                .pauseFor(1500)
                .start();
            }}
            options={{ loop: true }}
          />
        </h1>

        <a className="div-neon opacity-60 rounded-sm text-center text-sm">
          <span className="child1"></span>
          <span></span>
          <span></span>
          <span></span>
          SAIBA MAIS
        </a>
      </div>
    </div>
  );
}
