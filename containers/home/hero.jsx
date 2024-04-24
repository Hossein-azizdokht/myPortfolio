import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import CountUp from "react-countup";

const Hero = () => {
  const loadAnimObjVariants = {
    visible: { opacity: 1, scale: 1, blur: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.9, blur: 3 },
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

  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="hero min-h-[calc(100vh-62px)] flex items-center"
    >
      <div class="canvas">
        <div class="circles">
          <div class="circle research"></div>
          <div class="circle design"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-5 pl-[0.8rem]">
              <LoadAnimObj>
                <span className="text-2xl text-slate-400 font-light">
                  {t("home.hero.myName")}
                </span>
              </LoadAnimObj>
              <h3 className="hero-mainText text-[45px] font-bold text-black leading-[1] mt-1 uppercase mb-[15px]">
                {t("home.hero.myWork1")}
                <span className="font-extralight text-slate-400">
                  {t("home.hero.myWork2")}
                </span>
              </h3>

              <div className="services w-full h-auto clear-both mb-[15px]">
                <ul className="pl-0">
                  {/* work item 1 */}
                  <li className="w-full hero-workItem">
                    <a
                      className="text-black text-[17px] inline-block py-[8px] px-0 relative transition-all duration-300"
                      href=""
                    >
                      {/* <img
                          className="image"
                          src="assets/img/service/1.jpg"
                          alt=""
                        /> */}
                      <span>{t("home.hero.workItem1")}</span>
                      <svg
                        id="null"
                        enableBackground="new 0 0 64 64"
                        height="512"
                        viewBox="0 0 64 64"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg relative w-[17px] h-[17px] left-[10px] transition-all duration-300 inline-block replaced-svg"
                      >
                        <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"></path>
                      </svg>
                    </a>
                  </li>
                  {/* work item 2 */}
                  <li className="w-full hero-workItem">
                    <a
                      className="text-black text-[17px] inline-block py-[8px] px-0 relative transition-all duration-300"
                      href=""
                    >
                      {/* <img
                          className="image"
                          src="assets/img/service/2.jpg"
                          alt=""
                        /> */}
                      <span>{t("home.hero.workItem2")}</span>
                      <svg
                        id="null"
                        enableBackground="new 0 0 64 64"
                        height="512"
                        viewBox="0 0 64 64"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg relative w-[17px] h-[17px] left-[10px] transition-all duration-300 inline-block replaced-svg"
                      >
                        <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"></path>
                      </svg>
                    </a>
                  </li>
                  {/* work item 3 */}
                  <li className="w-full hero-workItem">
                    <a
                      className="text-black text-[17px] inline-block py-[8px] px-0 relative transition-all duration-300"
                      href=""
                    >
                      {/* <img
                          className="image"
                          src="assets/img/service/3.jpg"
                          alt=""
                        /> */}
                      <span>{t("home.hero.workItem3")}</span>
                      <svg
                        id="null"
                        enableBackground="new 0 0 64 64"
                        height="512"
                        viewBox="0 0 64 64"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg relative w-[17px] h-[17px] left-[10px] transition-all duration-300 inline-block replaced-svg"
                      >
                        <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="short_info w-full h-auto clear-both">
                <ul className="pl-0">
                  <LoadAnimObj>
                    <li className="mr-[50px] mb-[15px] py-0 inline-block">
                      <div className="list_inner flex items-center">
                        <h3 className="text-[45px] font-extralight text-orange-500 ltr">
                          +<CountUp end={8} enableScrollSpy={true} />
                        </h3>
                        <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                          {t("home.hero.experience1")}
                          <br />
                          {t("home.hero.experience2")}
                        </span>
                      </div>
                    </li>

                    <li className="mb-[15px] py-0 inline-block">
                      <div className="list_inner flex items-center">
                        <h3 className="text-[45px] font-extralight text-orange-500 ltr">
                          +<CountUp end={350} enableScrollSpy={true} />
                        </h3>
                        <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                          {t("home.hero.customers1")}
                          <br />
                          {t("home.hero.customers2")}
                        </span>
                      </div>
                    </li>
                  </LoadAnimObj>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 flex items-center">
            <LoadAnimObj>
              <Image
                className="image hover:filter-none transition-all brightness-[1.05] grayscale w-full"
                src="/images/gallery/1.png"
                alt=""
                width={500}
                height={0}
              />
            </LoadAnimObj>
          </div>
        </div>
        <LoadAnimObj>
          <Link to="skills" smooth={true} id="skills">
            <div className="scroll m-auto top-16 relative"></div>
          </Link>
        </LoadAnimObj>
      </div>
    </section>
  );
};

export default Hero;
