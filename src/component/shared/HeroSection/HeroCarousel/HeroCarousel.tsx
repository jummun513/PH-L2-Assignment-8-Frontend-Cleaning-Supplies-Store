"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Product } from "@/types";
import HeroCarouselCard from "./HeroCarouselCard/HeroCarouselCard";
const HeroCarousel = ({ data }: { data: Product[] }) => {
  return (
    <div>
      <Swiper
        style={{ paddingBottom: "10px" }}
        keyboard={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            spaceBetween: 20,
          },
          380: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1520: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroCarouselCard item={item}></HeroCarouselCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
