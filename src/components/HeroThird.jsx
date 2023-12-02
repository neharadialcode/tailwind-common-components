import React from "react";
import hero_main_img from "../assets/images/png/hero_third_img.png";

const HeroThird = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center mt-43px">
          <a
            href="/"
            className="h-48px w-87px relative z-50 bg-bg-gray flex justify-center items-center"
          >
            <span className="lg:text-sm text-xs text-blue font-bold font-inter leading-normal">
              Logo
            </span>
          </a>
        </div>
        <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 h-full">
          <div className="lg:pt-24 md:pt-14 pt-6">
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-darkblack md:text-4xl text-center sm:text-2xl text-lg font-Inter font-bold leading-[1.2]">
                Lorem ipsum Lorem ipsum
              </h2>
              <p className="pt-4 text-center max-w-[777px] text-lightgray sm:text-sm text-xs font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="text-white mt-8 w-164px h-48px hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-sm text-xs bg-blue flex justify-center items-center rounded-xl">
                Button
              </button>
            </div>
            <div className="lg:pt-16 sm:pt-14 pt-6">
              <img
                src={hero_main_img}
                alt="hero section main image"
                className="w-full min-h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroThird;
