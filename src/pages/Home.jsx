/**
 * Home Page
 * Landing page with featured work
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

function Home() {
  // Filter for featured projects
  const featuredProjects = projects.filter(project => project.featured);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(featuredProjects.length / itemsPerPage);

  // Get current page projects
  const startIndex = currentPage * itemsPerPage;
  const currentProjects = featuredProjects.slice(startIndex, startIndex + itemsPerPage);

  // Navigation handlers with transition
  const goToNextPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPrevPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPage = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(index);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="space-y-12">
      {/* Hero/Bio Section */}
      <section className="max-w-4xl">
        <h1 className="text-4xl font-bold text-conifer mb-6">
          Welcome! My name is Eli Sandler.
        </h1>
        <div className="space-y-4 text-charcoal leading-relaxed">
          <p>
            I'm a candidate for a bachelor's of science in data science and philosophy at Northeastern University. I study and research machine learning algorithms, especially ones that are deployed in high-risk domains such as healthcare or justice systems. I use insights from ethics and epistemology to inform how we build algorithms and analyze their limitations. As AI deployment becomes more widespread and embedded into decision-making processes it is crucial to build systems that are both technically sound and socially responsible. 
          </p>
          <p>
            In addition to my AI and data science research, I love reading and thinking about game theory and evolutionary ethics, moral philosophy, and ethics of technology, as well as grappling with questions about knowledge and the philosophy of science.

          </p>
          <p>
            As a hobby, I've also spent some time analyzing sports data and using those analyses to build predictive models. This has generated some interesting conclusions about things like predicting NBA games and what makes for a good Fantasy Premier League asset.  
          </p>
          <p>
            This site contains several of the projects I have worked on the past four years, including or explanations of them. Please feel free to reach out if you'd like to chat about anything related to what you see here!
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-conifer mb-6">Featured Projects</h2>

          {/* Projects Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px] transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            {currentProjects.map(project => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={goToPrevPage}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous projects"
              >
                <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPage ? 'bg-conifer' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNextPage}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next projects"
              >
                <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

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
