/**
 * Sidebar Component
 * Displays profile information, bio, and social links
 * Appears on all pages (wrapped by Layout component)
 */

function Sidebar() {
  return (
    // Sidebar container - white background, full height, padding
    // On mobile: full width. On desktop (lg breakpoint): fixed width sidebar
    // border-r adds light gray line on right side to separate from content
    // flex flex-col allows footer content to stick to bottom with mt-auto
    <aside className="bg-white p-8 lg:w-80 lg:min-h-screen border-r border-gray-200 flex flex-col">

      {/* Profile photo - circular, centered */}
      <div className="flex justify-center mb-6">
        <img
          src="/headshot.jpg" // Vite serves files from public/ at root level
          alt="Elijah Sandler"
          className="w-48 h-48 rounded-full object-cover border-4 border-gray-100" // Added border for polish
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
        Research focus in epistemology, AI ethics, game theory, and network science.
      </p>

      {/* Divider line */}
      <div className="border-t border-gray-200 mb-4"></div> {/* Reduced from mb-6 to mb-4 */}

      {/* Social links - horizontal with dividers */}
      <div className="flex items-center justify-center gap-4 mb-4">

        {/* Email link */}
        <a
          href="mailto:elijah.sandler@gmail.com"
          className="text-conifer hover:text-rust transition-colors" // transition-colors = smooth color change on hover
        >
          Email
        </a>

        {/* Vertical divider */}
        <div className="h-6 w-px bg-gray-300"></div> {/* w-px = 1px wide, h-4 = height */}

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/elijah-sandler"
          target="_blank" // Opens in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
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

      {/* Spacer to push footer to bottom */}
      <div className="flex-grow"></div>

      {/* Footer content - copyright and Stoppard quote at bottom of sidebar */}
      <div className="pb-4">
        {/* Copyright text - centered, small */}
        <p className="text-center text-xs text-charcoal mb-2">
          © {new Date().getFullYear()} Elijah Sandler
        </p>

        {/* Stoppard quote - barely visible, easter egg */}
        <p className="text-center text-xs text-gray-300 italic" title="Tom Stoppard, Rosencrantz and Guildenstern Are Dead">
          "We cross our bridges when we come to them and burn them behind us,
          with nothing to show for our progress except a memory of the smell of smoke,
          and a presumption that once our eyes watered."
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
