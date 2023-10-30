import React from "react";
import FormFirst from "../FormFirst";
import FormSecond from "../FormSecond";
import FormThird from "../FormThird";
import FormForth from "../FormForth";

const AllForms = () => {
  return (
    <>
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
