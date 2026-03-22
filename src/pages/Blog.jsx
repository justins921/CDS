import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { sampleBlogPosts, blogCategories } from '../data/siteData';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? sampleBlogPosts
      : sampleBlogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Real Estate Investing Blog | Chandler David Smith"
        description="Real estate investing tips, deal analysis breakdowns, and strategies from a $50M+ portfolio owner. Learn how to build wealth through rental properties."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Estate Investing <span className="gradient-text">Blog</span>
          </h1>
          <p className="section-subheading mx-auto">
            Actionable insights, deal breakdowns, and strategies from building a $50M+ rental portfolio.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-navy-900 border-b border-navy-700/50">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', ...blogCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-navy-900'
                    : 'bg-navy-800 text-gray-400 hover:text-white hover:bg-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-navy-900">
        <div className="section-container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No posts found in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="card flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gold-500/15 text-gold-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-gold-400 font-medium hover:text-gold-300 transition inline-flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
