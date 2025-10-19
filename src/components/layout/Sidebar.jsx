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
    // Sidebar container - white background, full height, padding
    // On mobile: full width. On desktop (lg breakpoint): fixed width sidebar
    // border-r adds light gray line on right side to separate from content
    // flex flex-col allows footer content to stick to bottom with mt-auto
    <aside className="bg-white p-8 lg:w-80 lg:min-h-screen border-r border-gray-200 flex flex-col">

      <SidebarProfile />

      {/* Spacer to push footer to bottom on desktop */}
      <div className="flex-grow"></div>

      {/* Footer - only shown on desktop */}
      <div className="hidden lg:block">
        <SidebarFooter />
      </div>
    </aside>
  );
}

export default Sidebar;
