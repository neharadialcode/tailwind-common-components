import React from "react";
import macbook_col_img from "../assets/images/png/mackbook_hero.png";
import NavbarSpaceCenter from "./NavbarSpaceCenter";

const AbsoluteHeroFirst = () => {
  return (
    <>
      <section className=" flex flex-col justify-center mb-12 max-w-[1920px] mx-auto overflow-x-hidden">
      <NavbarSpaceCenter/>
        <div className="lg:flex-grow flex xl:py-40 lg:py-20 py-16 h-full items-center relative">
          <div className="container custom_container mx-auto  h-full ">
            <div className="flex justify-center items-center lg:gap-[73px] gap-12  lg:flex-row flex-col">
              <div className="lg:w-[55%] w-[100%]">
                <h2 className="text-black text-xl font-Inter font-normal leading-normal">
                  A nice headline
                </h2>
                <h3 className="text-black font-Inter font-semibold md:text-4xl lg:text-5xl text-xl md:leading-normal leading-[1.2]">
                  Goes here
                </h3>
                <p className="pt-4 text-lightgray sm:text-sm text-xs font-normal leading-normal font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum.
                </p>
                <p className="pt-4 text-lightgray sm:text-sm text-xs font-normal leading-normal font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec.
                </p>

                <div className="flex gap-5 items-center">
                  <button className="text-white mt-8 w-164px h-48px hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-sm text-xs bg-blue flex justify-center items-center rounded-xl">
                    Button
                  </button>
                  <button className="hover:text-white mt-8 w-164px h-48px bg-white hover:border-transparent border-blue border-2 transition-all duration-300 text-blue font-Inter font-semibold leading-normal sm:text-sm text-xs hover:bg-blue flex justify-center items-center rounded-xl">
                    Button
                  </button>
                </div>
              </div>
              <div className="lg:w-[58%] w-[100%] flex justify-center">
                <img
                  src={macbook_col_img}
                  alt="hero section macbook image"
                  className="w-full xl:max-w-[976px] max-w-[650px] lg:absolute xl:right-[-290px] right-[-100px] xl:bottom-0 bottom-[10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbsoluteHeroFirst;