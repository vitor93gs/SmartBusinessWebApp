import Image from "next/dist/client/image";
import logoBig from "../../assets/logoBig.png";
import { Transition } from "@headlessui/react";
import Typewriter from "typewriter-effect";

export function FrontPage() {
  return (
    <div className="bg-background bg-center bg-no-repeat bg-cover flex justify-center items-center h-screen pr-36 pl-36">
      <Image src={logoBig} alt="Logo smart Business" width="940" height="620" />
      <div className="flex flex-col items-center justify-between w-1/2 text-left">
        <h1 className="text-gray1 text-4xl text-opacity-70 text-right mb-12">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("BAIXE NOSSOS EBOOKS!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Criptoeconomia ( Conceitos e Curiosidades )")
                .start();
            }}
          />
        </h1>

        <Transition
          appear={true}
          show={true}
          enter="transition ease-out duration-1000"
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 scale-90"
          className="w-2/5"
        >
          <button className=" text-golden opacity-75  border-2   shadow-golden border-golden ">
            SAIBA MAIS
          </button>
        </Transition>
      </div>
    </div>
  );
}
