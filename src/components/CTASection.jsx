import { Link } from 'react-router-dom';

export default function CTASection({
  heading,
  subheading,
  primaryCTA,
  primaryLink,
  secondaryCTA,
  secondaryLink,
}) {
  return (
    <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 border-t border-b border-navy-700/40">
      <div className="section-container py-16 md:py-24 text-center">
        <h2 className="section-heading">{heading}</h2>
        {subheading && (
          <p className="section-subheading mx-auto mt-2 mb-8">{subheading}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {primaryCTA && primaryLink && (
            <Link to={primaryLink} className="btn-primary">
              {primaryCTA}
            </Link>
          )}
          {secondaryCTA && secondaryLink && (
            <Link to={secondaryLink} className="btn-secondary">
              {secondaryCTA}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
