"use client"

import React, { useEffect, useRef } from 'react'
import { frontendSkill, backendSkill, otherSkill } from '@/lib/skills'
import { motion, useInView } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { Navbartab } from '@/store/atom'

export default function Skills() {
    const ref=useRef(null);
    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('skills');
    },[isInview,setActiveTab])
    const SkillBall = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    
    return (
        <section id='skills' ref={ref} className='pt-16'>
            <div className='w-full flex justify-center mb-7'>
                <h3 className=" animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl md:text-6xl text-center text-transparent font-medium bg-clip-text">
                    My Skills
                </h3>
            </div>
            <div className='flex justify-center '>
                <div className='w-1/2 flex flex-col gap-6 px-5'>
                    <motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{duration:0.4,ease:'easeInOut'}} className=" text-start animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl  text-transparent font-medium bg-clip-text">
                        Frontend
                    </motion.h3>
                    <div className="flex flex-wrap  gap-4">
                        {
                            frontendSkill.map((data, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    variants={SkillBall}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileInView="visible"
                                    drag whileDrag={{ scale: 1.7 }} whileHover={{ scale: 1.4 }} dragSnapToOrigin={true} className="relative w-10 h-10 inline-flex overflow-hidden rounded-full p-px">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
                                    <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-full p-1 [&>*]:w-full [&>*]:h-full overflow-hidden bg-neutral-950 text-sm font-medium text-neutral-300 shadow-inner shadow-white backdrop-blur-3xl">

                                        {data.Icon}
                                    </span>
                                </motion.div>
                            ))
                        }
                    </div>
                    <motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{duration:0.4,ease:'easeInOut'}} className=" text-start animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-transparent font-medium bg-clip-text">
                        Backend
                    </motion.h3>
                    <div className="flex flex-wrap  gap-4">
                        {
                            backendSkill.map((data, i) => (
                                <motion.div
                                key={i}
                                initial="hidden"
                                variants={SkillBall}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileInView="visible"
                                drag whileDrag={{ scale: 1.7 }} whileHover={{ scale: 1.4 }} dragSnapToOrigin={true} className="relative w-10 h-10 inline-flex overflow-hidden rounded-full p-px">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
                                    <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-full p-1 [&>*]:w-full [&>*]:h-full overflow-hidden bg-neutral-950 text-sm font-medium text-neutral-300 shadow-inner shadow-white backdrop-blur-3xl">

                                        {data.Icon}
                                    </span>
                                </motion.div>
                            ))
                        }
                    </div>
                    <motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{duration:0.4,ease:'easeInOut'}} className=" animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-start text-transparent font-medium bg-clip-text">
                        Others
                    </motion.h3>
                    <div className="flex flex-wrap  gap-4">
                        {
                            otherSkill.map((data, i) => (
                                <motion.div
                                key={i}
                                initial="hidden"
                                variants={SkillBall}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileInView="visible"
                                drag whileDrag={{ scale: 1.7 }} whileHover={{ scale: 1.4 }} dragSnapToOrigin={true} className="relative w-10 h-10 inline-flex overflow-hidden rounded-full p-px">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
                                    <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-full p-1 [&>*]:w-full [&>*]:h-full overflow-hidden bg-neutral-950 text-sm font-medium text-neutral-300 shadow-inner shadow-white backdrop-blur-3xl">

                                        {data.Icon}
                                    </span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}
