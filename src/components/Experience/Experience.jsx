import React from "react";
import Concentrix from "../../assets/concentrix/1.png";
import Concentrix2 from "../../assets/concentrix/2.png";
import Concentrix3 from "../../assets/concentrix/3.png";
import Concentrix4 from "../../assets/concentrix/4.png";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ExperienceData = [
  {
    id: 1,
    title: "Customer Advisor, Concentrix Limited Company",
    icon: Concentrix,
    desc1:
      "Delivered high-quality customer service via Phone, Chat, and Email, addressing inquiries and resolving account-related issues, returns, refunds, and damaged shipments.",
    desc2:
      "Raised tickets and escalated cases when necessary, ensuring timely solutions by connecting with higher-level or specialized departments.",
    desc3:
      "Collaborated with internal teams to enhance processes and improve KPIs such as customer satisfaction and response time.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Warehouse Specialist, Lazada Hub Company",
    icon: Concentrix2,
    desc1: "Provided support to Lazada customers via email, chat, and phone.",
    desc2:
      "Diagnose and resolved order, payment, delivery, and account issues.",
    desc3: "Demonstrated ability to learn new systems and procedures quickly.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Producer & Project Manager, Rhymends Music",
    icon: Concentrix4,
    desc1:
      "Managed creative direction and production for Club's annual music compilation album.",
    desc2:
      "Developed project plans and managed timelines for album release events and marketing activities.",
    desc3:
      "Produced, recorded, mixed, and mastered album original songs for the 2021 album.",
    desc4:
      "Lead a creative team of 6 members for songwriting, musical arrangements, and marketing collaterals",
    delay: 1.1,
  },
];

const Experience = () => {
  return (
    <>
      <section className="bg-brandDark text-white font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold font-varela text-center pb-10"
          >
            Recent Work
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ExperienceData.map((data) => (
              <motion.div
                variants={fadeUp(data.delay)}
                initial="hidden"
                whileInView="show"
                key={data.id}
                className="text-left space-y-4 flex flex-col items-center"
              >
                <h2 className="text-xl font-semibold font-varela text-center text-white">
                  {data.title}
                </h2>
                <ul className="list-disc pl-6 text-sm text-white/75 text-justify">
                  <li>{data.desc1}</li>
                  <li>{data.desc2}</li>
                  <li>{data.desc3}</li>
                </ul>
                {/* The image is now inside a flex layout to be horizontally aligned */}
                <div className="flex justify-center space-x-4">
                  {data.icon && (
                    <img
                      src={data.icon}
                      alt={data.title}
                      className="w-[340px] h-[340px]"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
