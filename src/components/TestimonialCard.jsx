export default function TestimonialCard({ name, role, text, image }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="card flex flex-col h-full">
      {/* Quote Icon */}
      <svg
        className="w-8 h-8 text-gold-500/40 mb-4 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
      </svg>

      {/* Testimonial Text */}
      <p className="text-gray-300 italic leading-relaxed flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-navy-700/50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
            <span className="text-gold-400 text-sm font-semibold">
              {initials}
            </span>
          </div>
        )}
        <div>
          <p className="text-white font-medium text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
