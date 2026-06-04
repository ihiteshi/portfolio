import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiReactjsLine, RiJavascriptLine } from 'react-icons/ri';
import { FaPython, FaNode } from 'react-icons/fa';
import { SiDotnet, SiPowerbi, SiMicrosoftazure, SiAmazonaws, SiGit } from 'react-icons/si';

const SKILLS = [
  { Icon: RiReactjsLine, label: 'React' },
  { Icon: RiJavascriptLine, label: 'JavaScript' },
  { Icon: FaPython, label: 'Python' },
  { Icon: FaNode, label: 'Node.js' },
  { Icon: SiDotnet, label: '.NET' },
  { Icon: SiPowerbi, label: 'Power BI' },
  { Icon: SiMicrosoftazure, label: 'Azure' },
  { Icon: SiAmazonaws, label: 'AWS' },
  { Icon: SiGit, label: 'Git' },
];

const Skills = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gsap.from('[data-skill]', {
        opacity: 0,
        y: reduce ? 0 : 30,
        scale: reduce ? 1 : 0.85,
        duration: reduce ? 0.4 : 0.6,
        ease: reduce ? 'power1.out' : 'back.out(1.6)',
        stagger: reduce ? 0.04 : 0.08,
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      });
    },
    { scope: root }
  );

  return (
    <section id="skills" ref={root} className="py-24">
      <div className="section-shell">
        <h2 data-reveal className="mb-12 text-center text-3xl font-bold lg:text-5xl">
          Skills & <span className="gradient-text">Tech</span>
        </h2>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {SKILLS.map(({ Icon, label }) => (
            <div
              key={label}
              data-skill
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <Icon className="h-12 w-12 text-white/80 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14" />
              <span className="text-xs text-white/50 sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
