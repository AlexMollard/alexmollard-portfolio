---
title: RS3 Grand Exchange Analyzer
summary: A Rust desktop application that scores RuneScape 3 Grand Exchange market history to surface profitable item flips, backed by a Python data collection pipeline and SQLite.
date: 2026-04-23
category: Hobby
role: Solo developer.
media_images: []
engine: None
domain: Tools
features:
  - Multi-factor flip scoring across ROI, volume, profit, volatility, and data reliability
  - Automatic filtering of unrealistic flips by volume, ROI, and price sanity bounds
  - Item tiering from Diamond to Crash based on profitability
  - Persistent favourites and customisable budget, ROI, and profit filters
  - Python collector backfilling market history into SQLite from the Weirdgloop API
problem: Flipping in the Grand Exchange means guessing which of thousands of items have enough liquidity and spread to be worth trading, from raw price history that gives no guidance.
approach:
  - Scored each item with weighted factors, including a logarithmic volume score and a spread penalty, and filtered out data anomalies such as sub-100gp vendor trash.
  - Shipped a Rust desktop UI with a Grand Exchange-inspired theme, backed by a Python pipeline that collects and compresses daily market history into SQLite.
outcomes:
  - A working end-to-end pipeline from API collection through to a ranked, filterable list of flips.
external_url: https://github.com/AlexMollard/rs3_analyzer
---

I wrote a Rust desktop application that turns RuneScape 3 Grand Exchange price history into a ranked list of flipping opportunities. Each item is scored on ROI, log-scaled trading volume, absolute profit, volatility, data reliability, spread, and price trend, then filtered to drop illiquid or anomalous results. A companion Python collector pulls history from the Weirdgloop API into a SQLite database, which the app reads at startup.
