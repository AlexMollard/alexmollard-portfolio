---
title: Crash Twinsanity Improved
summary: A fix-and-polish mod for the PAL release of Crash Twinsanity on PS2 that patches the disc image directly to restore cut content and patch level loading and video output.
date: 2026-09-21
category: Hobby
role: "Solo project, agent-directed: I chose fixes, specified PAL executable patches, and verified each in PCSX2; agents largely built the patcher and wiki."
media_images:
  - /media/hobbies/crash-twinsanity-improved/skip-prompt-beach.png
  - /media/hobbies/crash-twinsanity-improved/skip-prompt-core.png
engine: None
domain: Research
features:
  - Direct ISO patching that rebuilds a modded disc image without touching the original
  - Restored cutscene skipping with an on-screen prompt in five languages
  - Keeps defeated bosses harmless and fixes Aku Aku protection around explosive crates
  - Level-loading patch; relative timing varies with CDVD configuration
  - 480p/60Hz output with frame timing matched to the new mode
  - A Python build script and PCSX2 configuration presets
problem: The retail PAL release disabled the cutscene-skip feature before shipping, loads levels slowly, and outputs 480i, and none of these could be fixed from emulator settings alone.
approach:
  - Patched the executable and ISO, restoring 16 cutscene skips and fixing invincibility masks and crate shadows.
  - Agents built a Python patcher for users’ PAL disc images, plus widescreen/HD PCSX2 presets.
outcomes:
  - Published a reproducible mod and wiki without distributing copyrighted game files.
external_url: https://github.com/AlexMollard/Crash-Twinsanity-Improved
build_mode: Agent-directed
build_note: >-
  This one was agent-directed from the start. I drove the reverse-engineering - deciding which cut features were worth restoring, reading the PAL executable's behaviour, and testing each patch in PCSX2 - and used agents to write the Python patcher, the build tooling, and the wiki against that spec. The verification is the part I own: every change here was confirmed running on a patched disc image.
---
