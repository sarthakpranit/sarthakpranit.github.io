import { Link } from "react-router-dom";
import ProjectHero from "@/components/ProjectHero";
import ProjectContent from "@/components/project/ProjectContent";
import ProjectNavigation from "@/components/ProjectNavigation";
import { useProject } from "@/hooks/useProject";
import { Button } from '@/components/ui/button';

export default function Project() {
  const {
    project,
    allProjects,
    loading,
    error
  } = useProject();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading project...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-4">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main 
      className="min-h-screen"
      id="main-content"
      tabIndex={-1}
    >
      <ProjectHero
        title={project.title}
        description={project.description}
        date={project.date}
        client={project.client}
        role={project.role}
        categories={project.categories}
        heroImage={project.heroImage}
      />
      <div className="max-w-4xl mx-auto px-6">
        <ProjectContent content={project.content} />
        <ProjectNavigation
          currentProjectId={project.id}
          projects={allProjects}
        />
      </div>
    </main>
  );
}
