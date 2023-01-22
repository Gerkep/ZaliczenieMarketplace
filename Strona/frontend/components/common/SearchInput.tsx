import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 }, y: 0 },
    hidden: { opacity: 0, scale: 0.5, y: 50}
  };
  
export default function ScalingElement(props: { children: any }) {

    const controls = useAnimation();

    useEffect(() => {
        // if (inView) {
          controls.start("visible");
        // }
      }, [controls]);

    return(
        <motion.div variants={animationVariants} animate={controls} initial="hidden">
            {props.children}
        </motion.div>
    )
}