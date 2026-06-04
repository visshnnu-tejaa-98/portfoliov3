import { useState, useCallback } from 'react'
import Deco from './Deco'

const CopyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const contacts = [
  {
    label: 'Email',
    icon: 'icon-mail',
    val: 'visshnnutejaa@gmail.com',
    href: 'mailto:visshnnutejaa@gmail.com',
    copyVal: 'visshnnutejaa@gmail.com',
    avatarBg: 'var(--indigo-soft)',
    avatarFg: 'var(--indigo-deep)',
  },
  {
    label: 'Phone',
    icon: 'icon-phone',
    val: '+91 7619352192',
    href: 'tel:+917619352192',
    copyVal: '+91 7619352192',
    avatarBg: 'var(--matcha-soft)',
    avatarFg: 'var(--matcha-deep)',
  },
  {
    label: 'LinkedIn',
    icon: 'icon-link',
    val: 'linkedin.com/in/visshnnu-tejaa',
    href: 'https://linkedin.com/in/visshnnu-tejaa',
    copyVal: 'https://linkedin.com/in/visshnnu-tejaa',
    avatarBg: 'var(--lavender-soft)',
    avatarFg: 'var(--lavender-deep)',
  },
  {
    label: 'GitHub',
    icon: 'icon-layers',
    val: 'github.com/visshnnu-tejaa-98',
    href: 'https://github.com/visshnnu-tejaa-98',
    copyVal: 'https://github.com/visshnnu-tejaa-98',
    avatarBg: 'var(--sakura-soft)',
    avatarFg: 'var(--sakura-deep)',
  },
  {
    label: 'Portfolio',
    icon: 'icon-sparkles',
    val: 'vt-portfolio.app',
    href: 'https://vt-portfolio.app',
    copyVal: 'https://vt-portfolio.app',
    avatarBg: 'var(--peach-soft)',
    avatarFg: 'var(--peach-deep)',
  },
  {
    label: 'Location',
    icon: 'icon-globe',
    val: 'Bengaluru, Karnataka',
    href: null,
    copyVal: null,
    avatarBg: 'var(--bg-elevated)',
    avatarFg: 'var(--ink-3)',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(null)

  const handleCopy = useCallback((label, value) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 1800)
    })
  }, [])

  return (
    <section id="contact" className="vt-section vt-section-alt">
      <div className="vt-container vt-container--narrow">
        {/* Heading */}
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">get in touch</span>
        </div>
        <h2 style={{ marginBottom: 'var(--s-3)' }}>
          Let's <span className="hl-marker--accent">connect</span>
        </h2>
        <p style={{ color: 'var(--ink-3)', lineHeight: 1.75, maxWidth: '50ch', marginBottom: 'var(--s-10)', fontSize: '1.02rem' }}>
          Open to full-time roles, freelance projects, and interesting collaborations.
          Drop me a message and I'll get back to you promptly.
        </p>

        {/* Contact cards */}
        <div className="vt-contact-grid" style={{ marginBottom: 'var(--s-10)' }}>
          {contacts.map((c) => (
            <div
              key={c.label}
              className="card"
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)', padding: 'var(--s-5)' }}
            >
              {/* Coloured icon box */}
              <div
                className="iconbox"
                style={{ background: c.avatarBg, color: c.avatarFg, flexShrink: 0, width: 44, height: 44 }}
              >
                <Deco name={c.icon} size={18} />
              </div>

              {/* Text — flex-1 so copy button stays at the right edge */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="t-eyebrow" style={{ marginBottom: 3, color: c.avatarFg }}>{c.label}</div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{
                      color: 'var(--ink-1)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      transition: 'color var(--transition-snap)',
                      wordBreak: 'break-all',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = c.avatarFg}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-1)'}
                  >
                    {c.val}
                  </a>
                ) : (
                  <span style={{ color: 'var(--ink-1)', fontWeight: 500, fontSize: '0.9rem' }}>{c.val}</span>
                )}
              </div>

              {/* Copy button */}
              {c.copyVal && (
                <button
                  className="btn btn--ghost btn--icon btn--sm"
                  onClick={() => handleCopy(c.label, c.copyVal)}
                  title={`Copy ${c.label}`}
                  style={{
                    flexShrink: 0,
                    color: copied === c.label ? 'var(--matcha-deep)' : 'var(--ink-4)',
                    background: copied === c.label ? 'var(--matcha-soft)' : 'transparent',
                    border: copied === c.label ? '1px solid var(--matcha)' : '1px solid transparent',
                    transition: 'color 0.2s, background 0.2s, border-color 0.2s',
                    width: 30,
                    height: 30,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                  aria-label={copied === c.label ? 'Copied!' : `Copy ${c.label}`}
                >
                  {copied === c.label ? <CheckIcon /> : <CopyIcon />}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div
          className="card card--raised"
          style={{
            background: 'var(--bg-elevated)',
            borderTop: '3px solid var(--accent)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--s-6)',
            padding: 'var(--s-7)',
          }}
        >
          <div className="tape tape--indigo" />
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 'var(--s-2)' }}>Ready to work together?</div>
            <h3 style={{ margin: '0 0 var(--s-2) 0', fontSize: '1.2rem' }}>Let's build something great.</h3>
            <p style={{ color: 'var(--ink-3)', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>
              Available for full-time roles &amp; freelance projects.
            </p>
          </div>
          <a href="mailto:visshnnutejaa@gmail.com" className="btn btn--accent btn--lg vt-cta-btn" style={{ flexShrink: 0 }}>
            <Deco name="icon-mail" size={16} />
            Send an Email
          </a>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 'var(--s-12)',
            paddingTop: 'var(--s-6)',
            borderTop: '1px dashed var(--rule)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--s-2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)' }}>
            <Deco name="sakura" size={14} />
            <span className="t-eyebrow" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>C V Visshnnu Tejaa · 2025</span>
            <Deco name="sakura" size={14} />
          </div>
          <p style={{ color: 'var(--ink-5)', fontSize: '0.78rem', margin: 0 }}>
            Built with React · Vite · Origami Design System
          </p>
        </div>
      </div>
    </section>
  )
}
