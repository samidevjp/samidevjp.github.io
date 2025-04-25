import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TechSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="p_slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p_slider__item">
            <img src={slide.img} alt={slide.title} />
            <div className="p_slider__cap">
              <p className="u_txt--gray">{slide.title}</p>
              <p className="u_txt--s u_txt--gray">{slide.lead}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechSlider;
