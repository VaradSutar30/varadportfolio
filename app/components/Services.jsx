import React from 'react'
import { BsDashLg } from "react-icons/bs"; //dash
import { FaArrowRightLong } from "react-icons/fa6"; //arrow
import { RiGamepadLine } from "react-icons/ri"; //game icon

const Services = () => {
    return (
        <section id='service' className='mt-14 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>Services</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Other Services</span></h2>
                <p className='text-sm text-zinc-600 text-center md:w-6/12'>The note saved earlier containing the services in paragraph form is:

"The services included in the portfolio are generally defined by the financial institution offering them and may vary widely. Common services often include investment management, where professionals manage a client's assets according to their financial goals and risk tolerance. Financial planning is another core component, providing personalized strategies for retirement, education savings, and large purchases. Estate planning and tax minimization strategies are also frequently offered to ensure wealth is managed and transferred efficiently. Risk management services, such as insurance planning, round out the offerings to protect the client's assets."</p>
            </div>

            {/* services card section */}
            <div className='mt-8 flex gap-16 flex-wrap justify-center items-center'>
                <div className='w-80 h-fit py-6 bg-[#18181d84] flex flex-col justify-center items-center relative'>

                    {/* icon */}
                    <div className='h-16 w-16 absolute -top-8 z-10 rounded-lg flex justify-center items-center rotate-45 bg-[#0A0A0C] border border-[#1C1C1C]'>
                        <RiGamepadLine className='text-4xl -rotate-45' />
                    </div>

                    {/* title */}
                    <h4 className='text-lg text-white capitalize mt-8'>Game Developement</h4>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-xs text-zinc-500 text-center px-7 z-10'>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>

                    <button className='capitalize text-sm px-3 py-2 mt-3 rounded-3xl bg-zinc-900 text-white flex gap-4 items-center cursor-pointer'>
                        discuss for project
                        <FaArrowRightLong />
                    </button>

                </div>
                <div className='w-80 h-fit py-6 bg-[#18181d84] flex flex-col justify-center items-center relative'>

                    {/* icon */}
                    <div className='h-16 w-16 absolute -top-8 z-10 rounded-lg flex justify-center items-center rotate-45 bg-[#0A0A0C] border border-[#1C1C1C]'>
                        <RiGamepadLine className='text-4xl -rotate-45' />
                    </div>

                    {/* title */}
                    <h4 className='text-lg text-white capitalize mt-8'>Game Developement</h4>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-xs text-zinc-500 text-center px-7 z-10'>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>

                    <button className='capitalize text-sm px-3 py-2 mt-3 rounded-3xl bg-zinc-900 text-white flex gap-4 items-center cursor-pointer'>
                        discuss for project
                        <FaArrowRightLong />
                    </button>

                </div>
                <div className='w-80 h-fit py-6 bg-[#18181d84] flex flex-col justify-center items-center relative'>

                    {/* icon */}
                    <div className='h-16 w-16 absolute -top-8 z-10 rounded-lg flex justify-center items-center rotate-45 bg-[#0A0A0C] border border-[#1C1C1C]'>
                        <RiGamepadLine className='text-4xl -rotate-45' />
                    </div>

                    {/* title */}
                    <h4 className='text-lg text-white capitalize mt-8'>Web Developement</h4>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-xs text-zinc-500 text-center px-7 z-10'>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>

                    <button className='capitalize text-sm px-3 py-2 mt-3 rounded-3xl bg-zinc-900 text-white flex gap-4 items-center cursor-pointer'>
                        discuss for project
                        <FaArrowRightLong />
                    </button>

                </div>
                <div className='w-80 h-fit py-6 bg-[#18181d84] flex flex-col justify-center items-center relative'>

                    {/* icon */}
                    <div className='h-16 w-16 absolute -top-8 z-10 rounded-lg flex justify-center items-center rotate-45 bg-[#0A0A0C] border border-[#1C1C1C]'>
                        <RiGamepadLine className='text-4xl -rotate-45' />
                    </div>

                    {/* title */}
                    <h4 className='text-lg text-white capitalize mt-8'>Web Design</h4>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-xs text-zinc-500 text-center px-7 z-10'>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>

                    <button className='capitalize text-sm px-3 py-2 mt-3 rounded-3xl bg-zinc-900 text-white flex gap-4 items-center cursor-pointer'>
                        discuss for project
                        <FaArrowRightLong />
                    </button>

                </div>
                <div className='w-80 h-fit py-6 bg-[#18181d84] flex flex-col justify-center items-center relative'>

                    {/* icon */}
                    <div className='h-16 w-16 absolute -top-8 z-10 rounded-lg flex justify-center items-center rotate-45 bg-[#0A0A0C] border border-[#1C1C1C]'>
                        <RiGamepadLine className='text-4xl -rotate-45' />
                    </div>

                    {/* title */}
                    <h4 className='text-lg text-white capitalize mt-8'>Game Developement</h4>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-xs text-zinc-500 text-center px-7 z-10'>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>

                    <button className='capitalize text-sm px-3 py-2 mt-3 rounded-3xl bg-zinc-900 text-white flex gap-4 items-center cursor-pointer'>
                        discuss for project
                        <FaArrowRightLong />
                    </button>

                </div>
                <div className='w-80 h-fit py-6 bg-[#18181d84] flex flex-col justify-center items-center relative'>

                    {/* icon */}
                    <div className='h-16 w-16 absolute -top-8 z-10 rounded-lg flex justify-center items-center rotate-45 bg-[#0A0A0C] border border-[#1C1C1C]'>
                        <RiGamepadLine className='text-4xl -rotate-45' />
                    </div>

                    {/* title */}
                    <h4 className='text-lg text-white capitalize mt-8'>Data Analysis</h4>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-xs text-zinc-500 text-center px-7 z-10'>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>

                    <button className='capitalize text-sm px-3 py-2 mt-3 rounded-3xl bg-zinc-900 text-white flex gap-4 items-center cursor-pointer'>
                        discuss for project
                        <FaArrowRightLong />
                    </button>

                </div>
            </div>



        </section>
    )
}

export default Services