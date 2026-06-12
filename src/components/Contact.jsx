import { useState } from 'react'
import { Send, LoaderCircle, CheckCircle } from 'lucide-react'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  const handleReset = () => {
    setForm(initialForm)
    setStatus('idle')
  }

  const disabled = status === 'loading'

  return (
    <section id="contact" className="py-32 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent font-medium tabular-nums">
            04.
          </span>
          <span className="h-px flex-1 bg-border max-w-20" />
          <h2 className="text-sm font-medium text-text-soft uppercase tracking-[0.15em]">
            Contact
          </h2>
        </div>

        <p className="text-lg text-text-soft leading-relaxed mb-12 max-w-xl">
          I am always open to new opportunities, collaborations, or a conversation
          about technology. If you are looking for a backend engineer who cares
          about quality, let us talk.
        </p>

        {status === 'success' ? (
          <div className="flex flex-col items-center text-center gap-4 py-12">
            <span className="text-success">
              <CheckCircle size={36} />
            </span>
            <h3 className="text-lg font-semibold text-text">
              Message sent
            </h3>
            <p className="text-sm text-text-soft max-w-sm">
              Thank you for reaching out. I will get back to you shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono rounded-lg border border-border text-text-soft hover:border-accent/30 hover:text-accent transition-all duration-200"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder="Name"
                  className="w-full px-4 py-3 text-sm bg-elevated border border-border rounded-lg text-text placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 disabled:opacity-30 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm bg-elevated border border-border rounded-lg text-text placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 disabled:opacity-30 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                disabled={disabled}
                placeholder="Message"
                className="w-full px-4 py-3 text-sm bg-elevated border border-border rounded-lg text-text placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 resize-y min-h-[100px] disabled:opacity-30 disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:rodrigo.machaca@jala.university"
                  className="text-xs text-text-muted hover:text-accent transition-colors font-mono"
                >
                  rodrigo.machaca@jala.university
                </a>
              </div>

              <button
                type="submit"
                disabled={disabled}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono rounded-lg bg-accent text-white transition-all duration-200 hover:bg-accent-soft disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {disabled ? (
                  <>
                    <LoaderCircle size={14} className="animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border">
          <span className="text-xs text-text-muted font-mono">
            Find me on
          </span>
          <a
            href="https://github.com/rodrigomachaca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-soft hover:text-accent transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rodrigomachaca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-soft hover:text-accent transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a
            href="https://gitlab.com/rodrigomachaca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-soft hover:text-accent transition-colors font-mono"
          >
            GitLab
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
