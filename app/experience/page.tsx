import { Footer, Header, PageIntro, socialLinks } from "../components";

const roles = [
  {
    dates: "Aug. 2025 to Present",
    title: "Robotics and Machine Learning Research Assistant",
    company: "iCAS Lab, New York University Abu Dhabi",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Designed and implemented a modular semantic-navigation stack for the Unitree Go2, spanning semantic memory, natural-language target resolution, safety validation, and ROS 2/Nav2 goal publication.",
      "Built a multimodal VLA training pipeline supporting generative SFT, NF4 QLoRA, official external splits, checkpoint/resume, prediction export, and provenance-preserving handoff into the lab's evaluation stack.",
      "Integrated the navigation system into the lab’s ROS 2 stack; independent physical-robot testing achieved over 90% success across approximately 25 spoken-command trials, including chair and bag targets.",
    ],
    tech: "Python · ROS 2 · Nav2 · PyTorch · VLA · QLoRA · Docker",
  },
  {
    dates: "May 2026 to Jul. 2026",
    title: "AdoptAI Fellow",
    company: "AdoptAI, The Lombard Hill Group",
    location: "Remote",
    bullets: [
      "Built a reusable 12-sheet AI-adoption model using formulas and scripts to standardize three-year ROI, NPV, payback, break-even, and benefit-cost analyses for client engagements.",
    ],
  },
  {
    dates: "Feb. 2025 to Jun. 2025",
    title: "Software Engineer Intern",
    company: "Enrichly, Techstars '23",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Owned frontend engineering for an early production Next.js chatbot prototype in a three-intern team, building three core product flows and reusable UI foundations from scratch.",
      "Reworked the chatbot into a site-wide voice-enabled assistant; integrated a Hugging Face model and built a 15-scenario evaluation harness that surfaced DSM-5 grounding errors and hallucinations, informing safeguards and product revisions.",
    ],
    tech: "Next.js · TypeScript · Hugging Face · LLM Evaluation · Frontend Engineering",
  },
  {
    dates: "Jul. 2023 to Aug. 2023",
    title: "Data Analyst",
    company: "CardPay, NIC LUMS",
    location: "Lahore, Pakistan",
    bullets: [
      "Built a Python extraction, SQL-cleaning, and Tableau workflow to rank approximately 50 SMEs, replacing manual prospect research.",
      "Six of the top ten recommendations became clients during the internship.",
    ],
    tech: "Python · SQL · Tableau · Data Analysis",
  },
];

const credentials = [
  {
    slug: "aws-ai-practitioner-udacity",
    title: "AWS AI & ML Scholar",
    issuer: "AWS / Udacity",
    status: "Program",
  },
  {
    slug: "coursera-ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford Online",
    status: "Professional Certificate",
    href: "/certs/coursera-ml-specialization.pdf",
  },
  {
    slug: "google-data-analytics",
    title: "Google Data Analytics",
    issuer: "Google",
    status: "Professional Certificate",
    href: "/certs/google-data-analytics.pdf",
  },
];

export default function Experience() {
  return (
    <main>
      <Header />
      <PageIntro kicker="EXPERIENCE" title="Experience" copy="Research, software engineering, AI, and data roles." />
      <section className="experience-page">
        <div className="role-list detailed-roles">
          {roles.map((role) => (
            <article key={role.company}>
              <div className="role-side">
                <span>{role.dates}</span>
                <small>{role.location}</small>
              </div>
              <div>
                <p>{role.title}</p>
                <h2>{role.company}</h2>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {role.tech ? <div className="role-tech">{role.tech}</div> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cert-section compact-certs">
        <h2>Selected credentials</h2>
        <div className="cert-grid">
          {credentials.map((cert) => {
            const body = (
              <>
                <div className="cert-thumb">
                  <img
                    src={`/certs/thumbs/${cert.slug}.png`}
                    alt={`${cert.title} credential from ${cert.issuer}`}
                    width={160}
                    height={124}
                    loading="lazy"
                  />
                </div>
                <div>
                  <span>{cert.status}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  {cert.href ? <b>View credential ↗</b> : null}
                </div>
              </>
            );

            return cert.href ? (
              <a
                className="cert-card"
                key={cert.slug}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {body}
              </a>
            ) : (
              <div className="cert-card cert-card-static" key={cert.slug}>
                {body}
              </div>
            );
          })}
        </div>
        <a
          className="cert-linkedin"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          View all credentials on LinkedIn ↗
        </a>
      </section>
      <Footer />
    </main>
  );
}
