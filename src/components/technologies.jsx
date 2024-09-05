import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";














export default function Technologies() {

    const container = {
        hidden: { opacity: 0 , scale:0  },
        visible: {
          opacity: 1,
          scale:1,
          transition: {
            delay: 0.3,
            duration: 0.4
          }
        }
      }
        
    //   const item = (duration)=>( {
    //     hidden: { y: -10, opacity: 0 },
    //     visible: {
    //       y: [10,-10] ,
    //       opacity: 1,
    //       transition : {duration:duration , delay :0.3 , ease:"linear",repeat:Infinity , repeatType:"reverse"}
    //     }
    //   })

    const iconVariants = (duration)=>({
        initial:{y:-10 , x:20 },
        animate:{
            y:[10, -10],
            x:[-10,15],
            transition:{
                duration:duration,
                ease:"linear",
                repeat :Infinity,
                repeatType:"reverse"
            }
        }
    })



  return (
    <div className="border-b flex flex-col justify-center items-center border-neutral-800 pb-24">
      <motion.h1  whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
     transition={{ duration: 0.4 , delay:0.4}} className="my-20 text-center text-4xl">Technologies & Skills</motion.h1>
      <motion.div variants={container} initial="hidden" whileInView="visible"  className="grid grid-cols-3  lg:grid-cols-6  lg:w-[70vw]   sm:w-[90vw]  lg:justify-center lg:items-center  gap-y-[.5rem] lg:gap-y-[2rem]">
      
      <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl justify-center w-[6.4rem]  border-4 border-neutral-800 p-4 ">
            <FaPython  className="text-6xl text-blue-400  hover:rotate-6 "/>
             </motion.div>
      <motion.div variants={iconVariants(2.9)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem]  justify-center  border-4 border-neutral-800 p-4 ">
            <FaJava  className="text-6xl text-red-500 hover:rotate-6"/>
           
             </motion.div>
      <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem]  justify-center  border-4 border-neutral-800 p-4 ">
            <FaHtml5  className="text-6xl text-red-400 hover:rotate-6"/>
           
             </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <SiCss3 className="text-6xl text-green-400 hover:rotate-6"/>
            
        </motion.div>
        <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <DiJavascript className="text-6xl text-yellow-400 hover:rotate-6"/>
           
        </motion.div>
       
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <RiTailwindCssFill className="text-6xl text-cyan-400 hover:rotate-6"/>
         
        </motion.div>
        <motion.div variants={iconVariants(2.9)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <FaBootstrap className="text-6xl text-purple-700 hover:rotate-6"/>
         
        </motion.div>


       
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <RiReactjsLine className="text-6xl text-cyan-400 hover:rotate-6"/>
       
        </motion.div>
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <FaNodeJs className="text-6xl text-blue-400 hover:rotate-6"/>
            
        </motion.div>
        <motion.div variants={iconVariants(1.7)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <SiExpress className="text-6xl text-cyan-400 hover:rotate-6"/> 
        </motion.div>
        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <TbSql className="text-6xl text-blue-600 hover:rotate-6"/>
            
        </motion.div>
        <motion.div variants={iconVariants(2.9)} initial="initial" animate="animate" className="rounded-2xl w-[6.4rem] justify-center  border-4 border-neutral-800 p-4 ">
            <SiMongodb className="text-6xl text-green-400 hover:rotate-6"/>
            
        </motion.div>
      
       
      </motion.div>
    </div>
  )
}
