import { FaGraduationCap } from 'react-icons/fa';
import { SiMicrosoftazure, SiPowerbi } from 'react-icons/si';
import { TbCertificate } from 'react-icons/tb';

const EDUCATION = [
  {
    title: "Master's in Information Technology",
    org: 'Queensland University of Technology',
  },
  {
    title: "Bachelor's in Computer Application",
    org: 'Focus on mobile application development and computer security',
  },
];

const CERTS = [
  {
    Icon: SiMicrosoftazure,
    title: 'Microsoft Azure Fundamentals',
    href: 'https://learn.microsoft.com/en-us/users/hiteshchoudhary-6988/credentials/5e0930dedf32d1a1',
  },
  {
    Icon: SiMicrosoftazure,
    title: 'Azure AI Fundamentals',
    href: 'https://learn.microsoft.com/api/credentials/share/en-gb/HiteshChoudhary-6988/1ABA1FDAAF5D3D2?sharingId=A18D1B0E32272AC0',
  },
  {
    Icon: SiPowerbi,
    title: 'Power BI',
    href: 'https://learn.microsoft.com/en-us/users/hiteshchoudhary-6988/credentials/33275301692cc018',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <h2 data-reveal className="mb-4 text-center text-3xl font-bold lg:text-5xl">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p data-reveal className="mx-auto mb-12 max-w-2xl text-center text-white/60">
          A foundation in cloud computing, artificial intelligence, software development and
          data analytics.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div className="space-y-5">
            <h3 data-reveal className="flex items-center gap-2 text-xl font-semibold text-white/80">
              <FaGraduationCap className="text-accent-from" /> Education
            </h3>
            {EDUCATION.map((e) => (
              <div
                key={e.title}
                data-reveal
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h4 className="text-lg font-medium">{e.title}</h4>
                <p className="mt-1 text-sm text-white/60">{e.org}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-5">
            <h3 data-reveal className="flex items-center gap-2 text-xl font-semibold text-white/80">
              <TbCertificate className="text-accent-to" /> Certifications
            </h3>
            {CERTS.map(({ Icon, title, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-reveal
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                <Icon className="h-9 w-9 shrink-0 text-white/80" />
                <span className="font-medium underline-offset-4 group-hover:underline">
                  {title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
