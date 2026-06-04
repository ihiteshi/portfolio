import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import profile from '../../assets/hiteshprofile.webp';

gsap.registerPlugin(TextPlugin);

const ROLES = ['Full-Stack Developer', 'Data Engineer', 'Network Administrator'];

const Hero = () => {
  const root = useRef(null);
  const roleRef = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Intro: always fade in. Add upward movement only when motion is allowed.
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero]', {
        opacity: 0,
        y: reduce ? 0 : 40,
        duration: reduce ? 0.5 : 0.9,
        stagger: 0.15,
      }).from(
        '[data-hero-img]',
        { opacity: 0, scale: reduce ? 1 : 0.92, duration: reduce ? 0.5 : 1, ease: 'power2.out' },
        '-=0.6'
      );

      // Typewriter cycle through the roles (restores the original typing title).
      if (reduce) {
        // Motion-sensitive users get static text, no looping.
        roleRef.current.textContent = ROLES[0];
      } else {
        const type = gsap.timeline({ repeat: -1, delay: 1.2 });
        ROLES.forEach((role) => {
          type
            .to(roleRef.current, {
              duration: role.length * 0.06,
              text: role,
              ease: 'none',
            })
            .to({}, { duration: 1.6 }) // hold
            .to(roleRef.current, {
              duration: role.length * 0.03,
              text: '',
              ease: 'none',
            });
        });
      }
    },
    { scope: root }
  );

  return (
    <header
      id="home"
      ref={root}
      className="relative flex min-h-screen items-center"
    >
      <div className="section-shell grid grid-cols-1 items-center gap-12 pt-28 md:grid-cols-2 md:pt-0">
        <div className="text-center md:text-left">
          <p data-hero className="mb-3 text-sm uppercase tracking-[0.3em] text-white/50">
            Hi 👋, I'm
          </p>
          <h1
            data-hero
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Hitesh <span className="gradient-text">Choudhary</span>
          </h1>
          <p
            data-hero
            className="mt-5 text-xl text-white/70 sm:text-2xl lg:text-3xl"
          >
            <span ref={roleRef} className="gradient-text font-semibold" />
            <span className="type-cursor ml-1 font-light text-white/60">|</span>
          </p>
          <div data-hero className="mt-8 flex justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-tr from-accent-from to-accent-to px-6 py-3 font-medium text-white shadow-lg transition-transform hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white/80 transition-colors hover:bg-white/5"
            >
              About me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-from/30 to-accent-to/30 blur-2xl" />
            <img
              data-hero-img
              src={profile}
              alt="Hitesh Choudhary"
              width="320"
              height="320"
              fetchpriority="high"
              className="relative w-64 rounded-3xl object-cover shadow-2xl sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
