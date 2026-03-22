import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { communityFeatures, communityPricing, bonusCourses, testimonials } from '../data/siteData';

const steps = [
  {
    number: '1',
    title: 'Join',
    description: 'Pick the plan that works for you and get instant access to the private community.',
  },
  {
    number: '2',
    title: 'Engage',
    description: 'Attend live trainings, ask questions, share your wins, and connect with other investors.',
  },
  {
    number: '3',
    title: 'Grow',
    description: 'Apply what you learn, close deals, and scale your portfolio alongside a supportive community.',
  },
];

const pillars = [
  {
    title: 'Knowledge',
    description: 'Real estate strategies, deal finding, negotiation, and scalable systems taught by practitioners.',
  },
  {
    title: 'Direction',
    description: 'Expert feedback on critical decisions at every stage of your investing journey.',
  },
  {
    title: 'Network',
    description: 'A community of driven investors for deal flow, accountability, and professional connections.',
  },
];

export default function Community() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Creative Cashflow Club | Chandler David Smith"
        description="Join the Creative Cashflow Club — helping you secure lasting wealth with expert guidance and a powerful network. 100+ members, live trainings, deal analysis, and exclusive deal flow."
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Join the{' '}
            <span className="gradient-text">Creative Cashflow Club</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Helping you secure lasting wealth with expert guidance and a powerful network.
          </p>
          <p className="text-base text-gray-500 mb-8">
            100+ active members &middot; 3,000+ total students across all products
          </p>
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            Join the Club
          </a>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pillars.map((p) => (
              <div key={p.title} className="text-center">
                <h3 className="text-xl font-bold gradient-text mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">What's Included</h2>
            <p className="section-subheading mx-auto">
              Everything you need to accelerate your investing journey — all in one place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityFeatures.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="w-14 h-14 bg-gold-500 text-navy-900 font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Courses */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Included Bonus Courses</h2>
            <p className="section-subheading mx-auto">
              Annual and Lifetime members get access to all bonus courses — over $3,100 in value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center border-gold-500/30">
              <h3 className="text-white font-semibold mb-1">The Complete Real Estate Investing Course</h3>
              <p className="text-gray-500 text-xs mb-2">15 modules &middot; 5+ hours</p>
              <p className="text-gold-400 text-sm font-medium">$497 value</p>
            </div>
            {bonusCourses.map((course) => (
              <div key={course.title} className="card text-center">
                <h3 className="text-white font-semibold mb-1">{course.title}</h3>
                <p className="text-gray-500 text-xs mb-2">{course.lessons} lessons</p>
                <p className="text-gold-400 text-sm font-medium">${course.value} value</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Members Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="card">
                <div className="text-gold-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Simple, Transparent Pricing</h2>
            <p className="section-subheading mx-auto">
              Choose the plan that works best for you. Cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {communityPricing.map((plan) => (
              <div
                key={plan.label}
                className={`bg-navy-800 border rounded-2xl p-8 text-center relative ${
                  plan.featured ? 'border-gold-500/30' : 'border-navy-600/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                    Best Value
                  </div>
                )}
                <p className="text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2">
                  {plan.label}
                </p>
                <h3 className="text-4xl font-bold text-white mb-1">
                  ${plan.price.toLocaleString()}
                  {plan.period && <span className="text-base text-gray-400">{plan.period}</span>}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                {plan.featured && (
                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-3 mb-6">
                    <p className="text-gold-400 text-sm font-medium">
                      Includes all 6 bonus courses + CDS Rental Calculator Pro
                    </p>
                  </div>
                )}
                <a href="#" className={plan.featured ? 'btn-primary w-full py-3' : 'btn-secondary w-full py-3'}>
                  Join {plan.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Perk */}
      <section className="py-8">
        <div className="section-container">
          <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-gold-400 font-medium">All members also receive a free CDS Rental Calculator Pro upgrade ($60 value)</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="section-heading">Ready to Join?</h2>
          <p className="section-subheading mx-auto mb-8">
            Stop investing alone. Join 100+ action-taking investors who are building real wealth together.
          </p>
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            Join the Creative Cashflow Club
          </a>
        </div>
      </section>
    </>
  );
}
