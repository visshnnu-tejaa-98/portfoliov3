import { useState, useEffect } from 'react'
import Deco from './Deco'

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`vt-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="vt-nav-inner">
        {/* Logo */}
        <a href="#home" className="vt-logo">
          <span className="vt-logo-mark">VT</span>
          <span className="md-hidden">Visshnnu Tejaa</span>
        </a>

        {/* Desktop links */}
        <div className="vt-nav-links md-hidden" style={{ display: 'flex' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="vt-nav-link">{l.label}</a>
          ))}
          <button className="btn btn--sticky btn--sm" onClick={toggle} style={{ marginLeft: '8px' }}>
            <Deco name={dark ? 'icon-sun' : 'icon-moon'} size={14} />
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md-only" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="btn btn--sticky btn--sm" onClick={toggle}>
            <Deco name={dark ? 'icon-sun' : 'icon-moon'} size={14} />
          </button>
          <button className="btn btn--ghost btn--icon" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Deco name={open ? 'icon-x' : 'icon-list'} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: 'var(--bg-elevated)', borderTop: '1px dashed var(--rule-strong)', padding: 'var(--s-4) var(--s-6)', display: 'flex', flexDirection: 'column', gap: 'var(--s-1)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-item" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
