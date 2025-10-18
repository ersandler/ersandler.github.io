/**
 * Project Detail Page
 * Displays full project information
 */

import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // If project not found, show error
  if (!project) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-conifer">Project Not Found</h1>
        <p className="text-charcoal">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="text-conifer hover:text-rust transition-colors">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Link
        to="/projects"
        className="inline-block text-conifer hover:text-rust transition-colors mb-2"
      >
        ← Back to Projects
      </Link>

      {/* Project title and GitHub button */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-conifer mb-2">
            {project.title}
          </h1>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 text-charcoal rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* GitHub button aligned right */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-conifer text-white rounded hover:bg-rust transition-colors whitespace-nowrap"
          >
            View on GitHub
          </a>
        )}
      </div>

      {/* Project content */}
      {project.content ? (
        <div className="prose max-w-none">
          {project.content}
        </div>
      ) : (
        <div className="text-charcoal">
          <p>{project.longDescription}</p>
        </div>
      )}

      {/* Demo link section (if exists) */}
      {project.demo && (
        <div className="pt-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white border-2 border-conifer text-conifer rounded hover:bg-conifer hover:text-white transition-colors"
          >
            Live Demo
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
