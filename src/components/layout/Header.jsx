/**
 * Header Component
 * Navigation bar with links to main pages
 * Appears at the top of the content area (not in sidebar)
 */

import { NavLink } from 'react-router-dom'

function Header() {
  // Function to determine classes based on whether link is active
  // NavLink passes { isActive } to this function
  const getLinkClasses = ({ isActive }) => {
    const baseClasses = "font-medium transition-colors";
    // Active link = green text with orange underline, inactive = conifer green with rust hover
    return isActive
      ? `${baseClasses} text-conifer underline decoration-rust decoration-2 underline-offset-4`
      : `${baseClasses} text-conifer hover:text-rust`;
  };

  return (
    // Header container - white background, border on bottom, padding
    <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">

      {/* Navigation - horizontal flex layout, centered, wraps on mobile */}
      <nav className="flex flex-wrap justify-center gap-5 md:gap-8 items-center">

        {/* Home link - NavLink automatically tracks if route is active */}
        <NavLink to="/" className={getLinkClasses}>
          Home
        </NavLink>

        <div className="hidden md:block h-6 w-px bg-gray-300"></div>

        {/* Projects link */}
        <NavLink to="/projects" className={getLinkClasses}>
          Projects
        </NavLink>

        <div className="hidden md:block h-6 w-px bg-gray-300"></div>

        {/* Resume link - opens PDF in new tab */}
        <a
          href="/eli-sandler-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors text-conifer hover:text-rust"
        >
          Resume
        </a>

        <div className="hidden md:block h-6 w-px bg-gray-300"></div>

        {/* Personal link */}
        <NavLink to="/personal" className={getLinkClasses}>
          About Me
        </NavLink>

        <div className="hidden md:block h-6 w-px bg-gray-300"></div>

        {/* Monologue link - Phase 2 */}
        <NavLink to="/monologue" className={getLinkClasses}>
          Monologue
        </NavLink>

      </nav>
    </header>
  );
}

export default Header;
