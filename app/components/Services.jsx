import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiGamepadLine } from "react-icons/ri";

const services = [
  {
    title: "Frontend Development",
    desc: "Building modern, responsive user interfaces using React, Next.js, Tailwind CSS and JavaScript.",
  },
  {
    title: "Full Stack Web Apps",
    desc: "Developing complete web applications with backend logic, APIs and database integration.",
  },
  {
    title: "Responsive Web Design",
    desc: "Creating mobile-first layouts that work perfectly across phones, tablets and desktops.",
  },
  {
    title: "UI/UX Implementation",
    desc: "Converting Figma or design files into pixel-perfect interactive websites.",
  },
  {
    title: "Website Optimization",
    desc: "Improving performance, SEO, loading speed and accessibility for better user experience.",
  },
  {
    title: "Deployment & Hosting",
    desc: "Deploying websites on Vercel, Netlify and cloud platforms with production setup.",
  },
];

const Services = () => {
  return (
    <section
      id="service"
      className="mt-14 text-white w-full py-16 flex flex-col gap-14 justify-center items-center"
    >
      {/* title */}
      <div className="flex gap-4 flex-col justify-center items-center text-center">
        <p className="uppercase text-zinc-500 font-semibold tracking-widest">
          Services
        </p>

        <h2 className="text-3xl font-bold">
          What I <span className="text-[#194BFD]">Offer</span>
        </h2>

        <p className="text-sm text-zinc-500 md:w-6/12">
          I build modern, fast and scalable web applications with strong focus
          on performance, clean UI and real-world usability.
        </p>
      </div>

      {/* services grid */}
      <div className="grid gap-10 px-4 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#18181d84] border border-[#1C1C1C] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#194BFD] hover:-translate-y-1 transition duration-300 relative"
          >
            {/* icon */}
            <div className="h-16 w-16 absolute -top-8 rounded-xl flex justify-center items-center bg-[#0A0A0C] border border-[#1C1C1C]">
              <RiGamepadLine className="text-3xl text-[#194BFD]" />
            </div>

            {/* title */}
            <h4 className="text-lg font-semibold mt-10">{service.title}</h4>

            {/* dash */}
            <div className="text-[#194BFD] text-2xl flex my-2">
              <BsDashLg />
              <BsDashLg />
            </div>

            {/* desc */}
            <p className="text-sm text-zinc-400">{service.desc}</p>

            {/* button */}
            <button className="mt-5 text-sm px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#194BFD] transition flex gap-3 items-center">
              Discuss Project
              <FaArrowRightLong />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;