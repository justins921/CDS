import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { consultingPackages } from '../data/siteData';

const benefits = [
  'Personalized investment strategy tailored to your goals and market',
  'Deal analysis and review on properties you are currently evaluating',
  'Portfolio optimization to maximize cash flow and equity growth',
  'Scaling roadmap to go from where you are now to where you want to be',
  'Market selection guidance based on real data and experience',
  'Financing strategy to leverage the right loan products and structures',
];

export default function Consulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="1-on-1 Real Estate Consulting | Chandler David Smith"
        description="Book a 60-minute 1-on-1 consulting call with Chandler David Smith. Get personalized investment strategy, deal analysis, and expert guidance from a $50M+ portfolio owner."
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Get Personalized{' '}
            <span className="gradient-text">Real Estate Strategy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Bring your real estate deals, business challenges, and questions — and we'll map out what to focus on, what to cut, and your next best steps. 60-minute calls with an investor who owns 230+ doors and manages a $50M+ portfolio.
          </p>
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            Book a Call
          </a>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">What You Get</h2>
              <p className="text-gray-400 mb-6">
                Every call is tailored to your specific situation. Whether you need help analyzing a deal, building a strategy, or scaling your portfolio — you will walk away with a clear action plan.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-gold-400 mt-0.5 flex-shrink-0">&#10003;</span>
                    <span className="text-gray-300">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square bg-navy-800 border border-navy-600/50 rounded-2xl flex items-center justify-center text-gray-500">
                Consulting Photo Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">Who This Is For</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Consulting calls are designed for investors who are ready to take action. You do not need to be experienced — but you do need to be serious. This is for you if:
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="card text-center">
                <h3 className="text-white font-semibold mb-2">You Have a Specific Deal</h3>
                <p className="text-gray-400 text-sm">
                  You are looking at a property and want expert eyes on the numbers before making an offer.
                </p>
              </div>
              <div className="card text-center">
                <h3 className="text-white font-semibold mb-2">You Need a Strategy</h3>
                <p className="text-gray-400 text-sm">
                  You know you want to invest but need a personalized roadmap to get started or scale up.
                </p>
              </div>
              <div className="card text-center">
                <h3 className="text-white font-semibold mb-2">You Want Expert Guidance</h3>
                <p className="text-gray-400 text-sm">
                  You value learning from someone who has done it at scale and can help you avoid costly mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Choose Your Package</h2>
            <p className="section-subheading mx-auto">
              All sessions are 60 minutes. Multi-call packages include built-in savings.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {consultingPackages.map((pkg, index) => {
              const savingsPerCall = pkg.calls > 1 ? (500 * pkg.calls - pkg.price) : 0;
              const isPopular = index === 1;
              return (
                <div
                  key={pkg.label}
                  className={`bg-navy-800 border rounded-2xl p-8 text-center relative ${
                    isPopular ? 'border-gold-500/30' : 'border-navy-600/50'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <p className="text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2">
                    {pkg.label}
                  </p>
                  <h3 className="text-4xl font-bold text-white mb-1">${pkg.price.toLocaleString()}</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {pkg.description}
                  </p>
                  {savingsPerCall > 0 && (
                    <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-2 mb-6">
                      <p className="text-gold-400 text-sm font-medium">
                        Save ${savingsPerCall}
                      </p>
                    </div>
                  )}
                  {savingsPerCall === 0 && <div className="mb-6" />}
                  <a
                    href="#"
                    className={isPopular ? 'btn-primary w-full py-3' : 'btn-secondary w-full py-3'}
                  >
                    Book Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendly Placeholder */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-800 border border-navy-600/50 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-2xl">&#128197;</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Calendly Booking Widget</h3>
              <p className="text-gray-400 text-sm">
                Embed Calendly scheduling widget here to allow clients to book calls directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chandler's Credentials */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Learn From Chandler?</h2>
            <p className="section-subheading mx-auto">
              Advice from someone who has actually done it — not just talked about it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">$50M+</p>
              <p className="text-gray-400 text-sm mt-1">Portfolio Value</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">230+</p>
              <p className="text-gray-400 text-sm mt-1">Rental Doors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">3,000+</p>
              <p className="text-gray-400 text-sm mt-1">Students Taught</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">275K+</p>
              <p className="text-gray-400 text-sm mt-1">YouTube Subscribers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-800 to-navy-900">
        <div className="section-container text-center">
          <h2 className="section-heading">Ready to Get Personalized Guidance?</h2>
          <p className="section-subheading mx-auto mb-8">
            Stop guessing and start investing with a proven strategy. Book your call today.
          </p>
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            Book Your Call Now
          </a>
        </div>
      </section>
    </>
  );
}
