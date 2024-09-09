import React from "react";
import Header from "./Header.jsx";
import group2880 from "../img/Group-2880-1-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import brand1 from "../img/Group-1.png";
import brand2 from "../img/Group-2.png";
import brand3 from "../img/Group-3.png";
import brand4 from "../img/CORONA.png";
import brand5 from "../img/Group-1.png";
import "swiper/css";

function Hero() {
  return (
    <>
      <main id="homepage" className="hero-bg-img  bg-no-repeat bg-cover bg-center">
        <Header />
        <div className="2xl:w-[75%] 2xl:m-auto  h-screen  flex flex-col justify-center">
          <div>
            <img className="sm:w-[35%] w-[60%]" src={group2880} alt="Event" />
          </div>

          <h1 className="title text text-white font-extrabold md:py-4 pl-2 py-1 pt-2 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-5xl">
            <span className="">Let's play </span>
            <br className="md:hidden" />
            <span className="block mt-4  md:inline">garba with</span>
          </h1>
          <h1 className="title text text-white font-extrabold italic pb-3 pl-2 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-5xl">
            Jigardan Gadhavi
          </h1>

          {/* Slider */}
          <div className="md:py-10 pl-2 py-2 md:w-[45%] w-[80%]">
            {" "}
            {/* Decreased margin-top to reduce space */}
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={5000}
              modules={[Autoplay, Navigation]}
              onSlideChange={() => console.log("Slide changed")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div>
                  <img src={brand1} alt="Brand 1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brand2} alt="Brand 2" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brand3} alt="Brand 3" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brand4} alt="Brand 4" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={brand5} alt="Brand 5" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
