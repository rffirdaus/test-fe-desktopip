import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './customArrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FilmSlider = ({ films }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow className='bg-[#0249A]' />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id='list' className="px-4 md:px-12 pt-4 mt-12">
      <div className='hidden md:block'>
        <Slider {...settings}>
          {films.map((film) => (
            <div key={film.episode_id} className="p-4">
              <div className="bg-white p-4 rounded shadow-md text-black bg-section-list bg-repeat-round h-[330px] w-full relative">
                <div className='absolute bottom-7 ml-1 flex items-center'>
                  <h2 className="text-xl text-white mr-2">{film.title}</h2>
                  <div className="bg-[#FFB400] text-[#111111] px-4 py-1 rounded-md font-semibold">Exclusive</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <p className='text-base font-bold text-white mb-4 md:hidden'>Category 2</p>
      <div className='md:hidden grid grid-cols-2 gap-4 '>
        {films.slice(0, 2).map((film) => (
          <div key={film.episode_id} className="mb-4">
            <div className="bg-white shadow-md text-black bg-section-list bg-repeat-round w-full h-[100px] relative">
              <div className='absolute bottom-1 ml-1 flex items-center'>
                <h2 className="text-[10px] text-white mr-2">{film.title}</h2>
                <div className="bg-[#FFB400] text-[#111111] px-4 py-1 rounded-md font-semibold text-[10px]">Exclusive</div>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default FilmSlider;