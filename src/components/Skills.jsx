import React from 'react';

const Skills = () => {
  const skillList = [
    { 
      name: "Front-End Dev", 
      emoji: "⚛️",
      description: "Building fast, interactive, and fully responsive user interfaces using HTML, CSS, React, and modern Tailwind configurations.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60"
    },
    { 
      name: "Java + DSA", 
      emoji: "☕",
      description: "Writing optimized back-end logic, solving complex algorithmic problems, and structural system configurations with clean Java frameworks.",
      imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60"
    },
    { 
      name: "Video Editing", 
      emoji: "🎬",
      description: "Crafting digital storytelling, high-energy pacing, video aesthetics, and clean transition timelines using professional production tools.",
      imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 border-y border-gray-100 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
            Core Competencies
          </p>
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            What I'm Good At
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillList.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-44 w-full overflow-hidden bg-gray-900 relative">
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl" role="img" aria-label={skill.name}>
                    {skill.emoji}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;