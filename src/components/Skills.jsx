import Deco from './Deco'

const groups = [
  {
    label: 'Frontend',
    icon: 'icon-layers',
    skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Redux', 'Angular'],
    badge: '',
  },
  {
    label: 'UI Frameworks',
    icon: 'icon-themes',
    skills: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'AntDesign', 'Design System', 'Storybook'],
    badge: 'badge--lavender',
  },
  {
    label: 'Backend',
    icon: 'icon-zap',
    skills: ['Node JS', 'Express JS', 'REST APIs'],
    badge: 'badge--matcha',
  },
  {
    label: 'Databases',
    icon: 'icon-filter',
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL'],
    badge: 'badge--peach',
  },
  {
    label: 'Tools',
    icon: 'icon-settings',
    skills: ['Git', 'GitHub', 'Storybook', 'Vite', 'VS Code'],
    badge: 'badge--indigo',
  },
  {
    label: 'Stack',
    icon: 'icon-sparkles',
    skills: ['MERN Stack', 'SPA', 'Responsive Design', 'Performance'],
    badge: 'badge--sakura',
  },
]

const projects = [
  { name: 'Color Picker', desc: 'UI color picker enhancing developer UX, reducing UI dev time by 10%' },
  { name: 'Code Pencil', desc: 'Simplified online code editor inspired by Codepen.io' },
  { name: 'GitHub Portfolio', desc: 'Diverse projects — full-stack, UI/UX, and data structures' },
]

export default function Skills() {
  return (
    <section id="skills" className="vt-section">
      <div className="vt-container">
        {/* Heading */}
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">technical skills</span>
        </div>
        <h2 style={{ marginBottom: 'var(--s-8)' }}>Technologies I <span className="underline-brush">work with</span></h2>

        {/* Skill cards */}
        <div className="vt-skills-grid" style={{ marginBottom: 'var(--s-8)' }}>
          {groups.map((g, i) => (
            <div key={g.label} className="card fold-corner" style={{ '--rot-1': i % 2 === 0 ? '-0.4deg' : '0.3deg' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
                <div className="iconbox">
                  <Deco name={g.icon} size={16} />
                </div>
                <h3>{g.label}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-2)' }}>
                {g.skills.map(s => (
                  <span key={s} className={`badge ${g.badge}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal projects */}
        <div className="card card--paper" style={{ background: 'var(--bg-elevated)' }}>
          <div className="tape tape--matcha" />
          <div className="t-eyebrow" style={{ marginBottom: 'var(--s-5)' }}>Personal Projects</div>
          <div className="vt-projects-grid">
            {projects.map(p => (
              <div key={p.name}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)', marginBottom: 'var(--s-2)' }}>
                  <Deco name="fold" size={16} style={{ color: 'var(--accent)' }} />
                  <h4>{p.name}</h4>
                </div>
                <p style={{ fontSize: 'var(--t-sm)', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
