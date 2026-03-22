import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const faqData = [
  {
    category: 'General',
    items: [
      {
        q: 'Who is Chandler David Smith?',
        a: 'Chandler David Smith is a real estate investor, educator, and entrepreneur who has built a $50M+ rental property portfolio with over 230 residential doors. He shares his strategies through YouTube (275K+ subscribers), his mobile calculator app (200K+ downloads), online courses, a private investor community, and live events.',
      },
      {
        q: 'What makes Chandler different from other real estate educators?',
        a: 'Chandler is an active investor who practices what he teaches. Unlike many educators who primarily earn from selling courses, Chandler continues to actively buy, manage, and scale his rental portfolio. Every strategy he teaches comes from real-world experience with real money on the line.',
      },
    ],
  },
  {
    category: 'Products',
    items: [
      {
        q: 'How do I access the course after purchasing?',
        a: 'After purchasing, you will receive an email with login credentials for the course platform. You can access all course modules immediately. If you do not receive the email within 15 minutes, check your spam folder or contact support.',
      },
      {
        q: 'The calculator app is not working correctly. What should I do?',
        a: 'First, make sure you have the latest version of the app installed. Try closing and reopening the app, or uninstalling and reinstalling it. If the issue persists, email support with a screenshot of the error and your device type (iOS or Android).',
      },
      {
        q: 'Can I access the course on multiple devices?',
        a: 'Yes, you can log into the course platform from any device with a web browser. Your progress is saved automatically across devices. There is no limit to the number of devices you can use.',
      },
    ],
  },
  {
    category: 'Events',
    items: [
      {
        q: 'What is the refund policy for events?',
        a: 'Full refunds are available up to 30 days before the event date. Between 30 and 14 days, you can receive a 50% refund or transfer your ticket to someone else. Within 14 days of the event, tickets are non-refundable but transferable to another attendee.',
      },
      {
        q: 'What should I bring to an event?',
        a: 'Bring a laptop or tablet for workshops, business cards for networking, and a notebook for taking notes. Dress code is business casual. We will send a detailed preparation guide after you register with specific items for each event.',
      },
    ],
  },
  {
    category: 'Community',
    items: [
      {
        q: 'How do I join the Creative Cashflow Club?',
        a: 'You can join the Creative Cashflow Club by visiting the Community page on our website. Membership includes access to the private community platform, weekly group calls, deal analysis sessions, and networking with other active investors.',
      },
      {
        q: 'Can I cancel my community membership?',
        a: 'Yes, you can cancel your membership at any time from your account settings. Cancellation takes effect at the end of your current billing period. You will retain access until your paid period ends. There are no cancellation fees.',
      },
    ],
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-white font-semibold pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="text-gray-400 mt-4 pt-4 border-t border-navy-600/50">{answer}</p>
      )}
    </div>
  );
}

export default function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Support & FAQ | Chandler David Smith"
        description="Find answers to frequently asked questions about courses, events, the calculator app, community membership, and more."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Support & <span className="gradient-text">FAQ</span>
          </h1>
          <p className="section-subheading mx-auto">
            Find answers to commonly asked questions. Can not find what you are looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-navy-900">
        <div className="section-container max-w-3xl">
          {faqData.map((group) => (
            <div key={group.category} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-gold-400 mb-6 uppercase tracking-wide">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="section-container text-center">
          <h2 className="section-heading mb-4">Still Need Help?</h2>
          <p className="section-subheading mx-auto mb-8">
            If you could not find the answer you were looking for, reach out to us directly.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
