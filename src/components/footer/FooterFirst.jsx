import React from "react";
import { BehanceIcon, FacebookIcon, TwitterIcon } from "../common/Icons";

const FooterFirst = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 h-full ">
        <div className="sm:pt-[77px] sm:pb-[38px] py-12 lg:gap-[127px] sm:gap-12 gap-8 lg:flex-row flex-col flex justify-center">
          <div className="lg:w-[25%] md:w-[50%] w-full">
            <a
              href="/"
              className="sm:h-48px h-38px sm:w-87px w-67px relative z-50 bg-bg-gray flex justify-center items-center"
            >
              <span className="lg:text-sm text-xs text-blue font-bold font-inter leading-normal">
                Logo
              </span>
            </a>
            <p className="pt-26px text-opacity-80 text-dark-gray sm:sm:text-sm text-xs font-normal leading-normal font-Inter">
              Discover Stellar blockchain's unrivaled speed, security, &
              scalability with volag. Revolutionize finance.
            </p>
          </div>
          <div className="lg:w-[75%] w-full flex flex-wrap justify-between">
            <div className=" sm:pt-0 pt-5">
              <ul>
                <li className="text-black font-Inter sm:text-sm text-xs font-semibold leading-normal">
                  Quick links
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    Home
                  </a>
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    About
                  </a>
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    Community
                  </a>
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    RoadMap
                  </a>
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    Faqs
                  </a>
                </li>
              </ul>
            </div>
            <div className=" sm:pt-0 pt-5">
              <ul className="mx-7">
                <li className="text-black font-Inter sm:text-sm text-xs font-semibold leading-normal">
                  Links
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    Terms & conditions
                  </a>
                </li>
                <li className="pt-14px text-dark-gray transition-all duration-300 font-Inter sm:text-sm text-xs font-normal leading-normal">
                  <a
                    href="#"
                    className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className=" sm:pt-0 pt-5">
              <ul>
                <li className="text-black font-Inter sm:text-sm text-xs font-semibold leading-normal">
                  Get in Touch
                </li>
              </ul>
              <form className="flex justify-between items-center bg-grayblue rounded-xl mt-4 sm:w-[325px] w-full">
                <input
                  required
                  type="email"
                  placeholder="Type Your Mail"
                  className="pe-2 bg-grayblue h-45px placeholder:text-black placeholder:sm:text-sm placeholder:text-xs placeholder:font-normal placeholder:leading-normal rounded-xl py-3 w-full outline-none ps-3"
                />
                <input
                  type="submit"
                  value="Search"
                  className="bg-blue px-16px hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue h-39px flex justify-center items-center font-Inter sm:text-sm text-xs text-white rounded-xl font-normal leading-normal me-1"
                />
              </form>
              <p className="pt-4 font-Inter text-black sm:text-sm text-xs font-normal leading-normal">
                Follow us now
              </p>
              <div className="pt-4 flex items-center gap-1">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="hover:translate-y-[-4px] hover:scale-105 transition-all duration-300"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.facebook.com/login/"
                  target="_blank"
                  className="hover:translate-y-[-4px] hover:scale-105 transition-all duration-300"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  className="ms-2px hover:translate-y-[-4px] hover:scale-105 transition-all duration-300"
                >
                  <BehanceIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1px bg-blue"></div>
      <p className="pt-2 pb-4 text-dark-gray sm:sm:text-sm text-xs font-normal leading-normal font-Inter text-center">
        © {year} Copyright company name. All Right Reserved.
      </p>
    </>
  );
};

export default FooterFirst;
