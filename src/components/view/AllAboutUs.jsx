import React from 'react'
import AboutUsFirst from '../AboutUsFirst';
import AboutUsSecond from '../AboutUsSecond';

const AllAboutUs = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <AboutUsFirst />
      <AboutUsSecond />
    </>
  );
}

export default AllAboutUs;