import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SettingsProvider } from './contexts/SettingsContext';
import StarsCanvas from './components/Stars';
import CursorGlow from './components/CursorGlow';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const Footer = () => (
    // FIX: Light aur dark mode ke liye alag background aur text color
    <footer className="bg-white dark:bg-slate-900 py-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Suraj Kumar. All Rights Reserved.</p>
        </div>
    </footer>
);

function App() {
  return (
    <SettingsProvider>
      {/* FIX: Light/dark mode ke liye base background aur text color set kiya gaya */}
      <div className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-sans transition-colors duration-300">
        <Toaster position="top-center" reverseOrder={false} />
        <StarsCanvas />
        <CursorGlow />
        
        <div className="relative z-10">
            <Header />
            <main>
              <Home />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
        </div>
        
        <Chatbot />
      </div>
    </SettingsProvider>
  );
}

export default App;
