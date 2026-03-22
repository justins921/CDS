import { Link } from 'react-router-dom';

export default function ProductCard({
  title,
  description,
  icon,
  link,
  linkText = 'Learn More',
  badge,
}) {
  return (
    <div className="card relative flex flex-col h-full">
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 bg-gold-500/20 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Icon Area */}
      <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-5">
        {typeof icon === 'string' ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          <span className="text-gold-400">{icon}</span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Link */}
      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-gold-400 text-sm font-medium mt-5 py-2 group hover:text-gold-300 transition-colors"
        >
          {linkText}
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
