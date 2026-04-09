---
title: Simon
date: 2019-04-09
category: Hobby
summary: One of my early C++ game projects, built to learn class-based design, game state flow, and per-frame update/draw architecture through a Simon memory game.
role: Solo programmer.
media_images:
  - /media/hobbies/simon/simon-1.png
  - /media/hobbies/simon/simon-2.png
  - /media/hobbies/simon/simon-3.png
engine: AIE Bootstrap Framework
api: OpenGL
features:
  - Simon memory game loop with timed color-sequence playback
  - Mouse-driven input validation against generated sequences
  - Round progression and high-score tracking
  - Menu, play, and lose states managed through class-driven logic
  - Custom DynamicArray template used for sequence storage and utility operations
performance_metrics:
  - Real-time 2D rendering and input handling via frame-based update and draw calls
  - Fast iteration workflow inside a Visual Studio C++ project setup
external_url: https://github.com/AlexMollard/Simon
featured: true
---

Simon was an early C++ project where I used a small game to practice classes and structured program flow. The project uses an update/draw loop with explicit game states, sequence generation, and input checking, which made it a practical way to learn how gameplay systems connect inside a reusable framework.