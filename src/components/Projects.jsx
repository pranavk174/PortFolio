import React from 'react'
import "../../src/index.css"
import {PROJECTS} from "../assets/index"
import {motion} from "framer-motion"
export default function Projects() {
    

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: delay },
        },
      });
  return (
    <div className="border-bottom border-neutral-900 pb-4">
        <motion.h1  whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
     transition={{ duration: 0.4 , delay:0.4}} className="my-20 text-center text-4xl">Projects</motion.h1>
        <div className="   ">
        {
            PROJECTS.map((project,index)=>(
                 <div key={index}  className='flex flex-wrap  lg:gap-[10rem] mb-8 lg:justify-center' >
                    <motion.div variants={container(0.4 )}
              whileInView="visible"
              initial="hidden"  className='w-full lg:w-1/4  overflow-hidden'>
                    <img className="w-[20rem] img1 rounded-xl my-auto h-[10rem] " src={project.image} alt={project.title} />
                     </motion.div>  
                     <motion.div  whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 100, opacity: 0 }}
     transition={{ duration: 0.4 , delay:0.4}} className="w-[20rem] max-w-xl lg:w-3/4" >
                     <h2 className="mt-3 mb-2 font-semibold ">{project.title}</h2>
                     <p className='mb-4 text-wrap text-[1.2rem] text-neutral-400 font-light tracking-tighter' > {project.description} </p>
                      {
                        project.technologies.map((tech , index)=>
                                <motion.span  whileInView={{ x: 100, opacity: 1 }}
                        initial={{ x: 0, opacity: 0 }}
                       transition={{ duration: 0.6 , delay:0.7}} key={index} className="underline   bg-neutral-900 lg:pr-4 py-1 text-[.8rem] lg:text-sm font-medium text-purple-900" >#{tech}</motion.span>
                        )
                      }
                     </motion.div>   
                 </div>
            ))
        }
      </div>
    </div>
  )
}
