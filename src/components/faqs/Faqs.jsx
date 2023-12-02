import React from "react";

import BackToTop from "../common/BackToTop";
import FullScreenFaqs from "./FullScreenFaqs";
import RowColFaqs from "./RowColFaqs";

const AllFaqs = () => {
  return (
    <>
      <BackToTop />
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-48px w-120px flex justify-center items-center sm:text-sm text-xs rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <FullScreenFaqs />
      {/* <RowColFaqs/> */}
      <RowColFaqs />
    </>
  );
};

export default AllFaqs;
