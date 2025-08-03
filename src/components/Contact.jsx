import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const contactData = {
    email: "skr090850@gmail.com",
    linkedin: "https://linkedin.com/in/-suraj-kumar-",
    github: "https://github.com/skr090850",
};

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-transparent">
            <div className="container mx-auto px-6 text-center">
                <div className="bg-slate-800/20 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        I'm currently open to new opportunities and collaborations. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="flex justify-center items-center gap-8">
                        <a href={`mailto:${contactData.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors transform hover:scale-110" aria-label="Email">
                            <FiMail size={32} />
                        </a>
                        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors transform hover:scale-110" aria-label="LinkedIn">
                            <FiLinkedin size={32} />
                        </a>
                        <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors transform hover:scale-110" aria-label="GitHub">
                            <FiGithub size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
