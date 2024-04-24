import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SectionTitle from "@/components/sectionTitle";

function OurCustomers() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <section className="min-h-[50vh] customers">
      <div className="container p-5">
  
        <SectionTitle title={t("home.ourCustomers.sectionTitle")} subTitle={t("home.ourCustomers.sectionSubTitle")} />
        <Swiper
          spaceBetween={15}
          slidesPerView="auto"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <img src={`/images/customers/1.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/2.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/3.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/4.png`} alt="customer logo" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={`/images/customers/5.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/6.png`} alt="customer logo" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={`/images/customers/7.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/8.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/9.png`} alt="customer logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`/images/customers/10.png`} alt="customer logo" />
          </SwiperSlide>
  
        </Swiper>
      </div>
    </section>
  );
}

export default OurCustomers;
