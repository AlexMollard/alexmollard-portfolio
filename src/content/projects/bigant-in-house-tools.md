---
title: Big Ant In-House Tools Suite
date: 2026-04-09
category: Professional
summary: Internal tooling and automation suite spanning memory diagnostics, crash reporting, CI/developer workflow scripts, and distributed QA orchestration for large-scale automated game validation.
role: Designed and implemented multiple production tools used by programmers and QA, including memory analysis workflows, crash triage pipelines, script ecosystem migration, and distributed automated crash testing. Each one started with the people who would use it - I sat down with them, wrote up what they actually needed, and documented the finished tool so it did not depend on me.
media_images: []
engine: Proprietary Studio Engine
domain: Tools
features:
  - Internal memory-analysis tool for CSV-driven leak and waste analysis
  - Internal crash-capture pipeline with WER-based dump/log capture and crash grouping
  - CSX migration of internal automation scripts from Python
  - Discord-managed distributed QA orchestrator using websockets for multi-instance crash detection
problem: Memory investigation, crash triage, release checks, and multi-machine QA all depended on repetitive manual work that made failures slower to reproduce and harder to group.
approach:
  - Built focused tools around the existing studio workflow instead of asking programmers and QA to adopt an entirely separate platform.
  - Converted raw memory and crash data into grouped, searchable evidence that could be acted on without manually inspecting every dump or machine.
  - Used Discord and websockets as a lightweight control and reporting surface for distributed automated game validation.
  - Worked directly with the programmers and QA who would use each tool, writing up their requirements first so the tool solved the real problem rather than the one I assumed.
  - Wrote and maintained usage documentation for every tool so teammates could get a good result without asking me how it works.
outcomes:
  - Reduced the time required to identify recurring crashes and high-impact memory waste.
  - Enabled unattended testing across multiple game instances with callstacks and logs delivered directly to the team.
  - Consolidated fragile automation into a more maintainable CSX toolchain used across production workflows.
  - Tools that teammates adopted and ran themselves, documented well enough that my involvement was not a dependency.
external_url: https://www.bigant.com/
spotlight_order: 2
---

This project represents a collection of in-house production tools I built to reduce engineering and QA friction across multiple shipped titles.

An internal memory-analysis tool parses CSV exports from our engine to make memory leaks and waste visible quickly, helping identify high-impact allocations without digging manually through raw dumps.

An internal crash-capture pipeline hooks into Windows Error Reporting (WER) to capture crash dumps and logs automatically, then forwards them to a remote directory with grouping so recurring crash signatures are easier to triage.

I also migrated key internal scripts from Python to CSX, including tooling for commit gating, build validation, and project validation tasks.

Finally, I built an internal distributed QA orchestrator, a Discord-driven automated test orchestration system that launches and manages multiple game instances over websockets, reports crashes directly to Discord, and posts callstacks and logs so developers can investigate without remoting into test machines.
