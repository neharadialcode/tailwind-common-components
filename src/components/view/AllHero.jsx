import React from "react";
import HeroFirst from "../HeroFirst";
import HeroSecond from "../HeroSecond";
import HeroThird from "../HeroThird";
import AbsoluteHeroFirst from "../AbsoluteHeroFirst";
import AbsoluteHeroSecond from "../AbsoluteHeroSecond";

const AllHero = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <HeroFirst />
      <HeroSecond />
      <HeroThird />
      <p className="text-center text-[48px] font-bold py-12">absolute hero</p>
      <AbsoluteHeroFirst />
      <AbsoluteHeroSecond />
    </>
  );
};

export default AllHero;
