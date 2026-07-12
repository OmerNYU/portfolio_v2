import Link from "next/link";
import { Footer, Header } from "./components";
import { ProjectVisual } from "./components/project-visuals/ProjectVisual";
import {
  featuredHomeProjects,
  matchlensProject,
  techLine,
} from "./projects-data";

const capabilityGroups = [
  ["Machine learning", "PyTorch · scikit-learn · TensorFlow · pandas · NumPy"],
  ["Software systems & robotics", "FastAPI · React · TypeScript · SQLAlchemy · Docker · ROS 2"],
  ["Cloud & tooling", "AWS · GitHub Actions · PostgreSQL · Linux · Git"],
  ["Languages", "Python · C++ · TypeScript · JavaScript · C"],
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero hero-text-only" id="top">
        <div className="hero-copy">
          <h1>
            Aspiring <span className="blue-word">AI/ML</span>
            <br />
            engineer<span className="red-dot">.</span>
          </h1>
          <p className="tagline">
            Building one <mark>epoch</mark> at a time.
          </p>
          <p className="affiliation-line">
            <img
              className="nyu-logo"
              src="/nyu.png"
              alt="New York University"
              width={84}
              height={84}
            />
            <span>Computer Science at New York University Abu Dhabi</span>
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/projects">
              Explore my work <span>↗</span>
            </Link>
            <Link className="text-action" href="/writing">
              Read The Epoch <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="capability-strip">
        <div className="strip-title">WHAT I WORK WITH</div>
        {capabilityGroups.map(([title, items]) => (
          <div className="capability-item" key={title}>
            <b>{title}</b>
            <span>{items}</span>
          </div>
        ))}
      </section>

      <section className="section home-builds">
        <div className="plain-heading">
          <h2>Things I&apos;ve built.</h2>
          <Link href="/projects">See every project ↗</Link>
        </div>
        <div className="home-project-grid">
          {featuredHomeProjects.map((project) => (
            <article className="home-project" key={project.name}>
              <ProjectVisual project={project.visualKey} variant="card" />
              <div className="home-project-body">
                <span>{project.label}</span>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <small>{techLine(project.technologies)}</small>
                <a
                  className="case-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  View code ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section building-now">
        <div>
          <h2 className="workshop-title">The Workshop</h2>
        </div>
        <article className="workshop-card">
          <ProjectVisual project={matchlensProject.visualKey} variant="card" />
          <div className="workshop-card-body">
            <span>{matchlensProject.label}</span>
            <h3>{matchlensProject.name}</h3>
            <p>{matchlensProject.desc}</p>
            <div className="stack-row">
              {matchlensProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="workshop-actions">
              <Link href="/projects">Follow the build ↗</Link>
              <a
                href={matchlensProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${matchlensProject.name} source code on GitHub`}
              >
                View code ↗
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="section home-links">
        <Link href="/experience">
          <span>EXPERIENCE</span>
          <h3>Research, software, data &amp; AI work.</h3>
          <b>Explore ↗</b>
        </Link>
        <Link href="/writing">
          <span>THE EPOCH</span>
          <h3>Articles about ML, systems, and what finally clicked.</h3>
          <b>Read ↗</b>
        </Link>
        <Link href="/notes">
          <span>READING &amp; NOTES</span>
          <h3>Books, concepts, and learning trails.</h3>
          <b>Browse ↗</b>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
