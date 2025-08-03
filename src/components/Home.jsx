import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '../contexts/SettingsContext';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

// --- Dynamic Titles for the typing effect ---
const dynamicTitles = [
    "Full-Stack Developer . . .",
    "Flutter Developer . . .",
    "MERN Stack Specialist . . .",
    "AI Enthusiast . . ."
];

// --- Main Home Component ---
const Home = () => {
    const { t } = useSettings();
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentTitle = dynamicTitles[titleIndex];
            if (isDeleting) {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
                setTypingSpeed(50);
            } else {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
                setTypingSpeed(70);
            }

            if (!isDeleting && displayedTitle === currentTitle) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedTitle === '') {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % dynamicTitles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedTitle, isDeleting, titleIndex, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent">
            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left side: Text content with slide-in animation */}
                    <motion.div 
                        variants={slideIn("left", "tween", 0.2, 1)}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white leading-tight">
                            {t('home_greeting')}{' '}
                            <span 
                                className="text-cyan-500 dark:text-cyan-300" 
                                style={{textShadow: '0 0 8px #06b6d4, 0 0 16px #06b6d4'}}
                            >
                                Suraj Kumar
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-3xl text-slate-700 dark:text-slate-50 mt-4 h-8 font-bold">
                            <span>{displayedTitle}</span>
                            <span className="border-l-2 border-slate-700 dark:border-slate-300 ml-1 animate-pulse"></span>
                        </p>
                        
                        <p className="text-slate-400 dark:text-slate-400 mt-6 max-w-xl mx-auto md:mx-0">{t('home_intro')}</p>
                        
                        <a 
                            href="#contact" 
                            className="mt-8 inline-block bg-cyan-500 text-white dark:text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-105"
                        >
                            {t('home_button')}
                        </a>
                    </motion.div>
                    
                    {/* Right side: Profile picture with slide-in animation */}
                    <motion.div 
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
                            <img 
                                src="/profile-photo.jpg" 
                                alt="Suraj Kumar" 
                                className="relative w-full h-full object-cover rounded-full p-1"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/1a202c/718096?text=Suraj'; }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Wrap the component with the HOC before exporting it.
export default SectionWrapper(Home, "home");
