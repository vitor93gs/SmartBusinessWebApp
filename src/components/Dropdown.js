import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" no-underline text-gray1 transition  delay-150 hover:text-golden ">
          {props.header}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-10 w-56 shadow-lg bg-theme ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "no-underline text-gray1 transition duration-300 delay-100 hover:text-golden"
                      : "text-gray1 no-underline",
                    "block px-4 py-2 text-sm  "
                  )}
                >
                  {props.info1}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "no-underline text-gray1 transition duration-300 delay-100 hover:text-golden"
                      : "text-gray1 no-underline",
                    "block px-4 py-2 text-sm "
                  )}
                >
                  {props.info2}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "no-underline text-gray1 transition duration-300 delay-100 hover:text-golden"
                      : "text-gray1 no-underline",
                    "block px-4 py-2 text-sm "
                  )}
                >
                  {props.info3}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "no-underline text-gray1 transition duration-300 delay-100 hover:text-golden"
                      : "text-gray1 no-underline",
                    "block px-4 py-2 text-sm text-gray1 "
                  )}
                >
                  {props.info4}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? "no-underline text-gray1 transition duration-300 delay-100 hover:text-golden"
                      : "text-gray1 no-underline",
                    "block px-4 py-2 text-sm "
                  )}
                >
                  {props.info5}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
