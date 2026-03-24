import { useState } from 'react';

export default function EmailForm({ buttonText = 'Subscribe', successMessage = "You're subscribed! Check your inbox.", placeholder = 'Enter your email' }) {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMsg(successMessage);
      setEmail('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="flex-1 px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition"
        />
        <button type="submit" className="btn-primary text-sm px-5 py-2 whitespace-nowrap">
          {buttonText}
        </button>
      </form>
      {msg && <p className="text-green-400 text-sm mt-3">{msg}</p>}
    </>
  );
}
