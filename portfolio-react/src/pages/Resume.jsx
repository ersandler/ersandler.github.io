/**
 * Resume Page
 * Opens PDF resume in a new tab
 */

import { useEffect } from 'react';

function Resume() {
  useEffect(() => {
    // Open PDF in new tab when component mounts
    window.open('/eli-sandler-resume.pdf', '_blank');
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-conifer">
        Resume
      </h1>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center space-y-4">
        <p className="text-charcoal text-lg">
          Opening resume in a new tab...
        </p>

        <div className="space-x-4">
          <a
            href="/eli-sandler-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-conifer text-white rounded hover:bg-rust transition-colors"
          >
            View Resume
          </a>

          <a
            href="/eli-sandler-resume.pdf"
            download="eli-sandler-resume.pdf"
            className="inline-block px-6 py-3 bg-white border-2 border-conifer text-conifer rounded hover:bg-conifer hover:text-white transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
