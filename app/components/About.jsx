import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const steps = [
  {
    title: "Understanding Requirements",
    desc: "I begin by understanding project goals, user needs and business requirements before writing any code.",
  },
  {
    title: "Planning & Design",
    desc: "I design structure, UI layout and choose the right tech stack to ensure scalability and performance.",
  },
  {
    title: "Development",
    desc: "I build responsive and optimized applications using React, Next.js, Tailwind and modern web practices.",
  },
  {
    title: "Testing & Optimization",
    desc: "I test functionality, fix bugs, improve speed and ensure accessibility across devices.",
  },
  {
    title: "Deployment",
    desc: "Finally I deploy the project on platforms like Vercel and provide documentation for future updates.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="mt-10 text-white w-full py-16 flex flex-col gap-16 justify-center items-center"
    >
      {/* title */}
      <div className="flex gap-4 flex-col justify-center items-center text-center">
        <p className="uppercase text-zinc-500 font-semibold tracking-widest">
          About Me
        </p>

        <h2 className="text-3xl font-bold">
          My <span className="text-[#194BFD]">Work Process</span>
        </h2>

        <p className="text-sm text-zinc-500 md:w-7/12">
          I am a Computer Science student and web developer focused on building
          modern, scalable and user-friendly web applications. My workflow is
          structured to ensure every project is delivered with performance,
          clarity and real-world usability in mind.
        </p>
      </div>

      {/* process steps */}
      <div className="flex flex-col gap-10 w-full max-w-5xl px-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-6">
            {/* number */}
            <div className="min-w-[45px] h-[45px] rounded-full bg-[#194BFD] flex items-center justify-center font-semibold">
              {i + 1}
            </div>

            {/* content */}
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm text-zinc-400">{step.desc}</p>
            </div>

            {/* arrow except last */}
            {i !== steps.length - 1 && (
              <div className="hidden md:flex items-center text-[#194BFD] ml-auto">
                <FaArrowRightLong />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;