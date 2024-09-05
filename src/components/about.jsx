import React from 'react'
import {ABOUT_TEXT} from "../assets/index"
import { motion } from "framer-motion";

export default function About() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: delay },
    },
   
  });

  return (
    <div className="border-b border-neutral-900 pb-4">
<motion.h1 whileInView={{ y: 0, opacity: 1 }}
     
     initial={{ y: -100, opacity: 0 }}

     transition={{ duration: 0.4 , delay:0.4}} className="my-20 text-center text-4xl">About <span className="text-neutral-500"> Me</span></motion.h1>
<div className="flex flex-wrap">
    <div className="  w-full lg:w-1/2 lg:p-8">
<motion.div variants={container(0.4 )}
              whileInView="visible"
              initial="hidden"
               className="flex items-center justify-center">
    <img  src="https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_1728,q_auto" alt="" className="rounded-2xl w-[25rem] h-[20rem]" />
     </motion.div>
    </div>
    <div className="w-full lg:w-1/2">
    <div className="flex font-light tracking-tighter text-[1.2rem] mt-[3rem] justify-center  lg:justify-start">
        <motion.p
         whileInView={{ x: 0, opacity: 1 }}
     
         initial={{ x: 100, opacity: 0 }}
    
         transition={{ duration: 0.4 , delay:0.4}}>{ABOUT_TEXT} </motion.p>
    </div>
     </div>
</div>
    </div>
  )
}
