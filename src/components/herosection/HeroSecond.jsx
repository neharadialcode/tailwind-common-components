import React from "react";
import hero_col_img from "../../assets/images/png/hero_col_img.png";

const HeroSecond = () => {
  return (
    <>
      <div className="lg:min-h-screen flex flex-col justify-center mb-12 max-w-[1920px] mx-auto">
        <div className="flex justify-center items-center py-10">
          <a
            href="/"
            className="sm:h-48px h-38px sm:w-87px w-67px relative z-50 bg-bg-gray flex justify-center items-center"
          >
            <span className="lg:text-sm text-xs text-blue font-bold font-inter leading-normal">
              Logo
            </span>
          </a>
        </div>
        <div className="lg:flex-grow flex pb-12 md:pt-12 pt-6 h-full items-center">
          <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 h-full">
            <div className="flex justify-center items-center lg:gap-[73px] gap-12 lg:flex-row flex-col">
              <div className="lg:w-[42%] w-[100%]">
                <h3 className="text-dark-gray font-Inter font-bold md:text-4xl sm:text-2xl text-xl md:leading-normal leading-[1.2]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="pt-4 text-lightgray sm:text-sm text-xs font-normal leading-normal font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed.
                </p>
                <button className="text-white mt-8 sm:w-164px w-114px sm:h-48px h-38px hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-sm text-xs bg-blue flex justify-center items-center rounded-xl">
                  Button
                </button>
              </div>
              <div className="lg:w-[58%] w-[100%] flex justify-center">
                <img
                  src={hero_col_img}
                  alt="hero section col image"
                  className="w-full max-w-[582px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSecond;
