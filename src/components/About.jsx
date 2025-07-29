import React from 'react';
import { FiDownload } from 'react-icons/fi';

// --- Component Data ---
const aboutData = {
  aboutText: "Seeking a challenging software development role where I can leverage my skills in MERN stack and Flutter. I have hands-on experience in building full-stack applications from the ground up, including API development, database management, and creating intuitive user interfaces. I am a quick learner, a collaborative team player, and passionate about creating technology that solves real-world problems.",
  resumeUrl: "/SURAJ_KUMAR_RESUME.pdf", // Ensure this file is in the 'public' folder
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    About <span className="text-cyan-400">Me</span>
                </h2>
                
                {/* About Me Content */}
                <div className="max-w-3xl mx-auto text-center text-slate-300 text-lg">
                    <p>{aboutData.aboutText}</p>
                    
                    {/* Download Resume Button */}
                    <a 
                        href={aboutData.resumeUrl} 
                        download 
                        className="mt-8 inline-flex items-center gap-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-md hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transform hover:scale-105"
                    >
                        <FiDownload />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
