import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl">go.dev/backender</a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" className="p-2 rounded-md hover:bg-gray-100">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
