import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaFigma, FaGitAlt, FaJava, FaLinux } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiFlutter, SiFirebase, SiCplusplus } from 'react-icons/si';

const skillsData = [
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Flutter", icon: <SiFlutter size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "C++", icon: <SiCplusplus size={40} /> },
    { name: "Git & GitHub", icon: <FaGitAlt size={40} /> },
    { name: "Figma", icon: <FaFigma size={40} /> },
    { name: "Linux", icon: <FaLinux size={40} /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Technical <span className="text-cyan-400">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                    {skillsData.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center gap-4 text-center text-white border border-slate-700 hover:border-cyan-400 hover:bg-slate-700/60 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-cyan-400">{skill.icon}</div>
                            <h3 className="font-semibold">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
