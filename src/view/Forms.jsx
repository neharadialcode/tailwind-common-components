import React from "react";
import FormFirst from "../components/form/FormFirst";
import FormSecond from "../components/form/FormSecond";
import FormThird from "../components/form/FormThird";
import FormForth from "../components/form/FormForth";
import BackToTop from "../components/common/BackToTop";

const AllForms = () => {
  return (
    <>
      <BackToTop />
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <FormFirst />
      <FormSecond />
      <FormThird />
      <FormForth />
    </>
  );
};

export default AllForms;
