import React from "react";
import Photo from "../../assets/image1.png";
import { motion, easeInOut } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const infoData = [
  {
    id: 1,
    image: Photo,
    title: "Timmy Nguyen",
    description:
      "Hello, My name is Timmy, Customer-Focused Professional with 1 Years of Experience in Client Support and Service Excellence. Dedicated Customer Support Representative with Strong Problem-Solving and Communication Skill.Seeking to apply strong technical aptitude and customer service skills to empower users and ensure excellent service experiences.",
    bgColor: "#8b5958",
  },
];

const Hero = () => {
  const [active, setActiveData] = React.useState(infoData[0]);

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/*____Text Info___*/}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <motion.h1
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-6xl font-bold text-white/90"
              >
                {active.title}
                <span className="text-2xl lg:text-4xl font-bold text-white/90 ">
                  {" "}
                  {active.myname}
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {active.description}
              </motion.p>
              <motion.a
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                href=""
                target="_blank"
                rel="noopener noreferer"
                download
                className="px-4 py-2 inline-block font-normal border-2 border-white text-white rounded-md hover:bg-white hover:text-black"
              >
                Download My CV
              </motion.a>
            </div>
          </div>

          {/*____Hero Image___*/}
          <div className="flex items-center justify-center">
            <motion.img
              key={active.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: {
                  duration: 0.2,
                },
              }}
              src={active.image}
              alt={active.title}
              className="w-[300px] md:w-[400px] opacity-70"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
