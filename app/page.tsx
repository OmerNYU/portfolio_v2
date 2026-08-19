import Link from "next/link";
import { Footer, Header } from "./components";
import { ProjectVisual } from "./components/project-visuals/ProjectVisual";
import {
  featuredHomeProjects,
  matchlensProject,
  techLine,
  type ProjectCard,
} from "./projects-data";

const proofMetrics = [
  ["90%+", "robot nav", "success"],
  ["2,800+", "listings", "processed"],
  ["286", "tests", "in FailSpec"],
  ["500+", "subscribers", "The Epoch"],
];

const capabilityGroups = [
  [
    "Machine learning",
    "PyTorch · scikit-learn · Hugging Face · PEFT/QLoRA · RAG · pandas",
  ],
  [
    "Software systems",
    "FastAPI · Node.js · Express.js · Fastify · React · Next.js · SQLAlchemy · PostgreSQL",
  ],
  [
    "Cloud, robotics & tooling",
    "AWS · Docker · Linux · ROS 2 · GitHub Actions · Playwright · Git",
  ],
  ["Languages", "Python · TypeScript/JavaScript · C++ · SQL"],
];

function ProjectMeta({ project }: { project: ProjectCard }) {
  return (
    <>
      {project.role ? (
        <dl className="project-role">
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </dl>
      ) : null}
      {project.evidence ? (
        <p className="project-evidence">{project.evidence}</p>
      ) : null}
    </>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero hero-text-only" id="top">
        <div className="hero-copy">
          <h1>
            SOFTWARE &amp; <span className="blue-word">ML</span>
            <br />
            SYSTEMS<span className="red-dot">.</span>
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
            <span>
              CS @ NYU Abu Dhabi · Robotics &amp; ML Research @ iCAS Lab · AWS
              AI &amp; ML Scholar
            </span>
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

      <section className="proof-strip" aria-label="Selected results">
        {proofMetrics.map(([value, lineOne, lineTwo]) => (
          <div className="proof-item" key={value}>
            <strong>{value}</strong>
            <span>
              {lineOne}
              <br />
              {lineTwo}
            </span>
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
                <ProjectMeta project={project} />
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

      <section className="section experience-preview">
        <div className="plain-heading">
          <h2>Experience.</h2>
          <Link href="/experience">View all experience ↗</Link>
        </div>
        <div className="experience-preview-grid">
          <article>
            <span>iCAS Lab</span>
            <h3>Robotics &amp; ML Research Assistant</h3>
            <small>NYU Abu Dhabi · Aug. 2025–Present</small>
            <p>
              Semantic navigation and VLA systems for the Unitree Go2, with
              90%+ physical navigation success across approximately 25
              spoken-command trials.
            </p>
          </article>
          <article>
            <span>Enrichly · Techstars &apos;23</span>
            <h3>Software Engineer Intern</h3>
            <small>Feb. 2025–Jun. 2025</small>
            <p>
              Owned core frontend flows for an early production AI chatbot and
              built a structured 15-scenario LLM evaluation harness.
            </p>
          </article>
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

      <section className="section home-epoch">
        <Link href="/writing">
          <span>THE EPOCH</span>
          <h3>Articles about ML, systems, and what finally clicked.</h3>
          <b>Read ↗</b>
        </Link>
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

      <Footer />
    </main>
  );
}
