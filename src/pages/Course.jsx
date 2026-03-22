import { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { courseModules, testimonials } from '../data/siteData';

const courseTestimonials = testimonials.filter((t) =>
  ['Course Student', 'App User & Course Student', 'First-Time Investor'].includes(t.role)
);

const faqs = [
  {
    question: 'Is this course for beginners?',
    answer: 'Absolutely. The course starts from the very basics and builds up to advanced strategies. Whether you have zero properties or twenty, you will get value from this material.',
  },
  {
    question: 'How long do I have access?',
    answer: 'You get lifetime access. Once you enroll, the course is yours forever — including all future updates and bonus content.',
  },
  {
    question: 'What format is the course in?',
    answer: 'The course is 5+ hours of HD video lessons organized into 14 modules. You also get downloadable worksheets, checklists, and templates.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes. If you complete the course and don\'t feel it was worth every penny, reach out within 30 days for a full refund. No questions asked.',
  },
  {
    question: 'How is this different from free YouTube content?',
    answer: 'YouTube gives you pieces of the puzzle. This course gives you the complete system — organized, step-by-step, with nothing held back. It\'s the difference between random clips and a structured education.',
  },
];

export default function Course() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Real Estate Investing Course | Chandler David Smith"
        description="The complete A-to-Z real estate investing course. 14 modules, 5+ hours of content, 3,000+ students, and a 4.9/5.0 rating. Learn to build a rental portfolio from scratch."
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            The Complete{' '}
            <span className="gradient-text">Real Estate Investing Course</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            14 Modules &middot; 5+ Hours &middot; Everything You Need
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold gradient-text">3,000+</p>
              <p className="text-gray-400 text-sm">Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold gradient-text">4.9/5.0</p>
              <p className="text-gray-400 text-sm">Rating</p>
            </div>
          </div>
          <a href="#" className="btn-primary text-lg px-8 py-4">
            Enroll Now
          </a>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">What You'll Learn</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              This isn't another surface-level overview. It's a complete A-to-Z system for
              building a profitable rental property portfolio — the exact strategies, frameworks,
              and tools I used to build a $50M+ portfolio of 230+ doors. Every module is designed
              to take you from wherever you are now to confidently acquiring and managing
              cash-flowing rental properties.
            </p>
          </div>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Course Modules</h2>
            <p className="section-subheading mx-auto">
              14 comprehensive modules taking you from beginner to confident investor.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {courseModules.map((module, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500 text-navy-900 font-bold rounded-lg flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{module.title}</h3>
                  <p className="text-gray-400 text-sm">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Results */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Student Results</h2>
            <p className="section-subheading mx-auto">
              Real students. Real results. Here's what they have to say.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courseTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="card">
                <div className="text-gold-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-lg mx-auto">
            <div className="bg-navy-800 border border-gold-500/30 rounded-2xl p-8 text-center">
              <p className="text-gold-400 font-semibold uppercase tracking-wide text-sm mb-2">
                Lifetime Access
              </p>
              <h2 className="text-4xl font-bold text-white mb-2">$497</h2>
              <p className="text-gray-400 mb-6">One-time payment. Yours forever.</p>
              <ul className="text-left text-gray-300 text-sm space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  14 in-depth video modules (5+ hours)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Downloadable worksheets & templates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  Lifetime access + future updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">&#10003;</span>
                  30-day money-back guarantee
                </li>
              </ul>
              <a href="#" className="btn-primary w-full text-lg py-4 mb-4">
                Enroll Now
              </a>
              <div className="bg-gold-500/10 border border-gold-500/20 rounded-lg p-3 mt-4">
                <p className="text-gold-400 text-sm font-medium">
                  Included FREE with annual Creative Cashflow Club membership
                </p>
                <a href="/community" className="text-gold-400/70 text-xs underline hover:text-gold-300">
                  Learn more about the Club &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="card cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-sm md:text-base">{faq.question}</h3>
                  <span className="text-gold-400 ml-4 flex-shrink-0">
                    {openFaq === index ? '\u2212' : '+'}
                  </span>
                </div>
                {openFaq === index && (
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="section-heading">Start Building Your Portfolio Today</h2>
          <p className="section-subheading mx-auto mb-8">
            Join 3,000+ students who are already using this system to acquire cash-flowing rental properties.
          </p>
          <a href="#" className="btn-primary text-lg px-8 py-4">
            Enroll Now — $497
          </a>
        </div>
      </section>
    </>
  );
}
