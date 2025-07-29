import React from 'react';

// Import all the section components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience'; // Import the new Experience component
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import CursorGlow from './components/CursorGlow';

// A simple Footer component
const Footer = () => (
    <footer className="bg-slate-900 py-6 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Suraj Kumar. All Rights Reserved.</p>
        </div>
    </footer>
);

// The main App component that brings everything together
function App() {
  return (
    // Root div with base styles for the entire application
    <div className="bg-slate-900 text-white font-sans">
      <CursorGlow />
      
      {/* The rest of your application */}
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience /> {/* Add the new component here */}
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
