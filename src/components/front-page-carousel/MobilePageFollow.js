import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function MobilePageFollow(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`h-screen w-screen pt-24 bg-${props.bg}`}>
      <div className="w-screen justify-center flex">
        <div className="w-64">
          <Image src={props.image} alt="logoBig" layout="intrinsic" />
        </div>
      </div>

      <h1 className="text-white2 text-2xl text-opacity-90 text-center my-6">
        {props.text}
      </h1>
      <div className="flex justify-center">
        <div className="mt-5">
          <ul className="ulSocial opacity-80">
            <li className="liSocial">
              <a
                href="https://web.whatsapp.com/send?phone=5547996236478&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Smart%20Business"
                target="_blank"
                rel="noreferrer"
                className="aSocial"
              >
                <i className="fab" aria-hidden="true">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </i>
              </a>
            </li>
            <li className="liSocial">
              <a
                href="https://www.instagram.com/smartbusiness.oficial/"
                target="_blank"
                rel="noreferrer"
                className="aSocial"
              >
                <i className="fab" aria-hidden="true">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
