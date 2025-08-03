import React from 'react';
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
    <footer className="bg-white/5 dark:bg-slate-900/5 py-6 border-t border-slate-200/10 dark:border-slate-800/10 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Suraj Kumar. All Rights Reserved.</p>
        </div>
    </footer>
);

function App() {
  return (
    <SettingsProvider>
      <div className="relative">
        <StarsCanvas />
        <CursorGlow />
        <div className="relative z-0"> {/* Use z-0 or no z-index for content */}
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