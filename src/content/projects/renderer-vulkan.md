---
title: AetherCore
summary: An editor-first Vulkan game engine for 2D and 3D games, with hot-reloadable C# gameplay, reflection-driven tooling, and an end-to-end asset and publishing pipeline.
date: 2026-07-17
category: Big Project
role: Designed and built the engine architecture, Vulkan renderer, editor workflows, managed scripting bridge, asset pipeline, diagnostics, and project tooling.
media_images:
  - /media/hobbies/aethercore/editor.webp
  - /media/hobbies/aethercore/editor-2d.webp
  - /media/hobbies/aethercore/launcher.webp
engine: AetherCore
api: Vulkan
features:
  - Editor-first 2D and 3D workflow with a standalone project Launcher, dockable viewport, hierarchy, inspectors, and authoring tools
  - Render graph with bindless descriptors, buffer device address, GPU-driven culling, tiled lighting, shadows, GTAO, FXAA, and post-processing
  - Hot-reloadable .NET 10 C# gameplay SDK with collectible load contexts and inspector-exposed script fields
  - Reflection-driven component model shared by the inspector, scene serialization, editor control, and automation surfaces
  - glTF ingestion, typed asset identities, texture transcoding, animation processing, virtual file systems, and PAK publishing
  - Built-in diagnostics with Tracy CPU and GPU instrumentation, render-pass timings, resource inspection, validation logging, and live editor control
performance_metrics:
  - Immutable render-frame extraction keeps the render thread independent from mutable ECS state
  - Separate development, ship, and retail build policies keep diagnostics available without leaking them into release builds
  - Automated unit, editor, and runtime GPU smoke validation covers the complete engine workflow
problem: I wanted the renderer, authoring tools, scripting layer, and shipping workflow to evolve as one usable engine—not become another technically interesting renderer demo that never supported making a game.
approach:
  - Kept engine-facing GPU abstractions separate from the Vulkan backend and moved frame data through immutable render packets rather than reading the ECS from the render thread.
  - Made reflection a single source of truth for editable component fields across the inspector, scene serializer, and editor-control surface.
  - Built the editor, standalone Launcher, managed gameplay SDK, diagnostics, and asset pipeline around the same project model so iteration and shipping use the same foundations.
outcomes:
  - A working 2D and 3D editor with project templates, sprite authoring and animation, scene tools, C# gameplay, physics, and Vulkan rendering.
  - Projects can move from imported assets and authored scenes to hot-reloaded gameplay and packaged standalone builds without leaving the engine workflow.
  - The Launcher and Editor can be driven and inspected programmatically for reproducible scene authoring, screenshots, diagnostics, and end-to-end validation.
external_url: https://github.com/AlexMollard/AetherCore
featured: true
spotlight_order: 1
---

AetherCore is the project where my interests in graphics, engine architecture, tooling, and debugging meet. The goal is not to imitate a commercial editor feature-for-feature; it is to understand the boundaries well enough that each part remains inspectable, replaceable, and useful while a real game is being built with it.

The engine now supports both 2D and 3D projects through the same editor shell and project format. Its Vulkan renderer, C# scripting host, component reflection, asset processing, diagnostics, and publishing path are designed as connected production systems rather than isolated experiments.
