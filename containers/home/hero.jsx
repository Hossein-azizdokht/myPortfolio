import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import CountUp from "react-countup";

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const loadAnimObjVariants = {
    visible: { opacity: 1, scale: 1, blur: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.9, blur: 3 },
  };
  function LoadAnimObj({ children, className }) {
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
        className={`square ${className && className}`}
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

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.pause();

    let ticking = false;

    const updateVideo = () => {
      ticking = false;
      if (!video.duration) return;

      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const sectionTop = section.offsetTop;
      const progress = Math.min(
        Math.max((window.scrollY - sectionTop) / scrollable, 0),
        1
      );

      video.currentTime = progress * video.duration;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVideo);
        ticking = true;
      }
    };

    const onLoadedMetadata = () => updateVideo();

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    window.addEventListener("scroll", onScroll, { passive: true });
    updateVideo();

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative h-[250vh]">
      <div className="hero sticky top-[62px] min-h-[calc(100vh-62px)] flex items-center">
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
                  <span className="text-3xl text-slate-400 font-extralight">
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
                    <LoadAnimObj className="md:flex-col flex items-start">
                      <li className="mr-[10px] mb-[15px] py-0 inline-block border-r pr-4 border-dashed border-r-slate-400 md:!border-none">
                        <div className="list_inner flex items-center">
                          <h3 className="text-[35px] font-light text-orange-500 ltr">
                            +<CountUp end={10} enableScrollSpy={true} />
                          </h3>
                          <span className="font-poppins pl-[10px] inline-block leading-[1.4] relative top-[-3px] text-xs">
                            {t("home.hero.experience1")}
                            <br />
                            {t("home.hero.experience2")}
                          </span>
                        </div>
                      </li>

                      <li className="mb-[15px] py-0 inline-block">
                        <div className="list_inner flex items-center">
                          <h3 className="text-[35px] font-light text-orange-500 ltr">
                            +<CountUp end={500} enableScrollSpy={true} />
                          </h3>
                          <span className="font-poppins pl-[10px] inline-block leading-[1.4] relative top-[-3px] text-[xs]">
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
                <video
                  ref={videoRef}
                  className="image hover:grayscale transition-all brightness-[1.05] w-full max-w-[500px]"
                  src="/11.mp4"
                  muted
                  playsInline
                  preload="auto"
                />
              </LoadAnimObj>
            </div>
          </div>
          <LoadAnimObj>
            <Link to="skills" smooth={true} id="skills">
              <div className="scroll m-auto md:top-16 relative"></div>
            </Link>
          </LoadAnimObj>
        </div>
      </div>
    </section>
  );
};

export default Hero;
