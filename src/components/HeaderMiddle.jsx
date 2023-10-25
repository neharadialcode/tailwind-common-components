import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
const HeaderMiddle = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <div>
        <nav className="bg-blue">
          <div className="max-w-[1188px] mx-auto px-6">
            <div className="flex items-center md:justify-center justify-between h-16">
              <div className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    >
                      Projects
                    </a>
                  </li>
                  <button className="text-gray-300 md:block hidden border text-base leading-normal font-semibold font-inter py-2 px-4 md:py-4 md:px-6">
                    Logo
                  </button>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
              <button className="text-gray-300 md:hidden border block text-base leading-normal font-semibold font-inter py-2 px-4 md:py-4 md:px-6">
                Logo
              </button>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <ul
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center h_mobile"
                >
                  <li onClick={() => setIsOpen(!isOpen)}>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Team
                    </a>
                  </li>
                  <li onClick={() => setIsOpen(!isOpen)}>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Projects
                    </a>
                  </li>
                  <li onClick={() => setIsOpen(!isOpen)}>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Calendar
                    </a>
                  </li>

                  <li onClick={() => setIsOpen(!isOpen)}>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </Transition>
        </nav>
        <header className="bg-white shadow max-w-[1188px] mx-auto px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores
          officia id animi, qui provident veritatis natus libero labore
          repellendus necessitatibus placeat sapiente corporis, itaque quae
          explicabo aspernatur deserunt sunt, eum accusamus voluptatibus quidem
          dolore eaque. Hic similique accusamus beatae animi at. 
        </header>
      </div>
    </>
  );
};

export default HeaderMiddle;
