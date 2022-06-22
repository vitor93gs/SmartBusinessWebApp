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
      <div className="w-screen justify-center flex">
        <div className="w-64">
          <Image src={props.image} alt="logoBig" layout="intrinsic" />
        </div>
      </div>

      <h1 className="text-gray1 text-base text-opacity-70 text-center my-6">
        {props.text}
      </h1>
      <div className="flex justify-center">
        <div data-aos="zoom-out-up" data-aos-duration="3000">
          <Link href="">
            <div className="div-neon opacity-60 rounded-sm text-center text-sm z-50">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button>SAIBA MAIS</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
