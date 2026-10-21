---
title: Big Ant Memory and Crash Diagnostics
date: 2026-04-09
category: Professional
summary: "Internal tools for memory-allocation analysis and crash capture, packaging and investigation."
role: "Created the crash-reporting system as sole programmer; improved an established memory-analysis tool."
media_images: []
engine: Proprietary Studio Engine
domain: Tools
features:
  - CSV-driven analysis of engine memory allocations
  - Windows Error Reporting crash capture for dumps and logs
  - Crash grouping to help identify recurring signatures
  - Crash bundles with callstacks and run logs for investigation
problem: "Investigating memory allocations and recurring crashes required assembling evidence from dumps and affected runs."
approach:
  - "Improved an existing CSV memory-analysis tool and allocation-map responsiveness."
  - "Captured crash dumps, logs and run evidence through Windows Error Reporting."
  - "Kept a local crash bundle when the network destination was unavailable."
  - "Moved symbol and callstack lookup off the UI thread."
  - "Grouped crash reports to help triage recurring signatures."
spotlight_order: 3
outcomes:
  - "Programmers can inspect engine allocations in a focused analysis tool."
  - "Crash dumps and logs are collected for investigation."
  - "Callstacks and run logs accompany crash reports."
---
I improved an existing memory-analysis tool and created a separate crash-reporting system. Together, they help programmers inspect allocation data and collect crash evidence for investigation.

Related work: [developer automation and QA prototyping](/projects/bigant-qa-automation/).