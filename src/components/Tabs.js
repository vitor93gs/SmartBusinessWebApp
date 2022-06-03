import { Tab, Transition } from "@headlessui/react";
import { FrontPage } from "../pages/FrontPage";
import { Who } from "../pages/Who";
import { Navbar } from "./Navbar";
import { useState } from "react";

export function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(50);
  var newtab;
  //setInterval(() => {
  //  newtab = selectedIndex + 1;
  //  setSelectedIndex(newtab);
  //}, 6000);

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
                <FrontPage />
              </Transition>
            </Tab.Panel>
            <Tab.Panel>
              <Transition
                appear={true}
                show={true}
                enter="transition-opacity duration-1000 "
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Who />
              </Transition>
            </Tab.Panel>

            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              Content 3
            </Tab.Panel>
            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              Content 4
            </Tab.Panel>
            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              Content 5
            </Tab.Panel>
            <Tab.Panel className="h-screen flex items-center w-screen text-gray1 text-5xl text-center text-opacity-70">
              Content 6
            </Tab.Panel>
          </Tab.Panels>
          <div className="flex justify-center absolute bottom-5 w-full">
            <Tab.List className="font-thin text-gray1 flex justify-center space-x-10 w-full ">
              <Tab className="bg-gifTab h-5 w-5 bg-center bg-contain"></Tab>
              <Tab className="bg-bolinha h-5 w-5 bg-center bg-contain"></Tab>
              <Tab className="bg-bolinha h-5 w-5 bg-center bg-contain"></Tab>
              <Tab className="bg-bolinha h-5 w-5 bg-center bg-contain"></Tab>
              <Tab className="bg-bolinha h-5 w-5 bg-center bg-contain"></Tab>
              <Tab className="bg-bolinha h-5 w-5 bg-center bg-contain"></Tab>
            </Tab.List>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
