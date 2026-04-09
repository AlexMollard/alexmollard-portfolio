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
