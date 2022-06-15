import Image from "next/image";
import celular from "../../assets/celular.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function FollowUs(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-tela text-gray1 text-opacity-70 text-3xl text-center flex justify-around items-center pr-36 pl-36 h-screen">
      <div data-aos="fade-up" data-aos-duration="3000">
        <span>SIGA NOSSAS REDES SOCIAIS</span>
      </div>
      <div className="sm:mt-52 m-0">
        <Image src={celular} alt="celular" width={697} height={985} />
      </div>
    </div>
  );
}
