import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useSettings } from '../contexts/SettingsContext';

const About = () => {
    const { t } = useSettings();
    const aboutText = "Seeking a challenging software development role where I can leverage my skills in MERN stack and Flutter. I have hands-on experience in building full-stack applications from the ground up, including API development, database management, and creating intuitive user interfaces. I am a quick learner, a collaborative team player, and passionate about creating technology that solves real-world problems.";
    const resumeUrl = "/SURAJ_KUMAR_RESUME.pdf";

    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    About <span className="text-cyan-400">Me</span>
                </h2>
                <div className="max-w-3xl mx-auto text-center text-slate-300 text-lg bg-slate-800/20 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
                    <p>{aboutText}</p>
                    <a 
                        href={resumeUrl} 
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
