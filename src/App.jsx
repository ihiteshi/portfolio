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
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const reveals = gsap.utils.toArray('[data-reveal]');
    reveals.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    });
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
