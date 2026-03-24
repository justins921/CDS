import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Thank You!</h2>
        <p className="text-gray-400 mb-6">
          Your message has been received. We typically respond within 1-2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', subject: 'General', message: '' });
          }}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
        <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none transition">
          <option value="General">General</option>
          <option value="Partnership">Partnership</option>
          <option value="Media">Media</option>
          <option value="Support">Support</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition resize-none" placeholder="How can we help?" />
      </div>
      <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
    </form>
  );
}
