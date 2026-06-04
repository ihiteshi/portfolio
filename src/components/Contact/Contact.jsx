import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';

const SOCIALS = [
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/hitesh-choudhary-62386b10a/', label: 'LinkedIn' },
  { Icon: FaGithubSquare, href: 'https://github.com/ihiteshi', label: 'GitHub' },
  { Icon: FaFacebookSquare, href: 'https://www.facebook.com/hiiteshh', label: 'Facebook' },
  { Icon: FaInstagramSquare, href: 'https://www.instagram.com/imhiteshc', label: 'Instagram' },
  { Icon: FaWhatsappSquare, href: 'https://wa.me/+610450625800', label: 'WhatsApp' },
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent-from/60';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending' | 'ok' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, 'YaPMLOMlIl9l4YzFx')
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

        <div className="mt-12 flex justify-center gap-6">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-white/60 transition-all hover:scale-110 hover:text-white"
            >
              <Icon size="44px" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
