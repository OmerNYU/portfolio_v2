import { Footer, Header, PageIntro } from "../components";

export default function Writing() {
  return (
    <main>
      <Header />
      <PageIntro
        kicker="THE EPOCH"
        title="Articles and newsletter"
        copy="Technical writing on machine learning, systems, and software."
      />
      <section className="publication-hero">
        <div className="epoch-big">E</div>
        <div>
          <p>ML · SYSTEMS · SOFTWARE</p>
          <h2>The Epoch</h2>
          <p>Articles and notes on machine learning, systems, and software.</p>
          <div className="publication-actions">
            <a
              href="https://epoch.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit publication ↗
            </a>
            <a
              href="https://www.linkedin.com/newsletters/7477370648969822208/?displayConfirmation=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to Newsletter ↗
            </a>
          </div>
        </div>
      </section>
      <section className="article-library">
        <h2>Articles</h2>
        <article>
          <span>DEEP LEARNING</span>
          <h3>Backpropagation from First Principles: What I Finally Understood</h3>
          <p>A student-friendly walkthrough of the ideas beneath the notation.</p>
          <a
            href="https://epoch.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on Hashnode ↗
          </a>
        </article>
        <article className="coming-article">
          <span>IN THE WORKS</span>
          <h3>
            Why Machine Learning Models Should Be Allowed to Say “I Don&apos;t Know”
          </h3>
          <p>
            Confidence, calibration, abstention, and the accuracy-coverage trade-off.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
