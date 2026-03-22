import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead title="Page Not Found | Chandler David Smith" />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="section-container text-center py-32">
          <p className="text-gold-400 text-6xl md:text-8xl font-bold mb-6">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Let us get you back on track.
          </p>
          <Link to="/" className="btn-primary text-lg px-8 py-4">
            Back to Homepage
          </Link>
        </div>
      </section>
    </>
  );
}
