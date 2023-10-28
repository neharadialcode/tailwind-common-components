import React, { useEffect, useState } from "react";

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
      <div className="flex-grow-0">
        <nav className="bg-white my-12">
          <div className="max-w-[1188px] mx-auto px-6">
            <div className="flex items-center justify-between md:justify-center py-[26px]">
              <div className="flex-shrink-0">
                <button className="bg-[#C5C2C2] md:hidden h-[48px] text-blue w-[87px] flex justify-center items-center sm:text-[16px] text-[14px] leading-normal font-semibold font-inter">
                  Logo
                </button>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-baseline space-x-4">
                  <li>
                    <a
                      href="#"
                      className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                    >
                      TAB NAME
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                    >
                      TAB NAME
                    </a>
                  </li>
                  <button className="bg-[#C5C2C2] h-[48px] text-blue w-[87px] flex justify-center items-center sm:text-[16px] text-[14px] leading-normal font-semibold font-inter">
                    Logo
                  </button>
                  <li>
                    <a
                      href="#"
                      className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                    >
                      TAB NAME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal block px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                    >
                      TAB NAME
                    </a>
                  </li>
                </ul>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6 text-black"
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
                      className="block h-6 w-6 text-black"
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

          {isOpen && (
            <div className="md:hidden" id="mobile-menu">
              <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center h_mobile">
                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                  >
                    TAB NAME
                  </a>
                </li>

                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                  >
                    TAB NAME
                  </a>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                  >
                    TAB NAME
                  </a>
                </li>

                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black font-inter hover_li transition-all duration-300 font-normal leading-normal px-3 py-2 rounded-md sm:text-[16px] text-[14px]"
                  >
                    TAB NAME
                  </a>
                </li>
              </ul> 
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default HeaderMiddle;
