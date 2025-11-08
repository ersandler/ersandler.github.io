import { Link } from 'react-router-dom';
import { monologues } from '../data/monologuesData';

function Monologue() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-conifer mb-8">Monologue</h1>

      <div className="space-y-6">
        <div className="space-y-4 text-charcoal leading-relaxed">
          <p>These will be called monologues. I could put my sister in them, to nod along and generally agree with me between paragraphs, in which case they could technically be called "dialogues," but I will not do this.</p>
        </div>
        {monologues.map((post) => (
          <Link
            key={post.id}
            to={`/monologue/${post.id}`}
            className="group block"
          >
            <article className={`bg-white rounded-lg p-6 transition-all hover:shadow-lg ${
              post.featured
                ? 'border-2 border-conifer group-hover:border-rust'
                : 'border-2 border-gray-300 group-hover:border-gray-400'
            }`}>
              {post.featured && (
                <div className="text-xs font-semibold text-charcoal mb-2 tracking-wider">
                  ONE OF MY FAVORITES
                </div>
              )}

              <h2 className="text-2xl font-bold text-conifer group-hover:text-rust transition-colors mb-2">
                {post.title}
              </h2>

              <div className="text-sm text-gray-600 mb-3">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>

              <p className="text-charcoal leading-relaxed mb-4">
                {post.summary}
              </p>

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
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Monologue;
