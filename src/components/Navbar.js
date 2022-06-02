import Image from "next/dist/client/image";
import { useState } from "react";
import logo from "../assets/logo.png";
import lupa1 from "../assets/lupa_1.png";
import lupa2 from "../assets/lupa_2.png";
import Dropdown from "./Dropdown";

export function Navbar() {
  const [isMouseOver, setMousover] = useState(false);

  function mouseOverHandler() {
    isMouseOver ? setMousover(false) : setMousover(true);
  }

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between font-thin  items-center h-14 mt-8 ml-4 mr-4 bg-opacity-0 text-op">
      <Image src={logo} alt="Logo smart Business" height="75px" width="275px" />

      <ul className="flex space-x-20 ">
        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-6 after:hover:bg-golden after:hover:bg-opacity-60 after:hover:h-0.5 ">
          <a
            className="no-underline  text-gray1 transition-all  delay-150 hover:text-golden "
            href=""
          >
            HOME
          </a>
        </li>

        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-6 after:hover:bg-golden after:hover:bg-opacity-60 after:hover:h-0.5 ">
          <a
            className="no-underline text-gray1 transition  delay-150 hover:text-golden "
            href=""
          >
            BLOG
          </a>
        </li>
        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-24 after:hover:bg-golden after:hover:bg-opacity-60 after:hover:h-0.5 ">
          <Dropdown
            header="SMART ACADEMY"
            info1="PROSPERA"
            info2="SUPERA"
            info3="EMPODERA"
            info4="CRYPTOMIND"
            info5=""
          />
        </li>
        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-28 after:hover:bg-golden after:hover:bg-opacity-60 after:hover:h-0.5 ">
          <Dropdown
            header="NOSSAS EMPRESAS"
            info1="Projeto CRD"
            info2="EXCHANGE"
            info3="Projeto MULHERES INVESTIDORAS"
            info4="Smart Franchising"
            info5="Smart Academy"
          />
        </li>
        <li>
          <a
            className="no-underline text-golden transition  delay-150 hover:text-gray1 pr-8"
            href=""
          >
            LOGIN
          </a>
        </li>
      </ul>
      <div className="mr-40">
        <Image
          src={isMouseOver ? lupa2 : lupa1}
          alt="Logo smart Business"
          height="35px"
          width="35px"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOverHandler}
        />
      </div>
    </div>
  );
}
