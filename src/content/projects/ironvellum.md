---
title: Ironvellum
summary: An offline-first Android strength app on F-Droid that plans a week around effort, logs it set by set, and scores each set by what it cost the lifter - body-scaled, priced per implement, and difficulty-weighted.
date: 2026-09-23
category: Hobby
role: I own the product direction, the scoring and planning models, and the standing rules the agents work under, and I review what lands. The implementation is agent-directed.
media_images:
  - /media/hobbies/ironvellum/plan-log-sets.webp
  - /media/hobbies/ironvellum/finish-progress-veil.webp
engine: Android (Kotlin, Jetpack Compose)
domain: Tools
features:
  - Effort-first plan builder that turns days, equipment, goal and session length into a week of hard sets with a floor for every muscle, a cap so none is buried, and days spaced for recovery
  - Per-lift set schemes - straight sets, a top set with back-offs, drop sets, or a custom mix - with rep ranges, double progression, and back-offs rounded to the plates the lifter owns
  - Live workout logging with reps-in-reserve or RPE, supersets, hold timers, lock-screen rest controls, and a plate calculator that finds every exact build
  - Body-scaled strength scoring using an allometric bodyweight exponent, so a lighter lifter is not permanently outranked for being light, and one estimated-1RM rule shared by every PR, chart and leaderboard
  - A 575-movement catalogue with line art, lifter-made exercises, and 125 calisthenics skills on progression paths, each gated on the one before it with a written standard
  - Plain gym words by default with an opt-in themed vocabulary, routed through one vocabulary layer that a test enforces across the whole UI
  - Offline-first Room storage as the source of truth, with optional Supabase backup, friends, groups and leaderboards behind row level security
  - Import from Strong, Hevy and FitNotes CSV exports; optional read-only Health Connect, with body measurements and health data never leaving the device
performance_metrics:
  - 1,970 unit tests and 361 instrumented tests, counted from the @Test annotations in the public repository
  - Roughly 102,000 lines of Kotlin across 307 app source files by a direct line count
  - A local release gate (build, unit, lint, instrumented, and Supabase schema assertions) that runs in about four and a half minutes on a cold-booted emulator
problem: Most trackers add up kilograms, which rewards being heavy and hides how much load a machine really transmits, and most plans are guesswork about volume - so the number you chase drifts away from the training that earned it.
approach:
  - Kept scoring, planning, progression and skill rules in a pure Kotlin domain layer with no Android dependency, so the rules are covered by fast unit tests.
  - Made Room authoritative and the cloud a backup only, routing every write through a single repository path.
  - Kept the hosted schema as one baseline plus idempotent patches, with a test that fails the gate if a patch drifts from the baseline.
  - Put the release gate on the local machine rather than billed CI, and audited every first-use and live-workout screen on an emulator with before-and-after screenshots.
outcomes:
  - Published on F-Droid, with releases shipped by pushing a version tag.
  - The app is fully usable with no account and no backend.
  - Anyone can point the cloud at their own Supabase project, hosted or self-hosted, instead of the shared one.
external_url: https://github.com/AlexMollard/Ironvellum
build_mode: Agent-directed
build_note: >-
  Ironvellum is built by agents working under rules I set in the repository - what they may commit and push on their own, what stays my call (force-pushes, history rewrites, releases), and a local gate every change has to pass. CI is manual-only by design, so the verification floor is the gate itself: unit, instrumented, lint, and the Supabase schema assertions, run on an emulator so a real phone's training history is never at risk. Every UI change also has to be shown working in an emulator screenshot before it counts as done.
---

Ironvellum started from one complaint: the number a training app shows you should mean something. Summing kilograms does not, so the app prices each set by what it cost the lifter - scaled to bodyweight, corrected for the implement, and weighted by how hard the movement is.

It grew into a planner as well as a log. The week is built around effort - hard sets taken close to failure, enough for every muscle and not too much for any - and each lift carries its own set scheme, so a top set with back-offs or a drop set is planned, logged and progressed as one thing.

The design decision I would defend is keeping the device authoritative. Everything works offline, an account only ever backs up training, and body measurements and health data stay on the phone. The cloud is there for friends, groups and a leaderboard, not as a dependency.
