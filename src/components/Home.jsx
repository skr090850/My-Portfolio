import React, { useState, useEffect } from 'react';
import { useSettings } from '../contexts/SettingsContext';

const dynamicTitles = [
    "Full-Stack Developer . . .",
    "Flutter Developer . . .",
    "MERN Stack Specialist . . .",
    "AI Enthusiast . . ."
];

const Home = () => {
    const { t } = useSettings(); // For language translations
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150); // ms per character

    useEffect(() => {
        const handleTyping = () => {
            const currentTitle = dynamicTitles[titleIndex];
            
            // Logic for deleting text
            if (isDeleting) {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
                setTypingSpeed(20);
            } 
            // Logic for typing text
            else {
                setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
                setTypingSpeed(50);
            }

            // When a title is fully typed out, pause, then start deleting
            if (!isDeleting && displayedTitle === currentTitle) {
                setTimeout(() => setIsDeleting(true), 2000);
            } 
            // When a title is fully deleted, move to the next title and start typing
            else if (isDeleting && displayedTitle === '') {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % dynamicTitles.length);
            }
        };

        // Set up the interval for the typing animation
        const timer = setTimeout(handleTyping, typingSpeed);

        // Cleanup function to clear the timer when the component unmounts
        return () => clearTimeout(timer);

    }, [displayedTitle, isDeleting, titleIndex, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left side: Text content */}
                    <div className="md:w-1/2 text-center md:text-left animate-fade-in-right">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                            {t('home_greeting')}{' '}
                            <span 
                                className="text-cyan-500 dark:text-cyan-400" 
                                style={{textShadow: '0 0 8px #06b6d4, 0 0 16px #06b6d4'}}
                            >
                                Suraj Kumar
                            </span>
                        </h1>
                        
                        {/* The dynamic title with a blinking cursor effect */}
                        <p className="text-xl md:text-3xl text-slate-950 dark:text-slate-100 mt-4 h-8 font-bold">
                            <span>{displayedTitle}</span>
                            <span className="border-l-2 border-slate-700 dark:border-slate-300 animate-ping ml-1"></span>
                        </p>
                        
                        <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-xl mx-auto md:mx-0">{t('home_intro')}</p>
                        
                        <a 
                            href="#contact" 
                            className="mt-8 inline-block bg-cyan-500 text-white dark:text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-105"
                        >
                            {t('home_button')}
                        </a>
                    </div>
                    
                    {/* Right side: Profile picture */}
                    <div className="md:w-1/2 flex justify-center animate-fade-in-left">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-2 border-2 border-purple-500 rounded-full animate-spin-slow-reverse"></div>
                            
                            <img 
                                src="/profile-photo.jpg" 
                                alt="Suraj Kumar" 
                                className="w-full h-full object-cover rounded-full p-4"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/1a202c/718096?text=Suraj'; }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
