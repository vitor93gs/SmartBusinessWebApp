import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FrontPage } from "./front-page-tabs/FrontPage";
import { Franqueado, Who } from "./front-page-tabs/Franqueado";
import { FreeCourse } from "./front-page-tabs/FreeCourse";
import { SmartAcademy } from "./front-page-tabs/SmartAcademy";
import { SmatBusiness } from "./front-page-tabs/SmartBusiness";
import { News } from "./front-page-tabs/News";
import { FollowUs } from "./front-page-tabs/FollowUs";
import { useEffect } from "react";

export default function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isDisabled, setDisabled] = useState(false);

  const banners = [1, 2, 3, 4, 5, 6, 7];

  // useEffect(() => {
  //   var screenChange = setInterval(() => {
  //     selectedIndex === 7
  //       ? setSelectedIndex(1)
  //       : setSelectedIndex(selectedIndex + 1);
  //   }, 7500);
  //   console.log(selectedIndex);
  //   return () => clearInterval(screenChange);
  // });

  function handleAnt() {
    setDisabled(true);
    let state = selectedIndex;
    setSelectedIndex(0);

    setTimeout(() => {
      state === 1 ? setSelectedIndex(7) : setSelectedIndex(state - 1);
    }, 300);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  }

  function handleProx() {
    setDisabled(true);
    let state = selectedIndex;
    setSelectedIndex(0);

    setTimeout(() => {
      state === 7 ? setSelectedIndex(1) : setSelectedIndex(state + 1);
    }, 300);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  }

  function handlePage() {
    return (
      <div>
        <Transition
          show={selectedIndex === 1}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <FrontPage />
        </Transition>

        <Transition
          show={selectedIndex === 2}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <Franqueado />
        </Transition>

        <Transition
          show={selectedIndex === 3}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="bg-theme2 text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
            <FreeCourse />
          </h1>
        </Transition>

        <Transition
          show={selectedIndex === 4}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="bg-theme2 text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
            <SmartAcademy />
          </h1>
        </Transition>

        <Transition
          show={selectedIndex === 5}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="bg-theme2 text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
            <SmatBusiness />
          </h1>
        </Transition>

        <Transition
          show={selectedIndex === 6}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="bg-theme2 text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
            <News />
          </h1>
        </Transition>
        <Transition
          show={selectedIndex === 7}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="bg-theme2 text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
            <FollowUs />
          </h1>
        </Transition>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden">
      {handlePage()}
      <div className=" text-golden px-4 py-3 flex items-center sm:px-6 absolute bottom-5 w-full ">
        <div className="flex-1 flex sm:hidden">
          <button
            onClick={handleAnt}
            className="relative inline-flex items-center px-4 py-2 text-xs font-medium rounded-md"
            disabled={isDisabled}
          >
            ANTERIOR
          </button>
          <button
            onClick={handleProx}
            className="ml-3 relative inline-flex items-center px-4 py-2 text-xs font-medium rounded-md"
            disabled={isDisabled}
          >
            PRÓXIMO
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center w-screen">
          <nav
            className="relative z-0 inline-flex shadow-sm justify-around"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-8 py-2  text-xs font-medium"
              onClick={handleAnt}
              disabled={isDisabled}
            >
              <span>ANTERIOR</span>
            </button>
            <div className="flex justify-center items-center space-x-10">
              {banners.map((current, index) => {
                return (
                  <div
                    className={`${
                      selectedIndex === current ? "bg-gifTab" : "bg-bolinha"
                    } h-5 w-5 bg-center bg-contain`}
                    key={index}
                  ></div>
                );
              })}
            </div>

            <button
              className="relative inline-flex items-center px-8 py-2  text-xs font-medium"
              onClick={handleProx}
              disabled={isDisabled}
            >
              <span>PROXIMO</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
