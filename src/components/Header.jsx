import React, { useState, useEffect } from 'react';
import { FiSettings, FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useSettings } from '../contexts/SettingsContext';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { theme, setTheme, language, changeLanguage, t } = useSettings();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { key: 'nav_home', href: '#home' },
        { key: 'nav_about', href: '#about' },
        { key: 'nav_skills', href: '#skills' },
        { key: 'nav_projects', href: '#projects' },
        { key: 'nav_experience', href: '#experience' },
        { key: 'nav_contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">
                    Suraj Kumar
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.key} href={link.href} className="text-slate-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors relative group">
                            {t(link.key)}
                            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cyan-500 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                <div className="relative">
                    <button onClick={() => setSettingsOpen(!settingsOpen)} className="text-slate-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <FiSettings size={24} />
                    </button>
                    {settingsOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 p-2 z-40">
                            <div className="mb-2">
                                <p className="text-xs text-slate-500 dark:text-slate-400 px-2 mb-1">Theme</p>
                                <div className="flex justify-around bg-slate-100 dark:bg-slate-700 rounded-md p-1">
                                    <button onClick={() => setTheme('light')} className={`p-1 rounded ${theme === 'light' ? 'bg-cyan-500 text-white' : 'text-slate-600 dark:text-slate-300'}`}><FiSun /></button>
                                    <button onClick={() => setTheme('dark')} className={`p-1 rounded ${theme === 'dark' ? 'bg-cyan-500 text-white' : 'text-slate-600 dark:text-slate-300'}`}><FiMoon /></button>
                                    <button onClick={() => setTheme('system')} className={`p-1 rounded ${theme === 'system' ? 'bg-cyan-500 text-white' : 'text-slate-600 dark:text-slate-300'}`}><FiMonitor /></button>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 px-2 mb-1">Language</p>
                                <select onChange={(e) => changeLanguage(e.target.value)} value={language} className="w-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white p-2 rounded-md text-sm border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                    {languages.map(lang => (
                                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
