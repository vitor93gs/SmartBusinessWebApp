import { useState } from "react";
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

export default function Tabs2() {
  const [selected, setSelected] = useState(0);

  return (
    <Carousel
      emulateTouch={true}
      useKeyboardArrows={true}
      showArrows={false}
      showThumbs={false}
      infiniteLoop={true}
      onChange={(current) => setSelected(current)}
    >
      <div>
        <div className="bg-bg1 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 0}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" bg-fumaca1 h-screen w-screen bg-center sm:bg-contain bg-no-repeat">
              <div className="sm:bg-elem1 bg-cover bg-no-repeat h-screen w-screen">
                <Ebook />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div className="bg-bg2 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 1}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" absolute bg-fumaca2 h-screen w-screen bg-center">
              <div className="sm:bg-elem2 bg-cover bg-no-repeat h-screen w-screen">
                <Franqueado />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div className="bg-bg3 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 2}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" absolute bg-fumaca3 h-screen w-screen bg-center">
              <div className="bg-elem3 bg-cover bg-no-repeat sm:bg-center h-screen w-screen">
                <FreeCourse />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div className="bg-bg4 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 3}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" absolute bg-fumaca4 h-screen w-screen bg-center">
              <div className="sm:bg-elem4 bg-cover bg-no-repeat h-screen w-screen">
                <News />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div className="bg-bg5 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 4}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" absolute bg-fumaca5 h-screen w-screen bg-center">
              <div className="sm:bg-elem5 bg-cover bg-no-repeat h-screen w-screen">
                <SmartBusiness />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div className="bg-bg6 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 5}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" absolute bg-fumaca6 h-screen w-screen bg-center">
              <div className="sm:bg-elem6 bg-cover bg-no-repeat h-screen w-screen">
                <SmartAcademy />
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div>
        <div className="bg-bg7 h-screen w-screen bg-no-repeat bg-cover bg-center">
          <Transition
            show={selected === 6}
            enter="transition-all ease-in duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className=" absolute bg-fumaca7 h-screen w-screen bg-center">
              <div className="sm:bg-elem7 bg-cover bg-no-repeat h-screen w-screen">
                <FollowUs />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Carousel>
  );
}
