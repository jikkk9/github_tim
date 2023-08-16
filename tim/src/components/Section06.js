import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';


function Section06() {

  return (
    <div className='Section06 inner'>
      <div className="content">
        <h2>온비즈 서비스</h2>
        <div className='swiper_Box'>
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>

        </div>

      </div>
      <div className="swiperContainer">
        <Swiper
          navigation={{
            nextEl: '.swiper_Box .swiper-button-next',
            prevEl: '.swiper_Box .swiper-button-prev'
          }}

          scrollbar={{ hide: false }}
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={1}
        >
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide/slide1.jpg`} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide/slide2.jpg`} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide/slide3.jpg`} alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide/slide1.jpg`} alt="Slide 4" /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide/slide2.jpg`} alt="Slide 5" /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/img/slide/slide3.jpg`} alt="Slide 6" /></SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
}

export default Section06;
