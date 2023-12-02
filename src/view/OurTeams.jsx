import React from "react";
import OurTeam from "../components/team/OurTeam";

const AllOurTeam = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-48px w-120px flex justify-center items-center sm:text-sm text-xs rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <OurTeam />
    </>
  );
};

export default AllOurTeam;
