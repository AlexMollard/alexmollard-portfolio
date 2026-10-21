---
title: AntHill
date: 2026-10-21
category: Professional
summary: "My largest current project: a searchable studio asset catalogue with history and artist workflows, supporting an ongoing SVN-to-Lore migration."
role: "Creator and sole programmer; I lead product, architecture and implementation across indexing, web, desktop, data and Lore integration."
media_images: []
engine: C# / .NET · PostgreSQL · Lore
domain: Tools
features:
  - Cross-project asset discovery with previews, filters, tags and version history
  - Automatic indexing of source-controlled asset facts, separate from curated metadata
  - Web catalogue with comments, mentions, work claims and administration
  - Desktop workflows for selective local assets and project switching
  - Per-asset updates and publishing with dependency-aware transfers
  - Conflict visibility and recovery without treating advisory claims as exclusive locks
problem: "Studio assets were split across project branches, personal folders and manual lists, making reuse and coordination difficult."
approach:
  - "Separate source-control facts from curated tags, notes and comments."
  - "Build an indexer, shared data layer, web catalogue and desktop client as one product."
  - "Use selective workspaces so artists bring only the assets they need locally."
  - "Transfer assets with their dependencies and history between shared and project workflows."
  - "Use claims to coordinate work, with notices and recovery for overlapping edits."
spotlight_order: 1
outcomes:
  - "Catalogue, indexing and desktop workflows are implemented; studio migration and rollout remain ongoing."
  - "Search source-derived facts and curated metadata across projects."
  - "Work with selected assets, version history and visibility of overlapping edits."
---
AntHill is my largest current project: a searchable asset catalogue connected to artists' desktop workflows. It is intended to support a studio-wide move from fragmented lists and SVN-based asset management to Lore; migration and rollout are ongoing.

The features above describe the implemented product scope. Full studio asset coverage and legacy-data ingestion remain work in progress.