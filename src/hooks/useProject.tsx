import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Project } from "../types/content";
import { projectContent } from "../lib/content";

interface ProjectNavigation {
  nextProjectId: string | null;
  previousProjectId: string | null;
  nextProjectTitle: string;
  previousProjectTitle: string;
}

interface UseProjectResult {
  project: Project | null;
  allProjects: Project[];
  loading: boolean;
  error: string | null;
  navigation: ProjectNavigation;
  navigateToProject: (id: string) => void;
}

// Define the project order using the project IDs from the content files
const PROJECT_ORDER = [
  'ai_personalization',
  'home_screen',
  'checkout',
  'recommendations',
  'design_system'
] as const;

export function useProject(): UseProjectResult {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCurrentIndex = useCallback(() => {
    if (!id) return -1;
    return PROJECT_ORDER.indexOf(id as typeof PROJECT_ORDER[number]);
  }, [id]);

  const getNavigation = useCallback((): ProjectNavigation => {
    const currentIndex = getCurrentIndex();
    const nextProjectId = currentIndex < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[currentIndex + 1] : null;
    const previousProjectId = currentIndex > 0 ? PROJECT_ORDER[currentIndex - 1] : null;

    return {
      nextProjectId,
      previousProjectId,
      nextProjectTitle: nextProjectId ? 'Next Project' : '',
      previousProjectTitle: previousProjectId ? 'Previous Project' : ''
    };
  }, [getCurrentIndex]);

  const navigateToProject = useCallback((projectId: string) => {
    navigate(`/project/${projectId}`);
  }, [navigate]);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);

        const [projectData, projectsData] = await Promise.all([
          projectContent.loadById(id),
          projectContent.loadAll()
        ]);
        
        if (!isMounted) return;

        if (!projectData) {
          setError('Project not found');
          return;
        }
        
        setProject(projectData);
        setAllProjects(projectsData);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Failed to load project');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return {
    project,
    allProjects,
    loading,
    error,
    navigation: getNavigation(),
    navigateToProject
  };
}
