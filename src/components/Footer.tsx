"use client"

import React from 'react'
import Profile from '@/../public/profile/profile.jpg'
import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import Link from 'next/link'
import { motion } from 'framer-motion';



export default function Footer() {
    return (
        <motion.section initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.4,ease:'easeInOut'}} className='relative bg-neutral-950 mt-20 pb-10'>
            <div className='absolute top-0 flex w-full justify-center'>
                <div className='left-0 h-[2px] animate-border-widthchange rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
            </div>
            <div className='w-full flex justify-center'>
                <div className='relative h-28 w-28 mt-5'>
                    <div className='absolute top-0 flex w-full justify-center'>
                        <div className='left-0 h-[2px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                    </div>
                    <div className='flex z-20 h-full items-center justify-center rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black'>
                        <Image src={Profile} alt='profile' className='w-full h-full object-cover rounded-md'></Image>
                    </div>
                    <div className='absolute bottom-0 flex w-full justify-center'>
                        <div className='left-0 h-[2px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-10 w-full flex gap-14 justify-center'>
                    <div className='flex gap-10'>
                        <Link href='https://twitter.com/Maheshw65793810'>
                            <button className="group relative grid overflow-hidden rounded-full px-2 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                                <span>
                                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                                </span>
                                <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                                <span className="z-10 text-neutral-400"><FaXTwitter strokeWidth={0.5} className='w-5 h-5'></FaXTwitter></span>
                            </button>
                        </Link>
                        <Link className='' href='https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/'>
                            <button className="group relative grid overflow-hidden rounded-full px-2 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                                <span>
                                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                                </span>
                                <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                                <span className="z-10 text-neutral-400"><SlSocialLinkedin strokeWidth={0.8} className='w-5 h-5'></SlSocialLinkedin></span>
                            </button>
                        </Link>
                        <Link href='https://github.com/Maheshwarreddy970' >

                            <button className="group relative grid overflow-hidden rounded-full px-2 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                                <span>
                                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                                </span>
                                <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                                <span className="z-10 text-neutral-400"><FiGithub className='w-5 h-5'></FiGithub></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center mt-10'>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span className="hover:underline">expample</span>. All Rights Reserved.
                </span>
            </div>
        </motion.section>
    )
}
