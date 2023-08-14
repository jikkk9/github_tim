import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/section01.css";

function Section01() {
  return (
    <div className="Section01">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <h2>
          모두를 위한, <br />
          작업공간
        </h2>
        <SwiperSlide className="bg">
          <img src="/img/section01/slideImg01.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg">
          <img src="/img/section01/slideImg02.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg">
          <img src="/img/section01/slideImg03.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg">
          <img src="/img/section01/slideImg04.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Section01;
