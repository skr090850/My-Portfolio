import React from 'react';
import { FiGithub } from 'react-icons/fi';

// --- Component Data ---
const projectsData = [
    {
      title: "Pro-Track (Job Portal)",
      description: "A role-based job portal for students, recruiters, and admins. I was responsible for backend development, creating REST APIs, authentication with JWT, file uploads, and email integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/skr090850"
    },
    {
      title: "Vehicle Verified",
      description: "A mobile app for managing and verifying vehicle documents with QR code support, built using Flutter and Firebase for a seamless, real-time experience.",
      tech: ["Flutter", "Firebase Auth", "Firestore", "Storage"],
      link: "https://github.com/skr090850"
    },
    {
      title: "AI Chat Bot",
      description: "An intelligent AI chatbot designed to answer user queries, built with Python and powered by a Large Language Model (LLM).",
      tech: ["Python", "Streamlit", "LLM"],
      link: "https://github.com/skr090850"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    My <span className="text-cyan-400">Projects</span>
                </h2>
                
                {/* Grid of Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-800 rounded-lg p-6 flex flex-col border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                            <p className="text-slate-400 flex-grow">{project.description}</p>
                            
                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2 my-4">
                                {project.tech.map(t => (
                                    <span key={t} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                            
                            {/* GitHub Link */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-white hover:text-cyan-400 transition-colors self-start inline-flex items-center gap-2">
                                View on GitHub <FiGithub />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
