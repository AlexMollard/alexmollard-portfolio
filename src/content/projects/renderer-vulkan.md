---
title: AetherCore
summary: An editor-first Vulkan game engine for 2D and 3D games, with a GPU-driven renderer, hot-reloadable C# gameplay, owner-authoritative multiplayer with full NAT traversal, and an end-to-end asset and publishing pipeline.
date: 2026-09-06
category: Big Project
role: Designed and built the engine architecture, Vulkan renderer, editor and Launcher, networking stack, managed scripting bridge, asset pipeline, diagnostics, and project tooling.
media_images:
  - /media/hobbies/aethercore/editor.webp
  - /media/hobbies/aethercore/editor-2d.webp
  - /media/hobbies/aethercore/launcher.webp
engine: AetherCore
api: Vulkan
domain: Graphics
features:
  - Render graph with bindless descriptors, buffer device address, and GPU-driven draw culling, feeding tiled lighting, cascaded and local shadows, contact shadows, GTAO, screen-space reflections, volumetric fog, bloom, depth of field, histogram auto-exposure, and a tonemapper with eight selectable operators
  - Owner-authoritative multiplayer over ENet - network identity components, session state, and host-to-client and multicast RPCs callable from script - reached through a cheapest-first connect ladder of LAN broadcast, UPnP/NAT-PMP/PCP port mapping, STUN hole punching, rendezvous signalling, and opt-in TURN relay, with no port forwarding at any rung
  - Editor-first 2D and 3D workflow with a standalone project Launcher, dockable viewport and inspectors, sprite slicing, animation timelines, chunked tilemaps, linked prefab instances, a command-based undo system, and autosave with crash recovery
  - Hot-reloadable .NET 10 C# gameplay SDK with collectible load contexts, inspector-exposed script fields, F5 rebuild, one-click Visual Studio debugging, and a managed EditorGui immediate-mode API for writing editor tooling in C#
  - Jolt 3D physics and Box2D 2D physics with ragdolls, character controllers, script-driven weld and rope constraints, and colliders generated from sprites and tilemaps
  - Retained UI system with per-element custom shaders, inline rich-text effect spans, GPU curve text rendering, text editing, scrolling, and gamepad navigation
  - Asset pipeline with glTF ingestion, freshness-checked project-wide baking, texture transcoding, material presets, zstd-compressed engine and project PAKs, and a virtual file system
  - Diagnostics with Tracy CPU and GPU instrumentation, a frame timeline panel, tagged allocation tracking over mimalloc with a compile-time tracking ceiling, render-pass timings, and resource inspection
  - Built-in MCP server so a coding agent can drive a live editor - managing panels, querying the render graph, capturing screenshots, and entering play mode
performance_metrics:
  - 1,271 automated test cases across 152 suites covering rendering, physics, scripting, assets, networking, and memory
  - CI runs static architecture checks and a Windows build-and-unit pass on every push; editor and runtime GPU smokes run locally as a pre-merge gauntlet
  - An automated GPU abstraction guard fails the build when engine code reaches past the abstraction into the Vulkan backend
  - Roughly 164,000 lines of C++ across 685 files, with a 13,000-line C# gameplay SDK
  - Immutable render-frame extraction keeps the render thread independent from mutable ECS state
  - Per-tag allocation counters with a compile-time tracking ceiling, so memory attribution costs nothing in retail builds
  - Separate development, ship, and retail build policies keep diagnostics available without leaking them into release builds
  - Windows and Linux build presets, with tagged releases producing a self-contained installer that needs no compiler or Vulkan SDK
problem: I wanted the renderer, authoring tools, scripting layer, networking, and shipping workflow to evolve as one usable engine - not become another technically interesting renderer demo that never supported making a game.
approach:
  - Kept engine-facing GPU abstractions separate from the Vulkan backend and moved frame data through immutable render packets rather than reading the ECS from the render thread.
  - Made reflection a single source of truth for editable component fields across the inspector, scene serializer, script bindings, and editor-control surface.
  - Built the editor, standalone Launcher, managed gameplay SDK, diagnostics, and asset pipeline around the same project model so iteration and shipping use the same foundations.
  - Designed the netcode so the owner of an entity simulates it - no round trip on your own input and no correction - and made connectivity degrade through a cheapest-first ladder so a game gets LAN play, NAT traversal, and relay fallback without a player ever forwarding a port.
  - Treated the engine's own games as the acceptance test, building each subsystem against a project that needed it rather than against a demo scene.
outcomes:
  - Eight projects live in the repository - playable games, a physics sandbox, and a networked multiplayer test bed - so every subsystem is exercised by something being built with it.
  - Projects move from imported assets and authored scenes to hot-reloaded gameplay, networked sessions, and packaged standalone builds without leaving the engine workflow.
  - Tagging a release publishes a self-contained editor that someone can install and build games with, without a compiler, the Vulkan SDK, or the source repository.
  - The Launcher and Editor can be driven and inspected programmatically for reproducible scene authoring, screenshots, diagnostics, and end-to-end validation.
external_url: https://github.com/AlexMollard/AetherCore
featured: true
spotlight_order: 1
---

AetherCore is the project where my interests in graphics, engine architecture, networking, tooling, and debugging meet. The goal is not to imitate a commercial editor feature-for-feature; it is to understand the boundaries well enough that each part remains inspectable, replaceable, and useful while a real game is being built with it.

The engine supports 2D and 3D projects through the same editor shell and project format. Its Vulkan renderer, C# scripting host, component reflection, physics, netcode, asset processing, diagnostics, and publishing path are designed as connected production systems rather than isolated experiments.

The netcode is the part I am most pleased with architecturally. A session is one host and zero or more clients, every replicated entity has exactly one owner, and the owner simulates it - so your own input never waits on a round trip and never gets corrected. Connecting two players is handled by a ladder that tries each option cheapest-first, from LAN broadcast through router port mapping and STUN hole punching to a rendezvous server, with a TURN relay as an explicit opt-in last resort. No rung asks a player to forward a port.

The other decision I would defend is making the games real. Rather than a demo scene, the repository carries eight projects, and each subsystem was built against one that needed it - the sandbox drove physics constraints and prop tooling, the multiplayer test bed drove RPCs and the connect ladder, and the narrative projects drove the UI, text, and dialogue work. It is a slower way to build an engine and a much better way to find out which parts of it do not actually work.
