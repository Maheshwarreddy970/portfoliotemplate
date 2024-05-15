"use client";


import React from 'react'
import { motion ,useMotionTemplate,useMotionValueEvent,useScroll} from "framer-motion";
import { useState } from "react";
import { tabs } from '@/lib/NavBarLinks';
import { useRecoilState } from 'recoil';
import { Navbartab } from '@/store/atom';
import Link from 'next/link';


export default function NavBar() {
    const {scrollY}=useScroll();
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);
    const [hidden,sethidden]=useState<boolean>(false);
    useMotionValueEvent(scrollY,'change',(latest)=>{
        const prevous=scrollY.getPrevious();
        if(prevous!=undefined && latest>prevous &&  latest>150){
            sethidden(true)
        }
        else{
            sethidden(false)
        }
    })

    return (
    <motion.nav 
        initial={{y:'-250%'}}
        variants={{
            visiable:{y:0},
            hidden:{y:"-250%"}
        }}
        animate={hidden?'hidden':'visiable'}
        transition={{duration:0.4,ease:'easeInOut'}}
        className="flex items-center justify-center w-full fixed z-50 top-8  space-x-1">
            <div  className='h-8 flex items-center  backdrop-blur-sm shadow-md shadow-white/20 rounded-md bg-white/5'>
            {tabs.map((tab) => (
                <Link
                    href={tab.hash}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                        } relative bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text rounded-md px-3 py-1.5 text-sm font-semibold transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute rounded-md inset-0 z-10 opacity-100  bg-white shadow-inner shadow-black/70 mix-blend-difference"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {tab.name}
                </Link>
            ))}
        </div>
        </motion.nav>
)
}
