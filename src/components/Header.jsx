import React, { useState, useEffect } from 'react';

const Header = () => {
    // State to track if the page has been scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to add a scroll event listener when the component mounts
    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if user has scrolled more than 10px, otherwise false
            setIsScrolled(window.scrollY > 10);
        };
        
        // Add the event listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation links to be displayed in the header
    const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    return (
        <header 
            // Dynamically apply classes based on the isScrolled state for a cool visual effect
            className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out ${
                isScrolled 
                ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg shadow-cyan-500/10' 
                : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Name section that links back to the top of the page */}
                <a href="#home" className="text-2xl font-bold text-cyan-400 hover:text-white transition-colors duration-300">
                    Suraj Kumar
                </a>
                
                {/* Desktop navigation links */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`} 
                            className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
                        >
                            {link}
                            {/* Animated underline effect on hover */}
                            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    {/* Example: <button>Menu</button> */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
