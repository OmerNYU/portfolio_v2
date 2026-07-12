You are integrating four reusable coded project visuals into an existing Omer Hayat portfolio website.

## Goal

Add the supplied `ProjectVisual` React/TypeScript component and CSS, then use it:

1. In every featured-project card on the homepage with `variant="card"`.
2. In every project card in the Projects section/page with `variant="card"`.
3. At the top of any individual project detail page with `variant="detail"`.

The visuals cover:

- `pitchmirror`
- `repotriage`
- `kaboom`
- `matchlens`

## Constraints

- First inspect the repository before editing.
- Preserve the existing framework, routing system, typography, spacing scale,
  page structure, and card interaction behavior.
- Do not rewrite unrelated components.
- Do not introduce any new dependency.
- Do not convert the project to a different framework.
- The supplied visual component uses React, TypeScript, inline SVG, and plain
  CSS only.
- Keep project text in the existing data source; do not duplicate full project
  descriptions inside visual components.
- Use the visual above the textual content in project cards.
- Do not overlay the title, tech stack, links, buttons, or long descriptions on
  top of the SVG.
- Preserve existing project links and card click behavior.
- Ensure cards remain keyboard accessible.
- Respect `prefers-reduced-motion`.
- Do not display fabricated metrics. MatchLens should retain the represented
  Phase 1 metrics: accuracy 0.5121, macro F1 0.3640, and 24 passing tests.
- RepoTriage, PitchMirror, and Kaboom visuals should remain conceptual system
  diagrams rather than fake screenshots.

## Supplied files

Copy these into an appropriate components directory:

- `ProjectVisual.tsx`
- `project-visuals.css`

If the project does not support the `@/` alias, use the correct relative import.
If global CSS-import rules prevent importing CSS from the component, move the
CSS import to the application's approved global stylesheet entry without
changing the CSS selectors.

## Project-data integration

Find the existing project data structure. Add a typed field equivalent to:

```ts
visualKey:
  | "pitchmirror"
  | "repotriage"
  | "kaboom"
  | "matchlens";
```

Map projects as follows:

- PitchMirror → `pitchmirror`
- RepoTriage → `repotriage`
- Kaboom / Ray-Marched Fireball Renderer → `kaboom`
- MatchLens / Premier League Match Predictor → `matchlens`

Do not infer keys by lowercasing display names at render time. Store the explicit
key in project data.

## Rendering

For homepage and Projects cards:

```tsx
<ProjectVisual project={project.visualKey} variant="card" />
```

For a project detail page:

```tsx
<ProjectVisual project={project.visualKey} variant="detail" />
```

If there are no individual project routes, do not create an entire new routing
system solely for this task. Use the detail variant only where a full project
section already exists.

## Layout adaptation

Adapt only the surrounding card styles needed to achieve:

- visual takes full card width
- no unexpected inner horizontal padding around the visual
- card copy retains the site's normal padding
- visual appears before title/summary/stack
- no content overflow at mobile widths
- focus/hover treatment remains on the parent card, not duplicated excessively
  on the visual

If the existing card has padding around all children, introduce a small wrapper
or restructure it so the visual can be edge-to-edge while text keeps its
existing padding.

## Verification

After implementation:

1. Run the existing formatter.
2. Run TypeScript/type checks.
3. Run tests if present.
4. Run the production build.
5. Check homepage and Projects page at desktop and mobile widths.
6. Confirm all four visuals render with unique SVG gradients/filters even if
   more than one instance appears on the same page.
7. Confirm no external image requests or new runtime dependencies were added.

## Final response

Report:

- files added
- files modified
- where card/detail variants were used
- whether any CSS import-path adaptation was necessary
- exact verification commands run and their outcomes
- any remaining visual issue that requires manual browser review
