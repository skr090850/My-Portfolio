import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaCode, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { useSettings } from '../contexts/SettingsContext';
import SectionWrapper from '../hoc/SectionWrapper';
import withTilt from '../hoc/withTilt';
import { fadeIn } from '../utils/motion';

// Data for the new service cards
const services = [
    {
        title: "Full-Stack Developer",
        icon: <FaCode size={40} />,
    },
    {
        title: "Flutter Developer",
        icon: <SiFlutter size={40} />,
    },
    {
        title: "Software Developer",
        icon: <FaLaptopCode size={40} />,
    },
    {
        title: "AI Enthusiast",
        icon: <FaRobot size={40} />,
    },
];

// This component now receives isHovering and mousePosition from the HOC
const ServiceCardUI = ({ service, isHovering, mousePosition }) => {
    return (
        // The main container is relative to position the shadow behind it
        <div className="relative h-full">
            {/* NEW: This div creates the lighting effect as a blurred shadow */}
            <div
                className="absolute -inset-2 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.2), transparent 80%)`,
                    filter: 'blur(15px)', // Blurs the gradient to create a soft glow
                }}
            />
            {/* The card content is in a separate relative container to appear above the shadow */}
            <div 
                className="relative w-full bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center text-white border border-slate-700 h-full"
                style={{ transform: "translateZ(50px)" }} // Adds depth to the card content
            >
                <div className="text-cyan-400">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
        </div>
    );
};

// Wrap the simple card with the tilt HOC
const TiltedServiceCard = withTilt(ServiceCardUI);

const About = () => {
    const { t } = useSettings();
    const aboutText = "Seeking a challenging software development role where I can leverage my skills in MERN stack and Flutter. I have hands-on experience in building full-stack applications from the ground up, including API development, database management, and creating intuitive user interfaces. I am a quick learner, a collaborative team player, and passionate about creating technology that solves real-world problems.";
    const resumeUrl = "/SURAJ_KUMAR_RESUME.pdf";

    return (
        <div className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
                    <h2 className="text-4xl font-bold text-center text-white mb-5">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
                        {aboutText}
                    </p>
                </motion.div>

                {/* Grid for the new service cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: '1000px' }}>
                    {services.map((service, index) => (
                        <motion.div key={service.title} variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
                            <TiltedServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>

                {/* Download Resume Button */}
                <div className="text-center mt-16">
                    <a 
                        href={resumeUrl} 
                        download 
                        className="inline-flex items-center gap-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-md hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transform hover:scale-105"
                    >
                        <FiDownload />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
