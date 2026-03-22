import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Privacy Policy | Chandler David Smith"
        description="Privacy policy for chandlerdavidsmith.com. Learn how we collect, use, and protect your personal information."
      />

      <section className="pt-32 pb-20 bg-navy-900 min-h-screen">
        <div className="section-container max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-12">Last updated: March 2026</p>

          <div className="space-y-10 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="mb-3">
                We collect information you provide directly to us, including your name, email address, and any other information you choose to provide when you create an account, make a purchase, sign up for our newsletter, register for an event, or contact us.
              </p>
              <p>
                We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Provide, maintain, and improve our products and services</li>
                <li>Process transactions and send related information</li>
                <li>Send you newsletters, marketing communications, and updates</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Third-Party Services</h2>
              <p>
                We may share your information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, hosting, and analytics. These providers are obligated to protect your information and are restricted from using it for any purpose other than providing services to us. We use Stripe for payment processing, and your payment information is handled directly by Stripe in accordance with their privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and track information about your browsing activity. Cookies help us improve your experience, understand usage patterns, and deliver relevant content. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-3 text-gray-400">
                Chandler David Smith<br />
                chandlerdavidsmith.com<br />
                Email: support@chandlerdavidsmith.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
