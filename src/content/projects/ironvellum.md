---
title: Ironvellum
summary: An offline-first Android application for workout planning and logging, with local Room storage, CSV imports and optional Supabase backup. Built through agent-directed development with emulator-based validation.
date: 2026-09-23
category: Hobby
role: "Creator and sole programmer. I own product direction, scoring/planning models, architecture and validation; I direct and review agent-assisted implementation."
media_images:
  - /media/hobbies/ironvellum/plan-log-sets.webp
  - /media/hobbies/ironvellum/finish-progress-veil.webp
engine: Android (Kotlin, Jetpack Compose)
domain: Applications
features:
  - Effort-first plan builder that turns days, equipment, goal and session length into a week of hard sets with a floor for every muscle, a cap so none is buried, and days spaced for recovery
  - Per-lift set schemes - straight sets, a top set with back-offs, drop sets, or a custom mix - with rep ranges, double progression, and back-offs rounded to the plates the lifter owns
  - Live workout logging with reps-in-reserve or RPE, supersets, hold timers, lock-screen rest controls, and a plate calculator that finds every exact build
  - Body-scaled strength scoring using an allometric bodyweight exponent, so a lighter lifter is not permanently outranked for being light, and one estimated-1RM rule shared by every PR, chart and leaderboard
  - Movement catalogue with line art, custom exercises and calisthenics progression paths
  - Plain gym words by default with an opt-in themed vocabulary, routed through one vocabulary layer that a test enforces across the whole UI
  - Offline-first Room storage as the source of truth, with optional Supabase backup, friends, groups and leaderboards behind row level security
  - Import from Strong, Hevy and FitNotes CSV exports; optional read-only Health Connect, with body measurements and health data never leaving the device
performance_metrics:
  - Pure Kotlin domain logic with unit tests, plus instrumented Android tests and lint checks
  - Local validation includes build, unit tests, emulator tests and optional Supabase schema assertions
  - Emulator-based testing keeps destructive test operations separate from the owner's phone
problem: Most trackers reward total kilograms while plans guess at volume, so scores can misrepresent effort and machine load.
approach:
  - Kept scoring, planning, progression and skill rules in pure Kotlin, separate from Android and covered by unit tests.
  - Made Room authoritative and the cloud a backup only, routing every write through a single repository path.
  - Versioned the hosted schema with a baseline, idempotent patches and a drift check.
  - Put the release gate on the local machine rather than billed CI, and audited every first-use and live-workout screen on an emulator with before-and-after screenshots.
outcomes:
  - Workout planning and logging run locally on Android, with optional cloud features.
  - The app is fully usable with no account and no backend.
  - Anyone can point the cloud at their own Supabase project, hosted or self-hosted, instead of the shared one.
external_url: https://github.com/AlexMollard/Ironvellum
evidence_links:
  - label: Agent permissions and local validation
    url: https://github.com/AlexMollard/Ironvellum/blob/main/AGENTS.md
build_mode: Agent-directed
build_note: >-
  Ironvellum is built by agents working under rules I set in the repository - what they may commit and push on their own, what stays my call (force-pushes, history rewrites, releases), and a local gate every change has to pass. CI is manual-only by design, so the verification floor is the gate itself: unit, instrumented, lint, and the Supabase schema assertions, run on an emulator to keep destructive test operations off the personal device. Every UI change also has to be shown working in an emulator screenshot before it counts as done.
spotlight_order: 2
---
