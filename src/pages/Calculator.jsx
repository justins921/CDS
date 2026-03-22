import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const features = [
  {
    title: 'Cash-on-Cash Return Analysis',
    description: 'Instantly calculate your true return on invested capital so you know exactly what your money is earning.',
  },
  {
    title: 'Cap Rate Calculator',
    description: 'Evaluate any property\'s capitalization rate to compare deals and assess market value accurately.',
  },
  {
    title: 'Monthly Cash Flow Projections',
    description: 'See projected monthly and annual cash flow with detailed income and expense breakdowns.',
  },
  {
    title: 'Mortgage & Financing Calculator',
    description: 'Model different loan scenarios, interest rates, and down payments to find your ideal financing structure.',
  },
  {
    title: 'Repair Cost Estimator',
    description: 'Estimate rehab costs with our built-in calculator so you never overpay for a value-add deal.',
  },
  {
    title: 'Investment Comparison Tool',
    description: 'Compare multiple properties side by side to identify the strongest deal in your pipeline.',
  },
];

const steps = [
  {
    number: 1,
    title: 'Enter Property Details',
    description: 'Input the purchase price, rent estimates, expenses, and financing terms. Takes less than 2 minutes.',
  },
  {
    number: 2,
    title: 'Review the Analysis',
    description: 'Get a full breakdown of cash flow, returns, and key metrics — all calculated instantly.',
  },
  {
    number: 3,
    title: 'Make Confident Decisions',
    description: 'Know exactly whether a deal works before you make an offer. No more guessing.',
  },
];

const reviews = [
  {
    text: "This app paid for itself on my first deal. I caught a negative cash flow property that looked good on the surface. Saved me thousands.",
    author: 'Mike D.',
    rating: '5/5',
  },
  {
    text: "I've tried every rental calculator out there. This is the only one that's actually intuitive and gives me the numbers I need fast.",
    author: 'Jessica P.',
    rating: '5/5',
  },
  {
    text: "Use this app every single day to run deals. It's become the backbone of my acquisition process.",
    author: 'Carlos R.',
    rating: '5/5',
  },
];

export default function Calculator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Rental Property Calculator App | Chandler David Smith"
        description="The #1 rental property calculator with 200K+ downloads. Analyze rental deals in minutes with cash flow projections, cap rate, and cash-on-cash return calculations."
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                The <span className="gradient-text">#1 Rental Property Calculator</span>
              </h1>
              <p className="text-gold-400 font-semibold text-lg mb-4">
                200K+ downloads &middot; 4.7&#9733; rating
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Analyze any rental deal in minutes. Get instant cash flow projections, return calculations, and the confidence to make smart investment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 bg-navy-800 border border-navy-600 rounded-lg hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-white font-semibold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 bg-navy-800 border border-navy-600 rounded-lg hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-white font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-[500px] bg-navy-800 border border-navy-600/50 rounded-3xl flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">App Screenshot Mockup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Everything You Need to Analyze Deals</h2>
            <p className="section-subheading mx-auto">
              Powerful tools built for serious rental property investors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading mx-auto">
              From property details to confident decisions in minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 bg-gold-500 text-navy-900 font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gold-500/10 border-y border-gold-500/20">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">200K+</p>
              <p className="text-gray-400 text-sm mt-1">Downloads</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">4.7&#9733;</p>
              <p className="text-gray-400 text-sm mt-1">Rating</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">All Devices</p>
              <p className="text-gray-400 text-sm mt-1">iOS / Android / Desktop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Users Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.author} className="card">
                <div className="text-gold-400 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-gray-300 text-sm mb-4 italic">"{review.text}"</p>
                <p className="text-white font-semibold text-sm">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-800/50">
        <div className="section-container text-center">
          <h2 className="section-heading">Ready to Analyze Your Next Deal?</h2>
          <p className="section-subheading mx-auto mb-8">
            Download the calculator and start making data-driven investment decisions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#"
              className="flex items-center justify-center px-6 py-3 bg-navy-800 border border-navy-600 rounded-lg hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="text-left">
                <p className="text-xs text-gray-400">Download on the</p>
                <p className="text-white font-semibold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-6 py-3 bg-navy-800 border border-navy-600 rounded-lg hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="text-left">
                <p className="text-xs text-gray-400">Get it on</p>
                <p className="text-white font-semibold">Google Play</p>
              </div>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Want to go deeper?{' '}
            <Link to="/course" className="text-gold-400 hover:text-gold-300 underline">
              Check out the full Real Estate Investing Course &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
