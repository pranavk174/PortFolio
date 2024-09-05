import React from 'react'
import {CONTACT} from "../assets/index"
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <div className="border-t border-neutral-900 pb-20">
        <motion.h1  whileInView={{ y: 0, opacity: 1 }}
     
     initial={{ y: -100, opacity: 0 }}

     transition={{ duration: 0.4 , delay:0.4}} className='my-10 text-center text-4xl'>Contact</motion.h1>
      <div className="text-center tracking-tighter"> 
        <motion.p  whileInView={{ x: 0, opacity: 1 }}
     
     initial={{ x: 100, opacity: 0 }}

     transition={{ duration: 0.4 , delay:0.4}} className="my-4">{CONTACT.address}</motion.p>
        <motion.p  whileInView={{ x: 0, opacity: 1 }}
     
     initial={{ x: -100, opacity: 0 }}

     transition={{ duration: 0.4 , delay:0.4}} className="my-4">{CONTACT.phoneNo}</motion.p>
       
        <motion.a  whileInView={{ x: 0, opacity: 1 }}
     
     initial={{ x: -100, opacity: 0 }}

     transition={{ duration: 0.4 , delay:0.4}} className="my-4 underline" href="#">{CONTACT.email}</motion.a>
      </div>
    </div>
  )
}
