import React from "react";
import color_img from "../../assets/images/png/colorfull_img.png";

const AboutUsSecond = () => {
  return (
    <>
      <div className="lg:py-[72px] md:py-16 py-12">
        <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3">
          <div className="flex items-center lg:flex-row flex-col lg:gap-[50px] gap-6">
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={color_img}
                className="xl:max-w-[558px] xl:max-h-[341px] sm:max-w-[500px] sm:max-h-[300px]"
                alt="about us section col image"
              />
            </div>
            <div className="lg:w-1/2  w-full flex flex-col lg:items-start items-center">
              <h3 className="text-darkblack sm:text-2xl lg:text-start text-xl font-inter font-semibold leading-normal">
                Lorem ipsum
              </h3>
              <p className="text-center mt-4 lg:max-w-[536px] lg:text-start text-black opacity-70 sm:text-sm text-xs font-normal leading-normal font-inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas.
              </p>
              <p className="text-center mt-4 lg:max-w-[536px] lg:text-start text-black opacity-70 sm:text-sm text-xs font-normal leading-normal font-inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="text-white lg:mt-8 mt-6 hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-inter font-semibold leading-normal text-sm bg-blue py-[10px] px-[53.5px] rounded-xl">
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
