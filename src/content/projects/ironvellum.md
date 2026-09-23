---
title: Ironvellum
summary: An offline-first Android training tracker that scores a set by what it costs the lifter - body-scaled, priced per implement, and difficulty-weighted - with a calisthenics skill tree and optional Supabase backup.
date: 2026-09-23
category: Hobby
role: I own the product direction, the scoring model, and the standing rules the agents work under, and I review what lands. The implementation is agent-directed.
media_images:
  - /media/hobbies/ironvellum/today-train-session.webp
  - /media/hobbies/ironvellum/skills-deeds-share.webp
engine: Android (Kotlin, Jetpack Compose)
domain: Tools
features:
  - Body-scaled strength scoring using an allometric bodyweight exponent, so a lighter lifter is not permanently outranked for being light
  - Per-implement load pricing that converts the marked weight on sleds, smith bars, pin stacks, and pulleys into the load actually carried
  - Calisthenics skill tree of 106 techniques across fourteen lines, each rung gated on the one before it with a written claim standard
  - Guided first run that turns days, equipment, and goal into an editable week built from a 214-movement catalogue
  - Progressive overload with strength and hypertrophy rep bands, per-movement load steps, and a stall rule that deloads instead of repeating a failed session
  - Offline-first Room storage as the source of truth, with optional Supabase backup behind row level security that syncs training only
  - Optional read-only Health Connect integration; body measurements and health data never leave the device
  - Plain text, Wordle-style session share card with no link and no image
performance_metrics:
  - 362 unit tests and 81 instrumented tests, counted directly from the @Test annotations in the public repository
  - Roughly 44,000 lines of Kotlin across 151 files by a direct line count of the app source
  - 16 ordered Supabase migrations, with SQL assertions that check row security, function grants, and writable columns where no Kotlin test can see
problem: Most trackers add up kilograms, which rewards being heavy and hides how much load a machine really transmits, so the number you chase drifts away from the training that earned it.
approach:
  - Kept scoring, progression, titles, and skill rules in a pure Kotlin domain layer with no Android dependency, so the rules are covered by fast unit tests.
  - Made Room authoritative and the cloud a backup only, routing every write through a single repository path.
  - Put the release gate on the local machine - build, unit, lint, instrumented, and backend schema assertions - rather than billed CI.
outcomes:
  - The app is fully usable with no account and no backend.
  - Anyone can point the cloud at their own Supabase project, hosted or self-hosted, instead of the shared one.
external_url: https://github.com/AlexMollard/Ironvellum
build_mode: Agent-directed
build_note: >-
  Ironvellum is built by agents working under rules I set in the repository - what they may commit and push on their own, what stays my call (force-pushes, history rewrites, releases), and a local gate every change has to pass. CI is manual-only by design, so the verification floor is the gate itself: unit, instrumented, lint, and the Supabase schema assertions, run on an emulator so a real phone's training history is never at risk.
---

Ironvellum started from one complaint: the number a training app shows you should mean something. Summing kilograms does not, so the app prices each set by what it cost the lifter - scaled to bodyweight, corrected for the implement, and weighted by how hard the movement is.

The design decision I would defend is keeping the device authoritative. Everything works offline, an account only ever backs up training, and body measurements and health data stay on the phone. The cloud is there for a feed and a leaderboard, not as a dependency.
