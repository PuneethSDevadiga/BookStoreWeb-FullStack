import React from 'react';
import list from '../../public/list.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';

const FreeBook = () => {
  const filterFree = list.filter((data) => data.category === "Free");
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 top-0 left-0 right-0 font-bold">
        <h1 className="pl-6">Free Offered Courses</h1>
        <div className='p-3'>
          <Slider {...settings}>
            {filterFree.map((item) => (
              <div key={item.id}>
                <Card item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;