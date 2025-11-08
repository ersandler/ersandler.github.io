/**
 * Layout Component
 * Wrapper for all pages - includes Sidebar and Header
 * Children prop = page content that goes in the main area
 */

import Sidebar from './Sidebar';
import Header from './Header';

function Layout({ children }) {
  return (
    // Main container - light grey background, min full height
    <div className="min-h-screen bg-light-grey flex flex-col">

      {/* Green accent strip at top - full width */}
      <div className="h-2 bg-conifer"></div>

      {/* Flex container for sidebar + content area */}
      {/* On mobile: stack vertically with sidebar at bottom (flex-col-reverse) */}
      {/* On desktop (lg breakpoint): side-by-side (lg:flex-row) */}
      <div className="flex flex-col-reverse lg:flex-row flex-1">

        {/* Sidebar - at bottom on mobile, left side on desktop */}
        <Sidebar />

        {/* Main content area - takes remaining space */}
        <div className="flex-1 flex flex-col">

          {/* Header/Navigation */}
          <Header />

          {/* Page content - this is where children (page components) are rendered */}
          <main className="flex-1 p-8 flex justify-center">
            <div className="w-full max-w-3xl">
              {children}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

export default Layout;
