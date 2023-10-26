import React from "react";
import sample_video from "../assets/videos/sample_video.mp4";

const Video = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <div className="py-12">
        <div className="max-w-[1188px] mx-auto px-6 h-[680px]">
          <div className="flex justify-center items-centre h-full">
            <video controls class="w-full h-full">
              <source src={sample_video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
