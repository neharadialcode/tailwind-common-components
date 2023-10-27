import React from 'react'

const ViewButtons = () => {
  return (
    <>
      <div className="max-w-[1188px] mx-auto px-6 ">
        <div className="flex flex-wrap justify-between items-center pt-24">
          <a
            href="/header"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            header
          </a>
          <a
            href="/hero"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            hero
          </a>
          <a
            href="/aboutus"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            about us
          </a>
          <a
            href="/ourteam"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            our team
          </a>
          <a
            href="/faqs"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            faqs
          </a>
          <a
            href="/footer"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            footer
          </a>
          <a
            href="/video"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            video
          </a>
          <a
            href="/form"
            className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
          >
            form
          </a>
        </div>
      </div>
    </>
  );
}

export default ViewButtons;