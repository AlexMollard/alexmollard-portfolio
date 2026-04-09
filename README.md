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
│   │   └── projects/           # One .md file per project (21 total)
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

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the Astro site and uploads the static `dist/` folder to Deno Deploy whenever `master` is updated.

### One-Time Deno Setup

1. Push this repository to GitHub.
2. In [Deno Deploy](https://dash.deno.com/), create a new project from this repository using **GitHub Action** mode.
3. In your GitHub repository settings, add a repository variable named `DENO_PROJECT` and set it to your Deno Deploy project name.
4. Optional: add a repository variable named `SITE_URL` if you want a deploy target other than `https://alexmollard.dev`.

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
