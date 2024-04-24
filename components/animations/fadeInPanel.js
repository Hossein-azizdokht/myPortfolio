import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInPanel = ({ children }) => {
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

  return <LoadAnimObj>{children}</LoadAnimObj>;
};

export default FadeInPanel;
