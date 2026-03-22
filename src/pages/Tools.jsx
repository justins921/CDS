import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Tools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [downloadMsg, setDownloadMsg] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleDownload = (e) => {
    e.preventDefault();
    if (email) {
      setDownloadMsg('Check your email for the download link!');
      setEmail('');
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterMsg("You're subscribed! Check your inbox.");
      setNewsletterEmail('');
    }
  };

  return (
    <>
      <SEOHead
        title="Free Real Estate Tools & Resources | Chandler David Smith"
        description="Free real estate investing tools and resources. Rental property calculator app, cashflow retirement calculator, newsletter, YouTube channel, and podcast appearances."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Free Real Estate <span className="gradient-text">Tools & Resources</span>
          </h1>
          <p className="section-subheading mx-auto">
            Everything you need to start analyzing deals, building cashflow projections, and learning real estate investing — completely free.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-20 bg-navy-900">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* CDS Rental Property Calculator */}
            <div className="card p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full uppercase">
                  Free
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CDS Rental Property Calculator</h3>
              <p className="text-gray-400 mb-6">
                The same calculator I use to analyze every deal in my $50M+ portfolio. Analyze cash flow, cash-on-cash return, cap rate, and more in minutes. Available on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-5 py-2"
                >
                  Google Play
                </a>
                <Link to="/calculator" className="btn-ghost text-sm px-5 py-2">
                  Web Version
                </Link>
              </div>
            </div>

            {/* Cashflow Retirement Calculator */}
            <div className="card p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full uppercase">
                  Free PDF
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cashflow Retirement Calculator</h3>
              <p className="text-gray-400 mb-6">
                Figure out exactly how many rental properties you need to replace your income and retire through real estate. Download the free PDF spreadsheet.
              </p>
              <form onSubmit={handleDownload} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition"
                />
                <button type="submit" className="btn-primary text-sm px-5 py-2 whitespace-nowrap">
                  Download
                </button>
              </form>
              {downloadMsg && (
                <p className="text-green-400 text-sm mt-3">{downloadMsg}</p>
              )}
            </div>

            {/* Weekly Newsletter */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Get Weekly Real Estate Insights</h3>
              <p className="text-gray-400 mb-6">
                Join thousands of investors receiving weekly deal breakdowns, market updates, and actionable investing tips straight to your inbox every Tuesday.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition"
                />
                <button type="submit" className="btn-primary text-sm px-5 py-2 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              {newsletterMsg && (
                <p className="text-green-400 text-sm mt-3">{newsletterMsg}</p>
              )}
            </div>

            {/* YouTube Channel */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">YouTube Channel</h3>
              <p className="text-gray-400 mb-6">
                275K+ subscribers learning real estate investing through in-depth deal analyses, market updates, property tours, and investing tutorials.
              </p>
              <a
                href="https://youtube.com/@chandlerdavidsmith"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Podcast Appearances */}
          <div className="mt-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Podcast Appearances</h3>
              <p className="text-gray-400 mb-6">
                Chandler has been featured on top real estate and business podcasts sharing strategies for building wealth through rental properties.
              </p>
              <ul className="space-y-3">
                {[
                  { name: 'BiggerPockets Podcast', desc: 'How I Built a $50M Rental Portfolio by Age 30' },
                  { name: 'Real Estate Rookie', desc: 'From Zero to 230+ Doors: A Step-by-Step Journey' },
                  { name: 'The Money Show', desc: 'Creative Financing Strategies for Rental Properties' },
                  { name: 'Invest Like a Boss', desc: 'Scaling Your Portfolio with Systems and Teams' },
                ].map((pod) => (
                  <li key={pod.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-gold-400 rounded-full flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">{pod.name}</span>
                      <span className="text-gray-500"> — {pod.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="section-container text-center">
          <h2 className="section-heading mb-4">Ready for a Deeper Dive?</h2>
          <p className="section-subheading mx-auto mb-8">
            Take your investing to the next level with our comprehensive course, private community, or one-on-one consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/course" className="btn-primary text-lg px-8 py-4">
              Explore the Course
            </Link>
            <Link to="/community" className="btn-secondary text-lg px-8 py-4">
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
