import React from "react";
import Navbar from "../components/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSection = ({ films }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Speed in milliseconds
    pauseOnHover: true,
  };

  return (
    <div className="min-h-screen relative bg-no-repeat md:bg-repeat-round pt-4 px-4 md:px-12 md:bg-customSection">
      <Navbar />
      <div id="section1" className="w-[35%] hidden md:block">
        {films.length === 0 ? (
          <div className="flex items-center min-h-custom text-white justify-center">
            <div className="spinner mr-4 mb-4"></div>
            <p className="text-xl">Loading films...</p>
          </div>
        ) : (
          <Slider {...settings}>
            {films.map((film) => (
              <div key={film.episode_id} className="p-4">
                <div className="text-white flex items-center min-h-custom">
                  <div>
                    <h1 className="text-[42px] font-bold mb-2">{film.title}</h1>
                    <p className="text-base mb-4">2022 | 2H 3M</p>
                    <p className="text-base mb-4">{film.opening_crawl}</p>
                    <button className="bg-[#FFB400] text-[#111111] px-4 py-2 rounded-3xl font-semibold flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.28125 1.21875L13.2812 6.71875C13.7188 7 14 7.5 14 8C14 8.53125 13.7188 9.03125 13.2812 9.28125L4.28125 14.7812C3.8125 15.0625 3.21875 15.0938 2.75 14.8125C2.28125 14.5625 2 14.0625 2 13.5V2.5C2 1.96875 2.28125 1.46875 2.75 1.21875C3.21875 0.9375 3.8125 0.9375 4.28125 1.21875Z"
                          fill="#041836"
                        />
                      </svg>
                      <span className="ml-2">Play</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className="block md:hidden bg-customSectionMobile h-screen rounded-2xl bg-cover relative mt-4">
        {films.length === 0 ? (
          <div className="flex items-center min-h-custom text-white justify-center">
            <div className="spinner mr-4 mb-4"></div>
            <p className="text-xl">Loading films...</p>
          </div>
        ) : (
          <div key={films[0].episode_id} className="p-4">
            <div className="text-white flex items-center min-h-custom">
              <div className="mt-72">
                <h1 className="text-[42px] font-bold mb-2">{films[0].title}</h1>
                <div className="flex items-center mb-4">
                  <p className="bg-[#0249A6] text-[#FFE546] p-2 mr-2">2022</p>
                  <p className="bg-[#0249A6] text-[#FFE546] p-2 mr-2">2h 33m</p>
                  <p className="bg-[#0249A6] text-[#FFE546] p-2 mr-2">Action</p>
                </div>
                <p className="text-xs font-medium mb-8">
                  {films[0].opening_crawl}
                </p>
                <div className="grid grid-cols-2">
                  <button className="bg-[#FFB400] text-[#111111] px-4 py-2 rounded-3xl font-semibold flex items-center justify-center mr-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.28125 1.21875L13.2812 6.71875C13.7188 7 14 7.5 14 8C14 8.53125 13.7188 9.03125 13.2812 9.28125L4.28125 14.7812C3.8125 15.0625 3.21875 15.0938 2.75 14.8125C2.28125 14.5625 2 14.0625 2 13.5V2.5C2 1.96875 2.28125 1.46875 2.75 1.21875C3.21875 0.9375 3.8125 0.9375 4.28125 1.21875Z"
                        fill="#041836"
                      />
                    </svg>
                    <span className="ml-2">Play</span>
                  </button>
                  <button className="border border-[#FFB400] text-[#FFB400] px-4 py-2 rounded-3xl font-semibold flex items-center justify-center">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9133 4.26666C12.9133 5.63583 11.8025 6.74666 10.4333 6.74666C9.68416 6.74666 9.0125 6.43666 8.5475 5.89416L6.2225 7.05666C6.27416 7.23749 6.3 7.41833 6.3 7.57333C6.3 7.75416 6.27416 7.93499 6.2225 8.11583L8.5475 9.25249C9.0125 8.73583 9.68416 8.39999 10.4333 8.39999C11.8025 8.39999 12.9133 9.51083 12.9133 10.88C12.9133 12.2492 11.8025 13.36 10.4333 13.36C9.06416 13.36 7.95333 12.2492 7.95333 10.88C7.95333 10.725 7.95333 10.5442 8.005 10.3633L5.68 9.20083C5.215 9.74333 4.54333 10.0533 3.82 10.0533C2.45083 10.0533 1.34 8.94249 1.34 7.57333C1.34 6.20416 2.45083 5.09333 3.82 5.09333C4.54333 5.09333 5.215 5.42916 5.68 5.94583L8.005 4.80916C7.95333 4.62833 7.95333 4.44749 7.95333 4.26666C7.95333 2.89749 9.06416 1.78666 10.4333 1.78666C11.8025 1.78666 12.9133 2.89749 12.9133 4.26666ZM3.82 8.81333C4.25916 8.81333 4.64666 8.58083 4.87916 8.19333C5.11166 7.83166 5.11166 7.34083 4.87916 6.95333C4.64666 6.59166 4.25916 6.33333 3.82 6.33333C3.355 6.33333 2.9675 6.59166 2.735 6.95333C2.5025 7.34083 2.5025 7.83166 2.735 8.19333C2.9675 8.58083 3.355 8.81333 3.82 8.81333ZM11.6733 4.26666C11.6733 3.82749 11.415 3.43999 11.0533 3.20749C10.6658 2.97499 10.175 2.97499 9.81333 3.20749C9.42583 3.43999 9.19333 3.82749 9.19333 4.26666C9.19333 4.73166 9.42583 5.11916 9.81333 5.35166C10.175 5.58416 10.6658 5.58416 11.0533 5.35166C11.415 5.11916 11.6733 4.73166 11.6733 4.26666ZM10.4333 12.12C10.8725 12.12 11.26 11.8875 11.4925 11.5C11.725 11.1383 11.725 10.6475 11.4925 10.26C11.26 9.89833 10.8725 9.63999 10.4333 9.63999C9.96833 9.63999 9.58083 9.89833 9.34833 10.26C9.11583 10.6475 9.11583 11.1383 9.34833 11.5C9.58083 11.8875 9.96833 12.12 10.4333 12.12Z"
                        fill="#FFB400"
                      />
                    </svg>
                    <span className="ml-2">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
