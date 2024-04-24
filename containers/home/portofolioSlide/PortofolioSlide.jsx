import { useTranslation } from "next-i18next";
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import SectionTitle from "@/components/sectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import PortofolioItem from "./PortofolioItem";
import PortfolioLightbox from "./portfolioLightbox";
import { useState } from "react";

const PortofolioSlide = (props) => {
  const { t, i18n } = useTranslation();
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxData, setLightboxData] = useState({});
  function showImage(item) {
    setShowLightbox(true);
    setLightboxData(item);
  }

  function closeLightbox() {
    setShowLightbox(false);
  }
  return (
    <section className="min-h-[calc(60vh)]  items-center content-center flex">
      <div className="container">
        <SectionTitle
          title={t("home.portfolio.sectionTitle")}
          subTitle={t("home.portfolio.sectionSubTitle")}
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            navigation={true}
            autoplay={{
              delay: 3500,
              // disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper pb-5 pt-5 directionHandler"
            style={{ marginTop: "-45px" }}
          >
            {props.data?.map((item) => (
              <SwiperSlide key={item.id} onClick={() => showImage(item)}>
                <PortofolioItem
                  // link={item.url}
                  title={i18n.language === "fa" ? item.titlefa : item.title}
                  desc={item.desc}
                  // date={item.publishDate}
                  id={item.id}
                  cover={item.cover}
                  icons={item.icons}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <PortfolioLightbox
            show={showLightbox}
            data={lightboxData}
            close={() => closeLightbox}
          />
        </div>
      </div>
    </section>
  );
};
export default PortofolioSlide;
