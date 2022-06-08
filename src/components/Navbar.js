import Image from "next/dist/client/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";
import lupa1 from "../assets/lupa_1.png";
import lupa2 from "../assets/lupa_2.png";
import DropDown from "./Dropdown";
import Burguer from "./Burguer";

export function Navbar() {
  const [isMouseOver, setMousover] = useState(false);

  function mouseOverHandler() {
    isMouseOver ? setMousover(false) : setMousover(true);
  }

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-around text-xs font-thin  items-center h-14 mt-8 bg-opacity-0 z-10">
      <div className="absolute left-0 sm:static">
        <Image src={logo} alt="Logo smart Business" height="41" width="150" />
      </div>

      <div className="flex-1 flex sm:hidden absolute w-12 h-12 right-10">
        <Burguer />
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center w-screen">
        <ul className="flex space-x-12 mx-10 ">
          <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60 ">
            <Link href="/">
              <button className="no-underline  text-gray1 transition-all  delay-150 hover:text-golden h-14 mb-1">
                HOME
              </button>
            </Link>
          </li>

          <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60">
            <Link href="/">
              <button className="no-underline text-gray1 transition  delay-150 hover:text-golden h-14 mb-1">
                COMUNIDADE
              </button>
            </Link>
          </li>
          <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60 ">
            <DropDown
              header="SMART ACADEMY"
              info1="PROSPERA"
              info2="SUPERA"
              info3="EMPODERA"
              info4="CRYPTOMIND"
              info5=""
              info6=""
              button="/smart-academy"
            />
          </li>
          <li className="after:block after:absolute after:transition-all after:ml-px after:mt-0 after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-px after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60">
            <DropDown
              header="NOSSAS EMPRESAS"
              info1="PROJETO CRD"
              info2="EXCHANGE"
              info3="COMUNIDADE MULHERES INVESTIDORAS"
              info4="SMART FRANCHISING"
              info5="SMART ACADEMY"
              info6="SMART DUCK"
              button="/nossas-empresas"
            />
          </li>
          <li className="no-underline text-golden transition  delay-150 hover:text-gray1 ">
            <Link href="">
              <button className="h-14 mb-1">LOGIN</button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:w-custom w-8 sm:mr-10 absolute sm:static right-1/3">
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
