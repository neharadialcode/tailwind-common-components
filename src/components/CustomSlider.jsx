import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img_1 from "../assets/images/png/slider_img_1.png";
import slider_img_2 from "../assets/images/png/slider_img_2.png";
import slider_img_3 from "../assets/images/png/slider_img_3.png";
import slider_img_4 from "../assets/images/png/slider_img_4.png";
import slider_img_5 from "../assets/images/png/slider_img_5.png";

const CustomSlider = () => {
  const settingsForSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  const settingsForNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-w-[1188px] mx-auto px-6 h-full">
      <Slider className="slider-for" {...settingsForSlider}>
        <div>
          <img
            src={slider_img_1}
            alt="Image 1"
            className="w-full max-w-[531px]"
          />
        </div>
        <div>
          <img
            src={slider_img_2}
            alt="Image 2"
            className="w-full max-w-[531px]"
          />
        </div>
        <div>
          <img
            src={slider_img_3}
            alt="Image 3"
            className="w-full max-w-[531px]"
          />
        </div>
        <div>
          <img
            src={slider_img_4}
            alt="Image 3"
            className="w-full max-w-[531px]"
          />
        </div>
        <div>
          <img
            src={slider_img_5}
            alt="Image 3"
            className="w-full max-w-[531px]"
          />
        </div>
      </Slider>
      <Slider className="slider-nav" {...settingsForNav}>
        <div>
          <img
            src={slider_img_1}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_2}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_3}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_4}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_5}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_1}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_2}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_3}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_4}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
        <div>
          <img
            src={slider_img_5}
            alt="Image 3"
            className="w-full max-w-[182px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
