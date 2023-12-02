import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FaqImage from "../assets/images/png/Faq-image.png";
import {faqDataSecond } from "./Helper";
import { FaqIcon } from "./Icons";

function Icon({ id, open }) {
  return (
    <div
      className={`${
        id === open ? "rotate-180" : ""
      } w-7 sm:h-9 h-7 sm:w-9 transition-transform`}
    >
      <FaqIcon />
    </div>
  );
}

function FaqSecond() {
  const [open, setOpen] =useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 lg:py-16 md:py-14 py-12">
      <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-10 gap-6">
        <div className="lg:w-2/4">
          <h1 className="font-inter text-black opacity-70E mb-3  sm:mb-4 font-bold sm:text-[40px] text-[36px] sm:text-5xl lg:text-start text-center">
            FAQ
          </h1>
          <p className="font-inter sm:text-[16px] text-[14px] text-black opacity-70 lg:text-start text-center max-w-[500px] leading-[150%] pb-4 font-normal ">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. 
          </p>
          <div className="max-w-[529px] 2xl:max-w-[631px]">
            {faqDataSecond.map((item) => (
              <Accordion
                key={item.id}
                className="flex flex-col px-4 md:px-6 border rounded-xl border-light-blue my-4"
                open={open === item.id}
                icon={<Icon id={item.id} open={open} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="py-4 items-center"
                >
                  <h2 className="font-Inter text-light-blue sm:text-md text-sm xl:text-2md font-normal leading-[140%] md:leading-[150%] text-start mb-0">
                    <span className="font-normal">{item.id}.</span> {item.title}
                  </h2>
                </AccordionHeader>
                <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
                  <p className="font-Inter text-xs sm:text-sm  font-normal text-black opacity-70 max-w-[786px] 2xl:max-w-[900px]  leading-[150%]">
                    {item.content}
                  </p>
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="lg:w-6/12">
          <img
            className="w-full  xl:max-w-[570px] xl:max-h-[594px] rounded-[20px]"
            src={FaqImage}
            alt="FaqImage"
          />
        </div>
      </div>
    </div>
  );
}

export default FaqSecond;
