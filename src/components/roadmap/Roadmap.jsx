import React from "react";
import BackToTop from "../common/BackToTop";
import HorizontalRoadMap from "./HorizontalRoadMap";
import VerticalRoadMap from "./VerticalRoadMap";

const AllRoadmap = () => {
  return (
    <>
      <BackToTop />
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <VerticalRoadMap />
      <HorizontalRoadMap />
    </>
  );
};

export default AllRoadmap;
