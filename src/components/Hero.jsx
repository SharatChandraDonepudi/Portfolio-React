import React from 'react';
import profileImg from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center gap-12">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-100">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          B.Tech 1st Year @ KLU Aziznagar
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
          Hi, I'm <br className="md:hidden" />
          <span className="text-blue-600">D Sharat Chandra</span>.
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
          I'm a passionate learner bridging the gap between logic and creativity. Whether I'm building user interfaces, solving complex algorithms, or editing compelling videos, I love bringing ideas to life.
        </p>

        <div className="flex gap-4 pt-4 justify-center md:justify-start">
          <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 text-lg">
            View My Projects
          </a>
          <a href="#contact" className="px-8 py-3.5 bg-white text-gray-800 border border-gray-200 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-lg">
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-2 shadow-2xl overflow-hidden flex items-center justify-center border border-gray-100">
            <img 
              src={profileImg} 
              alt="My Profile" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Safe fallback link if local file path is missing on your computer
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60";
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;