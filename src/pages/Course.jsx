import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { courseModules, coursePricing, bonusCourses, testimonials } from '../data/siteData';
import { images } from '../data/images';

const bonusThumbnails = {
  'Seller Finance Masterclass': images.sellerFinance,
  'Cost Segregation Workshop': images.costSegregation,
  'Mailer Marketing Blueprint': images.mailerMarketing,
  'Deal Finding Mastery': images.dealFinding,
  'Tiny Homes Bootcamp': images.tinyHomes,
};

const faqs = [
  {
    question: 'Is this course for beginners?',
    answer: 'Absolutely. The course starts from the very basics and builds up to advanced strategies. Whether you have zero properties or twenty, you will get value from this material.',
  },
  {
    question: 'How long do I have access?',
    answer: 'The stand-alone course includes lifetime access. Annual and monthly plans give you access as long as your subscription is active.',
  },
  {
    question: 'What format is the course in?',
    answer: 'The course is 5+ hours of HD video lessons organized into 15 modules. You also get downloadable worksheets, the CDS Rental Calculator app, and rental analysis spreadsheets.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: "Yes. If you complete the course and don't feel it was worth every penny, reach out within 30 days for a full refund. No questions asked.",
  },
  {
    question: 'How is this different from free YouTube content?',
    answer: "YouTube gives you pieces of the puzzle. This course gives you the complete system — organized, step-by-step, with nothing held back. It's the difference between random clips and a structured education.",
  },
  {
    question: 'What bonus courses are included?',
    answer: 'Annual and Lifetime plans include the Seller Finance Masterclass, Cost Segregation Workshop, Mailer Marketing Blueprint, Deal Finding Mastery, and Tiny Homes Bootcamp — over $3,100 in additional value.',
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
        description="Learn to create $100K+ in passive income through real estate investing. 15 modules, 5+ hours of content, 3,000+ students, 4.9/5.0 rating."
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="section-container text-center">
          <img
            src={images.courseLogo}
            alt="Real Estate Investing Course logo"
            loading="lazy"
            className="mx-auto h-16 md:h-24 object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            The Complete{' '}
            <span className="gradient-text">Real Estate Investing Course</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Learn to create $100K+ in passive income through investing in real estate
          </p>
          <p className="text-base text-gray-400 mb-6">
            15 Modules &middot; 5+ Hours &middot; Everything You Need
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold gradient-text">3,000+</p>
              <p className="text-gray-400 text-sm">Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold gradient-text">4.9/5.0</p>
              <img
                src={images.ratingStars}
                alt="4.9 out of 5 stars"
                loading="lazy"
                className="h-4 mx-auto mt-1"
              />
              <p className="text-gray-400 text-sm">Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold gradient-text">15</p>
              <p className="text-gray-400 text-sm">Modules</p>
            </div>
          </div>
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            See Course Options
          </a>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Who This Course Is For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">First-Time Investors</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Learn fundamentals of real estate investing</li>
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Master deal analysis and the purchase process</li>
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Understand property maintenance and management</li>
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Learn tax strategies from day one</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">Experienced Investors</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Scale operations and increase deal flow</li>
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Improve property value with strategic upgrades</li>
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Master creative financing and negotiation tactics</li>
                <li className="flex items-start gap-2"><span className="text-gold-400 mt-0.5">&#10003;</span> Build systems for efficient portfolio management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Course Modules</h2>
            <p className="section-subheading mx-auto">
              15 comprehensive modules taking you from beginner to confident investor.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {courseModules.map((module, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500 text-navy-900 font-bold rounded-lg flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{module.title}</h3>
                  <p className="text-gray-400 text-sm">{module.description}</p>
                </div>
                {module.videos && (
                  <span className="text-gray-500 text-xs whitespace-nowrap">{module.videos} videos</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">What's Included</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              '15 detailed video modules (5+ hours)',
              'Lesson resources and downloadables',
              'CDS Rental Calculator app (free Pro upgrade with membership)',
              'Rental analysis spreadsheet',
              'Property classification guides',
              'LLC setup documentation',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-gold-400 mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Courses */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Bonus Courses</h2>
            <p className="section-subheading mx-auto">
              Included with Annual and Lifetime plans — over $3,100 in additional value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {bonusCourses.map((course) => (
              <div key={course.title} className="card text-center">
                {bonusThumbnails[course.title] && (
                  <img
                    src={bonusThumbnails[course.title]}
                    alt={course.title}
                    loading="lazy"
                    className="w-full aspect-video rounded-lg object-cover mb-4"
                  />
                )}
                <h3 className="text-white font-semibold mb-1">{course.title}</h3>
                <p className="text-gray-500 text-xs mb-2">{course.lessons} lessons</p>
                <p className="text-gold-400 text-sm font-medium">${course.value} value</p>
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
            {testimonials.slice(0, 3).map((testimonial) => (
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
      <section id="pricing" className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Choose Your Plan</h2>
            <p className="section-subheading mx-auto">
              Every plan includes the complete 15-module course with 5+ hours of video.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coursePricing.map((plan) => (
              <div
                key={plan.label}
                className={`bg-navy-800 border rounded-2xl p-6 text-center relative ${
                  plan.featured ? 'border-gold-500/30' : 'border-navy-600/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                    Best Value
                  </div>
                )}
                <p className="text-gray-400 font-semibold uppercase tracking-wide text-xs mb-2">
                  {plan.label}
                </p>
                <h3 className="text-3xl font-bold text-white mb-1">
                  ${plan.price.toLocaleString()}
                  {plan.period && <span className="text-base text-gray-400">{plan.period}</span>}
                </h3>
                <p className="text-gray-500 text-xs mb-6">{plan.description}</p>
                <a href="#" className={plan.featured ? 'btn-primary w-full py-3 text-sm' : 'btn-secondary w-full py-3 text-sm'}>
                  Enroll Now
                </a>
              </div>
            ))}
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
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            See Course Options
          </a>
        </div>
      </section>
    </>
  );
}
