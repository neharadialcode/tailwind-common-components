import React from "react";

const RoadMap = () => {
  return (
    <div className="bg-white">
      <div className="container xl:w-[1140px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <div className="flex justify-center">
          <h3 className=" font-Inter font-semibold text-lg text-black">
            Road Map
          </h3>
        </div>
        <div className="flex text-center justify-center">
          <p className="w-[934px] text-dark-gray text-sm font-normal font-Inter leading-normal">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
            porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
            Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper
            fames. Cursus libero nec facilisis
          </p>
        </div>
        <div className="flex mt-20">
          <div className=" w-2/4 relative">
            <div className="flex items-center  absolute top-[50px] right-0">
              <div className="w-[70px] h-[70px] rounded-[50%] border-[2px] border-black flex justify-center items-center">
                <h3 className="text-black font-Inter font-normal text-3md">
                  1
                </h3>
              </div>
              <div className="w-[85px] h-[2px] bg-black"></div>
            </div>
          </div>
          <div className="w-[2px] h-[320px] bg-black "></div>
          <div className="w-2/4">
            <div className="max-w-[430px] w-full ps-10">
              <div className="flex justify-start">
                <h4 className="text-black font-Inter font-normal text-2md leading-normal">
                  Inception and prepration
                </h4>
              </div>
              <div className="flex justify-start">
                <p className="font-normal text-dark-gray font-Inter text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-2/4">
            <div className="flex justify-end">
              <div className="max-w-[430px] w-full pe-10">
                <div className=" flex justify-end">
                  <h4 className="text-black font-Inter font-normal text-2md leading-normal">
                    Inception and prepration
                  </h4>
                </div>
                <div className="flex justify-end text-right">
                  <p className="font-normal text-dark-gray font-Inter text-sm leading-[150%]">
                    Lorem ipsum dolor sit amet consectetur. Velit pulvinar
                    libero porttitor quam sed aliquet. Sodales vulputate
                    elementum arcu donec. Feugiat nibh ullamcorper egestas
                    lectus risus ornare ullamcorper fames. Cursus libero nec
                    facilisis risus malesuada arcu cum. Gravida massa
                    scelerisque sociis nulla diam nisl ligula.bh
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-[320px] bg-black "></div>
          <div className=" w-2/4 relative">
            <div className="flex items-center  absolute top-[50px] left-0">
              <div className="w-[85px] h-[2px] bg-black"></div>
              <div className="w-[70px] h-[70px] rounded-[50%] border-[2px] border-black flex justify-center items-center">
                <h3 className="text-black font-Inter font-normal text-3md">
                  2
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
