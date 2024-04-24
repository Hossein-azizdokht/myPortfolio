import { useTranslation } from "next-i18next";

// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TestimonialItem from "./Testimonialtem";
import SectionTitle from "@/components/sectionTitle";
// import { TbBrandNextjs } from "react-icons/tb";

const TestimonialSlide = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="min-h-[calc(60vh)] items-center content-center flex">
      <div className="container">
        <SectionTitle
          title={t("home.testimonial.sectionTitle")}
          subTitle={t("home.testimonial.sectionSubTitle")}
        />
        <div className="row rtl">
          <Swiper
            spaceBetween={15}
            slidesPerView="auto"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            // navigation={true}
            autoplay={{
              delay: 3500,
              // disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper pb-5 pt-5 directionHandler"
            style={{ marginTop: "-45px" }}
          >
            {props.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem
                  client={i18n.language === "fa" ? item.clientfa : item.client}
                  paragraph={
                    i18n.language === "fa" ? item.paragraphfa : item.paragraph
                  }
                  position={
                    i18n.language === "fa" ? item.positionfa : item.position
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSlide;
