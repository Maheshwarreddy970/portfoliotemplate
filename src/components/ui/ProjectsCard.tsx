"use client";

import Image from "next/image";
import React from "react";
import { projectsList } from "@/lib/projectslist";
import { motion } from 'framer-motion';

export function ProjectCard() {
  return (
    <>
      {
       projectsList.map((data,i)=>(
      <motion.div 
      key={i}
      initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} viewport={{amount:'all'}}
      className=" group mb-11 w-full flex justify-between h-48   animate-shine items-center rounded-xl text-sm border border-white/60 hover:shadow-md hover:shadow-white/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
        <div className=" pl-4   flex flex-col w-1/2 gap-2 py-3">
          <h3 className=" text-xl  font-semibold text-neutral-200">{data.title}</h3>
          <p className="text-sm leading-[1.5] text-neutral-400">
            {data.description}
          </p>
          <div className="flex flex-wrap">
         {data.tags.map((tag,index)=>( 
         <div key={index+i} className="group mr-1 relative  h-6 w-auto grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
            <span className="z-10 text-neutral-400 text-xs font-medium">{tag}</span>
          </div>))}
          </div>
        </div>
        <div className="w-1/2  transition ease-in-out duration-300 h-full group-hover:overflow-visible overflow-hidden">
          <Image src={data.imageUrl} alt="image" className="rounded-md  h-full w-full duration-300 transition ease-in-out  group-hover:scale-110 group-hover:translate-x-8 ml-3  group-hover:rotate-0 group-hover:mt-0  mt-5 -rotate-6"></Image>
        </div>
      </motion.div>
      ))}
    </>
  );
}
