const stats = [
  { value: '3+', label: 'Semesters Academic Excellence' },
  { value: '4', label: 'Core Languages' },
  { value: '10+', label: 'Technologies in Stack' },
]

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent font-medium tabular-nums">
            01.
          </span>
          <span className="h-px flex-1 bg-border max-w-20" />
          <h2 className="text-sm font-medium text-text-soft uppercase tracking-[0.15em]">
            About
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-5 text-text-soft text-base leading-relaxed">
            <p>
              My foundation in Industrial Informatics meets specialized training in
              Software Engineering at{' '}
              <span className="text-text font-medium">Jala University</span>, where
              I have maintained academic excellence from the first semester.
            </p>
            <p>
              I design and build scalable backend systems using{' '}
              <span className="text-text font-medium">Clean Architecture</span> and
              distributed systems patterns — working across Node.js, Java, C#, and
              Python to create production-ready APIs and microservices.
            </p>
            <p>
              Currently focused on mastering advanced CI/CD pipelines, cloud
              infrastructure with AWS and Docker, and bridging backend reliability
              with frontend experience.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 self-start md:mt-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent mb-1.5">
                  {value}
                </p>
                <p className="text-xs text-text-muted leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
