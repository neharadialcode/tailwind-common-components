import React from "react";
import NavbarSpaceCenter from "../headersection/NavbarSpaceCenter";

const HeroFirst = () => {
  return (
    <>
      <section className="lg:min-h-screen flex flex-col justify-center max-w-[1920px] mx-auto">
        <NavbarSpaceCenter />
        <div className="hero_first_bg lg:flex-grow flex md:py-48 py-24 lg:py-0 h-full items-center">
          <div className="max-w-[1140px] mx-auto xl:px-0 px-3 h-full">
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-darkblack md:text-4xl text-center sm:text-2xl text-xl font-Inter font-bold md:leading-normal leading-[1.2]">
                Lorem ipsum Lorem ipsum
              </h2>
              <p className="pt-4 text-center max-w-[777px] text-lightgray sm:text-sm text-xs font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="text-white sm:mt-8 mt-6 w-164px h-48px hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-sm text-xs bg-blue flex justify-center items-center rounded-xl">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFirst;