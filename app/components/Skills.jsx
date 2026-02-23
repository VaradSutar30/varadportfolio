import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["JavaScript", "Python", "PHP", "C++", "C"],
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API", "Authentication"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase", "SQL"],
    },
    {
      title: "Tools & Concepts",
      skills: [
        "Git",
        "GitHub",
        "API Integration",
        "Responsive Design",
        "Deployment",
        "Debugging",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-20 bg-black text-white relative overflow-hidden">

      {/* subtle animated glow background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px] animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">
            My <span className="text-blue-500">Technical Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 
              hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
              transition duration-500 group transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-5 text-blue-400 group-hover:text-blue-300 transition">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#111] border border-gray-700 rounded-full
                    hover:border-blue-500 hover:text-blue-400
                    transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;