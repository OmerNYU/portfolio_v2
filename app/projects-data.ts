export type ProjectVisualKey =
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
};

export function techLine(technologies: string[]) {
  return technologies.join(" · ");
}

export const featuredHomeProjects: ProjectCard[] = [
  {
    name: "RepoTriage",
    label: "ML SYSTEMS · DEVELOPER TOOLS",
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
    label: "OPENAI BUILD WEEK · DEVELOPER TOOLS",
    desc: "Built by a three-person team during OpenAI Build Week 2026, FailSpec is a local-first developer tool that converts React and Next.js bug reports into evidence-backed Playwright regression tests.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Playwright",
      "OpenAI Codex",
    ],
    visualKey: "failspec",
    githubUrl: "https://github.com/OmerNYU/FailSpec",
  },
];

export const completedProjects: ProjectCard[] = [
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
    label: "AI developer tool · Build Week 2026",
    desc: "Built by a three-person team during OpenAI Build Week 2026, FailSpec is a local-first developer tool that converts React and Next.js bug reports into evidence-backed Playwright regression tests.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Playwright",
      "OpenAI Codex",
    ],
    visualKey: "failspec",
    githubUrl: "https://github.com/OmerNYU/FailSpec",
  },
  {
    name: "PitchMirror",
    label: "AI product on AWS",
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

export const matchlensProject = {
  name: "MatchLens",
  label: "ACTIVE BUILD",
  desc: "A Premier League prediction system focused on leakage-safe features, chronological evaluation, strong baselines, and honest model diagnostics.",
  technologies: ["Python", "pandas", "scikit-learn", "matplotlib", "pytest"],
  visualKey: "matchlens" as const satisfies ProjectVisualKey,
  githubUrl: "https://github.com/OmerNYU/Match-Lens",
};
