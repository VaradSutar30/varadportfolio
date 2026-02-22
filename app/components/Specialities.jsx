import React from 'react' 
import { BsDashLg } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";

const Specialities = () => {
    return (
        <section className='mt- md:-mt-20 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>Specialities</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Expertise</span></h2>
                <p className='text-sm text-zinc-600 text-center md:w-6/12'>
                    I am a Full-Stack Web Developer focused on building responsive, scalable and user-friendly applications. 
                    I specialize in modern frontend development, backend logic, and database integration to create complete digital solutions.
                </p>
            </div>

            {/* cards */}
            <div className='flex flex-wrap justify-center gap-8'>

                {/* Frontend */}
                <div className='w-72 p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>
                    <div className='text-4xl'>
                        <IoLogoReact className='text-blue-500' />
                    </div>

                    <h2 className='capitalize font-semibold'>Frontend Development</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg /><BsDashLg />
                    </div>

                    <p className='text-sm text-zinc-600 text-center'>
                        I build modern, responsive and high-performance interfaces using React, JavaScript, Tailwind CSS and Bootstrap. 
                        My focus is on clean UI, fast performance and seamless user experience across all devices.
                    </p>
                </div>

                {/* Backend */}
                <div className='w-72 p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>
                    <div className='text-4xl'>
                        <FaServer className='text-green-400' />
                    </div>

                    <h2 className='capitalize font-semibold'>Backend Development</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg /><BsDashLg />
                    </div>

                    <p className='text-sm text-zinc-600 text-center'>
                        I develop secure backend systems using PHP, Node.js basics, and REST APIs. 
                        I focus on authentication, data handling, and server logic to ensure reliability and scalability.
                    </p>
                </div>

                {/* Database */}
                <div className='w-72 p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>
                    <div className='text-4xl'>
                        <RiDatabase2Line className='text-yellow-400' />
                    </div>

                    <h2 className='capitalize font-semibold'>Database & Projects</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg /><BsDashLg />
                    </div>

                    <p className='text-sm text-zinc-600 text-center'>
                        I design and integrate databases using MySQL and build complete full-stack projects such as portfolio sites, 
                        e-commerce apps, and dynamic web platforms with authentication and CRUD operations.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Specialities