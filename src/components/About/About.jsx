const About = () => {
  return (
    <section id="about" className="flex min-h-screen items-center py-24">
      <div className="section-shell">
        <h2 data-reveal className="mb-10 text-center text-3xl font-bold lg:text-5xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
          <p data-reveal>
            I am a results-driven software engineer who loves building things —
            combining strong programming fundamentals with artificial intelligence
            to design and ship innovative applications. As a full-stack developer at
            Bitberry, I work across MacOS, Windows, and Linux, building and
            maintaining business applications in C#, VB, and .NET, and developing
            with React, JavaScript, and Python.
          </p>
          <p data-reveal>
            Lately, much of my work has centered on AI. I launched a company-wide AI
            chatbot that lets staff sign in with their Microsoft credentials and use
            models from every major provider, and I migrated a suite of legacy VB6
            applications to modern .NET Core with the help of Claude and GPT. AI
            coding tools like Claude Code and Codex are now part of my everyday
            workflow, helping me ship faster while keeping code clean and
            maintainable.
          </p>
          <p data-reveal>
            Alongside development, I build end-to-end data solutions — extracting and
            cleaning complex datasets, building reliable ETL workflows, and designing
            Power BI reports and dashboards that turn raw data into clear, actionable
            insights. At Bitberry, dashboards I built across production, payroll, and
            finance helped managers cut overtime while boosting output. This blend of
            software engineering and data skills lets me understand both how systems
            are built and how data needs to flow to deliver real business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
