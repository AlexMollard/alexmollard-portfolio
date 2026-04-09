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

## Deploy To GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the Astro site and publishes `dist/` to GitHub Pages whenever `main` is updated.

### One-Time GitHub Setup

1. Push this repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main`, or update the workflow if you deploy from a different branch.

### Custom Domain

The `public/CNAME` file tells GitHub Pages to serve this site from `alexmollard.dev`.

Update your DNS provider so the domain points to GitHub Pages instead of Google Sites:

1. Remove the existing Google Sites mapping records for `alexmollard.dev` and `www`.
2. Add these `A` records for the apex domain `alexmollard.dev`:

	- `185.199.108.153`
	- `185.199.109.153`
	- `185.199.110.153`
	- `185.199.111.153`

3. Add this `AAAA` record set for IPv6 support:

	- `2606:50c0:8000::153`
	- `2606:50c0:8001::153`
	- `2606:50c0:8002::153`
	- `2606:50c0:8003::153`

4. Add a `CNAME` record for `www` that points to `alexmollard.dev`.
5. In **Settings > Pages**, set the custom domain to `alexmollard.dev` and enable **Enforce HTTPS** after DNS finishes propagating.

DNS propagation can take a few minutes to a few hours. You can verify it with:

```powershell
nslookup alexmollard.dev
nslookup www.alexmollard.dev
```
