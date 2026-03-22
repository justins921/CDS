import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Refunds() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Refund & Cancellation Policy | Chandler David Smith"
        description="Refund and cancellation policies for courses, events, community membership, and consulting services from Chandler David Smith."
      />

      <section className="pt-32 pb-20 bg-navy-900 min-h-screen">
        <div className="section-container max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Refund & Cancellation Policy</h1>
          <p className="text-gray-500 mb-12">Last updated: March 2026</p>

          <div className="space-y-10 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Digital Products (Course)</h2>
              <p className="mb-3">
                We offer a <span className="text-gold-400 font-semibold">30-day money-back guarantee</span> on our online course. If you are not satisfied with the course for any reason, you can request a full refund within 30 days of your purchase date.
              </p>
              <p>
                To request a refund, contact us at support@chandlerdavidsmith.com with your order number and the reason for your request. Refunds are processed within 5-10 business days and will be returned to the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Events & Retreats</h2>
              <p className="mb-3">Event ticket refunds are based on the following schedule:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-green-400 rounded-full flex-shrink-0" />
                  <span>
                    <span className="text-white font-medium">30+ days before the event:</span> Full refund available.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-yellow-400 rounded-full flex-shrink-0" />
                  <span>
                    <span className="text-white font-medium">14-30 days before the event:</span> 50% refund, or you may transfer your ticket to another attendee at no charge.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0" />
                  <span>
                    <span className="text-white font-medium">Less than 14 days before the event:</span> No refund available. Tickets are transferable to another attendee.
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                In the unlikely event that we cancel an event, all ticket holders will receive a full refund.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Community Membership</h2>
              <p>
                Community memberships (Creative Cashflow Club) can be <span className="text-gold-400 font-semibold">cancelled at any time</span> from your account settings. Your access will continue until the end of your current billing period. No partial refunds are issued for the remaining days in a billing cycle. There are no cancellation fees.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Consulting Sessions</h2>
              <p className="mb-3">
                Consulting calls can be rescheduled or cancelled with at least <span className="text-gold-400 font-semibold">24 hours notice</span> before the scheduled call time for a full refund or credit toward a future session.
              </p>
              <p>
                Cancellations made with less than 24 hours notice, or no-shows, are non-refundable. Unused consulting calls in multi-session packages are valid for 6 months from the date of purchase.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
              <p className="mb-3">
                For all refund and cancellation requests, please contact us at:
              </p>
              <p className="text-gray-400 mb-6">
                Email: support@chandlerdavidsmith.com
              </p>
              <Link to="/contact" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
