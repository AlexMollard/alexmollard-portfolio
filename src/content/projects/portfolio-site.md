---
title: This Portfolio
summary: The site you are reading - a static Astro build with a filterable project archive, a tabbed case-study overlay, and a CV generated from the same content collection.
date: 2026-09-21
category: Hobby
role: I set the direction, the information architecture, and the editorial standard, and I review every change. The implementation is agent-directed, which is also why this entry exists - it would be strange to label the other projects and quietly leave this one out.
media_images:
  - /media/hobbies/portfolio/hero.webp
  - /media/hobbies/portfolio/case-study.webp
engine: Astro
domain: Tools
features:
  - Single static page built from a typed Astro content collection of every project
  - Filterable archive with search, domain and year facets, URL-synced state, and lazy paging
  - Tabbed case-study overlay with focus trapping, keyboard tab navigation, and image zoom
  - One-page CV rendered to PDF from the same sourced content rather than maintained separately
  - Authorship metadata on every project so agent-directed work is labelled in the UI
problem: A portfolio is the one artifact a hiring manager actually reads, and mine had drifted - a stale job title, projects described in dense unreadable blocks, and claims with no evidence behind them.
approach:
  - Ran a parallel read-only audit across positioning, copy, credibility, information architecture, accessibility, and the content model, then verified every finding at the cited line before acting on it.
  - Moved editorial rules into the schema - explicit domains, real metrics only, and an authorship field - so a future entry cannot quietly break them.
outcomes:
  - Every project now declares how it was built, which is the point of the exercise.
  - The CV, the share image, and the shipped-title counts are all derived from the content collection, so they cannot drift from the projects they describe.
external_url: https://github.com/AlexMollard/alexmollard-portfolio
build_mode: Agent-directed
build_note: >-
  This site is itself agent-directed work, and disclosing that is the whole reason the label exists. I set the direction, judge the writing, and reject what does not hold up - including the parts of an automated audit that turned out to be wrong. The agent does the implementation and the verification runs: headless browser checks for layout and accessibility, a real build before anything lands. If you want to see how I direct this kind of work rather than read about it, the commit history is public.
---

I rebuilt this site the same way I build AetherCore: I decide what it should say and how it should be structured, an agent harness does the implementation, and nothing lands without being verified in a real browser and a real build.

The interesting part was not the markup. It was making the editorial rules structural - domains and authorship are typed fields rather than conventions, metrics that are not measurements get rejected, and the CV is generated from the same content collection the cards read, so the site cannot claim something the projects do not.
