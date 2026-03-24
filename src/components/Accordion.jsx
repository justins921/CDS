import { useState } from 'react';

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="card cursor-pointer" onClick={onToggle}>
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-sm md:text-base">{question}</h3>
        <span className="text-gold-400 ml-4 flex-shrink-0">
          {isOpen ? '\u2212' : '+'}
        </span>
      </div>
      {isOpen && (
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
