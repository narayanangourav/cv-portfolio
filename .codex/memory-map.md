This file is the first-read orientation source for Codex. Agents must read this before broad repo exploration.

# Repository Memory Map

## Repository purpose

This repository contains Narayana N Gourav's personal software developer portfolio. It is a static-exportable Next.js App Router site with portfolio content, resume data, profile/sidebar UI, a downloadable PDF resume, and a maintained plain-text resume copy.

Evidence: `README.md`, `package.json`, `src/app/page.tsx`, `src/data/resume-data.ts`, `src/data/portfolio-content.ts`.

## Main tech stack

- Next.js `14.2.35`
- React `18.2.0`
- TypeScript with `strict: true`
- Tailwind CSS and project CSS in `src/app/portfolio.css`
- Icons from `lucide-react`
- Geist font package
- Package manager: npm, evidenced by `package-lock.json`
- Runtime version: GitHub Actions uses Node.js `20`

Evidence: `package.json`, `tsconfig.json`, `tailwind.config.js`, `.github/workflows/deploy-pages.yml`.

## Commands

- Install: `npm install` or CI-equivalent `npm ci`
- Development: `npm run dev`
- Reset local generated build output and start dev: `npm run dev:reset`
- Build: `npm run build`
- Start built app locally: `npm run start`
- Lint: `npm run lint`
- Lint fix: `npm run lint:fix`
- Type check: `npm run type-check`
- Format: `npm run format`
- Format check: `npm run format:check`
- Clean generated output: `npm run clean`

Evidence: `package.json`.

## App entry points

- `src/app/layout.tsx`: root metadata, viewport theme color, font setup, global CSS imports.
- `src/app/page.tsx`: primary portfolio page composition and structured data.
- `src/app/sitemap.ts`: sitemap generation.
- `src/app/error.tsx`, `src/app/not-found.tsx`, `src/app/loading.tsx`: app-level states.

Evidence: `src/app/*`.

## Important directories

- `src/app`: Next.js App Router files and global/portfolio CSS.
- `src/components/portfolio`: portfolio UI components such as hero, sidebar, navigation, resume sections, gallery, and service/impact sections.
- `src/components/icons`: custom social icons used in resume data.
- `src/data`: centralized resume and portfolio content.
- `src/hooks`: shared scroll control hook.
- `src/lib`: utility functions, public path helper, and portfolio view-model transformations.
- `src/constants`: exports canonical resume data as `data`.
- `public/assets`: public avatar, downloadable PDF resume, and maintained plain-text resume copy.
- `.github/workflows`: GitHub Pages deployment workflow.

Evidence: inspected directory structure and imports in `src/app/page.tsx`.

## Core data flow

- Resume/profile content starts in `src/data/resume-data.ts`.
- UI section labels, navigation items, service cards, impact highlights, and portfolio artwork live in `src/data/portfolio-content.ts`.
- `src/constants/index.ts` exports `RESUME_DATA` as typed `data`.
- `src/lib/portfolio-view-model.ts` derives sidebar skill groups, stats, and summary paragraphs.
- `src/app/page.tsx` composes the portfolio page from the data, view-model helpers, and portfolio components.
- The Download CV button uses `RESUME_DATA.resumeFileName` from `src/data/resume-data.ts`, currently pointing to `public/assets/NarayanaNGourav-SoftwareDeveloper.pdf`.
- `public/assets/NarayanaNGourav-SoftwareDeveloper.txt` is maintained as a plain-text resume copy and should stay aligned with visible resume content when resume details change.

Evidence: `src/app/page.tsx`, `src/constants/index.ts`, `src/lib/portfolio-view-model.ts`.

## Configuration and environment assumptions

- TypeScript is strict and uses `@/*` path aliases to `src/*`.
- ESLint uses Next core web vitals plus TypeScript and React plugins.
- Prettier uses tabs, single quotes, no semicolons, `printWidth: 100`, and LF endings.
- Tailwind scans `src/**/*.{ts,tsx}` and related app/component paths.
- The active portfolio accent is `#89D7B7`, exposed through CSS variables and Tailwind orange scale.
- GitHub Pages builds require `GITHUB_PAGES=true`, `NEXT_PUBLIC_BASE_PATH=/cv-portfolio`, and `NEXT_PUBLIC_SITE_URL=https://narayanangourav.github.io/cv-portfolio`.
- `NEXT_IGNORE_INCORRECT_LOCKFILE=1` is set in the Pages workflow to avoid Next's incorrect SWC lockfile patcher during CI.

Evidence: `tsconfig.json`, `.eslintrc.cjs`, `.prettierrc.cjs`, `tailwind.config.js`, `next.config.js`, `.github/workflows/deploy-pages.yml`, `src/app/portfolio.css`.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`.

- Triggered on pushes to `main` or `master`, and by manual workflow dispatch.
- Uses `npm ci`.
- Builds with `npm run build`.
- Next static export is enabled by `GITHUB_PAGES=true`.
- Uploads `./out` through `actions/upload-pages-artifact`.
- Deploys through `actions/deploy-pages`.

Evidence: `.github/workflows/deploy-pages.yml`, `next.config.js`, `README.md`.

## Database, APIs, auth, queues, cache

- Database: none found.
- Auth: none found.
- Server API routes: none found.
- Queues/cache: none found.
- External runtime calls: no application API service layer found. External links exist for social, publication, and certification URLs.

Evidence: inspected app entrypoints, source directories, and current project structure.

## Known conventions

- Keep resume and portfolio text centralized in `src/data`.
- Keep view-model/data transformation logic outside UI components when practical.
- Keep CSS in `src/app/portfolio.css` and `src/app/globals.css`; avoid inline styles.
- Interactive elements should use semantic buttons/links and stable IDs when applicable.
- Do not add dependencies without checking existing package patterns first.
- Prefer targeted file inspection over broad repository crawling.

Evidence: existing component/data separation and project guidance in the user-provided AGENTS instructions.

## Known risks and files requiring care

- `public/assets/NarayanaNGourav-SoftwareDeveloper.pdf` is the current Download CV asset; keep `RESUME_DATA.resumeFileName` aligned with the intended downloadable file.
- `public/assets/NarayanaNGourav-SoftwareDeveloper.txt` is a maintained plain-text resume copy; keep it in sync with displayed resume data when content changes.
- `next.config.js` controls GitHub Pages base path/static export behavior; changes can break hosted assets/routes.
- `.github/workflows/deploy-pages.yml` controls Pages deployment.
- `.next`, `out`, and `tsconfig.tsbuildinfo` are generated artifacts and should not be edited casually or committed.
- `node_modules` is generated dependency output and should not be edited.
- `.agents` may be protected/read-only in the current environment and is not part of the app build.

Evidence: `.gitignore`, `package.json`, `next.config.js`, `.github/workflows/deploy-pages.yml`.

## Current verification strategy

Use these checks before completing code or content changes:

```bash
npm run type-check
npm run lint
npm run format:check
```

For deployment-sensitive changes, also run the GitHub Pages static build with:

```powershell
$env:GITHUB_PAGES='true'
$env:NEXT_IGNORE_INCORRECT_LOCKFILE='1'
$env:NEXT_PUBLIC_BASE_PATH='/cv-portfolio'
$env:NEXT_PUBLIC_SITE_URL='https://narayanangourav.github.io/cv-portfolio'
npm run build
```

If a build is run locally, remove generated `.next`, `out`, and `tsconfig.tsbuildinfo` afterward unless intentionally inspecting build output.

Evidence: `package.json`, `.github/workflows/deploy-pages.yml`, `.gitignore`.

## Unknowns

- Test framework: Unknown. No test script or test files were identified during targeted inspection.
- Runtime version outside GitHub Actions: Unknown. The workflow uses Node.js `20`, but no `.nvmrc` or `engines` field was found.
