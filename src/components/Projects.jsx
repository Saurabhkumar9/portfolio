import React, { useState } from 'react';
import { Data } from '../assets/assets';

const Projects = () => {
  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'FULL STACK'];

const projectsData=Data


  const [activeCategory, setActiveCategory] = useState('ALL');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === 'ALL') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  return (
    <div className="bg-[#020617] py-16 px-5 min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 relative">
          <span className="relative z-10">
            My <span className="text-teal-400">Projects</span>
          </span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-teal-500 rounded-full"></span>
        </h2>
        
        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-[#1e293b] text-gray-300 hover:text-white'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory !== category && (
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-5 ${
                activeCategory === category ? 'bg-white' : 'bg-teal-400 opacity-0 group-hover:opacity-100'
              } transition-all duration-300`}></span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-[#0f172a] rounded-2xl shadow-lg border border-[#1e293b] hover:border-teal-400 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                {/* Technologies with hover effect */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-[#1e293b] text-teal-400 px-2 py-1 rounded hover:bg-teal-500 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-5 group-hover:text-gray-100 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Enhanced Buttons */}
                <div className="flex gap-3 mt-auto pt-3">
                {
                  project.codeLink &&  <div className='w-32 h-10'>
                  <a
                    href={project.codeLink}
                    target='blank'
                    className="relative flex-1 text-sm bg-transparent border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-white transition-all duration-300 overflow-hidden group"
                  >
                    <span className="relative z-10">View Code</span>
                    <span className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </a>
                 </div>
                }
                 {
                  project.demoLink && <div className='w-32 h-10'>
                  <a
                    href={project.demoLink}
                    target='blank'
                    className="relative flex-1 text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden group"
                  >
                    <span className="relative z-10">Live Demo</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </a> 
                  </div>
                 }
                </div>
              </div>
              
              {/* Project glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Project corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -right-8 -top-8 w-16 h-16 bg-teal-500 transform rotate-45 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-[#0f172a] rounded-2xl border border-dashed border-gray-700">
              <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-gray-400">No projects found in this category.</p>
              <button 
                onClick={() => filterProjects('ALL')}
                className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300 text-sm"
              >
                Show All Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;