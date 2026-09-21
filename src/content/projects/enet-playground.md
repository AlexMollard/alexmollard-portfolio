---
title: EnetPlayGround
date: 2025-03-13
category: Hobby
summary: Networking sandbox where I worked through ENet, reliable UDP communication, and client-server architecture patterns - the groundwork that later fed AetherCore's netcode.
role: Networking systems programmer.
media_images:
  - /media/hobbies/enet-playground/server.webp
  - /media/hobbies/enet-playground/login.webp
  - /media/hobbies/enet-playground/client.webp
engine: C++ Networking Framework
domain: Networking
features:
  - Concurrent multi-client connection management on a threaded server
  - Reliable packet delivery implementation
  - Broadcast messaging infrastructure
  - Reconnection handling and client state synchronization
  - MySQL database integration
  - Plugin architecture support
  - Position visualization
  - Comprehensive logging system
external_url: https://github.com/AlexMollard/EnetPlayGround
---

Experimental networking platform for investigating ENet protocol, multiplayer architecture patterns, and network performance limitations in game development contexts. The playground is where I first wrestled with the problems a real game netcode has to solve - concurrent client handling, reliable delivery over UDP, and reconnection - and the architecture patterns proven here fed directly into AetherCore's owner-authoritative netcode.
