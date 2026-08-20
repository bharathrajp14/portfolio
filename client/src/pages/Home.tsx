/* Field Notes design: editorial brutalism, warm paper, mineral green structure, evidence-led project storytelling. */
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const portableAssetBase = import.meta.env.VITE_STATIC_ASSET_BASE?.replace(/\/$/, "");
const assetPath = (managedUrl: string, portableFilename: string) =>
  portableAssetBase ? `${portableAssetBase}/${portableFilename}` : managedUrl;

const heroArtwork = assetPath("/manus-storage/field-notes-hero_4439a67e.png", "field-notes-hero.png");
const projectTexture = assetPath("/manus-storage/field-notes-project-texture_c5a0a177.png", "field-notes-project-texture.png");
const monogram = assetPath("/manus-storage/brp-monogram_7a8e909d.png", "brp-monogram.png");
const resumeUrl = assetPath("/manus-storage/Bharath_Raj_P_Updated_Resume_ad9f1cba.docx", "Bharath_Raj_P_Resume.docx");

const featuredProjects = [
  {
    number: "01",
    title: "BR JARVIS",
    type: "Autonomous AI operating runtime",
    summary:
      "A local-first runtime for verifiable task execution across CLI, web, voice, and system automation. The differentiator is not only orchestration—it is proving that the action really happened.",
    proof: "325+ passing tests · Windows / Linux / macOS",
    stack: ["Python", "FastAPI", "SQLite", "LLM routing", "Tool security"],
    href: "https://github.com/bharathrajp14/BrJarvis",
    texture: true,
    evidence: ["TASK DAG", "VERIFY", "PASS"],
  },
  {
    number: "02",
    title: "NEXORA",
    type: "Digital workspace platform",
    summary:
      "A full-stack workspace with enterprise-style authentication, custom collections, imports, auditability, and workflow building. Built to make secure data operations feel understandable.",
    proof: "OTP + OAuth · refresh-token rotation · async services",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    href: "https://github.com/bharathrajp14/nexora",
    texture: false,
    evidence: ["OTP", "ROTATE", "AUDIT"],
  },
  {
    number: "03",
    title: "Farmaa",
    type: "Agriculture marketplace + mobile app",
    summary:
      "A mobile and backend platform connecting farmers and buyers with marketplace workflows, market prices, role-aware access, and an AI advisor for agricultural decisions.",
    proof: "OTP + Google auth · role-based access · market trends",
    stack: ["Flutter", "FastAPI", "Supabase", "Firebase", "SQLAlchemy"],
    href: "https://github.com/bharathrajp14/farmaa",
    texture: true,
    evidence: ["ROLE", "MARKET", "SYNC"],
  },
  {
    number: "04",
    title: "JobBoard Pro",
    type: "AI-assisted career operations",
    summary:
      "A privacy-first job application tracker that combines live listings, Gmail scanning, Kanban tracking, funnel analytics, interview prep, and tailored cover letters.",
    proof: "Adzuna search · Supabase · DeepSeek-R1 workflows",
    stack: ["React", "Vite", "Supabase", "NVIDIA NIM", "Adzuna API"],
    href: "https://github.com/bharathrajp14/job_manager",
    texture: false,
    evidence: ["SEARCH", "FUNNEL", "AI"],
  },
];

const projectArchive = [
  ["jarvis", "BR-JARVIS runtime", "Python / AI systems"],
  ["BrJarvis", "BR JARVIS architecture rebuild", "Python / FastAPI"],
  ["myai", "AG3NT personal AI infrastructure", "TypeScript / Python"],
  ["aria-v2-god-mode", "OpenClaw-style agent runtime", "TypeScript / WebSocket"],
  ["my_openclaw", "OpenClaw exploration", "TypeScript / multi-runtime"],
  ["IgniteCore_web", "AI Business Enablement Studio", "Next.js / TypeScript"],
  ["farmaa", "Digitalizing Agriculture", "Flutter / FastAPI"],
  ["farmaa1.0", "Farmaa iteration", "Flutter / Supabase"],
  ["nexora", "Digital workspace platform", "React / FastAPI"],
  ["job_manager", "JobBoard Pro", "React / Supabase"],
  ["p2", "Earnings & referral platform", "Flutter / Firebase"],
  ["connect", "ShareNet Earn prototype", "Flutter / Dart"],
  ["sharenearn", "Share & earn mobile app", "Flutter / Dart"],
  ["bizacademy", "Business learning interface", "JavaScript / Vite"],
  ["safetime-scheduler", "Scheduling web app", "Next.js / TypeScript"],
  ["XSECQRE-Password-Manager-Web-App", "XSECQRE password manager", "Flask / SQLite"],
  ["flask-url-shortener", "URL shortener", "Flask / Python"],
  ["studentreport_mern", "Student report app", "JavaScript / MERN"],
  ["portfolio", "Original portfolio site", "HTML / CSS / JavaScript"],
];

const skillGroups = [
  ["Languages", "Python · JavaScript · C · Java · SQL"],
  ["Frontend", "React · HTML · CSS3"],
  ["Backend", "REST APIs · Express.js · Node.js"],
  ["Database", "MongoDB · DBMS"],
  ["Tools + platforms", "Git · GitHub · Postman · VS Code · Claude · Linux/Unix"],
  ["Professional practice", "Problem solving · quick learning · team collaboration · responsible AI tool usage"],
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI systems", "Product platforms", "Mobile + backend"];
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return featuredProjects;
    if (activeFilter === "AI systems") return featuredProjects.filter((project) => ["BR JARVIS", "JobBoard Pro"].includes(project.title));
    if (activeFilter === "Product platforms") return featuredProjects.filter((project) => ["NEXORA", "JobBoard Pro"].includes(project.title));
    return featuredProjects.filter((project) => project.title === "Farmaa");
  }, [activeFilter]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <aside className="identity-rail">
        <button className="monogram-button" onClick={() => scrollTo("top")} aria-label="Back to top">
          <img src={monogram} alt="BRP monogram" />
        </button>
        <div className="rail-line" />
        <div className="rail-copy">BHARATH RAJ P · SOFTWARE ENGINEER</div>
        <div className="rail-bottom">
          <span className="status-dot" />
          Open to thoughtful engineering work
        </div>
      </aside>

      <div className="content-shell">
        <header className="topbar">
          <button className="mobile-mark" onClick={() => scrollTo("top")} aria-label="Back to top">
            <img src={monogram} alt="BRP monogram" />
          </button>
          <div className="topbar-identity"><strong>BHARATH RAJ P</strong><span>Software Engineer</span></div><div className="topbar-note">FIELD NOTES / 2026 EDITION</div>
          <nav className={mobileOpen ? "topnav open" : "topnav"} aria-label="Primary navigation">
            <button onClick={() => scrollTo("work")}>Work</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Stack</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        <main id="top">
          <section className="hero-section">
            <div className="hero-copy">
              <div className="eyebrow"><span>00</span> / POSITIONING</div>
              <p className="hero-kicker">Software engineer · Backend + AI systems</p>
              <h1>I build useful software, then make the reasoning visible.</h1>
              <p className="hero-lede">I’m Bharath Raj P — a software engineering student and development intern working across backend systems, full-stack products, AI runtimes, and secure automation.</p>
              <div className="hero-actions">
                <button className="button-primary" onClick={() => scrollTo("work")}>Inspect selected work <ArrowUpRight size={16} /></button>
                <a className="button-text" href={resumeUrl} download><Download size={15} /> Download résumé</a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={14} /> Tamil Nadu, India</span>
                <span><span className="status-dot" /> Available for internships + backend roles</span>
              </div>
            </div>
            <div className="hero-art-wrap">
              <img className="hero-art" src={heroArtwork} alt="Editorial field notes and technical system diagrams" />
              <div className="hero-caption"><span>FIG. 01</span> Systems, interfaces, and proof.</div>
            </div>
          </section>

          <section className="statement-strip">
            <p>My strongest work sits where <strong>product utility</strong>, <strong>backend discipline</strong>, and <strong>AI systems thinking</strong> overlap.</p>
            <span>→</span>
          </section>

          <section id="work" className="section-block work-section">
            <div className="section-marker"><span>01</span><div><p>SELECTED BUILDS</p><p className="marker-note">Projects with a point of view</p></div></div>
            <div className="section-content">
              <div className="section-intro-row">
                <div><h2>Work that shows how I think.</h2><p>These are the projects worth opening in a new tab: ambitious enough to expose trade-offs, concrete enough to inspect in code.</p></div>
                <div className="filter-group" aria-label="Filter projects">
                  {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
                </div>
              </div>
              <div className="project-list">
                {filteredProjects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-number">{project.number}</div>
                    <div className="project-main">
                      <div className="project-heading"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><Github size={18} /></a></div>
                      <p className="project-summary">{project.summary}</p>
                      <div className="project-proof"><Check size={14} /> {project.proof}</div>
                      <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>
                    <div className={project.texture ? "project-visual texture" : "project-visual"} style={project.texture ? { backgroundImage: `url(${projectTexture})` } : undefined}>
                      <span className="visual-label">EVIDENCE / {project.number}</span>
                      <div className="evidence-lines">{project.evidence.map((item) => <span key={item}>{item}</span>)}</div>
                      <ArrowUpRight size={24} />
                    </div>
                  </article>
                ))}
              </div>
              <button className="archive-toggle" onClick={() => setShowArchive(!showArchive)}>{showArchive ? "Hide full archive" : "Open full GitHub archive"}<ChevronDown className={showArchive ? "rotated" : ""} size={17} /></button>
              {showArchive && <div className="archive-grid">{projectArchive.map(([repo, title, stack]) => <a className="archive-row" href={`https://github.com/bharathrajp14/${repo}`} target="_blank" rel="noreferrer" key={repo}><span>{title}</span><small>{stack}</small><ExternalLink size={14} /></a>)}</div>}
            </div>
          </section>

          <section id="about" className="section-block about-section">
            <div className="section-marker"><span>02</span><div><p>ABOUT THE BUILDER</p><p className="marker-note">Context behind the code</p><span className="section-stamp">BRP / OBSERVE → BUILD</span></div></div>
            <div className="section-content about-grid">
              <div><h2>A backend-minded builder with a systems habit.</h2><p>I’m currently a Software Development Intern at Kevell Corp, building React modules and integrating REST APIs across authentication, vendor management, notifications, payments, and wallet workflows.</p><p>Before that, I worked through web security fundamentals in a controlled lab environment. That combination—shipping product surfaces while thinking about failure modes—shapes the way I approach every build.</p><a className="inline-link" href="mailto:bharathraj14120@gmail.com">Start a conversation <ArrowUpRight size={15} /></a></div>
              <div className="timeline"><div className="timeline-item"><span>NOW</span><div><strong>Software Development Intern</strong><p>Kevell Corp · React, REST APIs, collaborative delivery</p></div></div><div className="timeline-item"><span>2024</span><div><strong>Cybersecurity Intern</strong><p>NullClass · web vulnerabilities + introductory pentesting</p></div></div><div className="timeline-item"><span>EDU</span><div><strong>B.E. Computer Science & Engineering</strong><p>PSNA College of Engineering and Technology · CGPA 7.0/10</p></div></div></div>
            </div>
          </section>

          <section id="skills" className="section-block skills-section">
            <div className="section-marker"><span>03</span><div><p>TOOLS + PRACTICE</p><p className="marker-note">The working vocabulary</p><span className="section-stamp">INDEX / 06 CAPABILITIES</span></div></div>
            <div className="section-content"><div className="skills-intro"><h2>A stack chosen for control.</h2><p>I reach for tools that make behavior explicit: typed boundaries, inspectable state, resilient APIs, and interfaces that stay close to the user’s real workflow.</p></div><div className="skills-grid">{skillGroups.map(([name, skills]) => <div className="skill-item" key={name}><span>{name}</span><p>{skills}</p></div>)}</div></div>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-index">04 / NEXT NOTE<br /><span className="contact-stamp">OPEN / COLLABORATE</span></div>
            <div><h2>Have a hard problem worth mapping?</h2><p>Tell me what you’re building, where the uncertainty lives, and what a useful first milestone looks like.</p><a className="button-primary" href="mailto:bharathraj14120@gmail.com">Email Bharath <Mail size={16} /></a></div>
            <div className="contact-links"><a href="mailto:bharathraj14120@gmail.com"><Mail size={15} /> bharathraj14120@gmail.com</a><a href="https://www.linkedin.com/in/bharathrajp14" target="_blank" rel="noreferrer"><Linkedin size={15} /> linkedin.com/in/bharathrajp14</a><a href="https://github.com/bharathrajp14" target="_blank" rel="noreferrer"><Github size={15} /> github.com/bharathrajp14</a></div>
          </section>
        </main>

        <footer className="footer"><span>© 2026 Bharath Raj P</span><span>Built with care, documented in public.</span><button onClick={() => scrollTo("top")}>Back to top ↑</button></footer>
      </div>
    </div>
  );
}
