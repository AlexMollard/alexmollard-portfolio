---
title: CSX-Forms
summary: A C# scripting library that turns plain CSX scripts into styled WinForms applications with DPI scaling, dark mode, and rounded corners.
date: 2025-02-21
category: Hobby
role: Solo developer.
media_images: []
engine: None
domain: Tools
features:
  - WindowManager class for building forms from CSX scripts with a single #load
  - Automatic DPI scaling based on system settings
  - Dark mode detection and theming that follows the Windows theme
  - Rounded corners on Windows 10 and above
  - Worked examples in the repository's examples directory
problem: C# scripting with dotnet-script is convenient for utilities, but CSX files have no easy way to get a presentable windowed UI without dragging in a full project.
approach:
  - Packaged WinForms setup, theming, and keyboard shortcut handling into a loadable Window.csx so a script stays a script.
outcomes:
  - Windowed C# scripting utilities that match the Windows theme without any project scaffolding.
external_url: https://github.com/AlexMollard/CSX-Forms
---

I built CSX-Forms so a C# script can present a proper windowed UI. Loading a single Window.csx gives the script DPI-aware forms that detect and follow the Windows dark-mode theme, use rounded corners on modern Windows, and support custom colour themes and keyboard shortcuts. The repository includes worked examples of building forms from the WindowManager class.
