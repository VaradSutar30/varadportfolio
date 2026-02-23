import React from "react";
import Image from "next/image";

const projects = [
    {
      title: "Mybook Hotel Admin Dashboard",
      desc: "A hotel management admin dashboard to manage bookings, rooms, and customers efficiently.",
      img: "/images/mybook.jfif",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      live: "https://hotel-admin-nu.vercel.app/",
      github: "https://github.com/VaradSutar30",
    },
    {
      title: "GoodShopping E-Commerce",
      desc: "An e-commerce website with product listing, cart functionality, and responsive UI for a smooth shopping experience.",
      img: "/images/goodshopping.jpg",
      tech: ["React", "Node.js", "Express", "MySQL"],
      live: "https://goodshopping-beige.vercel.app/",
      github: "https://github.com/VaradSutar30",
    },
    {
      title: "MyPortfolio",
      desc: "My personal portfolio website to showcase projects, skills, and contact information with modern UI design.",
      img: "/images/portfolio.jpg",
      tech: ["Next.js", "Tailwind CSS"],
      live: "https://varadportfolio-lemon.vercel.app/",
      github: "https://github.com/VaradSutar30",
    },
  ];

const Projects = () => {
  return (
    <section id="project" className="w-full py-16 flex flex-col items-center text-white">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mt-2">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-zinc-400 mt-3 max-w-xl">
          Here are three projects that showcase my frontend and full-stack development skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-300">
            
            <div className="relative w-full h-52">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-zinc-400">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {p.tech.map((t, j) => (
                  <span key={j} className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
                  Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="text-sm border border-zinc-600 hover:border-white px-4 py-2 rounded transition">
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;