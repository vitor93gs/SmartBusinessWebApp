import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function FollowUs(props) {
  const [showLuz, setShowLuz] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setShowLuz(true);
    }, 2000);
  }, []);

  return (
    <div className="max-w-tela text-gray1 text-opacity-70 text-3xl text-center flex justify-around items-center pr-36 pl-36 h-screen">
      <div data-aos="fade-up" data-aos-duration="3000" className="w-1/2">
        <span>SIGA NOSSAS REDES SOCIAIS</span>
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
