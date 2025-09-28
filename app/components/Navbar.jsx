'use client'
import React from 'react'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMobileSidebar } from '../redux-store/sidebarSlice'
import Social_links_navbar from './Social_links_navbar';
import { IoIosMenu } from "react-icons/io";
import Gradient_button from './Gradient_button';

const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <nav className='z-40 w-full h-fit px-3 py-4 md:px-12 md:py-6 bg-zinc-950 flex flex-col gap-4 fixed left-0 top-0 right-0 border-b border-zinc-800'>
            <Social_links_navbar />

            <div className='flex justify-between items-center'>

                {/* logo */}
                <h2 className='uppercase text-xl font-semibold text-white'>Varad</h2>

                {/* nav links */}
                <div className='hidden md:flex gap-8 items-center'>

                    {/* home */}
                    <Link href={"#home"} className='text-lg capitalize text-white'>
                        Home
                    </Link>

                    {/* service */}
                    <Link href={"#service"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        Service
                    </Link>

                    {/* projects */}
                    <Link href={"https://github.com/VaradSutar30"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        Projects
                    </Link>

                    {/* about */}
                    <Link href={"https://www.linkedin.com/in/varad-sutar-8a936b287/"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        About
                    </Link>

                    {/* contact */}
                    <Link href={"https://www.linkedin.com/in/varad-sutar-8a936b287/"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        Contact
                    </Link>

                </div>

                {/* download resume button */}
                <div className=''>
                 
                <Link href="ResumeV.pdf" target="_blank" download className='capitalize text-white px-3 py-2 font-semibold rounded-3xl bg-gradient-to-r from-[#194BFD] to-[#AD13FB] cursor-pointer'>
                        Download Resume
                        </Link>
                </div>

                {/* toogle menu button */}
                <button
                    onClick={() => dispatch(toggleMobileSidebar())}
                    className='text-2xl text-white md:hidden'>
                    <IoIosMenu />
                </button>

            </div>
        </nav>
    )
}

export default Navbar