import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function DropDown(props) {
  // header="SMART ACADEMY"
  // info1="PROSPERA"
  // info2="SUPERA"
  // info3="EMPODERA"
  // info4="CRYPTOMIND"
  // info5=""
  // button="/smart-academy"
  const info = [
    props.info1,
    props.info2,
    props.info3,
    props.info4,
    props.info5,
  ];

  return (
    <div className="dropdown text-left text-xs text-gray1">
      <Link href={props.button}>
        <button className="dropbtn no-underline text-gray1 transition  delay-150 hover:text-golden font-thin h-14 mb-1">
          {props.header}
        </button>
      </Link>
      <div className="dropdown-content origin-top-right shadow-lg bg-theme2 ring-black ring-opacity-5 focus:outline-none flex flex-col pt-2">
        <ul>
          {info.map((info, key) => {
            return info === "" ? null : (
              <li key={key}>
                <Link href={`${props.button}/${info}`}>
                  <button className="no-underline text-gray1 text-left transition duration-300 delay-100 hover:text-golden block px-4 py-2">
                    {info}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
