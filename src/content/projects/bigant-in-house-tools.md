---
title: Big Ant In-House Tools Suite
date: 2026-04-09
category: Professional
summary: Internal tooling and automation suite spanning memory diagnostics, crash reporting, CI/developer workflow scripts, and distributed QA orchestration for large-scale automated game validation.
role: Designed and implemented multiple production tools used by programmers and QA, including memory analysis workflows, crash triage pipelines, script ecosystem migration, and distributed automated crash testing.
media_images: []
engine: Proprietary Studio Engine
api: Other
features:
  - Memory Mapper for CSV-driven leak and waste analysis
  - Big Ant Crash Handler with WER-based dump/log capture and crash grouping
  - CSX migration of internal automation scripts from Python
  - Discord-managed QA agent network using websockets for multi-instance crash detection
performance_metrics:
  - Reduced manual crash triage overhead through automatic dump/log collection
  - Enabled unattended multi-machine validation workflows coordinated through Discord
  - Improved script maintainability by consolidating workflows into CSX
external_url: https://www.bigant.com/
featured: false
---

This project represents a collection of in-house production tools I built to reduce engineering and QA friction across multiple shipped titles.

Memory Mapper parses CSV exports from our engine to make memory leaks and waste visible quickly, helping identify high-impact allocations without digging manually through raw dumps.

Big Ant Crash Handler hooks into Windows Error Reporting (WER) to capture crash dumps and logs automatically, then forwards them to a remote directory with grouping so recurring crash signatures are easier to triage.

I also migrated key internal scripts from Python to CSX, including tooling for commit-box monitoring, push-to-commit flows, and project validation tasks.

Finally, I built the Big Ant QA Agent, a Discord-driven automated test orchestration system that launches and manages multiple game instances over websockets, reports crashes directly to Discord, and posts callstacks and logs so developers can investigate without remoting into test machines.
