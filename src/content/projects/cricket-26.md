---
title: Cricket 26
date: 2025-10-01
category: Professional
summary: A multi-platform cricket game released on PC, PlayStation, and Xbox.
role: I fully implemented the title's client-side WebSocket stack, including cross-platform TLS handshake support, and took that networking work through TRC certification for release, alongside building in-house tooling.
media_images:
  - /media/professional/cricket-26/cricket-26-1.webp
  - /media/professional/cricket-26/cricket-26-2.webp
  - /media/professional/cricket-26/cricket-26-3.webp
engine: Proprietary Studio Engine
features:
  - Cricket franchise systems support
  - Multi-platform release workflow
  - Client-side websocket implementation
  - Cross-platform TLS handshake implementation
domain: Networking
problem: The title needed a production-ready websocket client with secure TLS behaviour that remained consistent across every supported platform and its different networking constraints.
approach:
  - Implemented the client-side websocket stack and platform-specific TLS handshake path inside the studio engine.
  - Worked alongside certification and release requirements so the networking implementation was validated under the same constraints as the shipped game.
  - Continued improving in-house tooling around the release workflow rather than treating networking as an isolated feature.
outcomes:
  - The websocket client and its TLS handshake paths shipped in the released game on PC, PlayStation, and Xbox.
  - The title passed platform certification with the networking stack in place.
  - The team kept in-house tooling improvements around the release workflow.
spotlight_order: 3
---

My Cricket 26 work centered on in-house tooling and platform readiness, but the major recent milestone was fully implementing the client-side websocket layer for the title. I also implemented proper TLS handshakes across all target platforms to ensure secure and consistent network connectivity in production. Alongside that networking work, I continued driving TRC certification and internal tool improvements for the wider team.
