import { Fragment, useRef, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function FlyoutMenu(props) {
  let timeout; // NodeJS.Timeout
  const timeoutDuration = 400;

  const buttonRef = useRef(null); // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click(); // eslint-disable-line
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout);
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
    // else: don't click! 😁
  };

  const handleClick = (open) => {
    setOpenState(!open); // toggle open state in React state
    clearTimeout(timeout); // stop the hover timer if it's running
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const prps = [
    props.info1,
    props.info2,
    props.info3,
    props.info4,
    props.info5,
  ];

  return (
    <Popover className="absolute text-left text-s text-gray1">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
        >
          <Popover.Button
            ref={buttonRef}
            className="no-underline text-gray1 transition  delay-150 hover:text-golden font-thin"
          >
            <div onClick={() => handleClick(open)}>
              <span>{props.header}</span>
            </div>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-700"
            enterFrom="opacity-0 -translate-y-12"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-700"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-12"
          >
            <Popover.Panel static>
              <div className="origin-top-right mt-10 w-44 shadow-lg bg-theme2 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                {prps.map((cur, index) => {
                  return (
                    <Fragment key={("PopoverPanel<>", index)}>
                      <a
                        href={"#"}
                        className="no-underline text-gray1 transition duration-300 delay-100 hover:text-golden block px-4 py-2 text-sm"
                      >
                        {cur}
                      </a>
                    </Fragment>
                  );
                })}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
