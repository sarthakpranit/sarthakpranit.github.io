
import React from 'react';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store with product catalog, cart, and checkout functionality.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag and drop functionality.',
      technologies: ['React', 'Redux', 'Firebase'],
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information visualization using modern UI components.',
      technologies: ['React', 'Chart.js', 'Weather API'],
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map(project => (
          <div key={project.id} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
