"use client";

import { useId } from "react";
import "./project-visuals.css";

export type ProjectVisualKey =
  | "pitchmirror"
  | "repotriage"
  | "failspec"
  | "kaboom"
  | "matchlens"
  | "tinyshell";

type ProjectVisualProps = {
  project: ProjectVisualKey;
  variant?: "card" | "detail";
  className?: string;
};

export function ProjectVisual({
  project,
  variant = "card",
  className = "",
}: ProjectVisualProps) {
  const idPrefix = useId().replace(/:/g, "");

  return (
    <div
      className={[
        "project-visual",
        `project-visual--${project}`,
        `project-visual--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-project={project}
    >
      {project === "pitchmirror" && (
        <PitchMirrorVisual idPrefix={idPrefix} />
      )}
      {project === "repotriage" && (
        <RepoTriageVisual idPrefix={idPrefix} />
      )}
      {project === "failspec" && <FailSpecVisual idPrefix={idPrefix} />}
      {project === "kaboom" && <KaboomVisual idPrefix={idPrefix} />}
      {project === "matchlens" && (
        <MatchLensVisual idPrefix={idPrefix} />
      )}
      {project === "tinyshell" && (
        <TinyShellVisual idPrefix={idPrefix} />
      )}
    </div>
  );
}

function PitchMirrorVisual({ idPrefix }: { idPrefix: string }) {
  const bg = `${idPrefix}-pitch-bg`;
  const glow = `${idPrefix}-pitch-glow`;

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-labelledby={`${idPrefix}-pitch-title ${idPrefix}-pitch-desc`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${idPrefix}-pitch-title`}>
        PitchMirror multimodal presentation-analysis pipeline
      </title>
      <desc id={`${idPrefix}-pitch-desc`}>
        A presentation video is converted into keyframes and transcript data,
        processed through an asynchronous AWS pipeline, and returned as
        structured feedback across voice, presence, and content.
      </desc>

      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="58%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#18112b" />
        </linearGradient>
        <radialGradient id={glow}>
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="520" rx="34" fill={`url(#${bg})`} />
      <circle cx="710" cy="82" r="210" fill={`url(#${glow})`} />
      <GridLines opacity={0.13} />

      <HeaderLabel
        x={46}
        y={48}
        eyebrow="MULTIMODAL COACHING"
        title="PitchMirror"
        accent="#a78bfa"
      />

      {/* Video / capture panel */}
      <g transform="translate(48 118)">
        <rect width="300" height="250" rx="22" fill="#0b1020" stroke="#2b3652" />
        <rect x="18" y="18" width="264" height="150" rx="14" fill="#161d30" />

        <circle cx="150" cy="69" r="24" fill="#8b5cf6" opacity="0.85" />
        <path
          d="M102 144c8-36 31-55 48-55s40 19 48 55"
          fill="#6d5ed4"
          opacity="0.7"
        />
        <path d="M36 139h228" stroke="#27334e" strokeWidth="2" />
        <rect x="31" y="185" width="56" height="38" rx="8" fill="#222b42" />
        <rect x="95" y="185" width="56" height="38" rx="8" fill="#2c2448" />
        <rect x="159" y="185" width="56" height="38" rx="8" fill="#222b42" />
        <rect x="223" y="185" width="46" height="38" rx="8" fill="#222b42" />
        <path
          d="M42 207l8-11 8 7 9-13 9 17"
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M105 204c12-15 24 14 36-3"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text x="18" y="242" className="pv-microcopy">
          video • keyframes • transcript
        </text>
      </g>

      {/* Flow */}
      <g className="pv-flow">
        <path
          d="M374 242C424 242 417 172 466 172"
          fill="none"
          stroke="#7c8aaa"
          strokeWidth="3"
          strokeDasharray="7 9"
        />
        <path
          d="M374 270C424 270 417 326 466 326"
          fill="none"
          stroke="#7c8aaa"
          strokeWidth="3"
          strokeDasharray="7 9"
        />
        <circle cx="405" cy="222" r="5" fill="#c4b5fd" className="pv-pulse" />
      </g>

      {/* AWS orchestration nodes */}
      <g transform="translate(466 122)">
        <PipelineNode x={0} y={0} label="S3" sublabel="media" accent="#f59e0b" />
        <PipelineNode
          x={0}
          y={78}
          label="STEP"
          sublabel="orchestrate"
          accent="#f59e0b"
        />
        <PipelineNode
          x={0}
          y={156}
          label="ECS"
          sublabel="process"
          accent="#f59e0b"
        />
        <PipelineNode
          x={0}
          y={234}
          label="BEDROCK"
          sublabel="analyze"
          accent="#a78bfa"
        />
      </g>

      {/* Report panel */}
      <g transform="translate(638 114)">
        <rect width="214" height="296" rx="22" fill="#10172a" stroke="#35405c" />
        <text x="20" y="34" className="pv-label">
          COACHING REPORT
        </text>
        <ScoreRow y={68} label="Voice" score="84" width={126} accent="#a78bfa" />
        <ScoreRow
          y={125}
          label="Presence"
          score="76"
          width={111}
          accent="#60a5fa"
        />
        <ScoreRow
          y={182}
          label="Content"
          score="91"
          width={144}
          accent="#34d399"
        />

        <rect x="20" y="235" width="174" height="38" rx="9" fill="#1a2236" />
        <circle cx="38" cy="254" r="6" fill="#34d399" />
        <text x="52" y="258" className="pv-small">
          schema validated
        </text>
      </g>

      <g className="pv-detail">
        <StatusChip x={48} y={410} label="IDEMPOTENT JOBS" />
        <StatusChip x={224} y={410} label="AUTOMATED REPAIR" />
        <StatusChip x={420} y={410} label="DETERMINISTIC FALLBACKS" />
        <StatusChip x={660} y={410} label="ASYNC AWS PIPELINE" />
      </g>
    </svg>
  );
}

function RepoTriageVisual({ idPrefix }: { idPrefix: string }) {
  const bg = `${idPrefix}-repo-bg`;
  const glow = `${idPrefix}-repo-glow`;

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-labelledby={`${idPrefix}-repo-title ${idPrefix}-repo-desc`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${idPrefix}-repo-title`}>
        RepoTriage confidence-aware issue intelligence
      </title>
      <desc id={`${idPrefix}-repo-desc`}>
        A GitHub issue is classified into likely labels, sent to human review
        when confidence is low, matched with similar historical issues, and
        persisted with maintainer feedback.
      </desc>

      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#091519" />
          <stop offset="58%" stopColor="#0d1b20" />
          <stop offset="100%" stopColor="#10242a" />
        </linearGradient>
        <radialGradient id={glow}>
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="520" rx="34" fill={`url(#${bg})`} />
      <circle cx="770" cy="110" r="230" fill={`url(#${glow})`} />
      <GridLines opacity={0.12} />

      <HeaderLabel
        x={46}
        y={48}
        eyebrow="CONFIDENCE-AWARE ML SYSTEM"
        title="RepoTriage"
        accent="#2dd4bf"
      />

      {/* Incoming issue */}
      <g transform="translate(48 118)">
        <rect width="280" height="224" rx="20" fill="#0b171b" stroke="#274149" />
        <circle cx="28" cy="30" r="9" fill="#2dd4bf" opacity="0.9" />
        <text x="47" y="35" className="pv-label">
          PANDAS ISSUE #59214
        </text>
        <rect x="20" y="58" width="226" height="10" rx="5" fill="#294049" />
        <rect x="20" y="79" width="187" height="10" rx="5" fill="#21363d" />
        <rect x="20" y="100" width="235" height="10" rx="5" fill="#21363d" />
        <rect x="20" y="121" width="162" height="10" rx="5" fill="#21363d" />
        <rect x="20" y="158" width="82" height="28" rx="14" fill="#173239" />
        <text x="37" y="177" className="pv-small" fill="#7dd3fc">
          bug report
        </text>
      </g>

      <path
        d="M350 230H410"
        stroke="#5e7880"
        strokeWidth="3"
        strokeDasharray="8 8"
      />
      <circle cx="382" cy="230" r="5" fill="#5eead4" className="pv-pulse" />

      {/* Confidence router */}
      <g transform="translate(410 142)">
        <rect width="194" height="176" rx="22" fill="#0d1d22" stroke="#2c4b53" />
        <text x="18" y="30" className="pv-label">
          LABEL SCORES
        </text>
        <ConfidenceRow y={54} label="Bug" value={0.92} accent="#2dd4bf" />
        <ConfidenceRow y={91} label="IO" value={0.81} accent="#38bdf8" />
        <ConfidenceRow y={128} label="Docs" value={0.31} accent="#f59e0b" />
      </g>

      {/* Decision gate */}
      <g transform="translate(622 116)">
        <rect width="230" height="104" rx="18" fill="#10252a" stroke="#32606a" />
        <text x="18" y="29" className="pv-label">
          CONFIDENCE GATE
        </text>
        <path
          d="M22 67h68l18-28 25 44 20-27h55"
          fill="none"
          stroke="#5eead4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="18" y="92" className="pv-small">
          predict or abstain
        </text>
      </g>

      {/* Retrieval / feedback */}
      <g transform="translate(622 238)">
        <rect width="230" height="172" rx="18" fill="#0d1d22" stroke="#294b52" />
        <text x="18" y="28" className="pv-label">
          SIMILAR ISSUES
        </text>
        <SimilarityRow y={51} id="#47589" score="0.88" />
        <SimilarityRow y={88} id="#44102" score="0.83" />
        <SimilarityRow y={125} id="#39876" score="0.76" />
      </g>

      <g className="pv-detail">
        <StatusChip x={48} y={386} label="TEMPORAL SPLITS" />
        <StatusChip x={206} y={386} label="CALIBRATED THRESHOLDS" />
        <StatusChip x={424} y={386} label="TF-IDF RETRIEVAL" />
        <StatusChip x={611} y={432} label="MAINTAINER FEEDBACK → POSTGRES" />
      </g>
    </svg>
  );
}

function FailSpecVisual({ idPrefix }: { idPrefix: string }) {
  const bg = `${idPrefix}-fail-bg`;
  const glow = `${idPrefix}-fail-glow`;

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-labelledby={`${idPrefix}-fail-title ${idPrefix}-fail-desc`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${idPrefix}-fail-title`}>
        FailSpec bug reproduction and regression testing pipeline
      </title>
      <desc id={`${idPrefix}-fail-desc`}>
        A bug report enters an isolated Git worktree investigation, Codex forms
        a reproduction hypothesis and generates a Playwright test, then
        deterministic verification classifies the sanitized evidence.
      </desc>

      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12090c" />
          <stop offset="55%" stopColor="#1a0f12" />
          <stop offset="100%" stopColor="#221218" />
        </linearGradient>
        <radialGradient id={glow}>
          <stop offset="0%" stopColor="#fb7185" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="520" rx="34" fill={`url(#${bg})`} />
      <circle cx="760" cy="90" r="220" fill={`url(#${glow})`} />
      <GridLines opacity={0.11} />

      <HeaderLabel
        x={46}
        y={48}
        eyebrow="LOCAL-FIRST BUG REPRODUCTION"
        title="FailSpec"
        accent="#fb7185"
      />

      {/* Bug report panel */}
      <g transform="translate(48 118)">
        <rect width="250" height="236" rx="20" fill="#1a1014" stroke="#4a2a33" />
        <circle cx="22" cy="22" r="5" fill="#ef4444" />
        <circle cx="40" cy="22" r="5" fill="#f59e0b" />
        <circle cx="58" cy="22" r="5" fill="#22c55e" />
        <text x="78" y="27" className="pv-label">
          BUG REPORT
        </text>
        <line x1="0" y1="42" x2="250" y2="42" stroke="#3a2430" strokeWidth="1" />
        <rect x="18" y="58" width="168" height="10" rx="5" fill="#4a2f38" />
        <rect x="18" y="80" width="204" height="10" rx="5" fill="#342028" />
        <rect x="18" y="102" width="142" height="10" rx="5" fill="#342028" />
        <rect x="18" y="124" width="186" height="10" rx="5" fill="#342028" />
        <rect x="18" y="158" width="88" height="26" rx="13" fill="#3a1f28" />
        <text x="32" y="176" className="pv-small" fill="#fda4af">
          React / Next
        </text>
        <text x="18" y="214" className="pv-microcopy">
          structured report + repo path
        </text>
      </g>

      <path
        d="M318 236H368"
        stroke="#6b4a55"
        strokeWidth="3"
        strokeDasharray="8 8"
      />
      <circle cx="343" cy="236" r="5" fill="#fb7185" className="pv-pulse" />

      {/* Hypothesis + worktree */}
      <g transform="translate(368 118)">
        <rect width="228" height="110" rx="18" fill="#1c1116" stroke="#4a2f38" />
        <text x="16" y="28" className="pv-label">
          HYPOTHESIS
        </text>
        <text x="16" y="54" className="pv-small">
          Codex inspects worktree
        </text>
        <text x="16" y="76" className="pv-small">
          forms reproduction plan
        </text>
        <text x="16" y="96" className="pv-microcopy">
          isolated git worktree
        </text>

        <rect
          y="126"
          width="228"
          height="110"
          rx="18"
          fill="#1c1116"
          stroke="#4a2f38"
        />
        <text x="16" y="154" className="pv-label">
          PLAYWRIGHT TEST
        </text>
        <text x="16" y="180" className="pv-small" fill="#fda4af">
          test(&apos;repro checkout crash&apos;
        </text>
        <text x="16" y="202" className="pv-small" fill="#fda4af">
          , async () =&gt; {"{"}…{"}"})
        </text>
        <text x="16" y="224" className="pv-microcopy">
          constrained generated spec
        </text>
      </g>

      <path
        d="M616 236H666"
        stroke="#6b4a55"
        strokeWidth="3"
        strokeDasharray="8 8"
      />
      <circle cx="641" cy="236" r="5" fill="#34d399" className="pv-pulse" />

      {/* Verification result */}
      <g transform="translate(666 118)">
        <rect width="186" height="236" rx="20" fill="#141a16" stroke="#2f4a3a" />
        <text x="16" y="30" className="pv-label">
          VERDICT
        </text>
        <rect x="16" y="48" width="154" height="42" rx="12" fill="#163024" />
        <circle cx="36" cy="69" r="7" fill="#34d399" />
        <text x="52" y="74" className="pv-small" fill="#6ee7b7">
          Verified
        </text>
        <text x="16" y="118" className="pv-microcopy">
          partial evidence
        </text>
        <text x="16" y="140" className="pv-microcopy">
          not reproduced
        </text>
        <text x="16" y="162" className="pv-microcopy">
          execution error
        </text>
        <rect x="16" y="186" width="154" height="32" rx="10" fill="#1a2420" />
        <text x="28" y="207" className="pv-small">
          deterministic check
        </text>
      </g>

      <g className="pv-detail">
        <StatusChip x={48} y={392} label="CODEX ANALYSIS" />
        <StatusChip x={214} y={392} label="ISOLATED WORKTREE" />
        <StatusChip x={404} y={392} label="SANITIZED EVIDENCE" />
        <StatusChip x={602} y={432} label="286 PASSING TESTS" />
      </g>
    </svg>
  );
}

function KaboomVisual({ idPrefix }: { idPrefix: string }) {
  const bg = `${idPrefix}-kaboom-bg`;
  const fire = `${idPrefix}-kaboom-fire`;
  const core = `${idPrefix}-kaboom-core`;
  const noise = `${idPrefix}-kaboom-noise`;
  const mask = `${idPrefix}-kaboom-mask`;

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-labelledby={`${idPrefix}-kaboom-title ${idPrefix}-kaboom-desc`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${idPrefix}-kaboom-title`}>
        Kaboom procedural CPU ray-marched fireball
      </title>
      <desc id={`${idPrefix}-kaboom-desc`}>
        A code-generated fireball rendered with signed distance fields,
        sphere tracing, procedural noise displacement, finite-difference
        normals, lighting, and OpenMP-parallelized CPU frame generation.
      </desc>

      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#090b10" />
          <stop offset="62%" stopColor="#11151e" />
          <stop offset="100%" stopColor="#1b1010" />
        </linearGradient>
        <radialGradient id={fire}>
          <stop offset="0%" stopColor="#fff7c2" />
          <stop offset="20%" stopColor="#ffd166" />
          <stop offset="48%" stopColor="#ff7a18" />
          <stop offset="76%" stopColor="#c92a2a" />
          <stop offset="100%" stopColor="#3a1014" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={core}>
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
          <stop offset="42%" stopColor="#ffd166" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
        </radialGradient>
        <filter id={noise} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.031"
            numOctaves="4"
            seed="7"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="48"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
        <mask id={mask}>
          <rect width="900" height="520" fill="black" />
          <circle
            cx="476"
            cy="275"
            r="154"
            fill="white"
            filter={`url(#${noise})`}
          />
        </mask>
      </defs>

      <rect width="900" height="520" rx="34" fill={`url(#${bg})`} />
      <GridLines opacity={0.08} />

      <HeaderLabel
        x={46}
        y={48}
        eyebrow="DEPENDENCY-FREE CPU RENDERER"
        title="Kaboom"
        accent="#fb923c"
      />

      {/* Ray-marching rays */}
      <g opacity="0.34">
        {Array.from({ length: 13 }).map((_, index) => {
          const y = 126 + index * 25;
          return (
            <line
              key={y}
              x1="54"
              y1={y}
              x2="346"
              y2={258 + (index - 6) * 7}
              stroke="#7a879c"
              strokeWidth="1.5"
            />
          );
        })}
      </g>
      <circle cx="54" cy="276" r="9" fill="#94a3b8" />
      <text x="37" y="307" className="pv-microcopy">
        camera
      </text>

      {/* Fireball */}
      <g className="pv-fireball">
        <circle
          cx="476"
          cy="275"
          r="174"
          fill={`url(#${fire})`}
          filter={`url(#${noise})`}
          opacity="0.95"
        />
        <circle cx="456" cy="250" r="104" fill={`url(#${core})`} />
        <g mask={`url(#${mask})`} opacity="0.42">
          <path
            d="M312 306c72-105 128-129 214-84 61 32 96 25 147-8"
            fill="none"
            stroke="#fff1a8"
            strokeWidth="15"
          />
          <path
            d="M340 355c58-82 134-95 219-46 55 32 91 29 134 8"
            fill="none"
            stroke="#ff8a1f"
            strokeWidth="17"
          />
        </g>
      </g>

      {/* SDF / render details */}
      <g transform="translate(694 132)">
        <rect width="158" height="248" rx="20" fill="#111720" stroke="#343c49" />
        <text x="17" y="29" className="pv-label">
          FRAME 084
        </text>
        <MetricLine y={58} label="640 × 480" />
        <MetricLine y={91} label="120 frames" />
        <MetricLine y={124} label="SDF tracing" />
        <MetricLine y={157} label="fBM noise" />
        <MetricLine y={190} label="OpenMP CPU" />
        <rect x="17" y="211" width="124" height="20" rx="10" fill="#2c1c17" />
        <rect
          x="17"
          y="211"
          width="102"
          height="20"
          rx="10"
          fill="#fb923c"
          opacity="0.86"
          className="pv-render-progress"
        />
      </g>

      <g className="pv-detail">
        <StatusChip x={48} y={420} label="SPHERE TRACING" />
        <StatusChip x={213} y={420} label="FINITE-DIFFERENCE NORMALS" />
        <StatusChip x={445} y={420} label="LAMBERT + RIM LIGHTING" />
        <StatusChip x={676} y={420} label="PPM → GIF / MP4" />
      </g>
    </svg>
  );
}

function MatchLensVisual({ idPrefix }: { idPrefix: string }) {
  const bg = `${idPrefix}-match-bg`;
  const glow = `${idPrefix}-match-glow`;

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-labelledby={`${idPrefix}-match-title ${idPrefix}-match-desc`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${idPrefix}-match-title`}>
        MatchLens chronologically evaluated Premier League predictor
      </title>
      <desc id={`${idPrefix}-match-desc`}>
        Historical Premier League matches are converted into past-only rolling
        form features, split chronologically, evaluated against naive baselines,
        and inspected with class and probability diagnostics.
      </desc>

      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#07130e" />
          <stop offset="56%" stopColor="#0b1b14" />
          <stop offset="100%" stopColor="#101d19" />
        </linearGradient>
        <radialGradient id={glow}>
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.23" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="520" rx="34" fill={`url(#${bg})`} />
      <circle cx="770" cy="110" r="230" fill={`url(#${glow})`} />
      <GridLines opacity={0.1} />

      <HeaderLabel
        x={46}
        y={48}
        eyebrow="FOOTBALL ML + HONEST EVALUATION"
        title="MatchLens"
        accent="#4ade80"
      />

      {/* Mini football pitch / rolling form */}
      <g transform="translate(48 122)">
        <rect width="294" height="228" rx="20" fill="#0b2116" stroke="#29523a" />
        <rect
          x="20"
          y="18"
          width="254"
          height="142"
          rx="8"
          fill="#123522"
          stroke="#3f7653"
        />
        <line x1="147" y1="18" x2="147" y2="160" stroke="#3f7653" />
        <circle cx="147" cy="89" r="25" fill="none" stroke="#3f7653" />
        <rect
          x="20"
          y="54"
          width="39"
          height="70"
          fill="none"
          stroke="#3f7653"
        />
        <rect
          x="235"
          y="54"
          width="39"
          height="70"
          fill="none"
          stroke="#3f7653"
        />
        <circle cx="92" cy="68" r="7" fill="#4ade80" />
        <circle cx="119" cy="113" r="7" fill="#4ade80" opacity="0.72" />
        <circle cx="194" cy="78" r="7" fill="#f8fafc" />
        <circle cx="211" cy="119" r="7" fill="#f8fafc" opacity="0.72" />

        <text x="20" y="188" className="pv-label">
          5-MATCH ROLLING FORM
        </text>
        <MiniTrend x={20} y={205} values={[14, 11, 18, 21, 25]} accent="#4ade80" />
        <MiniTrend x={149} y={205} values={[23, 19, 20, 13, 16]} accent="#f8fafc" />
      </g>

      {/* Chronological split */}
      <g transform="translate(378 126)">
        <rect width="212" height="98" rx="18" fill="#0d2418" stroke="#31563e" />
        <text x="17" y="27" className="pv-label">
          CHRONOLOGICAL SPLIT
        </text>
        <rect x="17" y="47" width="142" height="18" rx="9" fill="#267447" />
        <rect x="159" y="47" width="36" height="18" rx="9" fill="#d97706" />
        <text x="17" y="83" className="pv-small">
          train 80%
        </text>
        <text x="148" y="83" className="pv-small">
          test 20%
        </text>
      </g>

      {/* Outcome probabilities */}
      <g transform="translate(378 242)">
        <rect width="212" height="168" rx="18" fill="#0d2418" stroke="#31563e" />
        <text x="17" y="28" className="pv-label">
          MATCH OUTCOME
        </text>
        <ProbabilityBar y={50} label="HOME" value={0.52} accent="#4ade80" />
        <ProbabilityBar y={87} label="DRAW" value={0.18} accent="#f59e0b" />
        <ProbabilityBar y={124} label="AWAY" value={0.3} accent="#60a5fa" />
      </g>

      {/* Evaluation panel */}
      <g transform="translate(620 122)">
        <rect width="232" height="288" rx="20" fill="#0b1f15" stroke="#31563e" />
        <text x="18" y="30" className="pv-label">
          PHASE 1 DIAGNOSTICS
        </text>
        <MetricCard y={52} label="Accuracy" value="0.5121" accent="#4ade80" />
        <MetricCard y={114} label="Macro F1" value="0.3640" accent="#f59e0b" />
        <MetricCard y={176} label="Tests" value="24 passing" accent="#60a5fa" />
        <rect x="18" y="238" width="196" height="31" rx="9" fill="#152c1f" />
        <circle cx="35" cy="254" r="6" fill="#f59e0b" />
        <text x="48" y="258" className="pv-small">
          draw failure remains visible
        </text>
      </g>

      <g className="pv-detail">
        <StatusChip x={48} y={398} label="PAST-ONLY FEATURES" />
        <StatusChip x={238} y={398} label="NAIVE BASELINES" />
        <StatusChip x={414} y={432} label="ARTIFACTIZED METRICS + PROBABILITIES" />
        <StatusChip x={713} y={432} label="LOGISTIC REGRESSION" />
      </g>
    </svg>
  );
}

function TinyShellVisual({ idPrefix }: { idPrefix: string }) {
  const bg = `${idPrefix}-shell-bg`;
  const glow = `${idPrefix}-shell-glow`;

  return (
    <svg
      viewBox="0 0 900 520"
      role="img"
      aria-labelledby={`${idPrefix}-shell-title ${idPrefix}-shell-desc`}
      preserveAspectRatio="xMidYMid slice"
    >
      <title id={`${idPrefix}-shell-title`}>
        Tiny Shell Unix command and process pipeline
      </title>

      <desc id={`${idPrefix}-shell-desc`}>
        A Unix-style shell parses a command, creates child processes using
        fork, runs programs using exec, and connects their input and output
        through a pipe.
      </desc>

      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080d12" />
          <stop offset="55%" stopColor="#0c141b" />
          <stop offset="100%" stopColor="#101c1e" />
        </linearGradient>

        <radialGradient id={glow}>
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="520" rx="34" fill={`url(#${bg})`} />
      <circle cx="760" cy="90" r="230" fill={`url(#${glow})`} />
      <GridLines opacity={0.1} />

      <HeaderLabel
        x={46}
        y={48}
        eyebrow="UNIX PROCESSES FROM THE INSIDE"
        title="Tiny Shell"
        accent="#22d3ee"
      />

      {/* Terminal input */}
      <g transform="translate(48 126)">
        <rect
          width="350"
          height="218"
          rx="20"
          fill="#091117"
          stroke="#29414b"
        />

        <circle cx="23" cy="22" r="5" fill="#ef4444" />
        <circle cx="41" cy="22" r="5" fill="#f59e0b" />
        <circle cx="59" cy="22" r="5" fill="#22c55e" />

        <text x="82" y="27" className="pv-label">
          tiny-shell
        </text>

        <line
          x1="0"
          y1="43"
          x2="350"
          y2="43"
          stroke="#24343c"
          strokeWidth="1"
        />

        <text x="20" y="78" className="pv-small" fill="#67e8f9">
          $
        </text>

        <text x="39" y="78" className="pv-small" fill="#e2e8f0">
          cat notes.txt | grep TODO
        </text>

        <text x="20" y="112" className="pv-microcopy">
          tokens:
        </text>

        <TerminalToken x={74} y={95} label="cat" />
        <TerminalToken x={126} y={95} label="notes.txt" />
        <TerminalToken x={211} y={95} label="|" accent="#22d3ee" />
        <TerminalToken x={249} y={95} label="grep" />
        <TerminalToken x={302} y={95} label="TODO" />

        <text x="20" y="160" className="pv-microcopy">
          parser → pipeline with 2 commands
        </text>

        <rect
          x="20"
          y="176"
          width="310"
          height="19"
          rx="9.5"
          fill="#13232b"
        />

        <rect
          x="20"
          y="176"
          width="241"
          height="19"
          rx="9.5"
          fill="#22d3ee"
          opacity="0.42"
          className="pv-grow-x"
        />
      </g>

      {/* Parser to process flow */}
      <path
        d="M420 235H474"
        fill="none"
        stroke="#647985"
        strokeWidth="3"
        strokeDasharray="8 8"
      />

      <circle
        cx="449"
        cy="235"
        r="5"
        fill="#67e8f9"
        className="pv-pulse"
      />

      {/* Parent shell */}
      <g transform="translate(474 126)">
        <rect
          width="154"
          height="98"
          rx="18"
          fill="#0e1d24"
          stroke="#31515c"
        />

        <text x="17" y="28" className="pv-label">
          PARENT SHELL
        </text>

        <text x="17" y="53" className="pv-small">
          parse command
        </text>

        <text x="17" y="74" className="pv-small">
          pipe() + fork()
        </text>
      </g>

      {/* Fork branches */}
      <path
        d="M551 224V263H690"
        fill="none"
        stroke="#647985"
        strokeWidth="3"
      />

      <path
        d="M551 263H551V305H690"
        fill="none"
        stroke="#647985"
        strokeWidth="3"
      />

      <text x="565" y="251" className="pv-microcopy">
        fork()
      </text>

      {/* Child processes */}
      <g transform="translate(690 230)">
        <rect
          width="162"
          height="76"
          rx="16"
          fill="#10242b"
          stroke="#37616c"
        />

        <rect
          width="6"
          height="76"
          rx="3"
          fill="#22d3ee"
        />

        <text x="18" y="27" className="pv-label">
          CHILD A
        </text>

        <text x="18" y="50" className="pv-small">
          exec(&quot;cat&quot;)
        </text>
      </g>

      <g transform="translate(690 326)">
        <rect
          width="162"
          height="76"
          rx="16"
          fill="#10242b"
          stroke="#37616c"
        />

        <rect
          width="6"
          height="76"
          rx="3"
          fill="#38bdf8"
        />

        <text x="18" y="27" className="pv-label">
          CHILD B
        </text>

        <text x="18" y="50" className="pv-small">
          exec(&quot;grep&quot;)
        </text>
      </g>

      {/* Pipe connection */}
      <path
        d="M771 306V326"
        stroke="#f59e0b"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M749 316H793"
        stroke="#f59e0b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <text x="800" y="321" className="pv-microcopy">
        pipe
      </text>

      <text x="642" y="294" className="pv-microcopy">
        fd[1]
      </text>

      <text x="642" y="354" className="pv-microcopy">
        fd[0]
      </text>

      <g className="pv-detail">
        <StatusChip x={48} y={392} label="COMMAND PARSING" />
        <StatusChip x={224} y={392} label="FORK + EXEC" />
        <StatusChip x={374} y={430} label="PIPE + DUP2" />
        <StatusChip x={518} y={430} label="PARENT / CHILD PROCESSES" />
        <StatusChip x={751} y={430} label="C" />
      </g>
    </svg>
  );
}

/* ---------- Shared SVG primitives ---------- */

function GridLines({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <g opacity={opacity}>
      {Array.from({ length: 11 }).map((_, index) => (
        <line
          key={`v-${index}`}
          x1={index * 90}
          y1="0"
          x2={index * 90}
          y2="520"
          stroke="#9fb1c7"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 7 }).map((_, index) => (
        <line
          key={`h-${index}`}
          x1="0"
          y1={index * 86}
          x2="900"
          y2={index * 86}
          stroke="#9fb1c7"
          strokeWidth="1"
        />
      ))}
    </g>
  );
}

function HeaderLabel({
  x,
  y,
  eyebrow,
  title,
  accent,
}: {
  x: number;
  y: number;
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="5" cy="-2" r="5" fill={accent} />
      <text x="19" y="2" className="pv-eyebrow">
        {eyebrow}
      </text>
      <text x="0" y="43" className="pv-title">
        {title}
      </text>
    </g>
  );
}

function PipelineNode({
  x,
  y,
  label,
  sublabel,
  accent,
}: {
  x: number;
  y: number;
  label: string;
  sublabel: string;
  accent: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="132" height="58" rx="14" fill="#141c2c" stroke="#36405a" />
      <rect width="6" height="58" rx="3" fill={accent} />
      <text x="18" y="25" className="pv-label">
        {label}
      </text>
      <text x="18" y="43" className="pv-small">
        {sublabel}
      </text>
    </g>
  );
}

function ScoreRow({
  y,
  label,
  score,
  width,
  accent,
}: {
  y: number;
  label: string;
  score: string;
  width: number;
  accent: string;
}) {
  return (
    <g transform={`translate(20 ${y})`}>
      <text x="0" y="0" className="pv-small">
        {label}
      </text>
      <text x="174" y="0" textAnchor="end" className="pv-score">
        {score}
      </text>
      <rect x="0" y="12" width="174" height="10" rx="5" fill="#273047" />
      <rect
        x="0"
        y="12"
        width={width}
        height="10"
        rx="5"
        fill={accent}
        className="pv-grow-x"
      />
    </g>
  );
}

function StatusChip({ x, y, label }: { x: number; y: number; label: string }) {
  const width = Math.max(120, label.length * 7.1 + 34);
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={width}
        height="32"
        rx="16"
        fill="#ffffff"
        fillOpacity="0.055"
        stroke="#ffffff"
        strokeOpacity="0.13"
      />
      <circle cx="16" cy="16" r="4" fill="#ffffff" opacity="0.72" />
      <text x="28" y="20" className="pv-chip">
        {label}
      </text>
    </g>
  );
}

function TerminalToken({
  x,
  y,
  label,
  accent = "#334750",
}: {
  x: number;
  y: number;
  label: string;
  accent?: string;
}) {
  const width = Math.max(36, label.length * 6.5 + 16);

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={width}
        height="25"
        rx="7"
        fill={accent}
        fillOpacity={accent === "#334750" ? 1 : 0.32}
        stroke={accent === "#334750" ? "#405760" : accent}
      />

      <text
        x={width / 2}
        y="17"
        textAnchor="middle"
        className="pv-small"
        fill="#dbeafe"
      >
        {label}
      </text>
    </g>
  );
}

function ConfidenceRow({
  y,
  label,
  value,
  accent,
}: {
  y: number;
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <g transform={`translate(18 ${y})`}>
      <text x="0" y="0" className="pv-small">
        {label}
      </text>
      <rect x="53" y="-10" width="95" height="11" rx="5.5" fill="#21383e" />
      <rect
        x="53"
        y="-10"
        width={95 * value}
        height="11"
        rx="5.5"
        fill={accent}
        className="pv-grow-x"
      />
      <text x="158" y="0" className="pv-score">
        {Math.round(value * 100)}%
      </text>
    </g>
  );
}

function SimilarityRow({
  y,
  id,
  score,
}: {
  y: number;
  id: string;
  score: string;
}) {
  return (
    <g transform={`translate(18 ${y})`}>
      <rect width="194" height="27" rx="8" fill="#142a30" />
      <text x="11" y="18" className="pv-small">
        {id}
      </text>
      <text x="177" y="18" textAnchor="end" className="pv-score">
        {score}
      </text>
    </g>
  );
}

function MetricLine({ y, label }: { y: number; label: string }) {
  return (
    <g transform={`translate(17 ${y})`}>
      <circle cx="5" cy="-4" r="4" fill="#fb923c" opacity="0.82" />
      <text x="17" y="0" className="pv-small">
        {label}
      </text>
    </g>
  );
}

function MiniTrend({
  x,
  y,
  values,
  accent,
}: {
  x: number;
  y: number;
  values: number[];
  accent: string;
}) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const px = x + index * 25;
      const normalized = (value - min) / Math.max(1, max - min);
      const py = y + 18 - normalized * 24;
      return `${px},${py}`;
    })
    .join(" ");

  return (
    <g>
      <polyline
        points={points}
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function ProbabilityBar({
  y,
  label,
  value,
  accent,
}: {
  y: number;
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <g transform={`translate(17 ${y})`}>
      <text x="0" y="0" className="pv-small">
        {label}
      </text>
      <rect x="48" y="-11" width="112" height="12" rx="6" fill="#213a2a" />
      <rect
        x="48"
        y="-11"
        width={112 * value}
        height="12"
        rx="6"
        fill={accent}
        className="pv-grow-x"
      />
      <text x="178" y="0" textAnchor="end" className="pv-score">
        {Math.round(value * 100)}%
      </text>
    </g>
  );
}

function MetricCard({
  y,
  label,
  value,
  accent,
}: {
  y: number;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <g transform={`translate(18 ${y})`}>
      <rect width="196" height="48" rx="12" fill="#142b1e" />
      <rect width="5" height="48" rx="2.5" fill={accent} />
      <text x="17" y="20" className="pv-small">
        {label}
      </text>
      <text x="178" y="31" textAnchor="end" className="pv-metric-value">
        {value}
      </text>
    </g>
  );
}
