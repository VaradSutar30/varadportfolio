import React from 'react'
import { BsDashLg } from "react-icons/bs"; //dash
import { IoLogoReact } from "react-icons/io5"; //react
import { FaJava } from "react-icons/fa6"; //java
import { RiGamepadLine } from "react-icons/ri"; //game

const Specialities = () => {
    return (
        <section className='mt- md:-mt-20 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>Specialities</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Specialities</span></h2>
                <p className='text-sm text-zinc-600 text-center md:w-6/12'> "I am a Full-Stack Web Developer who architects and delivers end-to-end digital solutions. My specialties span Front-End (React/Vue) for building intuitive, performance-driven user interfaces, Back-End (Node.js/Python) for designing secure, scalable APIs and services, and comprehensive DevOps (Cloud/CI/CD) for reliable deployment. My focus is on technical excellence from the server to the user's screen."</p>
            </div>

            {/* Specialities cards */}
            <div className='flex flex-wrap justify-center gap-8'>

                {/* card 1 */}
                <div className='w-72 h-fit p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <IoLogoReact className='text-blue-500' />
                    </div>

                    {/* title */}
                    <h2 className='capitalize font-semibold'>Frontend Developement</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-sm text-zinc-600 text-center'>"I'm Varad Sutar, a dedicated Front-End Developer who transforms designs into exceptional, high-performance user interfaces. Specializing in React, TypeScript, and modern CSS, I focus on the critical balance between pixel-perfect design and clean, scalable code. Let's build a flawless digital experience."</p>

                </div>

                {/* card 2 */}
                <div className='w-72 h-fit p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <FaJava className='text-orange-400' />
                    </div>

                    {/* title */}
                    <h2 className='capitalize font-semibold'>Backend Developement</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-sm text-zinc-600 text-center'>"I'm Varad Sutar, a dedicated Back-End Developer who engineers robust and scalable solutions. I specialize in designing and deploying secure, high-performance APIs using Your primary language, e.g., Python/Java and Your database, e.g., PostgreSQL/MongoDB. My focus is always on creating efficient architecture that handles heavy traffic and delivers long-term reliability."</p>

                </div>

                {/* card 3 */}
                <div className='w-72 h-fit p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <RiGamepadLine className='text-white' />
                    </div>

                    {/* title */}
                    <h2 className='capitalize font-semibold'>Game Developement</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-sm text-zinc-600 text-center'>"I'm Varad Sutar, a Game Programmer specializing in C# and Unity (or C++ and Unreal Engine). I architect the core gameplay systems, focusing on optimization, clean code, and robust game logic. I excel at turning ambitious design concepts into smooth, high-performance interactive realities. My passion is building the engine that brings worlds to life."</p>
                </div>
            </div>

        </section>
    )
}

export default Specialities