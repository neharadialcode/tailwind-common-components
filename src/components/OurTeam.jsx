import React from "react";
import { card } from "./Helper";

const OurTeam = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="container xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <div className="flex justify-center">
          <h3 className="text-black sm:text-lg text-[36px] font-semibold font-Inter">
            Our Team
          </h3>
        </div>
        <div className="flex justify-center text-center mt-4">
          <p className="max-w-[934px] text-dark-gray text-sm font-normal font-Inter leading-normal">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
            porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
            Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper
            fames. Cursus libero nec facilisis
          </p>
        </div>
        <div className="flex justify-center flex-row flex-wrap sm:mt-11 mt-7">
          {card.map((data) => {
            return (
              <div className=" px-3 lg:w-1/4 sm:w-2/4 group">
                <div className="max-w-345px px-3 bg-card-bg lg:mb-0 mb-6 p-y6 sm:py-8 rounded-xl hover:scale-105 duration-300 transition-all">
                  <div className="flex justify-center">
                    <img
                      className="xl:w-[120px] xl:h-[120px] lg:w-[100px] lg:h-[100px] md:w-[120px] md:h-[120px] w-[100px] h-[100px] duration-300 transition-all"
                      src={data.img}
                      alt="men-1"
                    />
                  </div>
                  <h4 className="text-md text-center mt-4 font-medium font-Inter text-black">
                    {data.heading}
                  </h4>
                  <p className="text-blue text-center mt-1.5 text-sm font-normal font-Inter">
                    {data.link}
                  </p>
                  <p className="text-gray text-sm text-center mt-3 font-normal font-Inter">
                    {data.peragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
