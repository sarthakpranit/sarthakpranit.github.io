
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <button className="w-full py-2 bg-blue-600 text-white rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
