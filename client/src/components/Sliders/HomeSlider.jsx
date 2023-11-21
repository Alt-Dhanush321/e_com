import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper w-100 h-50 '
        style={{ zIndex: 0 }}
      >
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ zIndex: 0 }}>
          <div className='slide'>
            <h1>slides</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
