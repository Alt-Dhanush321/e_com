import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ClientCard from "./ClientCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function ClientSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "visible" }}>
          <div className=''>
            <ClientCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
