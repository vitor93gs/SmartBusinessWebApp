import Image from "next/dist/client/image";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between font-thin  items-center  h-32 ml-4 mr-4 bg-opacity-0">
      <Image src={logo} alt="Logo smart Business" height="75px" width="222px" />
      <ul className="flex space-x-20">
        <li>
          <a
            className="no-underline  text-gray1 transition  delay-150 hover:text-golden "
            href=""
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className="no-underline text-gray1 transition  delay-150 hover:text-golden "
            href=""
          >
            BLOG
          </a>
        </li>
        <li>
          <Dropdown
            header="SMART ACADEMY"
            info1="PROSPERA"
            info2="SUPERA"
            info3="EMPODERA"
            info4="CRYPTOMIND"
            info5=""
          />
        </li>
        <li>
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
            className="no-underline text-gray1 transition  delay-150 hover:text-golden "
            href=""
          >
            LOGIN
          </a>
        </li>
      </ul>
    </div>
  );
}
