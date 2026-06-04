import Deco from "./Deco";

export default function About() {
  return (
    <section id="about" className="vt-section vt-section-alt">
      <div className="vt-container">
        {/* Heading */}
        <div className="vt-section-eyebrow">
          <div className="vt-eyebrow-line" />
          <span className="t-eyebrow">about me</span>
        </div>
        <h2 style={{ marginBottom: "var(--s-8)" }}>
          The story <span className="hl-marker">behind</span> the code
        </h2>

        <div className="vt-about-grid">
          {/* LEFT — bio + details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-5)",
            }}
          >
            <div className="card">
              <div className="t-eyebrow" style={{ marginBottom: "var(--s-3)" }}>
                Who I am
              </div>
              {/* <p style={{ lineHeight: 1.8 }}>
                Senior Software Engineer with 4+ years building scalable web apps. Currently at
                <span className="hl-marker--accent"> Tricog</span> in healthcare —
                creating diagnostic tools and report generation systems for cardiologists.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                I specialise in React, design systems, and turning complex requirements into
                clean, maintainable frontend code. I've helped teams ship faster, cut load times,
                and build products people enjoy using.
              </p> */}
              <p>
                Senior Software Engineer with 5+ years of experience building
                scalable web applications using React.js, TypeScript, and
                Node.js. Experienced in Design Systems, Component Libraries,
                Frontend Architecture, Performance Optimization, and Healthcare
                SaaS platforms.
              </p>
              <p>
                Proven track record of building reusable UI systems adopted
                across multiple teams, optimizing application performance, and
                delivering scalable user experiences. Skilled in State
                Management, Responsive Design, Accessibility, Code Splitting,
                Lazy Loading, and developing enterprise-grade web applications.
              </p>
            </div>

            <div className="card">
              <div className="t-eyebrow" style={{ marginBottom: "var(--s-4)" }}>
                Details
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-3)",
                }}
              >
                {[
                  {
                    label: "Location",
                    val: "Bengaluru, Karnataka",
                    href: null,
                    icon: "icon-globe",
                  },
                  {
                    label: "Email",
                    val: "visshnnutejaa@gmail.com",
                    href: "mailto:visshnnutejaa@gmail.com",
                    icon: "icon-mail",
                  },
                  {
                    label: "Phone",
                    val: "+91 7619352192",
                    href: "tel:+917619352192",
                    icon: "icon-phone",
                  },
                  // {
                  //   label: "Portfolio",
                  //   val: "vt-portfolio.app",
                  //   href: "https://vt-portfolio.app",
                  //   icon: "icon-link",
                  // },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--s-3)",
                    }}
                  >
                    <div className="iconbox" style={{ flexShrink: 0 }}>
                      <Deco name={item.icon} size={16} />
                    </div>
                    <div>
                      <div className="t-eyebrow" style={{ marginBottom: 2 }}>
                        {item.label}
                      </div>
                      {item.href ?
                        <a
                          href={item.href}
                          style={{
                            color: "var(--ink-1)",
                            textDecoration: "none",
                            fontWeight: 500,
                            fontSize: "0.92rem",
                            wordBreak: "break-all",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--accent-deep)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--ink-1)")
                          }
                        >
                          {item.val}
                        </a>
                      : <span
                          style={{
                            color: "var(--ink-1)",
                            fontWeight: 500,
                            fontSize: "0.92rem",
                          }}
                        >
                          {item.val}
                        </span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — sticky notes */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-5)",
            }}
          >
            {/* Certifications note */}
            <div className="note" style={{ "--rot-1": "-1.2deg" }}>
              <div className="tape tape--indigo" />
              <div className="t-eyebrow" style={{ marginBottom: "var(--s-3)" }}>
                Certifications
              </div>
              {[
                "Full Stack Web Development — GUVI (IIT Madras Incubated)",
                "Data Structures & Algorithms — iNeuron",
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--s-2)",
                    marginBottom: "var(--s-2)",
                  }}
                >
                  <Deco
                    name="star"
                    size={14}
                    style={{
                      color: "var(--accent)",
                      marginTop: 3,
                      flexShrink: 0,
                    }}
                    opts={{ fill: "currentColor" }}
                  />
                  <span
                    style={{
                      color: "var(--ink-2)",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>

            {/* Achievements note */}
            <div className="note" style={{ "--rot-1": "0.8deg" }}>
              <div className="tape tape--pink" />
              <div className="t-eyebrow" style={{ marginBottom: "var(--s-3)" }}>
                Achievements
              </div>
              {[
                "Runner-up in competitive coding contest by GUVI",
                "Runner-up in ROBO Race at Jain Tech Fest",
              ].map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--s-2)",
                    marginBottom: "var(--s-2)",
                  }}
                >
                  <Deco
                    name="sakura"
                    size={14}
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <span
                    style={{
                      color: "var(--ink-2)",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {a}
                  </span>
                </div>
              ))}
            </div>

            {/* Interests sticky */}
            <div
              className="note note--sticky note--green"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-hand)",
                  fontSize: "1.15rem",
                  marginBottom: 6,
                  color: "var(--ink-1)",
                }}
              >
                Interests ✦
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "var(--ink-2)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Learning new tech, surfing the internet, keeping up with
                industry news, and building side projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
