import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardcategory from "./Cardcategory";

function CategorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container">
      <h2 className="section-title mx-2 text-white fw-bold">الأقسام</h2>
      <div className="slider-controls">
        <button
          className="slider-arrowl arrow-left mt-5 shadow rounded"
          onClick={handlePrev}
        >
          ‹
        </button>
        <button
          className="slider-arrowr arrow-right mt-5 shadow rounded"
          onClick={handleNext}
        >
          ›
        </button>
      </div>
      <div className="slider-wrapper">
        <Slider {...settings} ref={sliderRef}>
          <Cardcategory />
          <Cardcategory />
          <Cardcategory />
          <Cardcategory />
          <Cardcategory />
        </Slider>
      </div>
    </div>
  );
}

export default CategorySlider;
