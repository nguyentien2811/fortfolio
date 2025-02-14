import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaPhone,
  FaTiktok,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const footer = () => {
  return (
    <>
      <footer className="bg-brandDark pt-12 pb-4 text-white">
        <div className="container pb-2">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="text-white font-bold text-center font-varela text-3xl"
          >
            Get in Touch
          </motion.h2>
          <div className="space-y-6">
            <h3 className="text-bm font-bold"></h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <li className="flex items-center gap-2">
              {" "}
              <FaPhone /> +84 375133672
            </li>
          </motion.div>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="flex items-center gap-4 mt-2"
          >
            <FaInstagram />
            rms.raggetty
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="flex items-center gap-4 mt-2"
          >
            <FaMapLocation />
            nguyentien2811ht@gmail.com{" "}
          </motion.li>

          {/* copyright section */}
          <p className="text-white text-center mt-8 border-t-2 pt-8">
            @2025. All Rights Reserve || Timmy
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;
