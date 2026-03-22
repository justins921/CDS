import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { sampleBlogPosts } from '../data/siteData';

const placeholderContent = {
  'how-to-analyze-rental-property': [
    'Analyzing a rental property does not have to be complicated. After buying over 230 doors, I have developed a streamlined process that lets me evaluate any deal in about 10 minutes. The key is knowing which numbers actually matter and having a system to run them quickly.',
    'The first thing I look at is the gross rent multiplier and the price-to-rent ratio. These two quick metrics tell me immediately whether a property is even worth a deeper dive. If the monthly rent is less than 0.8% of the purchase price in most markets, I am moving on to the next deal.',
    'Next, I run the full cash flow analysis: gross rental income, minus vacancy (I use 8%), minus property management (10%), minus maintenance reserves (10%), minus insurance and taxes. What is left is your net operating income. Divide that by your total cash invested and you have your cash-on-cash return. I target 10% or higher.',
    'The biggest mistake new investors make is underestimating expenses. They see $1,500 in rent on a $150,000 property and think they have found a goldmine. But after accounting for all real expenses, many deals that look great on the surface barely break even. Use a proper calculator — like the CDS Rental Property Calculator — and let the numbers tell the story.',
  ],
  'first-rental-property-guide': [
    'Buying your first rental property is one of the most important financial decisions you will ever make. It is also one of the most intimidating. I remember the anxiety of writing that first offer, wondering if I was making a massive mistake. Spoiler: it was the best decision I ever made.',
    'Before you even start looking at properties, you need to get your finances in order. Know your credit score, save enough for a 20-25% down payment plus reserves, and get pre-approved with a lender who works with investors. House-hacking with an FHA loan at 3.5% down is also a legitimate strategy for your first deal.',
    'Market selection is critical. You want markets with strong population growth, job diversification, landlord-friendly laws, and price-to-rent ratios that support cash flow. I started in markets where I could buy properties for $100K-$150K that rented for $1,200-$1,500 per month.',
    'Once you close on your first property, the real education begins. Tenant screening, maintenance requests, and lease enforcement will teach you more in 90 days than a year of reading books. Document everything, build systems from day one, and remember that every problem you solve makes you a better investor.',
  ],
  'cash-on-cash-return-explained': [
    'If you are a buy-and-hold rental investor, cash-on-cash return is the single most important metric you need to understand. It tells you the actual return on the cash you have invested in a property, and it is far more useful than cap rate for leveraged investors.',
    'The formula is simple: annual pre-tax cash flow divided by total cash invested. If you put $40,000 into a deal (down payment, closing costs, and rehab) and it produces $4,800 per year in cash flow after all expenses, your cash-on-cash return is 12%. That is a solid deal.',
    'Cap rate, on the other hand, ignores your financing entirely. It only looks at the property as if you paid all cash. While cap rate is useful for comparing markets and property types, it does not tell you what your actual money is doing. When you use leverage smartly, your cash-on-cash return will almost always exceed the cap rate.',
    'I target a minimum 10% cash-on-cash return on every deal. In some markets, I have achieved 15-20% by finding off-market deals, negotiating seller financing, or adding value through strategic renovations. The key is being disciplined about your numbers and never falling in love with a property that does not pencil out.',
  ],
  'scaling-from-1-to-50-doors': [
    'Going from 1 rental door to 50 in three years was not magic — it was systems, leverage, and relentless deal flow. The first 5 doors were the hardest because I was still figuring out my processes. After that, scaling became more about capital deployment and team building.',
    'The first shift was moving from analyzing every deal myself to building a deal pipeline. I set up automated alerts on MLS, built relationships with wholesalers, and started networking with other investors who could bring me off-market opportunities. Volume changed everything.',
    'The second shift was financing. After my fourth conventional mortgage, I started exploring portfolio lenders, commercial loans, DSCR loans, and creative financing. Seller financing alone helped me acquire 12 doors in a single year without traditional bank approval on each deal.',
    'The third and most important shift was building a team. I stopped trying to self-manage around door number 15 and hired a property management company. I brought on a bookkeeper, built relationships with reliable contractors, and found an investor-friendly real estate agent. Your network becomes your net worth at scale.',
  ],
  'property-management-systems': [
    'Managing 230+ rental doors sounds overwhelming, but with the right systems, it takes far less time than most people imagine. The secret is not working harder — it is building processes that handle 95% of situations without your direct involvement.',
    'System one: automated rent collection. Every tenant pays through an online portal. No checks, no excuses, no chasing. Late fees are applied automatically. This single system eliminated hours of monthly administrative work.',
    'System two: maintenance request workflow. Tenants submit requests through an app, they get auto-categorized by urgency, and my property management team dispatches the appropriate vendor. I only get involved on capital expenditures over $1,000.',
    'System three: tenant screening automation. Every applicant goes through the same criteria — credit score, income verification, rental history, and background check. There is no subjectivity, no exceptions. This has reduced my eviction rate to under 2% and saved me tens of thousands of dollars.',
  ],
  'creative-financing-strategies': [
    'If you think you need 20% down and a perfect credit score to invest in real estate, think again. Creative financing has allowed me to acquire properties with far less out of pocket, and in some cases, with no traditional bank financing at all.',
    'Seller financing is my favorite strategy. Instead of getting a bank loan, the seller acts as the bank. You negotiate the down payment, interest rate, and terms directly. I have done deals with 5-10% down at competitive rates with sellers who wanted to defer capital gains taxes.',
    'Subject-to financing is another powerful tool. You take over the existing mortgage payments while the loan stays in the seller\'s name. This works particularly well with motivated sellers who need to move quickly. You get the benefit of their existing low interest rate and loan terms.',
    'Partnerships are how I scaled quickly. Instead of waiting years to save enough capital, I partnered with people who had money but lacked the time or knowledge to find and manage deals. I brought the deal-finding, analysis, and management expertise. They brought capital. We split the returns. Everyone wins.',
  ],
};

export default function BlogPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const post = sampleBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEOHead title="Post Not Found | Chandler David Smith" />
        <section className="min-h-screen flex items-center justify-center bg-navy-900">
          <div className="section-container text-center py-32">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Post Not Found</h1>
            <p className="text-gray-400 text-lg mb-8">
              The blog post you are looking for does not exist or has been moved.
            </p>
            <Link to="/blog" className="btn-primary">
              &larr; Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  const paragraphs = placeholderContent[slug] || [
    'This is a placeholder article about real estate investing. The full content for this post is coming soon. Check back later for in-depth analysis and actionable strategies.',
    'Real estate investing continues to be one of the most reliable paths to building generational wealth. Whether you are just getting started or scaling an existing portfolio, the fundamentals remain the same: buy right, manage well, and think long-term.',
    'Stay tuned for the complete article with detailed strategies, real numbers, and practical advice you can apply to your own investing journey.',
  ];

  const relatedPosts = sampleBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${post.title} | Chandler David Smith`}
        description={post.excerpt}
      />

      <section className="pt-32 pb-20 bg-navy-900">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <Link to="/blog" className="inline-flex items-center text-gold-400 hover:text-gold-300 transition mb-8">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              <span className="inline-block px-3 py-1 bg-gold-500/15 text-gold-400 text-xs font-semibold rounded-full mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-10 pb-10 border-b border-navy-700">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>

              <div className="prose prose-invert max-w-none">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
                    {p}
                  </p>
                ))}
              </div>

              {/* Inline CTA */}
              <div className="mt-12 p-8 bg-navy-800 border border-gold-500/20 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Want to Analyze Deals Like This?</h3>
                <p className="text-gray-400 mb-6">
                  Download the free CDS Rental Property Calculator and start running the numbers on your next deal.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/calculator" className="btn-primary">
                    Try the Calculator
                  </Link>
                  <Link to="/course" className="btn-secondary">
                    Explore the Course
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Author Bio */}
              <div className="card p-6 mb-8 sticky top-28">
                <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center text-gray-500 text-xs mb-4">
                  Photo
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Chandler David Smith</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Real estate investor with a $50M+ rental portfolio spanning 230+ doors. Helping 275K+ investors build wealth through rental properties.
                </p>
                <div className="flex gap-1">
                  <a
                    href="https://youtube.com/@chandlerdavidsmith?si=EyIZoAP7oZDQOa0K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-2 text-gray-500 hover:text-gold-400 transition text-sm"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://instagram.com/chandlerdavidsmith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-2 text-gray-500 hover:text-gold-400 transition text-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com/@chandlerdavidsmith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-2 text-gray-500 hover:text-gold-400 transition text-sm"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          <div className="mt-20 pt-16 border-t border-navy-700">
            <h2 className="section-heading mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <article key={rp.slug} className="card">
                  <span className="inline-block px-3 py-1 bg-gold-500/15 text-gold-400 text-xs font-semibold rounded-full mb-3">
                    {rp.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{rp.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{rp.excerpt}</p>
                  <Link
                    to={`/blog/${rp.slug}`}
                    className="text-gold-400 text-sm font-medium hover:text-gold-300 transition inline-flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
