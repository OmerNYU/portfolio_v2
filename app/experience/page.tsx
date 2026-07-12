import { Footer, Header, PageIntro } from "../components";

const roles = [
  {
    dates: "Aug. 2025 to Present",
    title: "Robotics and Machine Learning Research Assistant",
    company: "iCAS Lab, New York University Abu Dhabi",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Designed a resource-aware semantic-memory architecture for Unitree Go2 navigation, keeping continuous perception, memory updates, and safety validation deterministic while selectively invoking language models for higher-level reasoning.",
      "Built a structured memory and query engine that aggregates object-location observations and resolves natural-language targets, including ambiguous matches, unavailable objects, and unsafe destinations.",
      "Implemented a standalone ROS 2 Foxy pipeline that validates destinations against live occupancy grids and publishes map-frame PoseStamped goals for Nav2 integration.",
      "Defined schema-validated interfaces and Dockerized evaluation tooling so perception, memory, query interpretation, and navigation could be tested and integrated independently.",
    ],
    tech: "ROS 2 · Python · Computer Vision · Navigation · Docker · LLM systems",
  },
  {
    dates: "May 2026 to Present",
    title: "Adopt AI Fellow",
    company: "AdoptAI, The Lombard Hill Group",
    location: "Remote",
    bullets: [
      "Built a reusable Excel framework for AI-adoption and economic assessment, automating three-year ROI, NPV, payback, break-even, and benefit-cost calculations across 12 role-based worksheets.",
      "Collaborating on the redesign and development of AdoptAI's company website, translating business requirements into a clearer product narrative and modern user experience.",
    ],
    tech: "AI strategy · Financial modelling · Product design · Web development",
  },
  {
    dates: "Feb. 2025 to Jun. 2025",
    title: "Software Engineer Intern",
    company: "Enrichly, Techstars '23",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Designed responsive chatbot interfaces in Next.js, turning user feedback into iterative UI improvements, reusable components, and clearer conversational flows.",
      "Fine-tuned a Hugging Face language model for the company's conversational use case and integrated it into the chatbot product workflow.",
      "Evaluated responses for hallucinations, unsafe behaviour, and use-case alignment through structured prompt testing and failure analysis, informing revisions to training data, prompts, and safeguards.",
    ],
    tech: "Next.js · TypeScript · Hugging Face · LLM evaluation · Frontend engineering",
  },
  {
    dates: "Jul. 2023 to Aug. 2023",
    title: "Data Analyst",
    company: "CardPay, NIC LUMS",
    location: "Lahore, Pakistan",
    bullets: [
      "Analysed customer and market data using Python, SQL, and Tableau to identify and prioritise high-potential SME prospects.",
      "The analysis contributed to the acquisition of six new clients during the two-month internship.",
    ],
    tech: "Python · SQL · Tableau · Market analysis · Client acquisition",
  },
];

const certifications = [
  {
    slug: "coursera-ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford Online",
    status: "Professional Certificate",
  },
  {
    slug: "coursera-supervised-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Stanford Online",
    status: "Course Certificate",
  },
  {
    slug: "coursera-advanced-learning-algorithms",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI / Stanford Online",
    status: "Course Certificate",
  },
  {
    slug: "coursera-unsupervised-learning",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI / Stanford Online",
    status: "Course Certificate",
  },
  {
    slug: "google-data-analytics",
    title: "Google Data Analytics",
    issuer: "Google",
    status: "Professional Certificate",
  },
  {
    slug: "aws-ai-practitioner-learning-plan",
    title: "AWS Artificial Intelligence Practitioner Learning Plan",
    issuer: "Amazon Web Services",
    status: "Learning Plan",
  },
  {
    slug: "aws-ai-practitioner-udacity",
    title: "AWS AI Practitioner",
    issuer: "AWS / Udacity",
    status: "Course Certificate",
  },
  {
    slug: "aws-developing-generative-ai-solutions",
    title: "Developing Generative AI Solutions",
    issuer: "Amazon Web Services",
    status: "Course Certificate",
  },
  {
    slug: "aws-developing-ml-solutions",
    title: "Developing Machine Learning Solutions",
    issuer: "Amazon Web Services",
    status: "Course Certificate",
  },
  {
    slug: "aws-essentials-of-prompt-engineering",
    title: "Essentials of Prompt Engineering",
    issuer: "Amazon Web Services",
    status: "Course Certificate",
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
                <div className="role-tech">{role.tech}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cert-section">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <a
              className="cert-card"
              key={cert.slug}
              href={`/certs/${cert.slug}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cert-thumb">
                <img
                  src={`/certs/thumbs/${cert.slug}.png`}
                  alt={`${cert.title} certificate preview`}
                  width={158}
                  height={122}
                />
              </div>
              <div>
                <span>{cert.status}</span>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <b>View credential ↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
