import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-600">My Portfolio</h1>
        <nav className="hidden md:flex gap-6 font-medium text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;