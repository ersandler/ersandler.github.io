/**
 * Monologues Data
 * Contains all blog post/monologue information
 *
 * HOW TO ADD A NEW MONOLOGUE:
 * 1. Create a new file in src/data/monologues/your-slug.jsx
 *    (Copy from .templates/monologues/template-monologue.jsx)
 * 2. Import it below
 * 3. Add entry to the monologues array
 * 4. Posts are sorted by date (newest first) automatically
 */

// Import monologue content files
// import { onGenAiPostContent } from './monologues/on-generative-ai';

export const monologues = [
  // {
  //   id: 'on-generative-ai-and-coding',
  //   title: 'On Generative AI and Coding',
  //   date: '2025-10-19',
  //   summary: 'Idle musings on the current state of generative AI technology and discourse.',
  //   tags: ['AI', 'Front End'],
  //   featured: false,
  //   content: onGenAiPostContent
  // },
];

// Sort by date, newest first
monologues.sort((a, b) => new Date(b.date) - new Date(a.date));
