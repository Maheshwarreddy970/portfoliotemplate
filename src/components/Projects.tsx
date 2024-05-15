'use client';

import React, { useEffect } from 'react'
import { ProjectCard } from '@/components/ui/ProjectsCard'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { Navbartab } from '@/store/atom';

export default function Projects() {
    const ref=useRef(null);
    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('projects');
    },[isInview,setActiveTab])

    
    return (
        <section ref={ref} id='projects' className='pt-4 mt-14'>
            <div className='w-full flex justify-center p-10'>
                <motion.h3 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} className=" animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl md:text-6xl text-center text-transparent font-medium bg-clip-text">
                    Projects
                </motion.h3>
            </div>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                <ProjectCard></ProjectCard>
                </div>
            </div>
        </section>
    )
}
