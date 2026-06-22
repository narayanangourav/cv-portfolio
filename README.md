# Narayana N Gourav — Software Developer Portfolio

Personal portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the static site whenever
changes are pushed to `main` or `master`.

Use these repository settings:

1. Repository name: `cv-portfolio`.
2. Default branch: `master` or `main`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. No branch or `/docs` folder selection is required.
6. Push the project to the default branch.
7. Check **Actions → Deploy portfolio to GitHub Pages** for the deployment result.

The expected site URL is:

`https://narayanangourav.github.io/cv-portfolio/`

The workflow applies the repository base path, exports the site to `out/`, uploads the Pages
artifact, and deploys it. If the repository is private, the GitHub plan must support Pages for
private repositories. The published site should be treated as public.

## Validation

```bash
npm run type-check
npm run lint
npm run format:check
npm run build
```

## Content

Portfolio data is centralized in:

- `src/data/resume-data.ts`
- `src/data/portfolio-content.ts`

The downloadable text résumé is:

- `public/assets/NarayanaNGourav-SoftwareDeveloper.txt`

## Project Structure

```text
.github/
  workflows/
    deploy-pages.yml
public/
  assets/
src/
  app/
  components/
    portfolio/
  data/
  hooks/
  lib/
```

## License

MIT. See `LICENSE`.
