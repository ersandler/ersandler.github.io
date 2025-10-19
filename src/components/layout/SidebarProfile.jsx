/**
 * Sidebar Profile Component
 * Profile photo, name, bio, and social links
 * Used in both mobile and desktop layouts
 */

function SidebarProfile() {
  return (
    <>
      {/* Profile photo - circular, centered */}
      <div className="flex justify-center mb-6">
        <img
          src="/headshot.jpg"
          alt="Elijah Sandler"
          className="w-48 h-48 rounded-full object-cover border-4 border-gray-100"
        />
      </div>

      {/* Name - conifer green, large, bold, centered */}
      <h1 className="text-2xl font-bold text-conifer text-center mb-2">
        Elijah Sandler
      </h1>

      {/* Pronouns - small, gray, centered */}
      <p className="text-sm text-gray-500 text-center mb-4">
        he/they
      </p>

      {/* Bio - charcoal text, centered, leading-relaxed = comfortable line spacing */}
      <p className="text-charcoal text-center leading-relaxed mb-6">
        Senior at Northeastern University studying Data Science & Philosophy.
        Research focus in epistemology, algorithmic ethics, AI, and game theory.
      </p>

      {/* Divider line */}
      <div className="border-t border-gray-200 mb-4"></div>

      {/* Social links - horizontal with dividers */}
      <div className="flex items-center justify-center gap-4 mb-4">
        {/* Email link */}
        <a
          href="mailto:elijah.sandler@gmail.com"
          className="text-conifer hover:text-rust transition-colors"
        >
          Email
        </a>

        {/* Vertical divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/elijah-sandler"
          target="_blank"
          rel="noopener noreferrer"
          className="text-conifer hover:text-rust transition-colors"
        >
          LinkedIn
        </a>

        {/* Vertical divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* GitHub link */}
        <a
          href="https://github.com/ersandler"
          target="_blank"
          rel="noopener noreferrer"
          className="text-conifer hover:text-rust transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Divider line - stays below links */}
      <div className="border-t border-gray-200 mt-0 mb-6"></div>
    </>
  );
}

export default SidebarProfile;
