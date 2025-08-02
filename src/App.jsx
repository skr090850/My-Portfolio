import React from 'react';

// Import the provider to manage theme and language
import { SettingsProvider } from './contexts/SettingsContext';

// Import all the section components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import CursorGlow from './components/CursorGlow';

const Footer = () => (
    <footer className="bg-white dark:bg-slate-900 py-6 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Suraj Kumar. All Rights Reserved.</p>
        </div>
    </footer>
);

function App() {
  return (
    // The SettingsProvider makes theme and language available to all child components
    <SettingsProvider>
      <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-sans transition-colors duration-300">
        <CursorGlow />
        <Header />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </SettingsProvider>
  );
}

export default App;
