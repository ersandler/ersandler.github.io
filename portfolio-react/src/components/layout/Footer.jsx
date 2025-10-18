/**
 * Footer Component
 * Appears at the bottom of every page
 * Contains copyright and a hidden Stoppard quote
 */

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      {/* Container with max width and centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Copyright text - centered, small, charcoal color */}
        <p className="text-center text-sm text-charcoal">
          © {new Date().getFullYear()} Elijah Sandler
        </p>

        {/*
          Stoppard quote - "hidden" but present in the HTML
          Very small, very light gray text that blends with background
          Philosophical easter egg for those who inspect the page
        */}
        <p className="text-center text-xs text-gray-300 mt-2 italic" title="Tom Stoppard, Rosencrantz and Guildenstern Are Dead">
          "We cross our bridges when we come to them and burn them behind us,
          with nothing to show for our progress except a memory of the smell of smoke,
          and a presumption that once our eyes watered."
        </p>
      </div>
    </footer>
  );
}

export default Footer;
