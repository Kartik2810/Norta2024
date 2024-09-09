import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import brand1 from "../img/Group-1.png";
import brand2 from "../img/Group-2.png";
import brand3 from "../img/Group-3.png";
import brand4 from "../img/CORONA.png";
import brand5 from "../img/Group-1.png";
import { Autoplay } from "swiper/modules";

function BehindUS() {
  return (
    <div
      id="sponser"
      className="text-white 2xl:w-[70%] w-[90%] md:pt-2 mx-auto"
    >
      <div className="md:p-14 p-5 md:mt-20  border border-gray-600 md:rounded-3xl rounded-2xl bg-[#0c0614]">
        <div className="flex items-center">
          <span className="line text-[#b20e5d] md:text-5xl text-3xl font-normal md:mr-5 md:mb-2 mr-1">
            ―
          </span>{" "}
          <h1 className=" highlight_title font-semibold md:text-2xl text-lg py-2 cursor-pointer">
            {" "}
            The Power Behind Us
          </h1>
        </div>

        <div className=" flex justify-between max-md:flex-col">
          <h1 className="font-[Poppins] flex-1 music md:text-6xl text-4xl font-bold pr-10">
            Our Partners
          </h1>
          <p className="flex-1 music_pera text-gray-500 md:text-lg text-base max-md:w-full max-md:mt-5">
            Immerse in mesmerizing performances,vibrant soundscapes,and
            interactive art at our music extravaganza. Experience a festival
            atmosphere like no other, where unforgettable moments.
          </p>
        </div>

        <div className="md:mt-20 mt-10 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img className="" src={brand1} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" ">
                <img src={brand2} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" r">
                <img src={brand3} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" ">
                <img src={brand4} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" ">
                <img src={brand5} alt="" srcset="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BehindUS;
