import { useState } from 'react';

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="text-white font-semibold pr-4">{question}</span>
        <svg className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="text-gray-400 mt-4 pt-4 border-t border-navy-600/50">{answer}</p>
      )}
    </div>
  );
}

export default function AccordionGroup({ groups }) {
  return (
    <>
      {groups.map((group) => (
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
    </>
  );
}
