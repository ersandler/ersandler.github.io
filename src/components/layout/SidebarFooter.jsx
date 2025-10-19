/**
 * Sidebar Footer Component
 * Copyright and Stoppard quote
 * Displayed at bottom of sidebar on desktop, bottom of page on mobile
 */

function SidebarFooter() {
  return (
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
  );
}

export default SidebarFooter;
