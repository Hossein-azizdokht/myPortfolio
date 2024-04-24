import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";
import { BsBootstrap } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoNodejs, IoLogoSass } from "react-icons/io5";
import { RiHtml5Line, RiReactjsLine } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiMui,
  SiTypescript,
} from "react-icons/si";
import { TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../../components/sectionTitle";

// import { TbBrandNextjs } from "react-icons/tb";

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

const MySkills = (props) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[700px] items-center content-center flex">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <TbBrandNextjs
                          size={35}
                          className="m-auto stroke-slate-600 hover:stroke-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Next Js
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <IoLogoSass
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Sass
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>

              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <RiHtml5Line
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        HTML
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-4 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim !shadow-none">
                    <Link href="" className="text-center">
                      <div className="card-icon">
                        <RiReactjsLine
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.call center 24/7")} */}
                        React Js
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none hover>*:fill-orange-300">
                    <Link href="">
                      <div className="card-icon">
                        <SiMui
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Material Ui
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <BsBootstrap
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Bootstrap
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
            </div>

            <SectionTitle
              small
              title={t("home.skills.secondTitle")}
              subTitle={t("home.skills.secondSubTitle")}
              classes="mt-4"
            />
            <div className="row">
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none hover:[&>*]:!text-orange-600">
                    <Link href="">
                      <div className="card-icon">
                        <IoLogoNodejs
                          size={35}
                          className="m-auto hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Node Js
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <TbBrandMongodb
                          size={35}
                          className="m-auto stroke-slate-600 hover:stroke-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        MongoDB
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <FaGitAlt
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Git
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>

              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <SiAdobephotoshop
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Photoshop
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <SiAdobexd
                          size={35}
                          className="m-auto stroke-slate-600 hover:stroke-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Adobe XD
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
              <div className="col-6 col-lg-4 col-md-6 col-sm-6">
                <LoadAnimObj>
                  <div className="p-3 bg-slate-50 mb-2 hoverAnim text-center !shadow-none">
                    <Link href="">
                      <div className="card-icon">
                        <SiTypescript
                          size={35}
                          className="m-auto fill-slate-600 hover:fill-orange-300 transition-colors"
                        />
                      </div>
                      <div className="font-light text-sm">
                        {/* {t("home.services.Repairs and supply")} */}
                        Typescript
                      </div>
                    </Link>
                  </div>
                </LoadAnimObj>
              </div>
            </div>
          </div>
          <div className="col-md-6 !pl-10">
            <SectionTitle
              title={t("home.skills.sectionTitle")}
              subTitle={t("home.skills.sectionSubTitle")}
            />
            <div className="w-full h-auto relative z-[3]">
              <div className="">
                <div
                  className="text w-full float-left mt-[10px] mb-[24px] wow fadeInUp"
                  data-wow-duration=".7s"
                >
                  <p className="text-slate-500 m-0 text-sm">
                    {t("home.skills.description")}
                  </p>
                </div>
                <div
                  className="dodo_progress wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".2s"
                >
                  <div className="progress_inner" data-value="95">
                    <div className="flex w-full justify-between mb-1">
                      <span className="label">HTML &amp; CSS &amp; SASS</span>
                      <span className="number">95%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <div className="flex w-full justify-between mb-1">
                      <span className="label">React Js</span>
                      <span className="number">80%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="50">
                    <div className="flex w-full justify-between mb-1">
                      <span className="label">Next Js</span>
                      <span className="number">50%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="65">
                    <div className="flex w-full justify-between mb-1">
                      <span className="label">Git</span>
                      <span className="number">65%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <div className="flex w-full justify-between mb-1">
                      <span className="label">Adobe XD</span>
                      <span className="number">80%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="20">
                    <div className="flex w-full justify-between mb-1">
                      <span className="label">Typescript Js</span>
                      <span className="number">20%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
