# Alex Mollard — Portfolio

Personal portfolio site built with [Astro](https://astro.build), showcasing game development, rendering engine, and software engineering projects.

Live at: [alexmollard.dev](https://www.alexmollard.dev)

## Project Structure

```text
/
├── public/
│   ├── media/                  # Placeholder SVGs for projects without screenshots
│   │   └── imported/           # Localized project screenshots (downloaded from old site)
│   └── favicon.svg
├── scripts/
│   └── localize-media.ps1      # Script to download and re-path remote media
├── src/
│   ├── components/
│   │   ├── ProjectMedia.astro  # YouTube embed + image grid renderer
│   │   └── TechSpecs.astro     # Tech stack / specs table for a project
│   ├── content/
│   │   └── projects/           # One .md file per project (32 total)
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout
│   ├── pages/
│   │   └── index.astro         # Portfolio home page
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts       # Zod schema for the projects content collection
└── package.json
```

## Content Schema

Each project file in `src/content/projects/` uses YAML frontmatter validated by Zod:

| Field                 | Type                                              | Required |
| :-------------------- | :------------------------------------------------ | :------- |
| `title`               | string                                            | Yes      |
| `summary`             | string                                            | Yes      |
| `date`                | date                                              | Yes      |
| `category`            | `Professional` / `Big Project` / `Hobby`          | Yes      |
| `role`                | string                                            | No       |
| `youtube_url`         | string (URL)                                      | No       |
| `media_images`        | string[]                                          | No       |
| `engine`              | string                                            | No       |
| `api`                 | `Vulkan` / `OpenGL` / `DirectX` / `Metal` / `WebGPU` / `Other` | No |
| `features`            | string[]                                          | No       |
| `performance_metrics` | string[]                                          | No       |
| `external_url`        | string (URL)                                      | No       |
| `featured`            | boolean                                           | No       |

## Commands

All commands are run from the root of the project:

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview production build locally           |

## Deploy To Deno Deploy

This repo is configured for Deno Deploy automatic Git integration (no GitHub Actions required).

### One-Time Deno Setup

1. Push this repository to GitHub.
2. In [Deno Deploy](https://dash.deno.com/), create or open the project linked to this repository.
3. Enable automatic deploys from your chosen branch (currently `master`).
4. Set `alexmollard.dev` as the production domain in the Deno Deploy project settings.

### Custom Domain

Point your DNS at Deno Deploy instead of GitHub Pages or Google Sites. The exact target records are shown inside the Deno Deploy project once you attach `alexmollard.dev` as the custom domain there.

General cutover process:

1. Remove the old Google Sites DNS records for `alexmollard.dev` and `www`.
2. Add the DNS records Deno Deploy gives you for the apex domain and `www`.
3. In Deno Deploy, attach `alexmollard.dev` to the project and wait for verification.
4. Enable HTTPS once the certificate is issued.

You can verify DNS propagation with:

```powershell
nslookup alexmollard.dev
nslookup www.alexmollard.dev
```

## Project presentation

The 32 project entries generate static case-study pages. Cards offer image carousels, compact previews and direct links to full pages. Galleries support arrows, keyboard navigation and dragging; labelled covers fill missing screenshots.

Featured work includes AntHill, Ironvellum, memory/crash diagnostics, AetherCore, TIEBREAK and Cricket 26. The former tools-suite URL redirects to the diagnostics case study. Professional titles and project ownership remain distinct from broader software-engineering positioning.

The editable CV source is scripts/cv.html; public/alex-mollard-cv.pdf is the downloadable version. Review the rendered PDF whenever updating it.

AntHill, diagnostics, developer automation, DreadedEscape and Early Work still use project covers. Employer screenshots require disclosure review before inclusion. The current personal-project images include repository screenshots for CSX-Forms and RS3 Analyzer.
