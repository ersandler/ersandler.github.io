/**
 * MONOLOGUE TEMPLATE
 *
 * Copy this file to create a new monologue post.
 *
 * Steps:
 * 1. Copy this file to src/data/monologues/your-post-slug.jsx
 * 2. Rename the export (e.g., yourPostSlugContent)
 * 3. Write your content below
 * 4. Add entry to src/data/monologuesData.js
 *
 * Available styling classes and examples below:
 */

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const templateMonologueContent = (
  <div className="space-y-6">
    <div className="space-y-4 text-charcoal leading-relaxed">

      {/* ============================================ */}
      {/* BASIC PARAGRAPHS */}
      {/* ============================================ */}

      <p>
        This is a regular paragraph. Write your thoughts here. The text will be
        in charcoal color with comfortable line spacing (leading-relaxed).
      </p>

      <p>
        Start a new paragraph tag for each paragraph. They automatically get
        spacing between them (space-y-4).
      </p>

      {/* ============================================ */}
      {/* SECTION HEADERS */}
      {/* ============================================ */}

      <h3 className="text-xl font-semibold text-conifer mb-2">
        This is a Section Header
      </h3>

      <p>
        Use h3 tags for major sections. They're styled in conifer green,
        larger text, and bold.
      </p>

      <h4 className="text-lg font-medium text-conifer">
        This is a Subsection Header
      </h4>

      <p>
        Use h4 tags for subsections. Slightly smaller and medium weight.
      </p>

      {/* ============================================ */}
      {/* LINKS */}
      {/* ============================================ */}

      <p>
        You can add{' '}
        <a
          href="https://example.com"
          className="text-conifer hover:text-rust transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          external links
        </a>{' '}
        that turn orange on hover. Don't forget the {'{" "}'} spaces around links!
      </p>

      {/* ============================================ */}
      {/* EMPHASIS (BOLD & ITALIC) */}
      {/* ============================================ */}

      <p>
        You can use <strong className="font-bold">bold text for emphasis</strong> or{' '}
        <em className="italic">italic text for subtle emphasis</em>.
      </p>

      {/* ============================================ */}
      {/* BLOCKQUOTES */}
      {/* ============================================ */}

      <blockquote className="border-l-4 border-conifer pl-4 py-2 italic bg-gray-50 rounded">
        "This is a blockquote. Perfect for highlighting important quotes or
        pulling out key ideas. It has a green left border and subtle background."
      </blockquote>

      {/* ============================================ */}
      {/* LISTS */}
      {/* ============================================ */}

      <p>Unordered (bullet) list:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>First bullet point</li>
        <li>Second bullet point</li>
        <li>Third bullet point with more text to show how it wraps nicely</li>
      </ul>

      <p>Ordered (numbered) list:</p>
      <ol className="list-decimal ml-6 space-y-1">
        <li>First numbered item</li>
        <li>Second numbered item</li>
        <li>Third numbered item</li>
      </ol>

      {/* ============================================ */}
      {/* CODE BLOCKS */}
      {/* ============================================ */}

      <p>Inline code example:</p>
      <p>
        Use the <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
          console.log()
        </code> function to debug your code.
      </p>

      <p>Multi-line code block with syntax highlighting (JavaScript):</p>
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
        {`function example() {
  const message = "Hello, world!";
  console.log(message);
  return message;
}`}
      </SyntaxHighlighter>

      <p>Python code example with syntax highlighting:</p>
      <SyntaxHighlighter language="python" style={vscDarkPlus} className="rounded-lg">
        {`def calculate_mean(numbers):
    """Calculate the arithmetic mean of a list of numbers."""
    return sum(numbers) / len(numbers)

# Example usage
data = [1, 2, 3, 4, 5]
mean = calculate_mean(data)
print(f"Mean: {mean}")`}
      </SyntaxHighlighter>

      <p>Other supported languages include: jsx, typescript, bash, sql, json, css, and many more!</p>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus} className="rounded-lg">
        {`import React from 'react';

function HelloWorld() {
  return (
    <div className="text-conifer">
      <h1>Hello, JSX!</h1>
    </div>
  );
}`}
      </SyntaxHighlighter>

      {/* ============================================ */}
      {/* IMAGES */}
      {/* ============================================ */}

      <p>Centered image with caption:</p>
      <div className="text-center space-y-2">
        <img
          src="/images/your-image.png"
          alt="Description of image"
          className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200"
        />
        <p className="text-sm text-gray-600 italic">
          Caption: This describes what the image shows
        </p>
      </div>

      <p>Side-by-side images:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center space-y-2">
          <img
            src="/images/image1.png"
            alt="First image"
            className="w-full rounded-lg border border-gray-200"
          />
          <p className="text-sm text-gray-600">Caption for image 1</p>
        </div>
        <div className="text-center space-y-2">
          <img
            src="/images/image2.png"
            alt="Second image"
            className="w-full rounded-lg border border-gray-200"
          />
          <p className="text-sm text-gray-600">Caption for image 2</p>
        </div>
      </div>

      {/* ============================================ */}
      {/* CALLOUT BOXES / NOTES */}
      {/* ============================================ */}

      <div className="bg-conifer bg-opacity-10 border-l-4 border-conifer p-4 rounded">
        <p className="font-semibold text-conifer mb-2">💡 Pro Tip:</p>
        <p>
          This is a highlighted callout box. Great for tips, warnings, or
          important notes you want to stand out.
        </p>
      </div>

      <div className="bg-rust bg-opacity-10 border-l-4 border-rust p-4 rounded">
        <p className="font-semibold text-rust mb-2">⚠️ Warning:</p>
        <p>
          This is an orange/rust colored callout for warnings or caveats.
        </p>
      </div>

      {/* ============================================ */}
      {/* HORIZONTAL DIVIDER */}
      {/* ============================================ */}

      <hr className="border-t-2 border-gray-200" />

      <p>
        Use the horizontal rule above to separate major sections of your post.
      </p>

      {/* ============================================ */}
      {/* TABLES (if needed) */}
      {/* ============================================ */}

      <p>Simple table:</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">Column 1</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Column 2</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Data 1</td>
              <td className="border border-gray-200 px-4 py-2">Data 2</td>
              <td className="border border-gray-200 px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">Data 4</td>
              <td className="border border-gray-200 px-4 py-2">Data 5</td>
              <td className="border border-gray-200 px-4 py-2">Data 6</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ============================================ */}
      {/* FOOTNOTES / REFERENCES */}
      {/* ============================================ */}

      <p>
        You can add footnote-style references<sup className="text-conifer">1</sup> in
        your text.
      </p>

      <hr className="border-t border-gray-200 mt-8" />

      <div className="text-sm text-gray-600 space-y-1">
        <p><sup>1</sup> This is where you'd explain the footnote reference.</p>
      </div>

    </div>
  </div>
);
