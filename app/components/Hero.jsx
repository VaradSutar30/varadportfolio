import React from 'react'
import Image from 'next/image'

import Gradient_button from './Gradient_button'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <section id='home' className='mt-32 hidden w-full h-screen md:flex justify-center items-center'>

            <div className='w-[80%] h-[420px] bg-gradient-to-tr from-[#17171a42] to-[#17171A] relative rounded-2xl shadow-xl'>

                {/* TEXT */}
                <div className='ml-16 pt-16 max-w-xl relative z-10'>

                    <p className='text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3'>
                        Full Stack Developer
                    </p>

                    <h1 className='text-5xl font-bold text-white leading-tight'>
                        Building Scalable <br />
                        Web Applications <br />
                        <span className='text-blue-600'>That Deliver Results</span>
                    </h1>

                    <p className='text-xl text-white mt-3 font-semibold'>
                        — Varad Sutar
                    </p>

                    <p className='mt-5 text-zinc-400 text-sm leading-relaxed'>
                        Computer Engineering student specializing in modern web development.
                        I build fast, responsive and scalable applications using React,
                        Tailwind, PHP and MySQL.
                    </p>

                    <div className='flex gap-6 items-center mt-7'>
                        <Gradient_button title={'Hire Me'} />

                        <button className='capitalize text-white flex gap-3 items-center cursor-pointer hover:text-blue-500 transition'>
                            View Projects
                            <FaArrowRightLong />
                        </button>
                    </div>

                </div>

                {/* IMAGE */}
<div className='absolute right-10 top-1/2 -translate-y-1/2 rounded-2xl'>

<Image
    src="/varad1.png"
    alt="Varad Sutar"
    width={320}
    height={200}
    priority
    className='object-contain drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)] rounded-full'
/>

</div>

                {/* Glow */}
                <div className='absolute right-24 bottom-10 w-64 h-64 bg-orange-600/20 blur-[120px] rounded-full'></div>

            </div>

        </section>
    )
}

export default Hero