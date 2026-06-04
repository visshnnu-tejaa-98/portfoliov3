import Deco from './Deco'

export default function Home() {
  return (
    <section id="home" className="vt-hero">
      {/* Floating origami decorations */}
      <span className="vt-float-a" style={{ right: '12%', top: '18%', opacity: 0.55 }}>
        <Deco name="crane" size={110} id={1} />
      </span>
      <span className="vt-float-b" style={{ right: '5%', top: '48%', opacity: 0.45 }}>
        <Deco name="plane" size={72} />
      </span>
      <span className="vt-float-c" style={{ right: '22%', bottom: '20%', opacity: 0.35 }}>
        <Deco name="boat" size={88} />
      </span>
      <span className="vt-float-d" style={{ right: '38%', top: '12%', opacity: 0.6 }}>
        <Deco name="sakura" size={36} />
      </span>

      <div className="vt-hero-inner">
      <div className="vt-hero-content">
        {/* Eyebrow */}
        <div className="t-eyebrow" style={{ marginBottom: 'var(--s-4)', display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
          <Deco name="dashes" size={40} style={{ color: 'var(--accent)' }} />
          portfolio · 2025
        </div>

        {/* Name */}
        <h1 className="t-display" style={{ marginBottom: 'var(--s-3)', color: 'var(--ink-1)' }}>
          Hello, I'm<br />
          <span className="underline-brush">C V Visshnnu Tejaa</span>
        </h1>

        {/* Role */}
        <p style={{ fontFamily: 'var(--font-hand)', fontSize: 'var(--t-h2)', color: 'var(--accent-deep)', marginBottom: 'var(--s-6)', lineHeight: 1.2 }}>
          Senior Software Engineer
        </p>

        {/* Description */}
        <p style={{ maxWidth: '54ch', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: 'var(--s-7)', fontSize: '1.05rem' }}>
          Frontend specialist with 4+ years building scalable web apps,
          design systems, and exceptional user experiences — across healthcare,
          performance testing, and education.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-3)', marginBottom: 'var(--s-7)' }}>
          <a href="#experience" className="btn btn--accent btn--lg">
            <Deco name="icon-arrow" size={16} />
            View Experience
          </a>
          <a href="#contact" className="btn btn--lg">
            <Deco name="icon-mail" size={16} />
            Contact Me
          </a>
        </div>

        {/* Social chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-2)' }}>
          {[
            { label: 'GitHub',    href: 'https://github.com/visshnnu-tejaa-98' },
            { label: 'LinkedIn',  href: 'https://linkedin.com/in/visshnnu-tejaa' },
            { label: 'Portfolio', href: 'https://vt-portfolio.app' },
            { label: 'Email',     href: 'mailto:visshnnutejaa@gmail.com' },
          ].map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="chip" style={{ textDecoration: 'none' }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      </div>

      {/* Sticky note in corner */}
      <div
        className="note note--sticky"
        style={{ position: 'absolute', bottom: '12%', right: '3%', maxWidth: 180, transform: 'rotate(4deg)', display: 'none', zIndex: 2 }}
      >
        <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.05rem' }}>
          Open to new opportunities! ✦
        </span>
      </div>

      {/* Scroll cue */}
      <div
        style={{ position: 'absolute', bottom: 'var(--s-7)', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: 0.4 }}
      >
        <Deco name="icon-chevronDown" size={20} style={{ color: 'var(--accent)' }} />
        <span className="t-eyebrow" style={{ fontSize: '0.65rem' }}>scroll</span>
      </div>
    </section>
  )
}
