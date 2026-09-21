---
title: DreadedEscape
summary: An unfinished weekend prototype where two friends and I got co-op multiplayer, Steamworks sessions, and a playable map running in Unreal Engine 5.
date: 2024-03-29
category: Hobby
role: One of three people on a weekend project. I set up the UE5 project and Git LFS pipeline, wired the main menus and Steamworks session flow, stood up the multiplayer layer, and built the house map and terrain. Declan Rogers designed the game and contributed map and programming work; Connor Young maintained the build automation.
media_images: []
engine: Unreal Engine 5
domain: Gameplay
features:
  - Co-op multiplayer sessions in Unreal Engine 5
  - Steamworks session and menu flow
  - House map and terrain built for puzzle traversal
  - Git LFS and GitHub Actions build pipeline for a three-person team
problem: I wanted hands-on time with Unreal Engine 5's multiplayer and Steamworks session stack rather than reading about it, so we gave ourselves a weekend and a co-op horror premise to force the work.
approach:
  - Bootstrapped the UE5 project, Git LFS asset handling, and a CI build workflow so three people could work on one codebase immediately.
  - Built the session and menu flow on Steamworks, then the map the puzzles were meant to live in.
outcomes:
  - Got co-op sessions, menus, and a traversable map working, which is where the project stopped - it was never finished and is not a shipped game.
  - Came away with practical experience of UE5's replication and Steamworks session model, which is the reason it is listed here.
external_url: https://github.com/AlexMollard/DreadedEscape
---

This was a weekend project with two friends, not a finished game, and I am listing it for the experience rather than the result. I wanted to use Unreal Engine 5's multiplayer and Steamworks session stack directly, so we picked a co-op horror premise and built until the weekend ran out. My commits cover the project and LFS setup, the menus and Steamworks integration, the multiplayer layer, the map and terrain, and fixes such as the main-menu mouse capture. It reached playable co-op and stopped there.
