---
title: AetherCore
summary: A C++/Vulkan engine with C# tooling and an MCP interface for agent-driven editor inspection, screenshots and structured validation. Developed with Oh my PI and Claude Code.
date: 2026-09-06
category: Big Project
role: "Creator and sole programmer. I own architecture and development, beginning with hand-written C++/Vulkan and now directing, reviewing, verifying, and integrating agent-assisted work."
media_images:
  - /media/hobbies/aethercore/editor.webp
  - /media/hobbies/aethercore/editor-2d.webp
  - /media/hobbies/aethercore/launcher.webp
engine: AetherCore
api: Vulkan
domain: Engine
features:
  - Render graph with bindless descriptors, buffer device address, and GPU-driven draw culling
  - Tiled lighting with cascaded and local shadows, contact shadows, GTAO, and screen-space reflections
  - Post-processing stack covering volumetric fog, bloom, depth of field, histogram auto-exposure, and a tonemapper with eight selectable operators
  - Owner-authoritative multiplayer over ENet - network identity components, session state, and host-to-client and multicast RPCs callable from script
  - Cheapest-first connect ladder of LAN broadcast, UPnP/NAT-PMP/PCP port mapping, STUN hole punching, rendezvous signalling, and opt-in TURN relay, with no port forwarding at any rung
  - Editor-first 2D and 3D workflow with a standalone project Launcher, dockable viewport and inspectors, and linked prefab instances
  - Authoring tools including sprite slicing, animation timelines, chunked tilemaps, a command-based undo system, and autosave with crash recovery
  - Hot-reloadable .NET 10 C# gameplay SDK with collectible load contexts, inspector-exposed script fields, F5 rebuild, and one-click Visual Studio debugging
  - Managed EditorGui immediate-mode API for writing editor tooling in C#
  - Jolt 3D physics and Box2D 2D physics with ragdolls, character controllers, script-driven weld and rope constraints, and colliders generated from sprites and tilemaps
  - Retained UI system with per-element custom shaders, inline rich-text effect spans, GPU curve text rendering, text editing, scrolling, and gamepad navigation
  - Asset pipeline with glTF ingestion, freshness-checked project-wide baking, texture transcoding, material presets, zstd-compressed engine and project PAKs, and a virtual file system
  - Diagnostics with Tracy CPU and GPU instrumentation, a frame timeline panel, tagged allocation tracking over mimalloc with a compile-time tracking ceiling, render-pass timings, and resource inspection
  - Built-in MCP server so a coding agent can drive a live editor - managing panels, querying the render graph, capturing screenshots, and entering play mode
performance_metrics:
  - Automated tests cover rendering, physics, scripting, assets, networking, and memory
  - Static architecture checks and build-and-unit validation are complemented by local editor and runtime GPU smoke tests
  - An automated GPU abstraction guard fails the build when engine code reaches past the abstraction into the Vulkan backend
  - Immutable render-frame extraction keeps the render thread independent from mutable ECS state
  - Per-tag allocation counters with a compile-time tracking ceiling; retail builds strip diagnostics
  - Separate development, ship, and retail build policies keep diagnostics available without leaking them into release builds
  - Windows and Linux build presets, with tagged releases producing a self-contained installer that needs no compiler or Vulkan SDK
problem: I wanted rendering, authoring, scripting, networking and shipping to work together as a usable game engine, not remain a renderer demo.
approach:
  - Separated GPU interfaces from Vulkan and passed immutable render packets to isolate rendering from mutable ECS state.
  - Shared component reflection across the inspector, serializer, script bindings and editor-control API.
  - Built Editor, Launcher, C# SDK, diagnostics and asset processing around one project model.
  - Designed the netcode so the owner of an entity simulates it - no round trip on your own input and no correction - and made connectivity degrade through a cheapest-first ladder so a game gets LAN play, NAT traversal, and relay fallback without a player ever forwarding a port.
  - Treated the engine's own games as the acceptance test, building each subsystem against a project that needed it rather than against a demo scene.
outcomes:
  - MCP tools inspect the live editor, capture screenshots and report structured pass/fail validation.
  - Repository games, a physics sandbox and multiplayer test bed exercise engine systems.
  - One workflow carries projects from assets and scenes to hot-reloaded gameplay, networking and packaged builds.
  - Packaged editor builds support installation without a compiler, the Vulkan SDK, or the source repository.
  - The Launcher and Editor can be driven and inspected programmatically for reproducible scene authoring, screenshots, diagnostics, and end-to-end validation.
external_url: https://github.com/AlexMollard/AetherCore
evidence_links:
  - label: MCP tools and structured validation
    url: https://github.com/AlexMollard/AetherCore/blob/master/tools/mcp/README.md
build_mode: Agent-directed
build_note: >-
  AetherCore began as hand-written C++ and Vulkan. I define requirements, architecture boundaries, and acceptance criteria, then divide implementation work between agents using Oh my PI (omp) with multiple AI providers and Claude Code. I review the changes against the design and use automated tests, static architecture checks, the GPU abstraction guard, and local editor/runtime smoke tests to validate them before integration. The in-repository games provide practical acceptance cases for the engine's systems.
spotlight_order: 4
---
I wanted the engine’s systems to remain inspectable and replaceable as the toolset grew.
