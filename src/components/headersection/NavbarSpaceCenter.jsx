import { React, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";

const NavbarSpaceCenter = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <>
      <section className="relative z-[2]">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex justify-between items-center relative z-40 md:py-26px py-4">
            <div className="flex justify-between items-center w-full md:w-87px">
              <a
                href="/"
                className="sm:h-48px h-38px sm:w-87px w-67px relative z-50 bg-bg-gray flex justify-center items-center"
              >
                <span className="lg:text-sm text-xs text-blue font-bold font-inter leading-normal">
                  Logo
                </span>
              </a>
              <div onClick={showUl} className="z-20 md:hidden">
                <h3 className="text-xl">
                  {head ? <BiMenu /> : <RxCross1 />}
                </h3>
              </div>
            </div>

            <div
              className={`flex flex-col md:flex-row fixed md:relative width_height_open_nav top-0 left-[-100%] md:left-0 duration-700 md:transition-none justify-center md:justify-between
           items-center ${head ? "" : "!left-0 bg-card-bg"}`}
            >
              <ul className="flex gap-6 justify-between flex-col md:flex-row items-center lg:gap-46px">
                <li className="relative transition-all duration-100">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-black lg:text-sm text-xs font-normal leading-normal"
                    href="#home"
                  >
                    TAB NAME
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 before:ease-linear md:before:content-[''] lg:text-sm text-xs before:h-2px w-0 transition-all duration-300 md:hover:before:w-full before:absolute before:bottom-[-3%] before:bg-black font-normal leading-normal"
                    href="#features"
                  >
                    TAB NAME
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 md:before:content-[''] before:ease-linear before:h-2px w-0 transition-all duration-300 md:hover:before:w-full before:absolute before:bottom-[-3%] before:bg-black lg:text-sm text-xs font-normal leading-normal"
                    href="#pricing"
                  >
                    TAB NAME
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 md:before:content-[''] before:ease-linear before:h-2px w-0 transition-all duration-300 md:hover:before:w-full before:absolute before:bottom-[-3%] before:bg-black lg:text-sm text-xs font-normal leading-normal"
                    href="#freetrial"
                  >
                    TAB NAME
                  </a>
                </li>
                <button className="md:hidden lg:text-sm text-xs mt-6 md:mt-0 bg-blue h-48px w-164px flex justify-center items-center rounded-[12px] text-white font-normal hover:border-blue hover:text-blue hover:bg-white border-2 border-transparent transition-all duration-300 leading-normal">
                  Button
                </button>
              </ul>
            </div>
            <button className="hidden mt-6 md:mt-0 lg:text-sm text-xs bg-blue h-48px w-164px md:flex justify-center items-center rounded-[12px] text-white font-normal hover:border-blue hover:text-blue hover:bg-white border-2 border-transparent transition-all duration-300 leading-normal">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarSpaceCenter;
