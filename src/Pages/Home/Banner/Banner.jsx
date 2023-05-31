import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../assets/Banner/1.jpg";
import img2 from "../../../assets/Banner/5.jpg";
import img3 from "../../../assets/Banner/3.jpg";
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="hero h-[500px]"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <div className="hero-overlay bg-blue-950 bg-opacity-40"></div>
          <div className=" text-center text-white">
            <h3 className="mb-5 text-3xl text-orange-500 font-bold">Welcome to Law Point</h3>
            <p className="text-xl">We are a</p>
            <h1 className="mb-5 text-7xl font-bold">
              Solution For Business & <br /> Individuals Tax
            </h1>
            <button className="btn bg-orange-600 hover:bg-orange-800">Contact Us</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
          className="hero h-[500px]"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <div className="hero-overlay bg-blue-950 bg-opacity-40"></div>
          <div className=" text-center text-white">
            <h3 className="mb-5 text-3xl text-orange-500 font-bold">Welcome to Law Point</h3>
            <p className="text-xl">We are a</p>
            <h1 className="mb-5 text-7xl font-bold">
              Solution For Business & <br /> Individuals Tax
            </h1>
            <button className="btn bg-orange-600 hover:bg-orange-800">Contact Us</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
          className="hero h-[500px]"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        >
          <div className="hero-overlay bg-blue-950 bg-opacity-40"></div>
          <div className=" text-center text-white">
            <h3 className="mb-5 text-3xl text-orange-500 font-bold">Welcome to Law Point</h3>
            <p className="text-xl">We are a</p>
            <h1 className="mb-5 text-7xl font-bold">
              Solution For Business & <br /> Individuals Tax
            </h1>
            <button className="btn bg-orange-600 hover:bg-orange-800">Contact Us</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
