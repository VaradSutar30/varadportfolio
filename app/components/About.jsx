import React from 'react'
import Work_process_block from './Work_process_block'
import { FaArrowRightLong } from "react-icons/fa6"; //arrow


const About = () => {
    return (
        <section id='about' className='mt-6 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>ABOUT ME</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Work process</span></h2>
                <p className='text-sm text-zinc-600 text-center px-1 md:w-6/12'>I follow a clear, five-stage work process designed to turn complex problems into effective solutions. The journey begins with Discovery, where I meet with stakeholders to precisely define the core problem, identify the target audience, and set measurable project goals. Next, in the Planning stage, I translate ideas into structure by conducting research and creating foundational assets like wireframes or data models to ensure the concept is sound before building. The Creation phase is an iterative cycle of development, where I focus on building the core assets while continuously testing and refining. This leads to Refinement, where I integrate client feedback and conduct rigorous Quality Assurance (QA) to ensure the final product is flawless. The process concludes with Deployment, where I successfully launch the solution and provide all necessary documentation for a seamless handover. This structured approach ensures every project is executed with efficiency, transparency, and a focus on delivering quantifiable results.</p>
            </div>

            <div className="relative overflow-hidden w-full h-fit py-10">
                <div className="scroll-left-infinite">
                    {/* Duplicate everything for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-12 justify-center items-center px-10">
                            {/* Top Row */}
                            <div className="mr-28 flex gap-36 relative">
                                <Work_process_block title={'empathize'} />
                                <div className="absolute -bottom-4 left-36 rotate-45 text-xl text-[#194BFD]">
                                    <FaArrowRightLong />
                                </div>
                                <Work_process_block title={'ideate'} />
                                <div className="absolute -bottom-4 left-[19rem] -rotate-45 text-xl text-[#194BFD]">
                                    <FaArrowRightLong />
                                </div>
                                <Work_process_block title={'qualitative taste'} />
                                <div className="absolute -bottom-4 left-[28rem] rotate-45 text-xl text-[#194BFD]">
                                    <FaArrowRightLong />
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="ml-48 -mt-12 flex gap-36 relative">
                                <div className="z-20 absolute -top-4 right-[19rem] -rotate-45 text-xl text-[#194BFD]">
                                    <FaArrowRightLong />
                                </div>
                                <Work_process_block title={'define'} />
                                <div className="z-20 absolute -top-4 right-36 rotate-45 text-xl text-[#194BFD]">
                                    <FaArrowRightLong />
                                </div>
                                <Work_process_block title={'prototype'} />
                                <Work_process_block title={'quantitative taste'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default About