import { useState, useEffect } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        <a href="#hero" className="text-sm font-medium text-accent tracking-tight">
          RM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative text-sm text-text-soft hover:text-text transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden size-10 flex items-center justify-center text-text-soft hover:text-text transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="absolute inset-0 bg-bg/60" onClick={() => setOpen(false)} />
          <div className="relative ml-auto w-72 max-w-[80vw] h-full bg-elevated border-l border-border p-8 flex flex-col animate-slide-in">
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="size-10 flex items-center justify-center text-text-soft hover:text-text transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {sections.map(({ id, label }, i) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-4 text-lg text-text-soft hover:text-text transition-colors"
                >
                  <span className="font-mono text-xs text-accent font-medium tabular-nums">
                    0{i + 1}
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style>{`
        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
