import React from "react";

const FooterSecond = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className="pt-61px pb-42px max-w-[536px] px-6 mx-auto">
        <div className="flex justify-center items-center">
          <a
            href="/"
            className="sm:h-48px h-38px sm:w-87px w-67px relative z-50 bg-bg-gray flex justify-center items-center"
          >
            <span className="lg:text-sm text-xs text-blue font-bold font-inter leading-normal">
              Logo
            </span>
          </a>
        </div>
        <ul className="flex justify-between items-center sm:gap-5 pt-6">
          <li className="text-dark-gray font-Inter hover_li transition-all duration-300 font-semibold sm:text-sm text-xs leading-normal">
            <a
              href="#"
              className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
            >
              Home
            </a>
          </li>
          <li className="text-dark-gray font-Inter hover_li transition-all duration-300 font-semibold sm:text-sm text-xs leading-normal">
            <a
              href="#"
              className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
            >
              About
            </a>
          </li>
          <li className="text-dark-gray font-Inter hover_li transition-all duration-300 font-semibold sm:text-sm text-xs leading-normal">
            <a
              href="#"
              className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
            >
              Community
            </a>
          </li>
          <li className="text-dark-gray font-Inter hover_li transition-all duration-300 font-semibold sm:text-sm text-xs leading-normal">
            <a
              href="#"
              className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
            >
              RoadMap
            </a>
          </li>
          <li className="text-dark-gray font-Inter hover_li transition-all duration-300 font-semibold sm:text-sm text-xs leading-normal">
            <a
              href="#"
              className="before:w-0 relative before:transition-all before:duration-300 before:ease-linear md:before:content-[''] before:h-2px w-0  md:hover:before:w-full before:absolute before:left-0 before:bottom-[-3%] before:bg-dark-gray"
            >
              Faqs
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-1px bg-blue"></div>
      <p className="pt-2 pb-4 text-dark-gray sm:sm:text-sm text-xs font-normal leading-normal font-Inter text-center">
        © {year} Copyright company name. All Right Reserved.
      </p>
    </>
  );
};

export default FooterSecond;
