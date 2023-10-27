import React, { useState } from "react";
import sample_video from "../assets/videos/sample_video.mp4";
import thumbnail from "../assets/images/png/aboutus_col_img.png";
import play from "../assets/images/png/play_button.png";

const Video = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!isVideoPlaying) {
      setVideoPlaying(true);
      const video = document.getElementById("videoElement");
      if (video) {
        video.play();
      }
    }
  };

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
          <div className="flex justify-center items-centre h-full ">
            <div className="relative">
              <div className="relative w-full h-full">
                <video
                  id="videoElement"
                  onClick={handleVideoClick}
                  controls
                  className="w-full h-full"
                  poster={thumbnail}
                >
                  <source src={sample_video} type="video/mp4" />
                </video>
                {!isVideoPlaying && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <img
                      src={play}
                      alt="play button"
                      className="w-16 h-16 object-contain cursor-pointer"
                      onClick={handleVideoClick}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
