import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

const benefits = [
  {
    title: 'Private Community Access',
    description:
      'Connect with hundreds of active investors in a private, curated group. No noise — just serious people building wealth.',
  },
  {
    title: 'Monthly Live Trainings',
    description:
      'Deep-dive sessions on specific strategies, markets, and techniques led by Chandler and guest experts.',
  },
  {
    title: 'Bi-Monthly Q&A with Chandler',
    description:
      'Get your questions answered directly by Chandler in live group Q&A sessions twice a month.',
  },
  {
    title: 'Deal Analysis Sessions',
    description:
      'Submit your deals for live analysis and feedback. Learn what to look for by watching real deals get broken down.',
  },
  {
    title: 'Exclusive Deal Flow',
    description:
      'Access off-market deals, partnerships, and investment opportunities shared only within the Club.',
  },
  {
    title: 'Investor Network',
    description:
      'Build relationships with like-minded investors across the country. Find partners, lenders, and mentors.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Join',
    description:
      'Pick the plan that works for you and get instant access to the private community.',
  },
  {
    number: '2',
    title: 'Engage',
    description:
      'Attend live trainings, ask questions, share your wins, and connect with other investors.',
  },
  {
    number: '3',
    title: 'Grow',
    description:
      'Apply what you learn, close deals, and scale your portfolio alongside a supportive community.',
  },
];

const memberTestimonials = [
  {
    text: "The Creative Cashflow Club changed everything for me. Being around other investors who are actually doing deals — not just talking about it — pushed me to scale from 2 to 12 doors in one year.",
    name: 'Sarah T.',
    role: 'CCC Member',
  },
  {
    text: 'I joined for the deal flow and stayed for the community. The connections I have made here have been worth 10x the membership fee.',
    name: 'Brandon K.',
    role: 'CCC Member',
  },
  {
    text: "The bi-monthly Q&A calls alone are worth the price of admission. I've gotten answers to questions that would have cost me thousands in mistakes.",
    name: 'Lisa M.',
    role: 'CCC Member',
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
        description="Join the Creative Cashflow Club — a private community of action-taking real estate investors. Live trainings, deal analysis, Q&A with Chandler, and exclusive deal flow."
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Join the{' '}
            <span className="gradient-text">Creative Cashflow Club</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            A community of action-taking investors building real wealth together.
          </p>
          <a href="#" className="btn-primary text-lg px-8 py-4">
            Join the Club
          </a>
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
            {benefits.map((b) => (
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

      {/* Member Testimonials */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Members Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {memberTestimonials.map((t) => (
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
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Simple, Transparent Pricing</h2>
            <p className="section-subheading mx-auto">
              Choose the plan that works best for you. Cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Monthly */}
            <div className="bg-navy-800 border border-navy-600/50 rounded-2xl p-8 text-center">
              <p className="text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2">
                Monthly
              </p>
              <h3 className="text-4xl font-bold text-white mb-1">$97</h3>
              <p className="text-gray-500 text-sm mb-6">per month</p>
              <ul className="text-left text-gray-300 text-sm space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Full community access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Monthly live trainings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Bi-monthly Q&A calls
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Deal analysis sessions
                </li>
              </ul>
              <a href="#" className="btn-secondary w-full py-3">
                Join Monthly
              </a>
            </div>

            {/* Annual */}
            <div className="bg-navy-800 border border-gold-500/30 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Best Value
              </div>
              <p className="text-gold-400 font-semibold uppercase tracking-wide text-sm mb-2">
                Annual
              </p>
              <h3 className="text-4xl font-bold text-white mb-1">$970</h3>
              <p className="text-gray-500 text-sm mb-6">per year (save $194)</p>
              <ul className="text-left text-gray-300 text-sm space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Everything in Monthly
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Exclusive deal flow access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Investor network directory
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Priority event access
                </li>
              </ul>
              <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-3 mb-6">
                <p className="text-gold-400 text-sm font-medium">
                  Includes FREE access to the Real Estate Course ($497 value)
                </p>
              </div>
              <a href="#" className="btn-primary w-full py-3">
                Join Annually
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="section-heading">Ready to Join?</h2>
          <p className="section-subheading mx-auto mb-8">
            Stop investing alone. Join hundreds of action-taking investors who are building real wealth together.
          </p>
          <a href="#" className="btn-primary text-lg px-8 py-4">
            Join the Creative Cashflow Club
          </a>
        </div>
      </section>
    </>
  );
}
