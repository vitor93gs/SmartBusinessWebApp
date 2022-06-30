import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Ebook } from "./front-page-carousel/Ebook";
import { FollowUs } from "./front-page-carousel/FollowUs";
import { Franqueado } from "./front-page-carousel/Franqueado";
import { FreeCourse } from "./front-page-carousel/FreeCourse";
import { News } from "./front-page-carousel/News";
import { SmartBusiness } from "./front-page-carousel/SmartBusiness";
import { SmartAcademy } from "./front-page-carousel/SmartAcademy";
import { MobilePage } from "./front-page-carousel/MobilePage";
import { MobilePageFollow } from "./front-page-carousel/MobilePageFollow";

import personagem from "../assets/personagem.png";
import livro from "../assets/book_-_livro.png";
import celular from "../assets/celular.png";
import franquia from "../assets/franquia.png";
import news from "../assets/news.png";
import academy from "../assets/SmartAcademy.png";
import business from "../assets/business.png";

export default function Tabs2() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  const [selected, setSelected] = useState(0);

  return (
    <Carousel
      emulateTouch={true}
      useKeyboardArrows={true}
      showArrows={true}
      showThumbs={false}
      transitionTime={2000}
      swipeScrollTolerance={150}
      autoPlay={false}
      interval={6500}
      stopOnHover={false}
      showStatus={false}
      renderArrowNext={(clickHandler) => {
        const defStyle = {
          position: "absolute",
          zIndex: "15",
          bottom: "3%",
          color: "#91a3ad",
          fontSize: "0.8rem",
        };
        const style = { ...defStyle, bottom: "8%" };
        return (
          <button
            style={windowSize.width > 768 ? defStyle : style}
            onClick={clickHandler}
            className="sm:right-1/4 right-10"
          >
            PRÓXIMO
          </button>
        );
      }}
      renderArrowPrev={(clickHandler) => {
        const defStyle = {
          zIndex: "15",
          position: "absolute",
          bottom: "3%",
          color: "#91a3ad",
          fontSize: "0.8rem",
        };
        const style = { ...defStyle, bottom: "8%" };
        return (
          <button
            style={windowSize.width > 768 ? defStyle : style}
            onClick={clickHandler}
            className="sm:left-1/4 left-10"
          >
            ANTERIOR
          </button>
        );
      }}
      renderIndicator={(onClickHandler, isSelected, index) => {
        const defStyle = {
          marginLeft: "15px",
          height: "20px",
          width: "20px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          marginBottom: "1em",
        };
        const style = isSelected
          ? { ...defStyle, backgroundImage: "url('/DualRing.svg')" }
          : { ...defStyle, backgroundImage: "url('/bolinha.png')" };
        return (
          <button
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={index}
            className="invisible sm:visible"
          ></button>
        );
      }}
      infiniteLoop={true}
      onChange={(current) => {
        setSelected(69);
        setTimeout(() => {
          setSelected(current);
        }, 1300);
      }}
      className="max-w-tela inline-flex min-w-0"
    >
      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg1 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 0}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem1 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <Ebook />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile1 bg-cover bg-center bg-no-repeat">
            <MobilePage image={livro} text="BAIXE NOSSOS EBOOKS!" />
          </div>
        )}
      </div>

      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg2 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 1}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <FreeCourse />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile3 bg-cover bg-center bg-no-repeat">
            <MobilePage image={personagem} text="CURSOS GRATUITOS" />
          </div>
        )}
      </div>
      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg2 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 2}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <Franqueado />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile2 bg-cover bg-center bg-no-repeat">
            <MobilePage image={franquia} text="SEJA NOSSO FRANQUEADO" />
          </div>
        )}
      </div>
      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg2 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 3}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <SmartAcademy />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile5 bg-cover bg-center bg-no-repeat">
            <MobilePage image={business} text="SMART BUSINESS" />
          </div>
        )}
      </div>
      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg2 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 4}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <News />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile4 bg-cover bg-center bg-no-repeat">
            <MobilePage image={news} text="NOVIDADES AQUI" />
          </div>
        )}
      </div>
      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg2 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 5}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <SmartBusiness />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile6 bg-cover bg-center bg-no-repeat">
            <MobilePage image={academy} text="SMART ACADEMY" />
          </div>
        )}
      </div>
      <div>
        {windowSize.width > 768 ? (
          <div className="bg-bg2 min-w-0 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
            <Transition
              show={selected === 6}
              enter="transition-all ease-in duration-2000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all ease-out duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
                <FollowUs />
              </div>
            </Transition>
          </div>
        ) : (
          <div className="h-screen w-screen pt-24 bg-mobile7 bg-cover bg-center bg-no-repeat">
            <MobilePageFollow
              image={celular}
              text="SIGA NOSSAS REDES SOCIAIS"
            />
          </div>
        )}
      </div>
    </Carousel>
  );
}
