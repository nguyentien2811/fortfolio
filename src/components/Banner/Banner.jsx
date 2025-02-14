import React from "react";
import Banner1 from "../../assets/huhu.png";
import { fadeUp } from "../Experience/Experience";
import { easeInOut, motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <section className="bg-brandDark text-white">
        <div
          className="container py-14 grid grid-cols-1 
        md:grid-cols-2 space-y-6 md:space-y-0 gap-12 "
        >
          {/*__ Banner image */}
          <div>
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
              src={Banner1}
              alt=""
              className="w-[300px] md:w-[400px] mx-auto"
            />
          </div>
          {/*__ Banner Text info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.7)}
                initial="hidden"
                animate="show"
                className="text-3xl lg:text-4xl font-semibold
                font-poppins"
              >
                Personal Skills and Certificates
              </motion.h1>
              <motion.div
                variants={fadeUp(0.9)}
                initial="hidden"
                animate="show"
              >
                <p>English speaking fluency</p>
                <p>Excel Basic for danalyst coursera</p>
                <p>Python for data science, AI and Development</p>
                <p>MOS certificate, proficiency in Word, Excel, Power Point</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
