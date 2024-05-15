"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { motion, useInView } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { Navbartab } from '@/store/atom';

type Inputs = {
    email: string
    message: string
}

export default function Contact() {
    const ref=useRef(null);
    const isInview=useInView(ref,{amount:0.5})
    let [activeTab, setActiveTab] = useRecoilState(Navbartab);

    useEffect(()=>{
        if(isInview)setActiveTab('contact');
    },[isInview,setActiveTab])

    const [errorMessage, seterror] = useState<null | string>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        const { data, error } = await sendEmail(formData);
        if (error) {
            seterror(error);
            return;
        }
        if (data?.error) {
            seterror(data.error.message)
            return;
        }
        toast.success("Email sent successfully!");
    }


    return (
        <section id='contact' ref={ref} className='pt-12'>
            <div className='w-full mb-5 flex justify-center'>
                <motion.h3 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="  inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl md:text-6xl text-center text-transparent font-medium bg-clip-text">
                    Contact
                </motion.h3>
            </div>
            <div className='grid justify-items-center grid-cols-1'>
                <motion.p initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} className=" text-neutral-400  mb-5">
                    Please contact me directly at{" "}
                    <a className="underline" href="mailto:example@gmail.com">
                        example@gmail.com
                    </a>{" "}
                    or through this form.
                </motion.p>
                {errorMessage && <span className=' ml-1 mb-4 text-red-700 ml-1/2'>{errorMessage}</span>}
            </div>
            <div className='w-full flex justify-center'>
                <form className='w-1/3 flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} className='relative'>
                        <div className='absolute top-0 flex w-full justify-center'>
                            <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                        </div>
                        <input
                            {...register("email", { required: true })}
                            className='block h-12 w-full rounded-md border placeholder:text-neutral-600 border-neutral-800 text-neutral-200 bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 focus:ring-offset-neutral-50'
                            type="email" placeholder="exampl@email.com" {...register("email")}
                        />
                        {errors.email && <span className='ml-1 text-red-700'>email is required</span>}
                    </motion.div>
                    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} className='relative'>
                        <div className='absolute top-0 flex w-full justify-center'>
                            <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                        </div>
                        <textarea
                            {...register("message", { required: true })}
                            rows={8}
                            className='text-neutral-200 placeholder:m-16 placeholder:text-neutral-600 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 focus:ring-offset-neutral-50'
                            placeholder='message...'
                        />
                        {errors.message && <span className='ml-1 text-red-700'>This field is required</span>}
                    </motion.div>
                    <motion.button initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{duration:0.4,ease:'easeInOut'}} type='submit' className=" rounded-md hover:text-white hover:scale-105 transition-all  hover:ring-1 hover:ring-white/60 inline-flex animate-shine items-center justify-center text-base border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-400 hover:ease-in-out hover:duration-75 ">
                        submit
                    </motion.button>
                </form>
            </div>
        </section>
    )
}
