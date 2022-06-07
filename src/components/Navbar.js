import Image from "next/dist/client/image";
import { useState } from "react";
import logo from "../assets/logo.png";
import lupa1 from "../assets/lupa_1.png";
import lupa2 from "../assets/lupa_2.png";
import DropdownOnHover from "./DropdownOnHover";

export function Navbar() {
  const [isMouseOver, setMousover] = useState(false);

  function mouseOverHandler() {
    isMouseOver ? setMousover(false) : setMousover(true);
  }

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between text-xs font-thin  items-center h-14 mt-8 ml-4 mr-4 bg-opacity-0 z-10">
      <Image src={logo} alt="Logo smart Business" height="75" width="275" />

      <ul className="flex space-x-8 ">
        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-6 after:hover:bg-golden after:hover:bg-opacity-60 pr-20 ">
          <a
            className="no-underline  text-gray1 transition-all  delay-150 hover:text-golden "
            href="/"
          >
            HOME
          </a>
        </li>

        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-20 after:hover:bg-golden after:hover:bg-opacity-60 pr-20">
          <a href="/">
            <span className="no-underline text-gray1 transition  delay-150 hover:text-golden ">
              COMUNIDADE
            </span>
          </a>
        </li>
        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-24 after:hover:bg-golden after:hover:bg-opacity-60 pr-32">
          <DropdownOnHover
            header="SMART ACADEMY"
            info1="PROSPERA"
            info2="SUPERA"
            info3="EMPODERA"
            info4="CRYPTOMIND"
            info5=""
            button="/smart-academy"
          />
        </li>
        <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-28 after:hover:bg-golden after:hover:bg-opacity-60 pr-32 ">
          <DropdownOnHover
            header="NOSSAS EMPRESAS"
            info1="PROJETO CRD"
            info2="EXCHANGE"
            info3="COMUNIDADE MULHERES INVESTIDORAS"
            info4="SMART FRANCHISING"
            info5="SMART ACADEMY"
            button="/nossas-empresas"
          />
        </li>
        <li>
          <a
            className="no-underline text-golden transition  delay-150 hover:text-gray1 pr-32"
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
          height="35"
          width="35"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOverHandler}
        />
      </div>
    </div>
  );
}
