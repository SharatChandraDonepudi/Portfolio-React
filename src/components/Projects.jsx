import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movieznow Ticket Booking",
      description: "A responsive web application for browsing current movies, exploring showtimes, and an interactive UI for seat selection.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60",
      liveLink: "https://moviesznow.netlify.app"
    },
    {
      id: 2,
      title: "Personal Portfolio v1",
      description: "My initial professional portfolio website showcasing skills, background, and personal creative design architectures.",
      tags: ["React", "Tailwind", "Web Design"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60",
      liveLink: "https://sharatportfolio16.netlify.app"
    },
    {
      id: 3,
      title: "KLH University Portal",
      description: "An informative web platform structured around campus data, college ecosystems, and academic resource configurations.",
      tags: ["React", "UI/UX", "Education"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60",
      liveLink: "https://klh-uni.netlify.app"
    }
  ];

  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="h-40 rounded-lg mb-6 overflow-hidden border border-gray-100 shadow-inner">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors"
                >
                  Launch Live Site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;