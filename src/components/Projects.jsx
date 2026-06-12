import { GitBranch, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'GymFlow AI',
    description:
      'Gym management platform with AI-assisted routine generation, JWT auth, and role-based access control. Built for operational efficiency.',
    tags: ['Python', 'FastAPI', 'React 18', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/rmachaca/gymflow',
    demo: 'https://gymflow.app',
  },
  {
    title: 'PixPro',
    description:
      'Distributed image processing platform using event-driven architecture with real-time WebSocket communication and Clean Architecture.',
    tags: ['Node.js', 'TypeScript', 'Angular', 'MySQL', 'RabbitMQ'],
    repo: 'https://github.com/rmachaca/pixpro',
    demo: 'https://pixpro.app',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent font-medium tabular-nums">
            03.
          </span>
          <span className="h-px flex-1 bg-border max-w-20" />
          <h2 className="text-sm font-medium text-text-soft uppercase tracking-[0.15em]">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ title, description, tags, repo, demo }) => (
            <article
              key={title}
              className="group relative bg-elevated border border-border rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-accent/20"
            >
              <span className="absolute top-0 left-8 right-8 h-px bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex flex-col gap-4 h-full">
                <h3 className="text-lg font-semibold text-text">
                  {title}
                </h3>

                <p className="text-sm text-text-soft leading-relaxed flex-1">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-overlay text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors"
                  >
                    <GitBranch size={13} />
                    Source
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent-soft transition-colors"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
