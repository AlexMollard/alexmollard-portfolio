---
title: This Portfolio
summary: The site you are reading - a static Astro build with a filterable project archive, a concise project preview, and a downloadable CV maintained in an editable HTML source.
date: 2026-09-21
category: Hobby
role: I set direction, information architecture and editorial standards, then review each agent-directed change.
media_images:
  - /media/hobbies/portfolio/hero.webp
  - /media/hobbies/portfolio/case-study.webp
engine: Astro
domain: Tools
features:
  - Single-page archive generated from a typed Astro content collection, with individual static case-study routes
  - Filterable archive with search, domain and year facets, URL-synced state, and lazy paging
  - Single-view project previews with inline imagery and links to full case studies
  - One-page CV rendered to PDF from an editable HTML source
  - Authorship metadata on every project so agent-directed work is labelled in the UI
problem: A stale job title, dense project copy and unsupported claims made the portfolio harder to trust.
approach:
  - Audited positioning, copy, credibility, information architecture, accessibility and content; verified each finding against source lines.
  - Used schema fields for domains and authorship labels, with editorial review to check that claims and metrics are supported.
outcomes:
  - Every project now declares how it was built, which is the point of the exercise.
  - Shipped-title counts come from the project collection; CV wording is checked against the portfolio sources.
external_url: https://github.com/AlexMollard/alexmollard-portfolio
build_mode: Agent-directed
build_note: >-
  This site is itself agent-directed work, and disclosing that is the whole reason the label exists. I set the direction, judge the writing, and reject what does not hold up - including the parts of an automated audit that turned out to be wrong. The agent does the implementation and the verification runs: headless browser checks for layout and accessibility, a real build before anything lands. If you want to see how I direct this kind of work rather than read about it, the commit history is public.
---
The schema validates structure; it cannot verify achievements or measurements.
