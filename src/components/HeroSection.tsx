"use client"

import React, { useEffect, useRef } from 'react'
import { BackgroundBeams } from '@/components/ui/Background-beams'
import Image from 'next/image'
import Profile from '@/../public/profile/profile.jpg'
import RotateText from '@/components/ui/RotateText'
import { TbFileDownload } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { motion, useInView } from 'framer-motion';
import { useRecoilState } from 'recoil'
import { Navbartab } from '@/store/atom'

export default function HeroSection() {
    const ref=useRef(null);
    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('home');
    },[isInview,setActiveTab])
   

    return (
        <section ref={ref} id='#home' className="h-[40rem] z-10 w-full top-0 -mt-12 gap-6 bg-neutral-950 relative flex items-center flex-col justify-center antialiased">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeIn' }}
                className='relative h-48 w-48 mt-16'>
                <div className='absolute top-0 flex w-full justify-center'>
                    <div className='left-0 h-[2px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                </div>
                <div

                    className='flex z-20 h-full items-center justify-center rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black'>
                    <Image src={Profile} alt='profile' className='w-full h-full object-cover rounded-md'></Image>
                </div>
                <div className='absolute bottom-0 flex w-full justify-center'>
                    <div className='left-0 h-[2px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                </div>
            </motion.div>
            <div className='w-1/2 m-4'>
                <div className='flex w-full justify-center gap-2'>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl font-bold bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text">
                        Hi, I’m Jone John a
                    </motion.div>
                    <RotateText></RotateText>
                </div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4,ease:'easeIn'}} className='mt-10 w-full flex gap-5 justify-center'>
                    <a
                        href="/Resume.pdf"
                        download
                        className="group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                        <span>
                            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                        </span>
                        <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                        <span className="z-10  flex gap-2 text-neutral-400 text-sm font-medium">Download Resume<TbFileDownload strokeWidth={1.3} className='h-5 w-5' /></span>
                    </a>
                    <a
                        href="#contact"
                        className="group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                        <span>
                            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                        </span>
                        <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                        <span className="z-10  flex gap-2 text-neutral-400 text-sm font-medium">Contact Me<RiContactsLine strokeWidth={0.1} className='h-4 w-4' /></span>
                    </a>

                </motion.div >
            </div>
            <BackgroundBeams />
        </section>
    )
}
