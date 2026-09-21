---
title: Crash Twinsanity Improved
summary: A fix-and-polish mod for the PAL release of Crash Twinsanity on PS2 that patches the disc image directly, restoring cut content and improving load times and output.
date: 2026-09-21
category: Hobby
role: Solo developer.
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
---

I reverse-engineered parts of the PAL release of Crash Twinsanity to restore content the developers cut before release. Working against the disc image directly, I re-enabled cutscene skipping with an on-screen prompt localised to all five shipping languages, made Aku Aku invincibility actually survive TNT and Nitro crates, added shadows on crates, and kept beaten bosses harmless. I also cut level load times by 25-35% (40-50% with Fast CDVD) and added 480p/60Hz output with the game's frame timing matched to it. The repository ships a Python patcher that turns the player's own disc image into a modded ISO, plus a Docusaurus wiki documenting every change.
