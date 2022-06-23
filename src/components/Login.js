import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Login() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-fundo h-screen sm:items-center z-0 grid grid-cols-2 sm:flex sm:justify-center bg-no-repeat bg-center bg-cover sm:pt-o sm:pt-20 justify-items-center items-end space-y-6 sm:space-y-0">
      <div className="sm:h-login w-40 h-40 sm:w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in sm:bg-exchangeLoginCinza sm:hover:bg-exchangeLogin bg-exchangeSLogin">
        <Link href={"https://app.smartbusinessgroup.io/#/"}>
          <button className="h-full w-full"></button>
        </Link>
      </div>
      <div className="sm:h-login w-40 h-40 sm:w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in sm:bg-techLoginCinza sm:hover:bg-techLogin bg-techSLogin">
        <Link href={"https://sistema.smartbusinessgroup.io/users/login"}>
          <button className="h-full w-full"></button>
        </Link>
      </div>
      <div className="sm:h-login w-40 h-40 sm:w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in sm:bg-academyLoginCinza sm:hover:bg-academyLogin bg-academySLogin self-start sm:self-center">
        <Link href={"https://www.smartbusinessgroup.io/smart-academy-2/"}>
          <button className="h-full w-full"></button>
        </Link>
      </div>
      <div className="sm:h-login w-40 h-40 sm:w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in sm:bg-bankLoginCinza sm:hover:bg-bankLogin bg-bankSLogin sm:self-center self-start">
        <Link href={"/"}>
          <button className="h-full w-full"></button>
        </Link>
      </div>
    </div>
  );
}
