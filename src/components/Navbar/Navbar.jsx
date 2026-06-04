import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      // Active = the last section whose top has crossed a reference line near
      // the top of the viewport. Deterministic, so it can't get "stuck".
      const line = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= line) current = sec.id;
      }
      // At the very bottom, the last section may be too short to reach the
      // line — force it active so the final link always highlights.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-2 backdrop-blur-md">
        {LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 ${
                active === link.id
                  ? 'bg-gradient-to-tr from-accent-from to-accent-to text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
