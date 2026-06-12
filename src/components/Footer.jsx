function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-xs text-text-muted font-mono">
          &copy; {new Date().getFullYear()} Rodrigo Machaca
        </p>
        <p className="text-xs text-text-muted font-mono">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
