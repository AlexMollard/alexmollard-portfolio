---
title: TIEBREAK
date: 2024-08-22
category: Professional
summary: A multi-platform licensed tennis game with career modes, online play, and a large UI surface built across two interface systems.
role: Owned most of the UI implementation, built complete game modes, and helped bridge the in-house widget system with the move to NoesisGUI.
media_images:
  - /media/professional/tiebreak/tiebreak-steam-1.webp
  - /media/professional/tiebreak/tiebreak-steam-2.webp
  - /media/professional/tiebreak/tiebreak-steam-3.webp
engine: Proprietary Studio Engine
api: Other
features:
  - Real-time gameplay systems
  - Input and responsiveness tuning
  - Performance optimization
  - Platform release support and adaptation
  - Production QA and optimization for expansion content
performance_metrics:
  - Shipping production title
  - Runtime stability and frame-time tuning across target platforms
  - Platform expansion delivery for TIEBREAK+
problem: TIEBREAK still depended on the studio's legacy widget framework while other programmers were moving to NOESIS GUI, leaving a large amount of UI and entire game modes to be delivered under severe schedule pressure.
approach:
  - Reverse-engineered the useful behaviours provided by NOESIS and reproduced them within the existing in-house widget system.
  - Took practical ownership of the legacy UI stack so the rest of the team could move to newer projects without blocking TIEBREAK.
  - Coordinated directly with server developers and implemented complete game-mode flows rather than stopping at individual screens.
outcomes:
  - Delivered the UI and complete game modes for the initial release and later platform work.
  - Kept the existing UI working while the project moved to NoesisGUI.
  - Became the main programmer responsible for the legacy widget system.
external_url: https://store.steampowered.com/app/2264340/TIEBREAK_Official_game_of_the_ATP_and_WTA/
featured: true
spotlight_order: 4
---

TIEBREAK was the culmination of my UI work at Big Ant. As the studio shifted to NOESIS GUI for future titles, I was the team member with the deepest understanding of the legacy in-house widget system. Rather than block progress, I reverse-engineered what NOESIS provided and replicated it entirely using the existing widget framework — allowing other programmers to move to newer titles while I kept TIEBREAK's UI running. I effectively led UI delivery on the project, working under extreme timelines including multi-day sprints to fully implement entire game modes end-to-end, coordinating directly with server developers to get data flowing in both directions.
