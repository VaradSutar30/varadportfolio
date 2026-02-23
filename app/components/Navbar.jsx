'use client'
import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggleMobileSidebar } from '../redux-store/sidebarSlice'
import Social_links_navbar from './Social_links_navbar'
import { IoIosMenu } from "react-icons/io"

const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <nav className='z-50 w-full px-4 md:px-12 py-4 bg-zinc-950 fixed top-0 left-0 border-b border-zinc-800 backdrop-blur-md'>

            {/* top social strip */}
            <Social_links_navbar />

            <div className='flex justify-between items-center mt-3'>

                {/* logo */}
                <h2 className='uppercase text-xl font-semibold text-white tracking-wide'>
                    Varad
                </h2>

                {/* nav links */}
                <div className='hidden md:flex gap-10 items-center font-medium'>

                    <Link href="#home" className='text-white hover:text-blue-500 transition drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)]'>
                        Home
                    </Link>

                    <Link href="#service" className='text-zinc-400 hover:text-blue-500 transition drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)]'>
                        Services
                    </Link>

                    <Link href="#project" className='text-zinc-400 hover:text-blue-500 transition drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)]'>
                        Projects
                    </Link>

                    <Link href="#skills" className='text-zinc-400 hover:text-blue-500 transition drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)]'>
                        Skills
                    </Link>

                    <Link href="#about" className='text-zinc-400 hover:text-blue-500 transition drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)]'>
                        About
                    </Link>

                    <Link href="#contact" className='text-zinc-400 hover:text-blue-500 transition drop-shadow-[0_30px_60px_rgba(25,75,253,0.5)]'>
                        Contact
                    </Link>
                    

                </div>

                {/* resume button */}
                <div className='hidden md:block'>
                    <Link
                        href="/Mr Varad Sutar CV.pdf"
                        target="_blank"
                        className='px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#194BFD] to-[#AD13FB] hover:opacity-90 transition'
                    >
                        Download Resume
                    </Link>
                </div>

                {/* mobile menu button */}
                <button
                    onClick={() => dispatch(toggleMobileSidebar())}
                    className='text-3xl text-white md:hidden'
                >
                    <IoIosMenu />
                </button>

            </div>
        </nav>
    )
}

export default Navbar