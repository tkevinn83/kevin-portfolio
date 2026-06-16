import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaGithub
} from "react-icons/fa";

import { SiJavascript, SiMysql } from "react-icons/si";


function Technologies() {
  const technologies = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> }
  ];

  return (
    <section
      id="tech"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Tecnologías
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (



           <div
    key={tech.name}
    className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-sky-500 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex justify-center mb-4">
      {tech.icon}
    </div>

    <h3 className="font-semibold text-lg">
      {tech.name}
    </h3>
  </div>



          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;