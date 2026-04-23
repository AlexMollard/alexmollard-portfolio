---
title: PixelEdit
date: 2019-08-26
category: Hobby
summary: WinForms image editor project built to learn how desktop applications are structured, while exploring core algorithms needed for practical editing tools.
role: Solo programmer.
media_images:
  - /media/hobbies/pixel-edit/pixel-edit-1.webp
  - /media/hobbies/pixel-edit/pixel-edit-2.webp
engine: Windows Forms (.NET Framework)
api: Other
features:
  - Pencil, brush, line, square, circle, and bucket tools
  - Image open, save, save as, and drag and drop import workflow
  - Grid overlay and color management for editing precision
  - Bresenham-style line rasterization for drawing tools
  - Queue-based flood fill implementation for bucket behavior
performance_metrics:
  - Real-time canvas updates and direct mouse-driven interaction
  - Practical algorithm learning through shipping usable editor tools
external_url: https://github.com/AlexMollard/PixelEdit.git
featured: true
---

PixelEdit was a WinForms project I made to learn how to build desktop applications in C#. While making basic image editing tools, I ended up learning a lot about algorithms, especially flood fill style logic and raster drawing techniques that are required for seemingly simple editor features. The intended scope was much larger, with plans to evolve it into something closer to Aseprite with proper animation support, but I ran out of time before reaching that stage.