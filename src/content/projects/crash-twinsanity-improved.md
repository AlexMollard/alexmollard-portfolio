---
title: Crash Twinsanity Improved
summary: A fix-and-polish mod for the PAL release of Crash Twinsanity on PS2 that patches the disc image directly, restoring cut content and improving load times and output.
date: 2026-09-21
category: Hobby
role: Solo project, directed rather than hand-written. I chose what to fix, worked out what the patches had to do to the PAL executable, and verified every change in the emulator; the patcher and wiki were largely agent-built to that spec.
media_images:
  - /media/hobbies/crash-twinsanity-improved/skip-prompt-beach.png
  - /media/hobbies/crash-twinsanity-improved/skip-prompt-core.png
engine: None
domain: Research
features:
  - Direct ISO patching that rebuilds a modded disc image without touching the original
  - Restored cutscene skipping with an on-screen prompt in five languages
  - 25-50% faster level loads depending on CDVD configuration
  - 480p/60Hz output with frame timing matched to the new mode
  - A Python build script and PCSX2 configuration presets
problem: The retail PAL release disabled the cutscene-skip feature before shipping, loads levels slowly, and outputs 480i, and none of these could be fixed from emulator settings alone.
approach:
  - Patched the game executable and files inside the ISO directly, restoring sixteen cutscene skips and fixing behaviour such as invincibility masks and crate shadows.
  - Wrapped the patches in a Python build script so anyone with their own PAL disc image can produce a patched copy, plus a PCSX2 widescreen and HD texture setup.
outcomes:
  - A documented, reproducible mod with a published wiki covering what changed and why, requiring no copyrighted game files in the repository.
external_url: https://github.com/AlexMollard/Crash-Twinsanity-Improved
build_mode: Agent-directed
build_note: >-
  This one was agent-directed from the start. I drove the reverse-engineering - deciding which cut features were worth restoring, reading the PAL executable's behaviour, and testing each patch in PCSX2 - and used agents to write the Python patcher, the build tooling, and the wiki against that spec. The verification is the part I own: every change here was confirmed running on a patched disc image.
---

This mod restores content the developers cut from the PAL release of Crash Twinsanity before it shipped. Working against the disc image directly, it re-enables cutscene skipping with an on-screen prompt localised to all five shipping languages, makes Aku Aku invincibility survive TNT and Nitro crates, adds shadows on crates, and keeps beaten bosses harmless. Level load times drop 25-35% (40-50% with Fast CDVD) and the game outputs 480p/60Hz with its frame timing matched to the new mode. The repository ships a Python patcher that turns the player's own disc image into a modded ISO, plus a Docusaurus wiki documenting every change. I directed this one through an agent harness rather than writing it by hand - see "How it was built".
