import { Footer, Header, PageIntro } from "../components";
import { ProjectVisual } from "../components/project-visuals/ProjectVisual";
import {
  completedProjects,
  matchlensProject,
  techLine,
} from "../projects-data";

export default function Projects() {
  return (
    <main>
      <Header />
      <PageIntro
        kicker="PROJECTS"
        title="Projects"
        copy="Completed projects and current work."
      />
      <section className="project-catalog">
        <h2>Completed projects</h2>
        <div className="catalog-grid">
          {completedProjects.map((project) => (
            <article className="catalog-card" key={project.name}>
              <ProjectVisual project={project.visualKey} variant="card" />
              <div className="catalog-card-body">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="tech-spec">
                  <b>Built with</b>
                  <span>{techLine(project.technologies)}</span>
                </div>
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
      <section className="active-catalog">
        <div>
          <p>IN PROGRESS</p>
          <h2>The workshop</h2>
        </div>
        <article className="workshop-card">
          <ProjectVisual project={matchlensProject.visualKey} variant="card" />
          <div className="workshop-card-body">
            <span>ACTIVE</span>
            <h3>{matchlensProject.name}</h3>
            <p>{matchlensProject.desc}</p>
            <div className="tech-spec">
              <b>Built with</b>
              <span>{techLine(matchlensProject.technologies)}</span>
            </div>
            <a
              className="case-link"
              href={matchlensProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${matchlensProject.name} source code on GitHub`}
            >
              View code ↗
            </a>
          </div>
        </article>
        <article className="future-card">
          <b>+</b>
          <h3>Whatever catches my attention next.</h3>
        </article>
      </section>
      <Footer />
    </main>
  );
}
