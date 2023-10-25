import React from "react";
import Header from "./Header";
import hero_col_img from "../assets/images/png/hero_col_img.png";

const HeroSecond = () => {
  return (
    <>
      <section className="lg:min-h-screen flex flex-col justify-center">
        <Header />
        <div className="lg:flex-grow flex py-12 h-full items-center">
          <div className="max-w-[1188px] mx-auto px-6 h-full">
            <div className="flex justify-center items-center lg:gap-[73px] gap-12  lg:flex-row flex-col">
              <div className="lg:w-[42%] w-[80%]">
                <h3 className="text-[#4D4D4D] font-inter font-bold md:text-[58px] text-[40px] md:leading-normal leading-[1.2]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="pt-4 text-[#4A4A4A] sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed.
                </p>
                <button className="text-white mt-8 w-[164px] h-[44px] hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-[16px] text-[14px] bg-blue flex justify-center items-center rounded-xl">
                  Button
                </button>
              </div>
              <div className="lg:w-[58%] w-[80%]">
                <img
                  src={hero_col_img}
                  alt="hero section col image"
                  className="w-full max-w-[582px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSecond;
