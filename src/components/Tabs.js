import { Tab, Transition } from "@headlessui/react";
import { FrontPage } from "./front-page-tabs/FrontPage";
import { Who } from "./front-page-tabs/Franqueado";
import { Navbar } from "./Navbar";
import { useState } from "react";

export function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  //const intervalo = setInterval(() => {
  //  selectedIndex === 6
  //    ? setSelectedIndex(0)
  //    : setSelectedIndex(selectedIndex + 1);
  //}, 1500);

  function handleAnt() {
    selectedIndex === 0
      ? setSelectedIndex(6)
      : setSelectedIndex(selectedIndex - 1);
  }

  function handleProx() {
    selectedIndex === 6
      ? setSelectedIndex(0)
      : setSelectedIndex(selectedIndex + 1);
  }

  return (
    <div className="flex items-end">
      <Navbar />
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="flex-col justify-center">
          <Tab.Panels>
            <Tab.Panel>
              <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-28"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-28"
              >
                <FrontPage className="bg-gray1" />
              </Transition>
            </Tab.Panel>
            <Tab.Panel>
              <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-28"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-28"
              >
                <Who />
              </Transition>
            </Tab.Panel>

            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-28"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-28"
              >
                Content 3
              </Transition>
            </Tab.Panel>
            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-28"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-28"
              >
                Content 4
              </Transition>
            </Tab.Panel>
            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-28"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-28"
              >
                Content 5
              </Transition>
            </Tab.Panel>
            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              <Transition
                appear={true}
                show={true}
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-x-28"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-28"
              >
                Content 6
              </Transition>
            </Tab.Panel>
          </Tab.Panels>
          <div className="flex justify-around pr-96 pl-96 absolute bottom-5 w-full">
            <button onClick={handleAnt} className="text-golden font-medium">
              ANTERIOR
            </button>
            <Tab.List className="flex justify-center space-x-10">
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "bg-gifTab h-5 w-5 bg-center bg-contain"
                        : "bg-bolinha h-5 w-5 bg-center bg-contain"
                    }
                  />
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "bg-gifTab h-5 w-5 bg-center bg-contain"
                        : "bg-bolinha h-5 w-5 bg-center bg-contain"
                    }
                  />
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "bg-gifTab h-5 w-5 bg-center bg-contain"
                        : "bg-bolinha h-5 w-5 bg-center bg-contain"
                    }
                  />
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "bg-gifTab h-5 w-5 bg-center bg-contain"
                        : "bg-bolinha h-5 w-5 bg-center bg-contain"
                    }
                  />
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "bg-gifTab h-5 w-5  bg-center bg-contain"
                        : "bg-bolinha h-5 w-5 bg-center bg-contain"
                    }
                  />
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <div
                    className={
                      selected
                        ? "bg-gifTab h-5 w-5 bg-center bg-contain"
                        : "bg-bolinha h-5 w-5 bg-center bg-contain"
                    }
                  />
                )}
              </Tab>
            </Tab.List>
            <button onClick={handleProx} className="text-golden font-medium">
              PRÓXIMO
            </button>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
