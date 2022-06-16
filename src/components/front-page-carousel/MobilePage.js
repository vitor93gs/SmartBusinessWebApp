import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function MobilePage(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen w-screen pt-24">
      <Image src={props.image} alt="logoBig" width={350} height={450} />

      <h1 className="text-gray1 text-base text-opacity-70 text-center my-16">
        {props.text}
      </h1>
      <div className="flex justify-center">
        <div data-aos="fade-up" data-aos-duration="3000">
          <Link href="">
            <button className="btn-1">SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
