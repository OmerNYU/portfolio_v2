export type ProjectVisualKey =
  | "internshipmonitor"
  | "pitchmirror"
  | "repotriage"
  | "failspec"
  | "kaboom"
  | "matchlens"
  | "tinyshell";

export type ProjectCard = {
  name: string;
  label: string;
  desc: string;
  technologies: string[];
  visualKey: ProjectVisualKey;
  githubUrl: string;
  evidence?: string;
  role?: string;
};

export function techLine(technologies: string[]) {
  return technologies.join(" · ");
}

export const selectedProjects: ProjectCard[] = [
  {
    name: "Internship Monitor",
    label: "ML SYSTEMS · BACKEND · AUTOMATION",
    desc: "An internship-intelligence pipeline that discovers live roles, evaluates likely eligibility, adds optional local LLM intelligence, and safely queues explainable alerts.",
    technologies: [
      "Python",
      "AsyncIO",
      "SQLite",
      "Qwen",
      "Ollama",
      "RAG",
      "GitHub Actions",
    ],
    visualKey: "internshipmonitor",
    githubUrl: "https://github.com/OmerNYU/Internship-Monitor",
    evidence:
      "2,800+ listings · 15 sources · 70-case human review · 221+ automated tests",
  },
  {
    name: "RepoTriage",
    label: "ML system + developer tool",
    desc: "A confidence-aware GitHub issue intelligence system that predicts labels, retrieves similar issues, abstains when uncertain, and records maintainer feedback.",
    technologies: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
    ],
    visualKey: "repotriage",
    githubUrl: "https://github.com/OmerNYU/repotriage",
  },
  {
    name: "FailSpec",
    label: "DEVELOPER TOOLS · TESTING",
    desc: "A local-first developer tool that turns bug reports into evidence-backed Playwright regression tests through isolated execution and deterministic verification.",
    technologies: [
      "TypeScript",
      "React",
      "Express.js",
      "Playwright",
      "OpenAI Codex",
    ],
    visualKey: "failspec",
    githubUrl: "https://github.com/OmerNYU/FailSpec",
    evidence:
      "286 tests · isolated Git worktrees · controlled Playwright execution · deterministic verification",
    role: "Platform architecture & backend orchestration",
  },
  {
    name: "PitchMirror",
    label: "AWS · MULTIMODAL AI",
    desc: "A multimodal presentation coach that turns recorded pitches into structured feedback on voice, presence, and content.",
    technologies: [
      "Next.js",
      "Fastify",
      "FFmpeg",
      "AWS",
      "Amazon Bedrock",
      "Amazon Nova Pro",
    ],
    visualKey: "pitchmirror",
    githubUrl: "https://github.com/OmerNYU/PitchMirror",
    evidence:
      "Thousands of frames → 5 keyframes · Step Functions → ECS Fargate → Bedrock · idempotent execution",
    role: "Solo build",
  },
  {
    name: "Kaboom",
    label: "CPU ray-marching renderer",
    desc: "A dependency-free CPU ray-marching renderer that generates a procedurally animated fireball using signed distance fields, sphere tracing, and procedural noise.",
    technologies: [
      "C++",
      "OpenMP",
      "Ray Marching",
      "Signed Distance Fields",
      "Procedural Rendering",
    ],
    visualKey: "kaboom",
    githubUrl: "https://github.com/OmerNYU/Kaboom_Diffusion",
  },
  {
    name: "Tiny Shell",
    label: "Systems project built for fun",
    desc: "A Unix-style shell written in C to explore command parsing, process creation, program execution, and pipelines from the inside.",
    technologies: ["C", "Unix", "fork/exec", "Pipes", "Systems Programming"],
    visualKey: "tinyshell",
    githubUrl: "https://github.com/OmerNYU/Shell_C",
  },
];

const featuredHomeNames = [
  "Internship Monitor",
  "FailSpec",
  "PitchMirror",
] as const;

export const featuredHomeProjects: ProjectCard[] = featuredHomeNames.map(
  (name) => {
    const project = selectedProjects.find((item) => item.name === name);
    if (!project) {
      throw new Error(`Missing featured project: ${name}`);
    }
    return project;
  },
);

export const matchlensProject = {
  name: "MatchLens",
  label: "ACTIVE BUILD",
  desc: "A Premier League prediction system focused on leakage-safe features, chronological evaluation, strong baselines, and honest model diagnostics.",
  technologies: ["Python", "pandas", "scikit-learn", "matplotlib", "pytest"],
  visualKey: "matchlens" as const satisfies ProjectVisualKey,
  githubUrl: "https://github.com/OmerNYU/Match-Lens",
};
