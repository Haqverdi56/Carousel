import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "../components/customerSlider.scss";
import Slider from "react-slick";

const customerSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };

  return (
    <>
      <div>
        <Slider  {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default customerSlider;
