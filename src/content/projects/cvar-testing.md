---
title: Cvar Testing
date: 2023-03-04
category: Hobby
summary: C++ sandbox project for prototyping a runtime command console that can execute custom commands in a live application without relying on a GUI.
role: Solo engine tools programmer.
media_images:
  - /media/hobbies/cvar/cvar-1.png
  - /media/hobbies/cvar/cvar-2.png
engine: Custom C++ Application
api: Other
features:
  - Runtime command console integrated directly into the application loop
  - CVar-style command registration and parsing pipeline
  - Custom commands for driving behavior and triggering code paths at runtime
  - Lightweight workflow for debugging and iteration without building UI panels
performance_metrics:
  - Fast in-app iteration by executing commands without rebuilding interfaces
  - Reduced debug friction for engine and gameplay style experiments
external_url: https://github.com/AlexMollard/WindowsSDK-Cvar-Testing.git
featured: true
---

Prototype project focused on how a developer console can control a running app. The goal was to test how custom text commands could execute code directly, similar to how you might interact with an engine or game at runtime, without needing dedicated GUI tooling.