---
title: BBS Door Games
description: A curated directory of BBS door games - the multiplayer text games that ran on dial-up bulletin board systems.
---

Before the web, online text games often lived on **bulletin board systems (BBS)**, and a "door" was a program the BBS handed your session off to. The BBS would connect you to a door game, you'd take your turns, and then you'd hang up. Most door games were thus multiplayer but one-at-a-time - you competed against other players asynchronously.

As with the MU* community, there are people in the BBS space who preserve and host games as a hobby. This page is meant as a jumping-off point to learn more.

## History & archives

- [Break Into Chat - wiki](https://breakintochat.com/wiki/) - The definitive modern reference on door games, authors, and BBS history; a curated wiki by Josh Renaud, started after Wikipedia editors deleted several door-game articles
- [Break Into Chat - blog](https://breakintochat.com/blog/) - Renaud's original research and long-form interviews with door-game authors - the best primary-source oral history of the field
- [textfiles.com](http://textfiles.com/) - Jason Scott's foundational archive of BBS-era text files
- [ASCII by Jason Scott](https://ascii.textfiles.com/) - Scott's weblog on BBS history, including the essay that catalyzed Break Into Chat
- [BBS: The Documentary](http://www.bbsdocumentary.com/) - Jason Scott's documentary site, with a BBS history library and door-game histories
- [50 Years of Text Games: Trade Wars 2002](https://medium.com/@aareed/trade-wars-2002-1991-8350091bd695) - Aaron Reed's deeply researched essay on Trade Wars and the door-game paradigm

## Finding & playing live boards

- [Telnet BBS Guide](https://www.telnetbbsguide.com/) - The primary directory of currently reachable telnet/SSH BBSes, many hosting door games with 1000+ boards listed
- [Telnet BBS Census](https://bbs.modem.xyz/) - A modern, auto-generated census of telnet BBSes cross-referenced against other directories
- [A-Net Online](https://a-net.fyi/) - A large public board with hundreds of door games and inter-BBS leagues; sysops can attach it to their own boards

## Software that hosts doors

Modern BBS packages that still run classic DOS doors (via FOSSIL emulation, DOOR32.SYS socket sharing, or native x86 emulation):

- [Synchronet](https://www.synchro.net/) - Rob Swindell's free, actively developed BBS package with a built-in door-game server; ships with JS ports of LORD/LORD II
- [Mystic BBS](http://www.mysticbbs.com/) - James Coyle's cross-platform package (Windows/Linux/macOS/ARM); co-originator of the DOOR32.SYS standard
- [ENiGMA½](https://enigma-bbs.github.io/) - A modern Node.js BBS with built-in DoorParty/BBSLink support and native x86 DOS door emulation
- [WWIV](https://github.com/wwivbbs) - Long-lived BBS package, now open-source C++, with door/DoorParty support

## Writing your own doors

- [ansi-bbs (dropfile formats)](https://github.com/NuSkooler/ansi-bbs) - Collected dropfile-format docs, including the canonical DOOR32.SYS specification for telnet-aware doors
- [godoors](https://github.com/robbiew/godoors) - A modern Go library for writing Linux-based BBS doors
- [BBS Door Development tutorial](https://retroshed.us/bbs-door-dev-1/) - A current step-by-step on building doors with period-accurate toolchains across DOS/Windows/Linux

## Notable games

Door games split into three preservation buckets: still commercially owned, released as open source, and reimagined as open-source remakes. Status is noted where it affects how you get the game.

:::caution[Download carefully]
BBS-era domains change hands often, and some have been quietly taken over - a link that worked last year can now point at something else entirely. Don't run executables you find on an unfamiliar site. Stick to the official or rights-holder page, a trusted archive (Break Into Chat, textfiles.com, the Internet Archive), or the game's own GitHub repo. And for titles that are still commercially owned (Trade Wars, LORD, Barren Realms Elite), treat any "free" copy as legally gray unless it comes from the rights-holder.
:::

### Trade Wars 2002

The space-trading "granddaddy of all BBS games." Still commercially owned by EIS (John Pritchett).

- [EIS / TWGS](https://www.eisonline.com/) - Rights-holder; TWGS is the standalone server that keeps classic Trade Wars online
- [ClassicTW](https://www.classictw.com/) - Active community, forums, and tournaments

### Legend of the Red Dragon (LORD) & remakes

Seth Robinson's fantasy classic, later sold to Metropolis Gameport. The original is effectively abandoned (no source release), but it lives on through live servers and an open-source remake.

- [LORD FAQ (Robinson Technologies)](https://www.rtsoft.com/pages/lordfaq.php) - Seth Robinson's origin FAQ
- [lord.stabs.org](https://lord.stabs.org/) - A live multi-node web + telnet LORD server
- [Legend of the Green Dragon](http://www.lotgd.net/) - The open-source PHP/MySQL remake of LORD, originally by Eric Stevens and JT Traub

### Other major games

- [Barren Realms Elite](https://www.johndaileysoftware.com/products/bbsdoors/barrenrealmselite) - Mehul Patel's strategy classic; John Dailey Software holds the rights and still sells registrations
- [Solar Realms Elite](https://breakintochat.com/wiki/Solar_Realms_Elite) - Amit Patel's classic; no commercial distributor exists (the source was lost long ago); best documented at Break Into Chat and playable on telnet boards
- [Usurper](https://github.com/rickparrish/Usurper) - Rick Parrish's open-source (GPLv2) port of Jakob Dangarden's dungeon brawler
- [Operation Overkill II](https://operationoverkill.com/) - Dustin Nulf's post-apocalyptic door, with official freeware downloads and a list of boards running it
- [Land of Devastation](http://www.landofdev.com/) - Scott M. Baker's official site, with downloads and docs (the game itself is legacy)
- [BlackNova Traders](https://github.com/harwoodr/bnt2) - A web-based, open-source game inspired by Trade Wars

## Inter-BBS networks

Some door games could be networked across many boards at once, letting players on different BBSes compete in shared leagues.

- [BBSLink](https://bbslink.net/) - A hosted inter-BBS door server letting member boards offer networked games via a single connection
- [DoorParty](https://github.com/echicken/doorparty-connector) - An inter-BBS door network; sysops connect via an RLogin/SSH tunnel
- [fsxNet (GitHub)](https://github.com/fsxnet) - A FidoNet-technology hobbyist network and de-facto support community for the modern BBS scene; the org hosts its nodelist and infopack - the files a sysop needs to join the network
