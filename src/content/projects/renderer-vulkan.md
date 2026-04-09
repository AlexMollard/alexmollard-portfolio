---
title: Render Graph PBR Renderer
summary: A real-time renderer built around a dependency-driven render graph with clustered lighting and physically based shading.
date: 2026-04-01
category: Big Project
media_images: []
engine: Custom ECS Engine
api: Vulkan
features:
  - Render Graph
  - Clustered Lighting
  - PBR BRDF
  - GPU Frustum Culling
  - Temporal AA
performance_metrics:
  - 180 FPS at 1080p on RTX 3070
  - 2.4 ms GPU frame time (lighting + post)
  - 1.1 ms CPU frame time
featured: true
---

This project focuses on deterministic frame scheduling, explicit synchronization, and tooling for frame-time analysis.
