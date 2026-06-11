import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;