# Omer Portfolio — Coded Project Visuals

Reusable React + TypeScript project visuals for:

- PitchMirror
- RepoTriage
- Kaboom
- MatchLens

They use inline SVG and plain CSS. There are no image assets, icon packages,
chart libraries, or animation dependencies.

## Files

Copy:

```text
src/components/project-visuals/ProjectVisual.tsx
src/components/project-visuals/project-visuals.css
```

Adjust the destination path to match the existing repository.

## Basic usage

```tsx
import {
  ProjectVisual,
  type ProjectVisualKey,
} from "@/components/project-visuals/ProjectVisual";

<ProjectVisual project="repotriage" variant="card" />
<ProjectVisual project="repotriage" variant="detail" />
```

Available keys:

```ts
type ProjectVisualKey =
  | "pitchmirror"
  | "repotriage"
  | "kaboom"
  | "matchlens";
```

- `variant="card"`: homepage/project-card visual; hides lower technical chips.
- `variant="detail"`: wider project-page visual; shows extra technical signals.

## Data-driven project cards

Add a `visualKey` property to project data:

```ts
type Project = {
  slug: string;
  title: string;
  visualKey: ProjectVisualKey;
  // existing fields...
};

const projects: Project[] = [
  {
    slug: "pitchmirror",
    title: "PitchMirror",
    visualKey: "pitchmirror",
  },
  {
    slug: "repotriage",
    title: "RepoTriage",
    visualKey: "repotriage",
  },
  {
    slug: "kaboom",
    title: "Kaboom",
    visualKey: "kaboom",
  },
  {
    slug: "matchlens",
    title: "MatchLens",
    visualKey: "matchlens",
  },
];
```

Then render:

```tsx
<ProjectVisual project={project.visualKey} variant="card" />
```

On a full project page:

```tsx
<ProjectVisual project={project.visualKey} variant="detail" />
```

## Suggested card integration

```tsx
<article className="project-card">
  <ProjectVisual project={project.visualKey} variant="card" />

  <div className="project-card__body">
    <h3>{project.title}</h3>
    <p>{project.summary}</p>
  </div>
</article>
```

Keep the visual above the project copy. Do not place extra gradient overlays or
floating text over the SVG; the component already contains its own visual
hierarchy.

## Responsive behavior

The visuals use a 16:10 aspect ratio on desktop cards and a 4:3 ratio on narrow
screens. The detail variant is wider on desktop.

## Accessibility

Each SVG includes a title and description. The wrapper respects
`prefers-reduced-motion`.

## MatchLens facts represented

The visual reflects the latest Phase 1 state:

- five-match rolling, past-only form features
- chronological 80/20 split
- logistic-regression outcome probabilities
- accuracy 0.5121
- macro F1 0.3640
- 24 passing tests
- visible zero-draw prediction failure rather than hiding it
