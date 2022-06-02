import { Tab } from "@headlessui/react";
import { FrontPage } from "../pages/FrontPage";
import { Who } from "../pages/Who";
import { Navbar } from "./Navbar";

export function Tabs() {
  return (
    <div className="flex items-end border-2">
      <Navbar />
      <Tab.Group>
        <div className="flex-col justify-center">
          <Tab.Panels>
            <Tab.Panel>
              <FrontPage />
            </Tab.Panel>
            <Tab.Panel>
              <Who />
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
            <Tab.Panel>Content 4</Tab.Panel>
            <Tab.Panel>Content 5</Tab.Panel>
            <Tab.Panel>Content 6</Tab.Panel>
          </Tab.Panels>
          <div className="flex justify-center">
            <Tab.List>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
              <Tab>Tab 4</Tab>
              <Tab>Tab 5</Tab>
              <Tab>Tab 6</Tab>
            </Tab.List>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}
