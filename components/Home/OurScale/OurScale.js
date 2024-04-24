import React, { useState, useEffect } from "react";
import LogoRadar from "./LogoMotion";
import CountUp from "react-countup";
import Link from "next/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";

const loadAnimObjVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, scale: 0 }
};
function LoadAnimObj({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
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


function OurScale() {
  const { t } = useTranslation();
  return (

    <section className="ourScale">
      <div className="container">
        {/* <h4 className="section-title on-light text-center has-bullet mb-5">
          پارس تکنولوژی سداد در اعداد و ارقام
        </h4> */}
        <div className="row">
          {/* <div className="col-md-1"></div> */}
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 rightPart has-dots">
            <LoadAnimObj>

              <div className="card hoverAnim rt-obj">
                
                  <div className="card-icon">
                    <img src="/images/solar.svg" alt=""></img>
                  </div>
                  <div>
                    <div className="card-title">
                      <CountUp end={273} enableScrollSpy={true} />+
                    </div>
                    <div className="card-desc">
                      {t("home.ourScale.SBU")}
                    </div>
                  </div>
              </div>
            </LoadAnimObj>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 rightPart text-center">
            <LoadAnimObj>

              <div className="card hoverAnim rb-obj">
               
                  <div className="card-icon">
                    <img src="/images/units.svg" alt=""></img>
                  </div>
                  <div>
                    <div className="card-title">
                      <CountUp end={4000} enableScrollSpy={true} />+
                    </div>
                    <div className="card-desc">
                      {t("home.ourScale.CoveredUnits")}</div>
                  </div>
                
              </div>
            </LoadAnimObj>
          </div>
          <div className="middleElm">
            {/* <Logo_network /> */}
            {/* <img
              className="mainLogoMotion"
              src="/images/info_logo.svg"
              alt="pars logo"
            /> */}
            <LogoRadar />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 leftPart has-dots">
            <LoadAnimObj>

              <div className="card hoverAnim rt-obj">
               
                  <div className="card-icon">
                    <img src="/images/it_centers.svg" alt=""></img>
                  </div>
                  <div>
                    <div className="card-title">
                      <CountUp end={36} enableScrollSpy={true} />+
                    </div>
                    <div className="card-desc">
                      {t("home.ourScale.CityOffices")}
                    </div>
                  </div>
                
              </div>
            </LoadAnimObj>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 leftPart has-dots">
            <LoadAnimObj>

              <div className="card hoverAnim rb-obj">
               
                  <div className="card-icon">
                    <img src="/images/tools.svg" alt=""></img>
                  </div>
                  <div>
                    <div className="card-title">
                      <CountUp end={123} enableScrollSpy={true} />+
                    </div>
                    <div className="card-desc">
                      {t("home.ourScale.ProvincialOffices")}
                    </div>
                  </div>
                
              </div>
            </LoadAnimObj>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 leftPart has-dots">
            <LoadAnimObj>

              <div className="card hoverAnim rb-obj">
               
                  <div className="card-icon">
                    <img src="/images/contract.svg" alt=""></img>
                  </div>
                  <div>
                    <div className="card-title">
                      <CountUp end={12} enableScrollSpy={true} />+
                    </div>
                    <div className="card-desc">
                      {t("home.ourScale.EnterpriseCustomers")}
                    </div>
                  </div>
                
              </div>
            </LoadAnimObj>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 leftPart has-dots">
            <LoadAnimObj>

              <div className="card hoverAnim rb-obj">
               
                  <div className="card-icon">
                    <img src="/images/timing.svg" alt=""></img>
                  </div>
                  <div>
                    <div className="card-title">
                      <CountUp end={498} enableScrollSpy={true} />+
                    </div>
                    <div className="card-desc">
                      {t("home.ourScale.QueueManagement")}
                    </div>
                  </div>
                
              </div>
            </LoadAnimObj>
          </div>
          {/* <div className="col-md-1"></div> */}
        </div>
      </div>
    </section>

  );
}

export default OurScale;
