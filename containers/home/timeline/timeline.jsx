import BaseURL from "@/config/index";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
const GalleryPath = "/files/news_gallery/"; //مسیر تصاویر خبر

import nextI18nextConfig from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Logo_network from "public/images/logo_network";
import { useTranslation } from "next-i18next";
import { CgArrowLongLeftE, CgArrowRight } from "react-icons/cg";
import SectionTitle from "@/components/sectionTitle";
export async function getServerSideProps(context) {
  const res = await fetch(`${BaseURL}/timeline`);
  const data = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(
        context.locale ?? "fa",
        ["common"],
        nextI18nextConfig
      )),
      tileline: data,
    },
  };
}

const Timeline = ({ data }) => {
  const { t, i18n } = useTranslation();

  const loadAnimObjVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };
  function LoadAnimObj({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      setTimeout(() => {
        if (inView) {
          controls.start("visible");
        }
      }, 300);
    }, [controls, inView]);
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={loadAnimObjVariants}
        className="square"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section className="min-h-[calc(60vh)] items-center content-center flex">
      <Container>
        <div className="row items-center">
          <div className="col-md-7">
            <SectionTitle
              title={t("home.timeline.sectionTitle")}
              subTitle={t("home.timeline.sectionSubTitle")}
            />

            <ul className="w-full !mt-4 ltr p-0 connectedList">
              {data?.map((n, index) => (
                <LoadAnimObj key={n.index}>
                  <li
                    key={n.index}
                    className={`w-full flex flex-col flex-wrap relative min-w-fit pt-[20px] pb-[20px] wow fadeInUp ${
                      i18n.language === "fa"
                        ? "rtl pr-8 border-r"
                        : "ltr pl-8 border-l"
                    }`}
                    transition={{ delay: index * 0.4 }}
                  >
                    <div className="list_inner float-left text-[16px]">
                      <span>{i18n.language === "fa" ? n.fromfa : n.from}</span>
                      <span className="mx-2 text-slate-300">
                        <CgArrowRight
                          className={`inline-block text-2xl ${
                            i18n.language === "en" ? "" : "rotate-180"
                          }`}
                        />
                      </span>
                      <span>{i18n.language === "fa" ? n.tofa : n.to}</span>
                    </div>
                    <div className="list_inner float-left text-[16px]">
                      <span className="text-black font-medium">{n.stack}</span>
                      <span> {i18n.language === "fa" ? " در " : " at "}</span>
                      <span className="">
                        {i18n.language === "fa" ? n.companyfa : n.company}
                      </span>
                    </div>

                    {/* <div>n.</div> */}
                  </li>
                </LoadAnimObj>
              ))}
            </ul>
          </div>
          <div className="col-md-5">
            <Logo_network />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;

Timeline.defaultProps = {
  data: [],
};
