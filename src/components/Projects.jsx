import Deco from "./Deco";
import { FaGithub } from "react-icons/fa";

const featured = [
  {
    name: "SnapCSS",
    tagline: "utility-first CSS framework",
    desc: "Built and published a utility-first CSS framework inspired by Tailwind CSS, featuring reusable utility classes, responsive design utilities, customizable configurations, and npm distribution. Designed to accelerate UI development and improve developer productivity.",
    stack: ["JavaScript", "CSS", "npm", "Vite"],
    github: "https://github.com/visshnnu-tejaa-98/snapcss",
    app: "https://snapcss.in",
    tape: "tape--indigo",
    badge: "badge--indigo",
    avatarBg: "var(--indigo-soft)",
    avatarFg: "var(--indigo-deep)",
    borderColor: "var(--indigo)",
    rot: "-0.4deg",
    deco: "icon-layers",
  },
  {
    name: "iLoggin",
    tagline: "OAuth2 / OIDC identity platform",
    desc: "Developed a secure identity management platform featuring an OAuth2/OIDC provider with PKCE and shortcode flows. Integrated full authentication systems, a developer dashboard for client management, and administrative user management tools.",
    stack: ["Node.js", "OAuth2", "OIDC", "PKCE"],
    github: "https://github.com/visshnnu-tejaa-98/gatekeeper",
    app: "https://iloggin.vercel.app",
    tape: "tape--matcha",
    badge: "badge--matcha",
    avatarBg: "var(--matcha-soft)",
    avatarFg: "var(--matcha-deep)",
    borderColor: "var(--matcha)",
    rot: "0.3deg",
    deco: "icon-shield",
  },
  {
    name: "1 Million Checkboxes",
    tagline: "real-time multiplayer at scale",
    desc: "Architected a real-time, horizontally scalable multiplayer platform using Node.js and Socket.IO. Implemented Redis Pub/Sub to synchronize state across distributed server instances, built severe rate-limiting protections, and designed an optimistic UI on the frontend for smooth, instant rendering.",
    stack: ["Node.js", "Socket.IO", "Redis", "Pub/Sub"],
    github: "https://github.com/visshnnu-tejaa-98/onemillion-checkboxes",
    app: "https://onemillion-checkboxes-production.up.railway.app",
    tape: "tape--peach",
    badge: "badge--peach",
    avatarBg: "var(--peach-soft)",
    avatarFg: "var(--peach-deep)",
    borderColor: "var(--peach)",
    rot: "-0.3deg",
    deco: "icon-zap",
  },
];

const compact = [
  {
    name: "Color Picker",
    desc: "UI color picker enhancing UX and improving color selection — reduced UI development time by 10%.",
    github: "https://github.com/visshnnu-tejaa-98/color-picker",
    app: "https://dev-color-picker.netlify.app",
    badge: "badge--lavender",
    deco: "icon-themes",
  },
  {
    name: "Code Pencil",
    desc: "A simplified online code editor inspired by Codepen.io.",
    github: "https://github.com/visshnnu-tejaa-98/codepencil",
    app: "https://dev-codepencil.netlify.app",
    badge: "badge--sakura",
    deco: "icon-layers",
  },
  {
    name: "GitHub Portfolio",
    desc: "Diverse projects across full-stack development, UI/UX, and data structures.",
    github: "https://github.com/visshnnu-tejaa-98",
    app: "#",
    badge: "badge--indigo",
    deco: "icon-globe",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="vt-section">
      <div className="vt-container">
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">personal projects</span>
        </div>
        <h2 style={{ marginBottom: "var(--s-10)" }}>
          Things I've <span className="hl-marker">shipped</span> on the side
        </h2>

        {/* Featured projects */}
        <div className="vt-projects-featured">
          {featured.map((p) => (
            <article
              key={p.name}
              className="card card--raised"
              style={{
                borderLeft: `3px solid ${p.borderColor}`,
                paddingTop: "var(--s-7)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-4)",
                "--rot-1": p.rot,
              }}
            >
              <div className={`tape tape--left ${p.tape}`} />

              {/* Header: avatar + name + tagline */}
              <div
                style={{
                  display: "flex",
                  gap: "var(--s-4)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="avatar avatar--lg"
                  style={{
                    background: p.avatarBg,
                    color: p.avatarFg,
                    flexShrink: 0,
                  }}
                >
                  <Deco name={p.deco} size={20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{p.name}</h3>
                  <div
                    style={{
                      color: p.avatarFg,
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      marginTop: 2,
                    }}
                  >
                    {p.tagline}
                  </div>
                </div>
              </div>

              <hr className="rule rule--dashed" style={{ margin: 0 }} />

              {/* Description */}
              <p
                style={{
                  color: "var(--ink-2)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {p.desc}
              </p>

              {/* Tech stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--s-2)",
                }}
              >
                {p.stack.map((s) => (
                  <span key={s} className={`badge ${p.badge}`}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  gap: "var(--s-2)",
                  marginTop: "auto",
                  paddingTop: "var(--s-2)",
                }}
              >
                {p.github && p.github !== "#" && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="chip"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
                {p.app && p.app !== "#" && (
                  <a
                    href={p.app}
                    target="_blank"
                    rel="noreferrer"
                    className="chip"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Deco name="icon-link" size={14} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Compact row */}
        <div
          className="t-eyebrow"
          style={{
            margin: "var(--s-10) 0 var(--s-4)",
            display: "flex",
            alignItems: "center",
            gap: "var(--s-2)",
          }}
        >
          <Deco name="dashes" size={32} style={{ color: "var(--accent)" }} />
          also built
        </div>
        <div className="vt-projects-compact">
          {compact.map((p, i) => (
            <article
              key={p.name}
              className="card fold-corner"
              style={{ "--rot-1": i % 2 === 0 ? "-0.5deg" : "0.4deg" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--s-2)",
                  marginBottom: "var(--s-2)",
                }}
              >
                <Deco name={p.deco} size={16} />
                <h4 style={{ margin: 0 }}>{p.name}</h4>
              </div>
              <p
                style={{
                  fontSize: "var(--t-sm)",
                  color: "var(--ink-2)",
                  lineHeight: 1.6,
                  margin: 0,
                  marginBottom: "var(--s-3)",
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: "var(--s-2)" }}>
                {p.github && p.github !== "#" && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="chip"
                    style={{ textDecoration: "none" }}
                    aria-label={`${p.name} GitHub`}
                  >
                    <FaGithub size={14} />
                  </a>
                )}
                {p.app && p.app !== "#" && (
                  <a
                    href={p.app}
                    target="_blank"
                    rel="noreferrer"
                    className="chip"
                    style={{ textDecoration: "none" }}
                    aria-label={`${p.name} live`}
                  >
                    <Deco name="icon-link" size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
