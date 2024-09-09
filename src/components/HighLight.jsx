import React from "react";
// import "./highlight.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
function HighLight() {
  return (
    <div id="highlight" className="font-[Plus Jakarta Sans] p-2 2xl:w-[70%] w-[90%] m-auto  text-white md:pb-20 pb-10 max-md:w-11/12">
      <div className="flex items-center">
        <span className="line text-[#b20e5d] md:text-5xl text-3xl font-normal md:mr-5 md:mb-2 mr-1">
          ―
        </span>{" "}
        <h1 className=" highlight_title font-semibold md:text-2xl text-lg cursor-pointer">
          {" "}
          Highlights
        </h1>
      </div>

      <div className=" flex justify-between max-md:flex-col">
        <h1 className="md:w-1/2 w-full font-[Poppins] md:text-6xl text-4xl font-bold">
          Cultural Vibes
        </h1>
        <p className="w-1/2 font-[Open Sans] text-gray-500 md:text-lg text-base max-md:w-full max-md:mt-5">
          Join us for an unforgettable Navratri with delicious food, captivating
          music, and energetic Garba-Dandiya. Immerse yourself in vibrant
          traditions and joyful festivities night long!
        </p>
      </div>

      <div className="md:mt-20 mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={5000}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="border h-64 border-gray-600 md:rounded-3xl rounded-2xl   px-10 py-10">
              <img
                src="https://themeperch.net/eventiva/wp-content/themes/eventiva/assets/images/home-1/highlights-icon-1.png"
                alt=""
              />
              <h1 className="md:text-3xl text-2xl font-extrabold mt-12">
                Immersive Sound and Lightung
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border h-64 border-gray-600  md:rounded-3xl rounded-2xl px-10 py-10">
              <img
                src="https://themeperch.net/eventiva/wp-content/themes/eventiva/assets/images/home-1/highlights-icon-1.png"
                alt=""
              />
              <h1 className="md:text-3xl text-2xl font-extrabold mt-14">
                Exquisite Food & Drink
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border h-64 border-gray-600   md:rounded-3xl rounded-2xl px-10 py-10">
              <img
                src="https://themeperch.net/eventiva/wp-content/themes/eventiva/assets/images/home-1/highlights-icon-1.png"
                alt=""
              />
              <h1 className="md:text-3xl text-2xl font-extrabold mt-14">
                Diverse Musical Lineup
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border h-64 border-gray-600  md:rounded-3xl rounded-2xl px-10 py-10">
              <img
                src="https://themeperch.net/eventiva/wp-content/themes/eventiva/assets/images/home-1/highlights-icon-1.png"
                alt=""
              />
              <h1 className="md:text-3xl text-2xl font-extrabold mt-12">
                Immersive Performance
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border h-64 border-gray-600  md:rounded-3xl rounded-2xl px-10 py-10">
              <img
                src="https://themeperch.net/eventiva/wp-content/themes/eventiva/assets/images/home-1/highlights-icon-1.png"
                alt=""
              />
              <h1 className="md:text-3xl text-2xl font-extrabold mt-12">
                Main Stage Extravaganza
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HighLight;
