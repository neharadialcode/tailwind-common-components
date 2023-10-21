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
      } h-5 w-5 transition-transform`}
    >
      <path
        d="M24.1088 22.4909C24.7613 23.1659 25.8413 23.1659 26.4938 22.5134C27.1687 21.8384 27.1687 20.7809 26.4938 20.1284L18.6863 12.2759C18.3713 11.9609 17.9438 11.7809 17.4938 11.7809C17.0438 11.7809 16.6163 11.9609 16.3013 12.2759L8.49378 20.1284C8.15628 20.4434 7.99878 20.8709 7.99878 21.2984C7.99878 21.7484 8.15628 22.1759 8.49378 22.5134C9.16878 23.1659 10.2263 23.1659 10.8788 22.4909L17.4938 15.8534L24.1088 22.4909Z"
        fill="#3C278D"
      />
      <path
        d="M24.1088 22.4909C24.7613 23.1659 25.8413 23.1659 26.4938 22.5134C27.1687 21.8384 27.1687 20.7809 26.4938 20.1284L18.6863 12.2759C18.3713 11.9609 17.9438 11.7809 17.4938 11.7809C17.0438 11.7809 16.6163 11.9609 16.3013 12.2759L8.49378 20.1284C8.15628 20.4434 7.99878 20.8709 7.99878 21.2984C7.99878 21.7484 8.15628 22.1759 8.49378 22.5134C9.16878 23.1659 10.2263 23.1659 10.8788 22.4909L17.4938 15.8534L24.1088 22.4909Z"
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
      <div className="container mx-auto px-3 md:px-5 flex justify-center items-center">
        <div className="max-w-[834px] ">
          <Accordion
            className="flex flex-col justify-between px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden relative"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[130%] md:leading-[150%]  ">
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
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[130%] md:leading-[150%]  ">
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
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[130%] md:leading-[150%]  ">
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
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[130%] md:leading-[150%]  ">
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
              <h2 className="font-Inter text-light-blue text-base md:text-xl font-semibold leading-[130%] md:leading-[150%]  ">
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
