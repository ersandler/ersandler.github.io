/**
 * Projects Page
 * Grid of all projects
 */

import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

function Projects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-conifer mb-2">
          Projects
        </h1>
        <p className="text-charcoal">
          Click on any project to learn more about it and access the source code.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={`group block bg-white rounded-lg overflow-hidden transition-all ${
              project.featured
                ? 'border-2 border-conifer hover:border-rust'
                : 'border border-gray-200 hover:border-gray-300'
            } hover:shadow-lg`}
          >
            {/* Project Image - only show if image exists */}
            {project.image && (
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            {/* Project Info */}
            <div className="p-5">
              {project.featured && (
                <div className="text-xs font-semibold text-charcoal mb-2 tracking-wider">
                  ONE OF MY FAVORITES
                </div>
              )}
              <h3 className="text-xl font-semibold text-conifer mb-2 group-hover:text-rust transition-colors">
                {project.title}
              </h3>
              <p className="text-charcoal text-sm mb-3">
                {project.shortDescription}
              </p>

              {/* Tags */}
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
