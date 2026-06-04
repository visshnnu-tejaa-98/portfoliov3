import Deco from './Deco'

const education = [
  {
    degree: 'B.Tech – Electronics & Communication Engineering',
    institution: 'Jain University',
    period: 'Aug 2016 – May 2020',
    location: 'Bengaluru, Karnataka',
    detail: 'Bachelor of Technology',
    badge: 'badge--indigo',
    tape: 'tape--indigo',
    avatarBg: 'var(--indigo-soft)',
    avatarFg: 'var(--indigo-deep)',
    borderColor: 'var(--indigo)',
    rot: '-0.4deg',
    decoName: 'crane',
  },
  {
    degree: 'Intermediate – Maths, Physics, Chemistry',
    institution: 'Narayana Jr College',
    period: 'Jun 2014 – May 2016',
    location: 'Anantapur, Andhra Pradesh',
    detail: '11th & 12th Grade',
    badge: 'badge--lavender',
    tape: 'tape--lavender',
    avatarBg: 'var(--lavender-soft)',
    avatarFg: 'var(--lavender-deep)',
    borderColor: 'var(--lavender)',
    rot: '0.4deg',
    decoName: 'leaf',
  },
  {
    degree: '10th Class – General Studies',
    institution: 'Montessori Smart School',
    period: 'Jun 2013 – May 2014',
    location: 'Anantapur, Andhra Pradesh',
    detail: 'Secondary School Certificate',
    badge: 'badge--matcha',
    tape: 'tape--matcha',
    avatarBg: 'var(--matcha-soft)',
    avatarFg: 'var(--matcha-deep)',
    borderColor: 'var(--matcha)',
    rot: '-0.3deg',
    decoName: 'star',
  },
]

export default function Education() {
  return (
    <section id="education" className="vt-section">
      <div className="vt-container">
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">education journey</span>
        </div>
        <h2 style={{ marginBottom: 'var(--s-10)' }}>
          The <span className="underline-brush">foundations</span> laid
        </h2>

        <div className="vt-timeline">
          {education.map((edu) => (
            <div key={edu.institution} className="vt-timeline-item">
              <div className="vt-timeline-dot" />

              <div
                className="card card--raised"
                style={{ borderLeft: `3px solid ${edu.borderColor}`, paddingTop: 'var(--s-7)', flex: 1 }}
              >
                <div className={`tape tape--left ${edu.tape}`} />

                <div style={{ display: 'flex', gap: 'var(--s-4)', alignItems: 'flex-start' }}>
                  <div
                    className="avatar avatar--lg"
                    style={{ background: edu.avatarBg, color: edu.avatarFg, flexShrink: 0 }}
                  >
                    <Deco name={edu.decoName} size={22} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="vt-card-meta">
                      <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: 1.35 }}>{edu.degree}</h3>
                      <span className={`badge ${edu.badge}`} style={{ flexShrink: 0 }}>{edu.period}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--s-3)', marginTop: 'var(--s-1)' }}>
                      <span style={{ color: edu.avatarFg, fontWeight: 600, fontSize: '0.93rem' }}>{edu.institution}</span>
                      <span style={{ color: 'var(--ink-4)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Deco name="icon-globe" size={12} />
                        {edu.location}
                      </span>
                      <span style={{ color: 'var(--ink-4)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Deco name="fold" size={12} style={{ color: edu.borderColor }} />
                        {edu.detail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="note note--sticky"
          style={{ maxWidth: 540, margin: 'var(--s-10) auto 0', transform: 'rotate(-0.8deg)' }}
        >
          <div className="tape tape--pink" />
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.12rem', lineHeight: 1.6, color: 'var(--ink-1)', margin: 0 }}>
            "Crafting digital experiences with precision and purpose — one component at a time."
          </p>
          <div style={{ marginTop: 'var(--s-3)', display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
            <Deco name="sakura" size={14} />
            <span className="t-eyebrow" style={{ fontSize: '0.72rem' }}>C V Visshnnu Tejaa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
