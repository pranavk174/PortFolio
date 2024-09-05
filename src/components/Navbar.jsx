import React from 'react'
import {NavLink,Link, useNavigate } from "react-router-dom"
import { SiCodeigniter } from "react-icons/si";


import { AiFillInstagram } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion"





export default function Navbar() {

  const iconVariants = (duration)=>({
    initial:{ rotate:0},
    animate:{
        rotate:10,
        transition:{
            duration:duration,
            ease:"linear",
            repeat :Infinity,
            repeatType:"reverse"
        }
    }
})

const iconVariants1 = (duration)=>({
  initial:{ scale:1},
  animate:{
      scale:1.2 ,
      transition:{
          duration:duration,
          ease:"linear",
          repeat :Infinity,
          repeatType:"reverse"
      }
  }
})
  return (
   <nav className="flex justify-between px-[4rem]  w-[100vw] z-10  lg:fixed top-0 mb-20 items-center   text-white h-[10vh]">
      
  <motion.div variants={iconVariants(1) } initial="initial" animate="animate" >
  <SiCodeigniter className="text-[2rem] text-purple-600" />

  </motion.div>

  <div className="flex gap-4 text-[1.7rem] items-center">


 <motion.a variants={iconVariants1(0.7) } initial="initial" animate="animate" href="https://www.linkedin.com/in/pranav-kumar-64b67625b"><  FaLinkedin  className=" text-blue-500"  /></motion.a>
 <motion.a variants={iconVariants1(1.1) } initial="initial" animate="animate" href="https://github.com/pranavk174"><  FaGithub className=" text-white" /></motion.a>
 <motion.a variants={iconVariants1(1.4) } initial="initial" animate="animate" href="https://www.instagram.com/d_bharadwaj_174/"><  AiFillInstagram className=" text-red-600"  /></motion.a>

 











  </div>
   </nav>
  )
}
