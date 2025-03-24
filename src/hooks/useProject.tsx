
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Get the project data type from an existing file
type ProjectData = {
  title: string;
  description: string;
  date: string;
  client: string;
  role: string;
  categories: string[];
  heroImage: string;
  content: string;
};

export function useProject(projectsData: Record<string, ProjectData>) {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  // Create an array of project IDs for navigation
  const projectIds = Object.keys(projectsData);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
    }
    setIsLoading(false);
  }, [id, projectsData]);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!id) return;
    
    const currentIndex = projectIds.indexOf(id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projectIds.length;
    } else {
      newIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
    }
    
    navigate(`/project/${projectIds[newIndex]}`);
  };

  // Get next and previous project details for buttons
  const getAdjacentProject = (direction: 'next' | 'prev') => {
    if (!id) return null;
    
    const currentIndex = projectIds.indexOf(id);
    if (currentIndex === -1) return null;
    
    let adjacentIndex;
    if (direction === 'next') {
      adjacentIndex = (currentIndex + 1) % projectIds.length;
    } else {
      adjacentIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
    }
    
    const adjacentId = projectIds[adjacentIndex];
    return {
      id: adjacentId,
      title: projectsData[adjacentId]?.title || 'Project'
    };
  };

  const prevProject = getAdjacentProject('prev');
  const nextProject = getAdjacentProject('next');

  return {
    project,
    isLoading,
    handleNavigation,
    prevProject,
    nextProject
  };
}
