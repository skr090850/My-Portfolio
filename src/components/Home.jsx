import React from 'react';

// --- Placeholder Data (You can replace this with props or a central data file) ---
const portfolioData = {
  name: "Suraj Kumar",
  title: "Full-Stack Developer (MERN) & Flutter Enthusiast",
  intro: "I build modern, responsive web and mobile applications, focusing on delivering high-quality solutions and contributing to product excellence in a growth-driven team.",
  profileImage: "/profile-photo.jpg",
};

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
            {/* Decorative background glows for the neon effect */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left side: Text content with entry animation */}
                    <div className="md:w-1/2 text-center md:text-left animate-fade-in-right">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Hi, I'm <span 
                                className="text-cyan-400" 
                                // Applying a text shadow to create a glowing neon text effect
                                style={{textShadow: '0 0 8px #06b6d4, 0 0 16px #06b6d4'}}
                            >
                                {portfolioData.name}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mt-4">{portfolioData.title}</p>
                        <p className="text-slate-400 mt-6 max-w-xl mx-auto md:mx-0">{portfolioData.intro}</p>
                        
                        {/* Call to action button */}
                        <a 
                            href="#contact" 
                            className="mt-8 inline-block bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Right side: Profile picture with animated border */}
                    <div className="md:w-1/2 flex justify-center animate-fade-in-left">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Spinning borders for a futuristic, animated look */}
                            <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-2 border-2 border-purple-500 rounded-full animate-spin-slow-reverse"></div>
                            
                            {/* Profile image itself */}
                            <img 
                                src={portfolioData.profileImage} 
                                alt="Suraj Kumar" 
                                className="w-full h-full object-cover rounded-full p-4"
                                // Add an error handler for placeholder if image fails to load
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
