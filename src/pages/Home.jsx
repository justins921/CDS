import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import SocialProofBar from '../components/SocialProofBar';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { testimonials, youtubeVideos } from '../data/siteData';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Chandler David Smith | Real Estate Investor & Educator"
        description="Join 275,000+ investors learning to build real wealth through rental properties. Free calculator, courses, community, and live events from a $50M+ portfolio owner."
      />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />

        <div className="relative section-container py-20 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                I Own{' '}
                <span className="gradient-text">$50M+</span> in Rental
                Real&nbsp;Estate.{' '}
                <span className="text-gray-300">Let Me Show You How.</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                Join 275,000+ investors learning to build real wealth through
                rental properties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/calculator" className="btn-primary">
                  Start Learning Free
                </Link>
                <Link to="/community" className="btn-secondary">
                  Join the Community
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md aspect-[4/5] rounded-2xl bg-gray-700 flex items-center justify-center border border-navy-600/50">
                <span className="text-gray-400 text-sm">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Social Proof Bar ───────── */}
      <SocialProofBar />

      {/* ───────── Path Selector ───────── */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Where Should You Start?</h2>
            <p className="section-subheading mx-auto">
              Choose the path that matches where you are in your investing
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginner */}
            <div className="card text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-5">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Beginner</h3>
              <p className="text-sm text-white/70 mb-1">Just Getting Started</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Learn the fundamentals of analyzing deals, financing properties,
                and building your first rental portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/calculator" className="btn-primary text-sm">
                  Free Calculator
                </Link>
                <Link to="/course" className="btn-secondary text-sm">
                  Take the Course
                </Link>
              </div>
            </div>

            {/* Intermediate */}
            <div className="card text-center flex flex-col items-center border-gold-500/30">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-5">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intermediate</h3>
              <p className="text-sm text-white/70 mb-1">Ready to Scale</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Connect with other active investors, share deals, and accelerate
                your growth inside a private community.
              </p>
              <Link to="/community" className="btn-primary text-sm">
                Join the Community
              </Link>
            </div>

            {/* Advanced */}
            <div className="card text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-5">
                <span className="text-3xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Advanced</h3>
              <p className="text-sm text-white/70 mb-1">High-Level Networking</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Attend exclusive events and get personalized 1-on-1 strategy
                sessions for complex deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/events" className="btn-primary text-sm">
                  Upcoming Events
                </Link>
                <Link to="/consulting" className="btn-secondary text-sm">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── YouTube Section ───────── */}
      <section className="py-16 md:py-24 bg-navy-800/40">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Learn From My Experience</h2>
            <p className="section-subheading mx-auto">
              Over 275K subscribers trust my channel for no-BS rental property
              education. Here are some popular videos to get you started.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {youtubeVideos.map((video, i) => (
              <div key={i} className="card p-0 overflow-hidden">
                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    YouTube Video Placeholder
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-1">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Real estate investing strategies and deal breakdowns
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://youtube.com/@chandlerdavidsmith?si=EyIZoAP7oZDQOa0K"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Product Showcase ───────── */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Everything You Need to Succeed</h2>
            <p className="section-subheading mx-auto">
              Tools, education, community, and experiences designed to help you
              build a profitable rental portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              icon="📊"
              title="Cashflow Calculator"
              description="Analyze rental deals in minutes with the same tool I use to evaluate every property in my $50M portfolio."
              link="/calculator"
              linkText="Try It Free"
              badge="Free"
            />
            <ProductCard
              icon="🎓"
              title="Rental Property Course"
              description="A step-by-step system to find, finance, and manage profitable rental properties — from your first deal to your fiftieth."
              link="/course"
              linkText="Explore the Course"
            />
            <ProductCard
              icon="🤝"
              title="Creative Cashflow Club"
              description="A private community of active investors sharing deals, asking questions, and holding each other accountable."
              link="/community"
              linkText="Join the Club"
              badge="Most Popular"
            />
            <ProductCard
              icon="🏔️"
              title="Live Events & Retreats"
              description="Immersive retreats and networking events where you meet top investors, tour properties, and build lasting relationships."
              link="/events"
              linkText="See Events"
            />
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="py-16 md:py-24 bg-navy-800/40">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Real Results From Real Investors</h2>
            <p className="section-subheading mx-auto">
              Hear from people who have used the calculator, taken the course,
              and joined the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Newsletter CTA ───────── */}
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 border-t border-b border-navy-700/40">
        <div className="section-container py-16 md:py-24 text-center">
          <h2 className="section-heading">
            Get the Cashflow Retirement Calculator Free
          </h2>
          <p className="section-subheading mx-auto mt-2 mb-8">
            Join the weekly newsletter for investing insights, deal breakdowns,
            and exclusive content — plus get instant access to the calculator.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mt-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-navy-700 border border-navy-600 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Download Free Calculator
            </button>
          </form>
        </div>
      </section>

      {/* ───────── About Preview ───────── */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Meet Chandler</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Chandler David Smith is a real estate investor, educator, and
                YouTube creator who has built a portfolio of 230+ rental doors,
                170+ storage units, and multiple commercial properties worth over
                $50 million. He teaches hundreds of thousands of people how to
                build wealth through rental real estate — sharing the exact
                strategies, tools, and mindset that got him there.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { value: '$50M+', label: 'Portfolio Value' },
                  { value: '230+', label: 'Rental Doors' },
                  { value: '275K+', label: 'YouTube Subs' },
                  { value: '3,000+', label: 'Students' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-bold gradient-text">{s.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-secondary">
                Read My Full Story
              </Link>
            </div>

            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl bg-gray-700 flex items-center justify-center border border-navy-600/50">
                <span className="text-gray-400 text-sm">Photo Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
