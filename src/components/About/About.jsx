const About = () => {
  return (
    <section id="about" className="flex min-h-screen items-center py-24">
      <div className="section-shell">
        <h2 data-reveal className="mb-10 text-center text-3xl font-bold lg:text-5xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-white/70 sm:text-lg">
          <p data-reveal>
            I am a dynamic and results-driven professional with a passion for technology
            and a proven track record in software engineering and network administration.
            Operating seamlessly across diverse operating systems, including MacOS, Windows,
            and Linux, I have honed my skills in C#.Net, Java, Python 3.0, JavaScript ES6,
            HTML5, and CSS3.
          </p>
          <p data-reveal>
            Recently, my career focus has shifted toward data engineering and analytics,
            driven by hands-on experience building end-to-end data solutions. In my current
            role, I work across the full data lifecycle — extracting and cleaning complex
            datasets from multiple sources, structuring and storing data in scalable formats,
            and building reliable ETL workflows to ensure accuracy, timeliness, and data
            quality. I also design and implement Power BI reports and dashboards that turn raw
            data into clear, actionable insights for decision-making. This combination of
            software engineering fundamentals and practical data engineering experience allows
            me to understand both how systems are built and how data needs to flow to deliver
            real business value. I enjoy solving complex problems with clean, maintainable
            solutions and continuously learning better ways to make data work for people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
