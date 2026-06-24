# AGENTS.md

## Repository overview

This repo is a personal portfolio site for Narayana N Gourav. It is a Next.js 14 App Router project using React, TypeScript, Tailwind CSS, project CSS, and static export for GitHub Pages.

Evidence: `README.md`, `package.json`, `src/app/page.tsx`, `next.config.js`.

## Memory-first workflow

Before broad repo exploration, read `.codex/memory-map.md`. Treat it as the first-read orientation source, then inspect only the files needed for the current task. If the memory map conflicts with actual files, trust the files and update the memory map.

Evidence: `.codex/memory-map.md`.

## Important paths

- `src/app`: App Router entrypoints and global/portfolio CSS.
- `src/components/portfolio`: portfolio UI components.
- `src/data`: centralized resume and portfolio content.
- `src/lib`: public path helper, utilities, and portfolio view-model helpers.
- `src/hooks`: shared client-side hooks.
- `public/assets`: avatar and downloadable text resume.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment.

Evidence: `src/app/page.tsx`, `README.md`.

## Setup commands

```bash
npm install
```

CI uses:

```bash
npm ci
```

Evidence: `package.json`, `.github/workflows/deploy-pages.yml`.

## Development commands

```bash
npm run dev
npm run dev:reset
npm run clean
```

Evidence: `package.json`.

## Verification commands

```bash
npm run type-check
npm run lint
npm run format:check
npm run build
```

Use the GitHub Pages environment variables from `.github/workflows/deploy-pages.yml` when validating deployment-sensitive changes locally.

Evidence: `package.json`, `.github/workflows/deploy-pages.yml`.

## Coding conventions

- Keep content/data in `src/data` and derived display data in `src/lib` where practical.
- Keep styling in CSS files, primarily `src/app/portfolio.css`; do not add inline styles.
- Use semantic interactive elements and stable IDs where applicable.
- Follow existing Prettier settings: tabs, single quotes, no semicolons, LF endings.
- Do not add dependencies unless existing patterns are checked first.

Evidence: `.prettierrc.cjs`, `src/data`, `src/lib`, `src/components/portfolio`, `src/app/portfolio.css`.

## Testing conventions

No test framework or test file convention is currently established. For now, validate changes with type-check, lint, format check, and build when relevant. If tests are introduced later, update `.codex/memory-map.md` and this file.

Evidence: `package.json`.

## Safety rules

- Do not edit generated artifacts such as `.next`, `out`, `tsconfig.tsbuildinfo`, or `node_modules`.
- Keep `public/assets/NarayanaNGourav-SoftwareDeveloper.txt` aligned with visible resume content when resume details change.
- Be careful with `next.config.js` and `.github/workflows/deploy-pages.yml`; they control GitHub Pages base path and deployment.
- Do not remove `.agents`; it may be protected/read-only and is not part of the app build.

Evidence: `.gitignore`, `next.config.js`, `.github/workflows/deploy-pages.yml`, `README.md`.

## Definition of done

- The smallest correct change is implemented.
- Relevant content/data files are kept in sync.
- `npm run type-check`, `npm run lint`, and `npm run format:check` pass unless the task explicitly says otherwise.
- Deployment-sensitive changes are validated with a GitHub Pages static build.
- Generated build artifacts are not left for commit unless intentionally required.
