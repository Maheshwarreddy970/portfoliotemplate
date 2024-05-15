import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { Navbartab } from '@/store/atom';

export default function About() {
    const ref=useRef(null);
    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('about');
    },[isInview,setActiveTab])
   
    return (
        <section ref={ref} id='about' className='pt-20'>
            <div className='w-full flex justify-center'>
                <motion.h3 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} viewport={{amount:'all'}} className=" inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl md:text-6xl text-center text-transparent font-medium bg-clip-text">
                    About Me
                </motion.h3>
            </div>
            <div className='w-full flex justify-center'>
            <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} className='w-1/3'>
                <p className=" text-sm my-11 text-neutral-400 bg-clip-text mb-3  text-center">
                A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge
                </p>
                <p className='text-sm mt-8 text-neutral-400 bg-clip-text mb-3  text-center'>
                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .
                </p>
            </motion.div>
            </div>
        </section>
    )
}
