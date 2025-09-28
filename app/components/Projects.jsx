import React from 'react'
import Image from 'next/image'
import Project1 from '../../public/images/Photo1.png'

const Projects = () => {
    return (
        <section id='project' className='mt-6 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>PORTFOLIO</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Completed Projects</span></h2>
                <p className='text-sm text-zinc-600 text-center px-1 md:w-6/12'>My most recently completed project is TravelGo, a comprehensive solution that serves as a prime example of my work process in action. This project, which currently anchors my live portfolio, showcases my expertise in [Insert your specific role, e.g., UX design, React development, or technical writing] and the successful application of my structured 5-stage methodology. The portfolio itself is organized to clearly present each project's context, my specific role, and the measurable impact achieved, demonstrating my commitment to delivering transparent, results-focused solutions that move beyond simply completing a task.</p>
            </div>

            {/* project images section */}


            <div className="overflow-hidden w-full h-fit">
                <div className="project1-scroll-left-infinite">
                    {/* Duplicate everything for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-5 px-3">
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden w-full h-fit">
                <div className="project2-scroll-right-infinite">
                    {/* Duplicate everything for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-5 px-3">
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}

// This is the correct way to export the component
export default Projects