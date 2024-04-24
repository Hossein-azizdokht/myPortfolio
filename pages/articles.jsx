import { useTranslation } from "next-i18next";
// Import Swiper React components

import SectionTitle from "@/components/sectionTitle";
import nextI18nextConfig from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

const Articles = (props) => {
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
          {props.articlesData?.map((item) => (
            <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Articles;

// Server Side request ---------------------------------------------------------------

export async function getServerSideProps(context) {
  // get portfolio data
  const Result = await fetch("http://localhost:3000/api/articles");
  const articlesData = await Result.json();

  return {
    props: {
      ...(await serverSideTranslations(
        context.locale ?? ["en", "fa"],
        ["common"],
        nextI18nextConfig
      )),
      articlesData,
    },
  };
}
