import React from "react";
import FooterFirst from "./FooterFirst";
import FooterSecond from "./FooterSecond";

const AllFooter = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-48px w-120px flex justify-center items-center sm:text-sm text-xs rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <FooterFirst />
      <FooterSecond />
    </>
  );
};

export default AllFooter;
