"use client";

import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -----------------------------------------------

export default function BrandsCarousel({ brands }) {
  
  
  // brands is an array that includes image paths

  const settings = {
    arrows: true,
    speed: 5000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-row items-center justify-center outline-none"
          >
            <img
              alt="brand_logos"
              src={brand.image}
              style={{
                width: "55%",
                height: "75px",
              }}
              className="aspect-square object-contain outline-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

BrandsCarousel.propTypes = {
  brands: PropTypes.array,
};
