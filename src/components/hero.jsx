import React from "react";
import { HERO_CONTENT } from "../assets/index";
import pic from "../assets/pranav.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 lg:mt-[10rem] -z-10  pb-4 lg:mb-35">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.1 )}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Pranav Kumar
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container (0.5)} initial="hidden" animate="visible"
              className="my-2 max-w-xl text-[1.2rem] py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}{" "}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <motion.div initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }} className="flex lg:mt-[4rem] bg-white lg:w-[38vw] h-[46vh] lg:h-[70vh] rounded-full overflow-hidden lg:relative lg:bottom-[4rem] md:justify-center">
            <motion.img
              
              className="  img h-[37rem] max-w-[55rem] lg:h-[96vh]  lg:w-[71vw] rounded-full lg:mt-8   overflow:hidden"
              src={pic}
              alt="image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
