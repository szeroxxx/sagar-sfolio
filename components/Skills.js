import React from "react";

// Import skill icons
// import { FaReact, FaNodeJs, FaPython, FaGit, FaLinux, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiRedux, SiJavascript, SiPostgresql, SiDjango, SiAntdesign, SiMaterialui, SiRestapi } from "react-icons/si";
// import { MdResponsive } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { AiOutlinePython } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

// Skill data array
const skills = [
  { name: "React.js", icon:<FaReact color="#e10df1" />  },
  { name: "RESTful APIs", icon:<RiNextjsLine color="#e10df1" /> },
  { name: "Redux", icon: <SiRedux color="#e10df1" /> },
  { name: "JavaScript (ES6+)", icon:<IoLogoJavascript color="#e10df1" /> },
  { name: "Python", icon:  <AiOutlinePython color="#e10df1" />},
  { name: "Node.js", icon:<FaNodeJs color="#e10df1" />},
  { name: "Django", icon: <TbBrandDjango color="#e10df1" /> },
  { name: "PostgreSQL", icon:<DiPostgresql color="#e10df1" />},
  { name: "HTML5", icon: <FaHtml5 color="#e10df1" />  },
  { name: "CSS3", icon: <FaCss3Alt color="#e10df1" /> },
  { name: "AntDesign", icon: <AiOutlineAntDesign color="#e10df1" /> },
  { name: "Material UI", icon: <SiMaterialdesign color="#e10df1" /> },
  { name: "Git", icon:<FaGithub color="#e10df1" /> },
  { name: "Linux", icon: <FaLinux color="#e10df1" />},
];

// Main component
export default function SkillGrid() {
  return (
    <section className="container mx-auto py-10 px-6">
      <h2 className="text-3xl  mb-8 font-bold">My Skills⚙️</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 shadow-lg rounded-lg transition-transform duration-300 hover:shadow-gray-400 hover:scale-105"
          >
            <div className="text-5xl mb-3 font-bold">{skill.icon}</div>
            <p className="text-gray-400 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

