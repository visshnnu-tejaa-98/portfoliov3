import Deco from "./Deco";
import { FaGithub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const groups = [
  {
    label: "Frontend",
    icon: "icon-layers",
    skills: [
      "React JS",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
    ],
    badge: "",
  },
  {
    label: "UI Libraries",
    icon: "icon-themes",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Storybook",
      "Custom Libraries",
      "Snap CSS",
      "Enterprise Design Systems",
    ],
    badge: "badge--lavender",
  },
  {
    label: "Backend",
    icon: "icon-zap",
    skills: ["Node JS", "Express JS", "REST APIs"],
    badge: "badge--matcha",
  },
  {
    label: "Databases and ORMs",
    icon: "icon-filter",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Prisma"],
    badge: "badge--peach",
  },
  {
    label: "Tools",
    icon: "icon-settings",
    skills: ["Git", "GitHub", "Bitbucket", "Vite", "VS Code", "vite"],
    badge: "badge--indigo",
  },
  {
    label: "Stack",
    icon: "icon-sparkles",
    skills: ["MERN Stack", "SPA", "Responsive Design", "Performance"],
    badge: "badge--sakura",
  },
];

const projects = [
  {
    name: "SnapCSS",
    desc: "Developed and published SnapCSS, a utility-first CSS framework inspired by Tailwind CSS, enabling faster and more consistent UI development.",
    github: "https://github.com/visshnnu-tejaa-98/snapcss",
    app: "https://snapcss.in",
  },
  {
    name: "Color Picker",
    desc: "UI color picker enhancing developer UX, reducing UI dev time by 10%",
    github: "https://github.com/visshnnu-tejaa-98/color-picker",
    app: "https://dev-color-picker.netlify.app",
  },
  {
    name: "Code Pencil",
    desc: "Simplified online code editor inspired by Codepen.io",
    github: "https://github.com/visshnnu-tejaa-98/codepencil",
    app: "https://dev-codepencil.netlify.app",
  },
  // {
  //   name: "GitHub Portfolio",
  //   desc: "Diverse projects — full-stack, UI/UX, and data structures",
  // },
];

export default function Skills() {
  return (
    <section id="skills" className="vt-section">
      <div className="vt-container">
        {/* Heading */}
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">technical skills</span>
        </div>
        <h2 style={{ marginBottom: "var(--s-8)" }}>
          Technologies I <span className="underline-brush">work with</span>
        </h2>

        {/* Skill cards */}
        <div className="vt-skills-grid" style={{ marginBottom: "var(--s-8)" }}>
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="card fold-corner"
              style={{ "--rot-1": i % 2 === 0 ? "-0.4deg" : "0.3deg" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--s-3)",
                  marginBottom: "var(--s-4)",
                }}
              >
                <div className="iconbox">
                  <Deco name={g.icon} size={16} />
                </div>
                <h3>{g.label}</h3>
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)" }}
              >
                {g.skills.map((s) => (
                  <span key={s} className={`badge ${g.badge}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal projects */}
        <div
          className="card card--paper"
          style={{ background: "var(--bg-elevated)" }}
        >
          <div className="tape tape--matcha" />
          <div className="t-eyebrow" style={{ marginBottom: "var(--s-5)" }}>
            Personal Projects
          </div>
          <div className="vt-projects-grid">
            {projects.map((p) => (
              <div key={p.name} className="vt-projects-grid-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--s-2)",
                    marginBottom: "var(--s-2)",
                  }}
                >
                  <Deco name="icon-layers" size={16} />

                  <h4>{p.name}</h4>
                </div>
                <p style={{ fontSize: "var(--t-sm)", margin: 0 }}>{p.desc}</p>
                {/* Links Section */}
                <div
                  style={{
                    marginTop: "var(--s-3)",
                    display: "flex",
                    gap: "var(--s-3)",
                  }}
                >
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="chip"
                      style={{ textDecoration: "none" }}
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {p.app && (
                    <a
                      href={p.app}
                      target="_blank"
                      rel="noreferrer"
                      className="chip"
                      style={{ textDecoration: "none" }}
                    >
                      <Deco name="icon-link" size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
