import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import navratri1 from "../img/navratri-img1.webp";
import navratri2 from "../img/navratri-img2.webp";
import navratri3 from "../img/navratri-img3.webp";
import navratri4 from "../img/navratri-img4.webp";
import navratri5 from "../img/image6.webp";
import navratri6 from "../img/navratri-img7.webp";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slider from "../small-Components/Slider";

function Infinight() {
  return (
    <div>
      <div className="mt-20 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          speed={5000}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <Slider src={navratri1} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri2} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri3} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri4} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri5} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri1} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri6} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mt-10 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          speed={10000}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <Slider src={navratri1} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri2} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri3} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri4} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri5} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri1} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider src={navratri6} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Infinight;
