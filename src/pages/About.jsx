import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CTASection from '../components/CTASection';

const milestones = [
  { year: '2017', title: 'First Rental Property Purchased', description: 'Bought a single-family home as a house hack while still working a W-2 job.' },
  { year: '2018', title: '10 Doors Milestone', description: 'Scaled to 10 doors within the first year by leveraging creative financing and partnerships.' },
  { year: '2019', title: 'Launched YouTube Channel', description: 'Started sharing the journey online, documenting every deal, mistake, and lesson learned.' },
  { year: '2020', title: '50 Doors', description: 'Hit 50 rental doors by focusing on small multifamily properties in cash-flowing markets.' },
  { year: '2021', title: 'Created the Calculator App', description: 'Built the Cashflow Retirement Calculator to help other investors analyze deals the right way.' },
  { year: '2022', title: '100+ Doors', description: 'Crossed 100 doors and expanded into storage units and commercial properties.' },
  { year: '2023', title: 'Founded Creative Cashflow Club', description: 'Launched a private investor community to connect, share deals, and scale together.' },
  { year: '2025', title: '$50M+ Portfolio, 230+ Doors', description: 'Portfolio surpassed $50M across residential, storage, and commercial real estate.' },
];

const portfolioItems = [
  { label: '230+ Residential Doors', description: 'Single-family and small multifamily rentals across multiple markets.' },
  { label: '170+ Storage Units', description: 'Self-storage facilities generating passive, recession-resistant income.' },
  { label: '2 Commercial Gyms', description: 'Value-add commercial properties with long-term leases.' },
  { label: '1 Office Building', description: 'Commercial office space acquired through creative financing.' },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="About Chandler David Smith | $50M+ Real Estate Portfolio"
        description="The story behind Chandler David Smith's $50M+ rental real estate portfolio — from first property to 230+ doors, and why he teaches others to do the same."
      />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />

        <div className="relative section-container py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                The Story Behind{' '}
                <span className="gradient-text">$50M</span> in Rental
                Real&nbsp;Estate
              </h1>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                From a single house hack to 230+ doors — here is how it
                happened, and why I am committed to helping others do the same.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-gray-700 flex items-center justify-center border border-navy-600/50">
                <span className="text-gray-400 text-sm">Chandler Photo Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Origin Story ───────── */}
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading mb-8">How It All Started</h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I bought my first rental property in 2017 while still working a
              full-time job. It was a modest single-family home that I house
              hacked — living in one room and renting out the others. That first
              property barely cash-flowed, but it taught me something no book or
              podcast ever could: how real estate actually works when you are the
              one signing the closing documents and fielding tenant calls at
              midnight.
            </p>
            <p>
              From that first deal, I became obsessed with the numbers. I spent
              every night analyzing properties, studying markets, and building
              spreadsheets. Within a year I had scaled to 10 doors by combining
              traditional financing with creative strategies — seller financing,
              partnerships, and BRRRR deals that let me recycle capital faster
              than I ever thought possible. I made plenty of mistakes along the
              way, but every bad contractor and vacant unit became a lesson that
              made the next deal better.
            </p>
            <p>
              By 2020, I had crossed 50 doors and realized that the systems and
              frameworks I had built could help other people skip the painful
              trial-and-error phase. I started a YouTube channel to document
              everything — the wins, the losses, and the real numbers behind
              every deal. The response was overwhelming. Hundreds of thousands of
              people were hungry for honest, actionable investing content. That
              audience became the foundation for the calculator app, the course,
              the community, and the live events that now make up the Chandler
              David Smith brand.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Timeline ───────── */}
      <section className="py-16 md:py-24 bg-navy-800/40">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading text-center mb-16">The Journey</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-navy-600" />

            <div className="space-y-12">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    className={`relative flex items-start md:items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-navy-900 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                      }`}
                    >
                      <span className="text-gold-400 text-sm font-semibold">
                        {m.year}
                      </span>
                      <h3 className="text-white font-bold text-lg mt-1">
                        {m.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {m.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Portfolio Overview ───────── */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Portfolio Overview</h2>
            <p className="section-subheading mx-auto">
              A diversified real estate portfolio built for long-term cash flow
              and wealth creation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.label} className="card text-center flex flex-col items-center">
                <div className="w-full aspect-video rounded-lg bg-gray-700 flex items-center justify-center mb-5">
                  <span className="text-gray-400 text-xs">Image Placeholder</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Media & Features ───────── */}
      <section className="py-16 md:py-24 bg-navy-800/40">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-heading">As Featured On</h2>
            <p className="section-subheading mx-auto">
              Chandler has been featured on leading real estate media platforms
              and podcasts.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              'BiggerPockets',
              'Real Estate Rookie',
              'Investing Made Simple',
              'The Money Show',
              'REI Nation',
            ].map((name) => (
              <div
                key={name}
                className="w-40 h-16 rounded-lg bg-navy-700/60 border border-navy-600/40 flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Teaching Philosophy ───────── */}
      <section className="py-16 md:py-24">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading mb-8">Why I Teach</h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              When I started investing, I did not have a mentor. I learned
              everything through trial, error, and thousands of hours of
              research. I made expensive mistakes that could have been avoided
              with the right guidance. That experience drives everything I do
              today.
            </p>
            <p>
              I teach because I genuinely believe that rental real estate is the
              most reliable path to financial freedom for everyday people — and I
              know from experience that having the right tools, community, and
              education can compress years of learning into months. If I can help
              someone avoid even one of the mistakes I made, the entire effort is
              worth it.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <CTASection
        heading="Ready to Start Your Journey?"
        subheading="Whether you are analyzing your first deal or scaling to 100 doors, there is a path for you."
        primaryCTA="Take the Course"
        primaryLink="/course"
        secondaryCTA="Join the Community"
        secondaryLink="/community"
      />
    </>
  );
}
