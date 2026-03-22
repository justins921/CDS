import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

export default function UC30() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Build unstoppable discipline in 30 days',
    'Daily challenges that compound into real results',
    'Join thousands who have completed the challenge',
    'Free to start — just bring your commitment',
    'Accountability and community support',
    'Develop habits that carry into your investing journey',
  ];

  return (
    <>
      <SEOHead
        title="UC30 Challenge | Chandler David Smith"
        description="Take the UC30 Challenge — 30 days of discipline-building challenges designed to transform your habits and accelerate your success."
      />

      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 py-32 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-400 text-sm font-semibold rounded-full mb-6">
            30-Day Challenge
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            The <span className="gradient-text">UC30</span> Challenge
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            30 days. No excuses. The UC30 Challenge is designed to build the discipline, focus, and habits you need to succeed in real estate and in life. Push your limits and transform your mindset.
          </p>

          <a
            href="https://uc30.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-4 mb-16"
          >
            Start the Challenge
          </a>

          <div className="grid sm:grid-cols-2 gap-4 text-left mt-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
