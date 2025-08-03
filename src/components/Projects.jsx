import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLink, FiServer } from 'react-icons/fi';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn } from '../utils/motion';
import { BsFillWrenchAdjustableCircleFill } from 'react-icons/bs';
import { RiFileWordLine } from 'react-icons/ri';

// Updated data with image paths. Replace these with your actual project screenshots.
const projectsData = [
    {
      image: "./public/pro-track.png",
      title: "Pro-Track (Job Portal)",
      description: "A role-based job portal for students, recruiters, and admins. I was responsible for backend development, creating REST APIs, authentication with JWT, file uploads, and email integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT","Gemini API"],
      link: "https://pro-track-job-portal.vercel.app/",
      githubLink: "https://github.com/skr090850/Pro-Track-Job-Portal-"
    },
    {
      image: "./public/vehicle-verified.jpg",
      title: "Vehicle Verified",
      description: "A mobile app for managing and verifying vehicle documents with QR code support, built using Flutter and Firebase for a seamless, real-time experience.",
      tech: ["Flutter", "Firebase Auth", "Firestore", "Gemini API"],
      link: "https://drive.google.com/drive/folders/1X-y0BfcML0PVmYw2pWtJUgFqOZKE7dEA?usp=drive_link",
      githubLink: "https://github.com/skr090850/Vehicle-Verified"

    },
    {
      image: "./public/hyperlocal-service-marketplace.png",
      title: "Hyperlocal Service Marketplace",
      description: "ServiceHub is a user-friendly web platform that helps users search, book, and connect with trusted local professionals like plumbers, electricians, beauticians, and more for home services.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://hyperlocal-service-marketplace.vercel.app/",
      githubLink: "https://github.com/skr090850/Hyperlocal-Service-Marketplace"

    },
    {
      image: "https://placehold.co/600x400/1a202c/718096?text=AI+Chatbot",
      title: "AI Chat Bot",
      description: "An intelligent AI chatbot designed to answer user queries, built with Python and powered by a Large Language Model (LLM).",
      tech: ["Python", "Streamlit", "LLM"],
      link: "https://github.com/skr090850",
      githubLink: "https://github.com/skr090850"
    }
];

const Projects = () => {
    return (
        <div className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
                    <h2 className="text-4xl font-bold text-center text-white mb-5">
                        My <span className="text-cyan-400">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                            className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 flex flex-col border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                        >
                            <div className="relative w-full h-70 mb-4">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute top-2 right-2">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-900/50 flex justify-center items-center hover:bg-slate-900 transition-colors"
                                    >
                                        <FiLink className="w-1/2 h-1/2 text-white" />
                                    </a>
                                </div>
                                <div className="absolute top-2 left-2">
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-900/50 flex justify-center items-center hover:bg-slate-900 transition-colors"
                                    >
                                        <FiGithub className="w-1/2 h-1/2 text-white" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                            <p className="text-slate-400 flex-grow text-sm">{project.description}</p>
                            
                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map(t => (
                                    <span key={t} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");
