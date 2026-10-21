---
title: RS3 Grand Exchange Analyzer
summary: A Rust desktop application that scores RuneScape 3 Grand Exchange market history to surface profitable item flips, backed by a Python data collection pipeline and SQLite.
date: 2026-04-23
category: Hobby
role: Solo project. I designed scoring and the data pipeline, wrote the first version by hand, then shifted implementation to agent direction while retaining design and review.
media_images:
  - /media/hobbies/rs3-analyzer/trading-desk.png
  - /media/hobbies/rs3-analyzer/watchlist.png
engine: None
domain: Tools
features:
  - Multi-factor flip scoring across ROI, volume, profit, volatility, and data reliability
  - Automatic filtering of unrealistic flips by volume, ROI, and price sanity bounds
  - Item tiering from Diamond to Crash based on profitability
  - Persistent favourites and customisable budget, ROI, and profit filters
  - Python collector backfilling market history into SQLite from the Weirdgloop API
problem: With thousands of items, raw prices make it hard to find flips with enough liquidity and spread.
approach:
  - Scored ROI, log-scaled volume, profit, volatility and reliability; penalized spread and filtered price anomalies.
  - Built a Rust desktop UI with a Python collector that stores compressed Weirdgloop API history in SQLite.
outcomes:
  - Collects market history into SQLite and presents ranked, filterable flip opportunities.
external_url: https://github.com/AlexMollard/rs3_analyzer
build_mode: Agent-directed
build_note: >-
  I wrote the first version by hand and then shifted to directing agents through a harness once the shape of the scoring model was settled. The judgement calls that make it work - which factors to weight, how to log-scale volume, where to cut vendor trash out of the results - are mine; a lot of the implementation and the Rust UI plumbing was agent-written to my spec and reviewed by me.
---
