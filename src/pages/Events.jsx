import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { events } from '../data/siteData';

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredEvent = events.find((e) => e.featured);
  const otherEvents = events.filter((e) => !e.featured);

  const pastEventPhotos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      <SEOHead
        title="Real Estate Events & Retreats | Chandler David Smith"
        description="Join Chandler David Smith's immersive real estate investing events and retreats. Network with top investors and build your action plan."
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-900">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Estate <span className="gradient-text">Events & Retreats</span>
          </h1>
          <p className="section-subheading mx-auto">
            Immersive experiences designed to accelerate your real estate investing
            journey. Connect with serious investors, tour properties, and leave with
            a clear action plan.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 bg-navy-900">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-12">
              <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Featured Event
              </div>
              <div className="max-w-3xl pr-20 sm:pr-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredEvent.title}
                </h2>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center text-gold-400 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {featuredEvent.date}
                  </span>
                  <span className="flex items-center text-gold-400 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {featuredEvent.location}
                  </span>
                </div>
                {featuredEvent.capacity && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="text-gray-400 text-sm">{featuredEvent.capacity}</span>
                    {featuredEvent.spotsRemaining && (
                      <span className="text-amber-400 text-sm font-semibold">{featuredEvent.spotsRemaining}</span>
                    )}
                  </div>
                )}
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  {featuredEvent.description}
                </p>
                {featuredEvent.details && (
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {featuredEvent.details}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  <Link to={`/events/${featuredEvent.slug}`} className="btn-primary">
                    Apply Now
                  </Link>
                  <Link to={`/events/${featuredEvent.slug}`} className="btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Events */}
      {otherEvents.length > 0 && (
        <section className="py-16 bg-navy-900">
          <div className="section-container">
            <h2 className="section-heading text-center mb-12">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherEvents.map((event) => (
                <div key={event.slug} className="card flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-gold-400 text-sm">{event.date}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400 text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-400 mb-6 flex-grow">{event.description}</p>
                  <Link to={`/events/${event.slug}`} className="btn-secondary text-center">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Gallery */}
      <section className="py-16 bg-navy-800/50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-4">Past Events</h2>
          <p className="section-subheading text-center mx-auto mb-12">
            A look back at some of our most impactful gatherings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pastEventPhotos.map((num) => (
              <div
                key={num}
                className="aspect-video bg-navy-700 rounded-lg flex items-center justify-center border border-navy-600/50"
              >
                <span className="text-gray-500 text-sm">Event Photo Placeholder</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-navy-900">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">What Attendees Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold mr-3">
                  A
                </div>
                <div>
                  <p className="text-white font-semibold">Amanda K.</p>
                  <p className="text-gray-400 text-sm">Vegas Retreat Attendee</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The Vegas Retreat was incredible. I networked with investors doing 8-figure
                deals and left with a 12-month action plan. Already closed 3 deals since attending."
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold mr-3">
                  T
                </div>
                <div>
                  <p className="text-white font-semibold">Tyler B.</p>
                  <p className="text-gray-400 text-sm">Grand Teton Summit Attendee</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Being in a room of 30 serious investors changed my perspective entirely. The
                connections I made at the Summit led to two joint venture deals within 6 months."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-navy-800/50">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What's included in the event ticket?",
                a: 'All event sessions, workshops, networking activities, and meals during the event are included. Accommodations and travel are not included unless otherwise specified on the event page.',
              },
              {
                q: 'Who should attend these events?',
                a: 'Our events are designed for both new and experienced real estate investors who are serious about scaling their portfolios. Whether you own zero doors or 100+, you will find value in the content and connections.',
              },
              {
                q: 'What is the refund policy for events?',
                a: 'Full refunds are available up to 30 days before the event. Between 30 and 14 days, a 50% refund is available. No refunds within 14 days of the event, but tickets are transferable.',
              },
              {
                q: 'How do I apply for the Vegas Retreat?',
                a: 'Click the "Apply Now" button on the Vegas Retreat card above. You will fill out a short application so we can ensure the retreat is the right fit for you. Spots are limited.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="card">
                <h3 className="text-white font-semibold mb-2">{q}</h3>
                <p className="text-gray-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
