import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent-from/60';

// Persistent submission-counter worker (see worker/README.md). Optional:
// if unset or unreachable, the form still sends, just without a count.
const COUNTER_URL = import.meta.env.VITE_COUNTER_URL;

// EmailJS config (all values are public/client-side by design).
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const countField = useRef();
  const [status, setStatus] = useState(null); // 'sending' | 'ok' | 'error'

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Best-effort: bump the persistent counter and embed the new total so
    // EmailJS includes it in the email. Never block the send if it fails.
    if (COUNTER_URL && countField.current) {
      try {
        const res = await fetch(COUNTER_URL, { method: 'POST' });
        if (res.ok) countField.current.value = String((await res.json()).count);
      } catch {
        /* counter unavailable — send the email anyway */
      }
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setStatus('ok');
          form.current.reset();
        },
        () => setStatus('error')
      );
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell max-w-3xl">
        <h2 data-reveal className="mb-4 text-center text-3xl font-bold lg:text-5xl">
          Get in touch for a <span className="gradient-text">chat</span>
        </h2>
        <p data-reveal className="mb-10 text-center text-white/60">
          Have a question or want to work together? Drop me a message.
        </p>

        <form ref={form} onSubmit={sendEmail} data-reveal className="flex flex-col gap-4">
          <input type="hidden" name="contact_number" ref={countField} />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={inputClass} type="text" name="name" placeholder="Full name" required />
            <input className={inputClass} type="email" name="email" placeholder="Email address" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={inputClass} type="tel" name="phone" placeholder="Mobile number" />
            <input className={inputClass} type="text" name="company" placeholder="Company name" />
          </div>
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="message"
            placeholder="What's on your mind?"
            required
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="self-center rounded-full bg-gradient-to-tr from-accent-from to-accent-to px-8 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>

          {status === 'ok' && (
            <p className="text-center text-green-400">Message successfully sent! 🎉</p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400">
              Failed to send the message, please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
