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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
