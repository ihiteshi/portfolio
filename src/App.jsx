import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  // Reveal-on-scroll for any element tagged with data-reveal.
  // Under reduced-motion we still fade elements in (just no movement), so the
  // page never feels static — we only drop the large translate/loop motion.
  useGSAP(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = gsap.utils.toArray('[data-reveal]');

    // Set the hidden start state from JS so content stays visible if JS fails.
    gsap.set(els, { opacity: 0, y: reduce ? 0 : 60 });

    ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: reduce ? 0.45 : 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          overwrite: true,
        }),
    });

    ScrollTrigger.refresh();
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
