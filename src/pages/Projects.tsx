
import React from 'react';
import ProjectCard from '../components/ProjectCard';

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
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
