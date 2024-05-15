import { experience } from '@/lib/expriences'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { Navbartab } from '@/store/atom';

export default function Experience() {
    const ref=useRef(null);
    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('experience');
    },[isInview,setActiveTab])
    return (
        <motion.section   id='experience' className='flex justify-center pt-16'>
            <div className="w-1/2">
                <div className='w-full flex justify-center mb-9'>
                    <motion.h3 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} ref={ref} className=" animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl md:text-6xl text-center text-transparent font-medium bg-clip-text">
                        Experiences
                    </motion.h3>
                </div>
                <div className="-my-6">
                   {experience.map((data,index)=>(
                     <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} key={index} className="relative pl-8 sm:pl-32 py-6 group">
                        <h3 className={`font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-transparent bg-clip-text ${index==0 && "-ml-1"}`}>
                            {data.company}
                        </h3>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-neutral-400 before:shadow-lg before:shadow-white  sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:bg-neutral-400  after:w-4 after:h-4 after:shadow-lg after:shadow-white/80   after:box-content  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center uppercase w-auto h-auto   animate-shine rounded-full text-xs border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 text-neutral-400 transition-colors">{data.time}</time>
                            <h1 className="text-xl font-semibold bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text">
                            {data.role}
                            </h1>
                        </div>
                        <ul className=" text-neutral-400 list-disc list-outsid">
                            {data.discription.map((point,index)=>(
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>))}


                </div>

            </div>
        </motion.section>
    )
}
