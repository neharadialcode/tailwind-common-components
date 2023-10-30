import React from "react";
import OurTeam from "../OurTeam";
import RoadMap from "../RoadMap";

const AllOurTeam = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <OurTeam />
      <RoadMap />
    </>
  );
};

export default AllOurTeam;
