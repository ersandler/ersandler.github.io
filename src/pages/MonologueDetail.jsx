import { useParams, Link } from 'react-router-dom';
import { monologues } from '../data/monologuesData';

function MonologueDetail() {
  const { id } = useParams();
  const post = monologues.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-rust mb-4">Post Not Found</h1>
        <Link to="/monologue" className="text-conifer hover:text-rust transition-colors">
          ← Back to Monologue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/monologue"
        className="inline-block text-conifer hover:text-rust transition-colors mb-6"
      >
        ← Back to Monologue
      </Link>

      <article>
        <header className="mb-8">
          {post.featured && (
            <div className="text-xs font-semibold text-charcoal mb-2">
              FEATURED
            </div>
          )}

          <h1 className="text-4xl font-bold text-conifer mb-3">
            {post.title}
          </h1>

          <div className="text-sm text-gray-600 mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 text-charcoal rounded border border-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}

export default MonologueDetail;
