import React from "react";
import Slider from "react-slick";
const SwiperFind = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="center-slider-move">
          <div className="slider">
            <img src="https://w-t.ams3.cdn.digitaloceanspaces.com/images/C892EF93-4BC7-44D8-A39D-2825A357A72A.jpeg" alt="" />
          </div>
          <div className="slider-center">
            <img src="https://w-t.ams3.cdn.digitaloceanspaces.com/images/C892EF93-4BC7-44D8-A39D-2825A357A72A.jpeg" alt="" />
          </div>
        </div>
        <div className="center-slider-move">
          <div className="slider">
            <img src="https://w-t.ams3.cdn.digitaloceanspaces.com/images/F23AD1FF-05DE-47DC-806E-9B9098BD872B.jpeg" alt=""/>
          </div>
          <div className="slider-center">
            <img src="https://w-t.ams3.cdn.digitaloceanspaces.com/images/F23AD1FF-05DE-47DC-806E-9B9098BD872B.jpeg" alt=""/>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SwiperFind;
