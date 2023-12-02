import React from "react";
import AboutUsFirst from "../components/aboutus/AboutUsFirst";
import AboutUsSecond from "../components/aboutus/AboutUsSecond";
import BackToTop from "../components/common/BackToTop";

const AllAboutUs = () => {
  return (
    <>
      <BackToTop />
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-48px w-120px flex justify-center items-center sm:text-sm text-xs rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <AboutUsFirst />
      <AboutUsSecond />
    </>
  );
};

export default AllAboutUs;
