import React from "react";
import aboutus_col_img from "../assets/images/png/aboutus_col_img.png";

const AboutUsSecond = () => {
  return (
    <>
      <div className="md:py-[122px] py-24">
        <div className="max-w-[1188px] mx-auto px-6">
          <div className="flex justify-between xl:items-end items-center lg:flex-row flex-col md:gap-12 gap-8 mx-auto">
            <div className="xl:w-1/2 lg:w-[45%] w-[80%]">
              <img
                src={aboutus_col_img}
                className="w-full"
                alt="about us section col image"
              />
            </div>
            <div className="xl:w-1/2 lg:w-[45%] w-[80%]">
              <h3 className="text-[#1E1E1E] sm:text-[48px] text-[36px] font-Inter font-semibold leading-normal">
                Lorem ipsum
              </h3>
              <p className="pt-4 lg:max-w-[536px] text-[#4A4A4A] sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas.
              </p>
              <p className="pt-4 lg:max-w-[536px] text-[#4A4A4A] sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="text-white mt-8 hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-[16px] text-[14px] bg-blue py-3 px-14 rounded-xl">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSecond;
