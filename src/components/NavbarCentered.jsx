import { React, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";

const NavbarCentered = () => {
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
        <div className="container custom_container mx-auto">
          <div className="flex justify-between md:justify-center items-center relative z-40 md:py-26px py-4">
            <div className="flex justify-between md:hidden items-center w-full md:w-87px">
              <a
                href="/"
                className="h-48px w-87px relative z-50 bg-bg-gray flex justify-center items-center"
              >
                <span className="lg:text-16px text-14px text-blue font-bold font-inter leading-normal">
                  Logo
                </span>
              </a>
              <div onClick={showUl} className="z-20 md:hidden">
                <h3 className="text-[30px]">
                  {head ? <BiMenu /> : <RxCross1 />}
                </h3>
              </div>
            </div>

            <div
              className={`flex flex-col md:flex-row fixed md:relative width_height_open_nav top-0 left-[-100%] md:left-0 duration-700 md:transition-none justify-center md:justify-between
           items-center ${head ? "" : "!left-0 backdrop-blur-lg"}`}
            >
              <ul className="flex gap-6 justify-between flex-col md:flex-row items-center lg:gap-46px">
                <li className="relative transition-all duration-100">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-black lg:text-16px text-14px font-normal leading-normal"
                    href="#home"
                  >
                    TAB NAME
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 before:ease-linear md:before:content-[''] lg:text-16px text-14px before:h-2px w-0 transition-all duration-300 md:hover:before:w-full before:absolute before:bottom-[-3%] before:bg-black font-normal leading-normal"
                    href="#features"
                  >
                    TAB NAME
                  </a>
                </li>
                <a
                  href="/"
                  className="h-48px w-87px relative z-50 bg-bg-gray md:flex hidden justify-center items-center"
                >
                  <span className="lg:text-16px text-14px text-blue font-bold font-inter leading-normal">
                    Logo
                  </span>
                </a>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 md:before:content-[''] before:ease-linear before:h-2px w-0 transition-all duration-300 md:hover:before:w-full before:absolute before:bottom-[-3%] before:bg-black lg:text-16px text-14px font-normal leading-normal"
                    href="#pricing"
                  >
                    TAB NAME
                  </a>
                </li>
                <li className="relative">
                  <a
                    onClick={showUl}
                    className="before:w-0 before:transition-all font-inter before:duration-300 md:before:content-[''] before:ease-linear before:h-2px w-0 transition-all duration-300 md:hover:before:w-full before:absolute before:bottom-[-3%] before:bg-black lg:text-16px text-14px font-normal leading-normal"
                    href="#freetrial"
                  >
                    TAB NAME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarCentered;
