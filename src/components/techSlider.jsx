import React from "react";
import Slider from "react-slick";

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
          <div key={index} className="">
            <img src={slide.img} alt={slide.title} className="u_mb--40" />
            <p className="">{slide.title}</p>
            <p className="u_txt--s">{slide.lead}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechSlider;
