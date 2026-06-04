import Deco from "./Deco";

const jobs = [
  {
    company: "Tricog Health",
    role: "Senior Software Engineer",
    period: "Jul 2025 – Present",
    location: "Bengaluru, Karnataka",
    current: true,
    tape: "tape--indigo",
    avatarBg: "var(--indigo-soft)",
    avatarFg: "var(--indigo-deep)",
    borderColor: "var(--indigo)",
    badge: "badge--indigo",
    rot: "-0.4deg",
    points: [
      "Worked in healthcare, primarily handling Echo data, contributing to diagnostic and reporting workflows.",
      "Built customizable Echo patient report templates for multiple hospitals, enabling fast onboarding and reducing manual report formatting time for cardiologists.",
      "Developed and optimized the Echo report generation module, automating the flow of measurement data—from drawing tools to clinically approved final reports.",
      "Built a custom medical video player from scratch capable of supporting playback speeds up to 16x speed while maintaining smooth frame rendering and measurement accuracy, overcoming browser-native limitations typically restricted to 2x–4x playback.",
    ],
  },
  {
    company: "Apica",
    role: "Software Developer",
    period: "Aug 2024 – Jul 2025",
    location: "Bengaluru, Karnataka",
    current: false,
    tape: "tape--matcha",
    avatarBg: "var(--matcha-soft)",
    avatarFg: "var(--matcha-deep)",
    borderColor: "var(--matcha)",
    badge: "badge--matcha",
    rot: "0.3deg",
    points: [
      "Spearheaded the development of a scalable Design System and Component Library using React.js, Tailwind CSS, TypeScript, and Storybook, enabling consistent UI implementation across multiple enterprise applications.",
      "Established reusable frontend architecture patterns focusing on Accessibility, Responsive Design, and Performance Optimization, improving developer productivity across cross-functional teams.",
      "Built scalable, reusable UI components with React and Tailwind, ensuring consistent design across all web applications.",
      "Leveraged Storybook to document UI components, boosting collaboration between design & development teams.",
      "Collaborated with UX/UI designers to translate design mockups into functional and maintainable code, resulting in a 40% reduction in development time for new features",
    ],
  },
  {
    company: "Piktorlabs – UST Global",
    role: "Developer III – Software Engineering",
    period: "Dec 2021 – Aug 2024",
    location: "Bengaluru, Karnataka",
    current: false,
    tape: "tape--pink",
    avatarBg: "var(--sakura-soft)",
    avatarFg: "var(--sakura-deep)",
    borderColor: "var(--sakura)",
    badge: "badge--sakura",
    rot: "-0.3deg",
    points: [
      "Developed scalable Component Libraries and reusable UI components using React and Angular, reducing page load time by 30% and improving maintainability across applications.",
      "Collaborated with PMs, designers, and developers to build web apps, boosting retention by 40% and scalability by 25%.",
      "Reviewed 50+ code sessions, giving feedback on scalability and performance, boosting overall application speed by 20%.",
      "Implemented advanced State Management, Lazy Loading, and Code Splitting strategies to enhance application performance and user experience.",
      "Enhanced filtering for 900,000+ records, optimizing data retrieval and reducing load time by 40%.",
    ],
  },
  {
    company: "XSEED Education",
    role: "Full Stack Software Engineer",
    period: "Jun 2021 – Dec 2021",
    location: "Chennai, Tamil Nadu",
    current: false,
    tape: "tape--peach",
    avatarBg: "var(--peach-soft)",
    avatarFg: "var(--peach-deep)",
    borderColor: "var(--peach)",
    badge: "badge--peach",
    rot: "0.4deg",
    points: [
      "Delivered high-quality MERN Stack applications from scratch, achieving 30% improvement in dev speed.",
      "Enhanced error tracking with peer devs, reducing issue resolution time by 40%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="vt-section vt-section-alt">
      <div className="vt-container">
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">work experience</span>
        </div>
        <h2 style={{ marginBottom: "var(--s-10)" }}>
          Places I've <span className="hl-marker">built things</span>
        </h2>

        <div className="vt-timeline">
          {jobs.map((job) => (
            <div key={job.company} className="vt-timeline-item">
              <div
                className="vt-timeline-dot"
                style={
                  job.current ?
                    {
                      background: "var(--accent)",
                      boxShadow: "0 0 0 4px var(--accent-soft)",
                      width: 20,
                      height: 20,
                      left: 2,
                    }
                  : {}
                }
              />

              <div
                className="card card--raised"
                style={{
                  borderLeft: `3px solid ${job.borderColor}`,
                  paddingTop: "var(--s-7)",
                }}
              >
                <div className={`tape tape--left ${job.tape}`} />

                {/* Avatar + title row */}
                <div
                  style={{
                    display: "flex",
                    gap: "var(--s-4)",
                    alignItems: "flex-start",
                    marginBottom: "var(--s-5)",
                  }}
                >
                  <div
                    className="avatar avatar--lg"
                    style={{
                      background: job.avatarBg,
                      color: job.avatarFg,
                      fontSize: "1.3rem",
                      fontFamily: "var(--font-hand)",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {job.company[0]}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Role + badge — stacks on narrow screens via vt-card-meta */}
                    <div className="vt-card-meta">
                      <h3 style={{ margin: 0, fontSize: "1.05rem" }}>
                        {job.role}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--s-2)",
                          flexShrink: 0,
                        }}
                      >
                        {job.current && <span className="dot dot--success" />}
                        <span className={`badge ${job.badge}`}>
                          {job.period}
                        </span>
                      </div>
                    </div>
                    {/* Company + location */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "var(--s-3)",
                        marginTop: "var(--s-1)",
                      }}
                    >
                      <span
                        style={{
                          color: job.avatarFg,
                          fontWeight: 600,
                          fontSize: "0.93rem",
                        }}
                      >
                        {job.company}
                      </span>
                      <span
                        style={{
                          color: "var(--ink-4)",
                          fontSize: "0.78rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Deco name="icon-globe" size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                <hr
                  className="rule rule--dashed"
                  style={{ margin: "0 0 var(--s-4) 0" }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--s-3)",
                  }}
                >
                  {job.points.map((pt, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "var(--s-2)",
                      }}
                    >
                      <Deco
                        name="plane"
                        size={14}
                        style={{
                          color: job.borderColor,
                          marginTop: 3,
                          flexShrink: 0,
                          position: "relative",
                          top: 4,
                        }}
                      />
                      <span
                        style={{
                          color: "var(--ink-2)",
                          fontSize: "0.92rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
