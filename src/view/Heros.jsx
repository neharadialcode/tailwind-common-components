import React from "react";
import BackToTop from "../components/common/BackToTop";
import HeroFirst from "../components/herosection/HeroFirst";
import HeroSecond from "../components/herosection/HeroSecond";
import HeroThird from "../components/herosection/HeroThird";
import AbsoluteHeroFirst from "../components/herosection/AbsoluteHeroFirst";
import AbsoluteHeroSecond from "../components/herosection/AbsoluteHeroSecond";

const AllHero = () => {
  return (
    <>
      <BackToTop />
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <HeroFirst />
      <HeroSecond />
      <HeroThird />
      <p className="text-center md:text-[48px] sm:text-[30px] text-[24px] font-bold py-12">
        absolute hero
      </p>
      <AbsoluteHeroFirst />
      <p className="text-center md:text-[48px] sm:text-[30px] text-[24px] font-bold py-14">
        absolute hero 2
      </p>
      <AbsoluteHeroSecond />
    </>
  );
};

export default AllHero;
