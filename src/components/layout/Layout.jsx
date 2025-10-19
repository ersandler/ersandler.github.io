/**
 * Layout Component
 * Wrapper for all pages - includes Sidebar and Header
 * Children prop = page content that goes in the main area
 */

import Sidebar from './Sidebar';
import SidebarFooter from './SidebarFooter';
import Header from './Header';

function Layout({ children }) {
  return (
    // Main container - light grey background, min full height
    <div className="min-h-screen bg-light-grey flex flex-col">

      {/* Green accent strip at top - full width */}
      <div className="h-2 bg-conifer"></div>

      {/* Flex container for sidebar + content area */}
      {/* On mobile: stack vertically (flex-col) */}
      {/* On desktop (lg breakpoint): side-by-side (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row flex-1">

        {/* Sidebar - will be full width on mobile, fixed width on desktop */}
        <Sidebar />

        {/* Main content area - takes remaining space */}
        <div className="flex-1 flex flex-col">

          {/* Header/Navigation */}
          <Header />

          {/* Page content - this is where children (page components) are rendered */}
          <main className="flex-1 p-8">
            {children}
          </main>

        </div>
      </div>

      {/* Footer for mobile - shown at bottom of page */}
      <div className="lg:hidden bg-white border-t border-gray-200 py-6">
        <SidebarFooter />
      </div>
    </div>
  );
}

export default Layout;
