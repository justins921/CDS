import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { events } from '../data/siteData';

export default function EventDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <>
        <SEOHead
          title="Event Coming Soon | Chandler David Smith"
          description="This event page is coming soon."
        />
        <section className="pt-28 pb-20 bg-navy-900 min-h-screen">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Coming Soon
            </h1>
            <p className="section-subheading mx-auto mb-8">
              This event page is not yet available. Check back soon for details.
            </p>
            <Link to="/events" className="btn-primary">
              &larr; Back to Events
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`${event.title} | Chandler David Smith`}
        description={event.description}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900">
        <div className="section-container">
          <Link
            to="/events"
            className="inline-flex items-center text-gold-400 hover:text-gold-300 transition mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>

          <div className="max-w-4xl">
            {event.featured && (
              <span className="inline-block bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Featured Event
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center text-gold-400 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </span>
              <span className="flex items-center text-gold-400 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-navy-800/50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading mb-6">What to Expect</h2>
              <ul className="space-y-4">
                {[
                  'Expert-led sessions on deal analysis, financing, and scaling',
                  'Live property tours and real-time deal breakdowns',
                  'Networking with serious investors and industry professionals',
                  'Personalized action plan workshop',
                  'Q&A sessions with Chandler and guest speakers',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-gold-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading mb-6">Event Details</h2>
              <div className="card space-y-4">
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Date</span>
                  <p className="text-white font-semibold">{event.date}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Location</span>
                  <p className="text-white font-semibold">{event.location}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Duration</span>
                  <p className="text-white font-semibold">3 Days</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Format</span>
                  <p className="text-white font-semibold">In-Person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Placeholder */}
      <section className="py-16 bg-navy-900">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-12">Sample Agenda</h2>
          <div className="space-y-6">
            {[
              { day: 'Day 1', title: 'Foundation & Networking', desc: 'Welcome reception, keynote from Chandler, and networking dinner.' },
              { day: 'Day 2', title: 'Deep Dives & Property Tours', desc: 'Deal analysis workshops, live property tours, and guest speaker panels.' },
              { day: 'Day 3', title: 'Action Planning & Closing', desc: 'Build your 12-month action plan, hot seat coaching, and farewell brunch.' },
            ].map(({ day, title, desc }) => (
              <div key={day} className="card flex items-start gap-6">
                <div className="bg-gold-500/10 text-gold-400 font-bold text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                  {day}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/50">
        <div className="section-container text-center">
          <h2 className="section-heading mb-4">Ready to Join Us?</h2>
          <p className="section-subheading mx-auto mb-8">
            Spots are limited. Apply now to secure your place.
          </p>
          <a href="#" className="btn-primary text-lg px-8 py-4">
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
