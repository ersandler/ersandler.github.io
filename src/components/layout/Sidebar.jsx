/**
 * Sidebar Component
 * Displays profile information, bio, and social links
 * Appears on all pages (wrapped by Layout component)
 * On desktop: includes footer. On mobile: footer moves to page bottom
 */

import SidebarProfile from './SidebarProfile';
import SidebarFooter from './SidebarFooter';

function Sidebar() {
  return (
    // Sidebar container - white background, padding
    // On mobile: full width. On desktop (lg breakpoint): fixed width sidebar
    // border-r adds light gray line on right side to separate from content
    // min-h-screen ensures sidebar is tall enough for footer to be visible when scrolling
    <aside className="bg-white p-8 lg:w-70 border-r border-gray-200 lg:min-h-screen flex flex-col">

      {/* Container for sticky profile - limits how far it can stick */}
      <div className="flex-grow">
        {/* Profile section - sticky on desktop so it stays visible while scrolling */}
        <div className="lg:sticky lg:top-0 lg:bg-white lg:pb-8">
          <SidebarProfile />
        </div>
      </div>

      {/* Footer - shown on all screen sizes */}
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
