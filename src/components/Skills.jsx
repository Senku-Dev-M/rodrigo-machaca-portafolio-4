import { Code2, Server, Database, Wrench } from 'lucide-react'

const categories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['TypeScript', 'JavaScript', 'React 18', 'Angular', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java', 'C#', 'Python', 'Node.js', 'Spring Boot', 'FastAPI', '.NET'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Docker', 'AWS', 'GitLab CI/CD', 'RabbitMQ', 'Arduino'],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent font-medium tabular-nums">
            02.
          </span>
          <span className="h-px flex-1 bg-border max-w-20" />
          <h2 className="text-sm font-medium text-text-soft uppercase tracking-[0.15em]">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {categories.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="bg-elevated p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-accent">
                  <Icon size={18} />
                </span>
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  {title}
                </span>
              </div>
              <p className="text-sm text-text-soft leading-relaxed">
                {skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
