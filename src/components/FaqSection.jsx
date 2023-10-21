import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className={`${
        id === open ? "rotate-180" : ""
      } w-7 sm:h-9 h-7 sm:w-9 transition-transform`}
    >
      <path
        d="M10.8912 12.5091C10.2387 11.8341 9.15875 11.8341 8.50625 12.4866C7.83125 13.1616 7.83125 14.2191 8.50625 14.8716L16.3137 22.7241C16.6287 23.0391 17.0562 23.2191 17.5062 23.2191C17.9562 23.2191 18.3837 23.0391 18.6987 22.7241L26.5062 14.8716C26.8437 14.5566 27.0012 14.1291 27.0012 13.7016C27.0012 13.2516 26.8437 12.8241 26.5062 12.4866C25.8312 11.8341 24.7737 11.8341 24.1212 12.5091L17.5062 19.1466L10.8912 12.5091Z"
        fill="#3C278D"
      />
    </svg>
  );
}

export function FaqSection() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="container mx-auto px-3 md:px-5 pt-8 sm:pt-12 lg:pt-[71px] pb-8 sm:pb-12 lg:pb-[126px]">
        <h1 className="font-Lato text-light-blackE mb-3  sm:mb-4 font-bold text-[40px] sm:text-5xl text-center">
          FAQ
        </h1>
        <p className="font-Lato text-base text-light-black text-center mx-auto max-w-[788px] leading-[150%] pb-4  ">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
          consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
          posuere eget nam diam velit urna adipiscing diam.
        </p>
        <div className="max-w-[834px] mx-auto">
          <Accordion
            className="flex flex-col justify-between px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden relative"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start  ">
                <span className="font-normal">1.</span> What is a cryptocurrency
                token?
              </h2>
            </AccordionHeader>
            <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
              <p className="font-Inter text-sm md:text-base font-normal text-light-black max-w-[786px]  leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion
            className="flex flex-col justify-between px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(2)}>
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start  ">
                <span className="font-normal">2.</span> How can I buy
                cryptocurrency tokens?
              </h2>
            </AccordionHeader>
            <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
              <p className="font-Inter text-sm md:text-base font-normal text-light-black  max-w-[786px] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col justify-between px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(3)}>
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start  ">
                <span className="font-normal">3.</span> What is a token wallet,
                why do I need one?
              </h2>
            </AccordionHeader>
            <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
              <p className="font-Inter text-sm md:text-base font-normal text-light-black max-w-[786px] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </AccordionBody>
          </Accordion>

          <Accordion
            className="flex flex-col justify-between px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(4)}>
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start  ">
                <span className="font-normal">4.</span> Are cryptocurrency
                tokens secure?
              </h2>
            </AccordionHeader>
            <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
              <p className="font-Inter text-sm md:text-base font-normal text-light-black max-w-[786px] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col justify-between px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(5)}>
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start  ">
                <span className="font-normal">5.</span> What is a token wallet,
                and why do I need one?
              </h2>
            </AccordionHeader>
            <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
              <p className="font-Inter text-sm md:text-base font-normal text-light-black max-w-[786px] leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FaqSection;
