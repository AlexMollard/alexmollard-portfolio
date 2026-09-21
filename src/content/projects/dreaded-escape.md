---
title: DreadedEscape
summary: A multiplayer UE5 horror escape game built with a small team, covering project setup, Steamworks integration, level construction, and netcode.
date: 2024-03-29
category: Big Project
role: Programmer on a three-person team; I set up the UE5 project and Git LFS pipeline, built the main menus and Steamworks integration, added the multiplayer layer, fixed input capture issues, and built the house map and terrain from team design work by Declan Rogers.
media_images: []
engine: Unreal Engine 5
domain: Gameplay
features:
  - Real-time cooperative multiplayer sessions
  - Steamworks integration for session and menu flow
  - Puzzle-driven horror escape gameplay
  - Level and terrain construction in UE5
  - Automated build pipeline via GitHub Actions
problem: The team wanted a co-op horror experience where players solve puzzles together under time pressure, which required reliable multiplayer sessions on top of a UE5 base.
approach:
  - Bootstrapped the UE5 project, Git LFS asset handling, and a CI build workflow so the team could iterate on one codebase.
  - Implemented the multiplayer layer and Steamworks-backed menus, then built the house map and terrain the puzzles live in.
outcomes:
  - Shipped a playable multiplayer horror prototype built collaboratively by three programmers.
external_url: https://github.com/AlexMollard/DreadedEscape
---

I built DreadedEscape with two friends as a multiplayer UE5 horror game. My commits covered the project setup and LFS pipeline, the menus and Steamworks integration, the multiplayer layer, the house map and terrain, and fixes such as the main-menu mouse capture. Declan Rogers designed the game and contributed map and programming work, and Connor Young maintained the build automation, so the project reflects a real division of labour rather than solo development.
