import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FrontPage } from "../pages/FrontPage";
import { Who } from "../pages/Who";

export default function Tabs2() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isDisabled, setDisabled] = useState(false);

  const banners = [1, 2, 3, 4, 5, 6];

  function handleAnt() {
    setDisabled(true);
    let state = selectedIndex;
    setSelectedIndex(0);

    setTimeout(() => {
      state === 0 ? setSelectedIndex(6) : setSelectedIndex(state - 1);
    }, 980);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  }

  function handleProx() {
    setDisabled(true);
    let state = selectedIndex;
    setSelectedIndex(0);

    setTimeout(() => {
      state === 6 ? setSelectedIndex(1) : setSelectedIndex(state + 1);
    }, 700);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  }

  function handlePage() {
    return (
      <div>
        <Transition
          show={selectedIndex === 1}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-700"
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
          leave="transition ease-in duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <Who />
        </Transition>

        <Transition
          show={selectedIndex === 3}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="text-golden"> content 3</h1>
        </Transition>

        <Transition
          show={selectedIndex === 4}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="text-golden">content 4</h1>
        </Transition>

        <Transition
          show={selectedIndex === 5}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="text-golden">content 5</h1>
        </Transition>

        <Transition
          show={selectedIndex === 6}
          enter="transition ease-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-100 scale-90"
        >
          <h1 className="text-golden">content 6</h1>
        </Transition>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden">
      {handlePage()}
      <div className=" text-golden px-4 py-3 flex items-center sm:px-6 absolute bottom-5 w-full ">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={handleAnt}
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md"
            disabled={isDisabled}
          >
            ANTERIOR
          </button>
          <button
            onClick={handleProx}
            className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md"
            disabled={isDisabled}
          >
            PRÓXIMO
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center w-screen">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px justify-between"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-l-md  text-sm font-medium"
              onClick={handleAnt}
              disabled={isDisabled}
            >
              <span>ANTERIOR</span>
            </button>
            <div className="flex justify-center space-x-10">
              {banners.map((current, index) => {
                return (
                  <div
                    className="bg-bolinha h-5 w-5 bg-center bg-contain"
                    key={index}
                  ></div>
                );
              })}
            </div>

            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md  text-sm font-medium"
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
