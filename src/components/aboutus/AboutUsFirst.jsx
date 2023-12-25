import React from "react";

const AboutUsFirst = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('./assets/images/png/aboutus_bg.png')]">
        <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3">
          <div className="flex justify-center items-center flex-col lg:pt-[118px] md:pt-[100px] lg:pb-[121px] md:pb-[100px] py-12">
            <h3 className="text-darkblack font-Inter text-xl sm:text-2xl font-semibold leading-normal mb-4">
              Lorem ipsum
            </h3>
            <p className="max-w-[817px] text-black opacity-70 text-center sm:text-sm text-xs font-normal leading-[150%] font-inter mb-8">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
              nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem
              vitae sed.
            </p>
            <button className="text-white hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-inter font-semibold leading-normal text-sm bg-blue py-[10px] px-[53.5px] rounded-xl">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsFirst;
