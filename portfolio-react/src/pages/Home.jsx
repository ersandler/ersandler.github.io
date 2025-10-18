/**
 * Home Page
 * Landing page with featured work
 */

import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

function Home() {
  // Filter for featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-12">
      {/* Hero/Bio Section */}
      <section className="max-w-4xl">
        <h1 className="text-4xl font-bold text-conifer mb-6">
          Welcome! My name is Eli Sandler.
        </h1>
        <div className="space-y-4 text-charcoal leading-relaxed">
          <p>
            I am a candidate for a bachelor's degree in data science and philosophy at Northeastern University.
            I study and research machine learning, game theory, network science, and descriptive ethics, and I
            hope to one day work in predictive analytics. I like to approach data science projects in an
            epistemological way, by asking: what can we know about the matter at hand? What should we believe
            based on the evidence? What does that imply for the conclusions we should draw from our analysis?
            I believe that there is more of an overlap between philosophy and data science than is commonly
            thought, and that making those connections can be invaluable.
          </p>
          <p>
            In my first three years at Northeastern, I have studied abroad in London, won an award to support
            my research projects, and worked as a research assistant and teaching assistant for Northeastern
            professors. This site contains some of my recent projects in data science and philosophy. I've also
            spent four months working a co-op at a lab in Northeastern's Portland, ME satellite campus. Please
            feel free to reach out to me via email. I am always excited to talk about past and future projects,
            as well as data science and/or philosophy.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-conifer mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(project => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-conifer mb-2 group-hover:text-rust transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-charcoal text-sm">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="mt-6 text-center">
            <Link
              to="/projects"
              className="inline-block text-conifer hover:text-rust font-medium transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </section>
      )}

      {/* Latest Monologue Section */}
      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-conifer mb-3">Latest Thoughts</h2>
        <p className="text-charcoal mb-4">
          Check out my latest reflections and musings on philosophy, data science, and more.
        </p>
        <Link
          to="/monologue"
          className="inline-block text-conifer hover:text-rust font-medium transition-colors"
        >
          Read the Monologue →
        </Link>
      </section>
    </div>
  );
}

export default Home;
