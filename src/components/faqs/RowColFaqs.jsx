import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FaqImage from "../../assets/images/png/Faq-image.png";
import { FaqIcon } from "../common/Icons";
import { faqDataSecond } from "../common/Helper";

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

function RowColFaqs() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 lg:py-16 md:py-14 py-12">
      <div className="flex justify-center flex-col lg:flex-row lg:gap-10 gap-6">
        <div className="lg:w-2/4 flex flex-col lg:items-start items-center">
          <h1 className="font-inter text-black opacity-70E mb-3  sm:mb-4 font-bold sm:text-2xl text-xl lg:text-start text-center">
            FAQ
          </h1>
          <p className="font-inter sm:text-sm text-xs text-black opacity-70 lg:text-start text-center lg:max-w-[500px] 2xl:max-w-[631px] leading-[150%] pb-2 font-normal ">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
          <div className="w-full sm:max-w-10/12 lg:max-w-[529px] 2xl:max-w-[631px]">
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
                  <p className="font-Inter text-xs sm:text-sm  font-normal text-black opacity-70 max-w-[786px] 2xl:max-w-[900px] leading-[150%]">
                    {item.content}
                  </p>
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="lg:w-6/12 flex justify-center">
          <img
            className="sm:max-w-[570px] sm:max-h-[594px] rounded-[20px] object-cover"
            src={FaqImage}
            alt="FaqImage"
          />
        </div>
      </div>
    </div>
  );
}

export default RowColFaqs;
