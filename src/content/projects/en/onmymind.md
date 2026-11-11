---
slug: onmymind
order: 2
draft: false
title: OnMyMind
summary: Offline-first list app to get everything out of your head (tasks, shopping, notes and events), with lists shared in real time.
period:
  start: "2026-09"
role: Personal project, from idea to deployment
platforms: [web, mobile]
stack: [react, typescript, tanstack, supabase, pwa, tailwind, postgresql, rls, deno, edge-functions, pg-cron, web-push, vitest, pgtap]
whatItIs: An installable, responsive PWA built with React and Supabase and designed mobile-first, where you capture first and organise later. Lists can hold any kind of item, sublists, price tracking, a Today view and protected notes.
whatIDid:
  - "Lists shared in real time with Supabase Realtime: the database (RLS) decides what each person sees."
  - On-device encryption of protected notes (AES-GCM), unlocked with Face ID (WebAuthn).
  - Offline mode with TanStack Query, with a change queue in IndexedDB that is replayed in order.
  - Automatic price tracking with Edge Functions and pg_cron, and price-drop alerts via Web Push.
  - Natural-language dates in Spanish, and recurrences that work out the same in TypeScript and SQL.
whyItMatters: It brings genuinely hard problems into a small app (offline, real time, encryption and database security), all covered by tests.
metrics:
  - value: "1250+"
    label: tests (Vitest and pgTAP)
  - value: "32"
    label: database migrations
cover:
  src: ../../../assets/projects/onmymind/00-portada-desktop-dark.png
  alt: "OnMyMind on desktop: the sidebar with all kinds of lists and a trip open with tasks, shopping and notes."
gallery:
  - alt: "Quick capture that understands «el viernes a las 21h» (Friday at 9 pm) and saves it as an event."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/01-captura-desktop-dark.png
        light: ../../../assets/projects/onmymind/01-captura-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/01-captura-mobile-dark.png
        light: ../../../assets/projects/onmymind/01-captura-mobile-light.png
  - alt: "The Today view, with the agenda and what is due from each list."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/02-hoy-desktop-dark.png
        light: ../../../assets/projects/onmymind/02-hoy-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/02-hoy-mobile-dark.png
        light: ../../../assets/projects/onmymind/02-hoy-mobile-light.png
  - alt: "A list shared live between two people."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/03-compartida-desktop-dark.png
        light: ../../../assets/projects/onmymind/03-compartida-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/03-compartida-mobile-dark.png
        light: ../../../assets/projects/onmymind/03-compartida-mobile-light.png
  - alt: "A protected note, unlocked with Face ID or a passphrase."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/04-nota-protegida-desktop-dark.png
        light: ../../../assets/projects/onmymind/04-nota-protegida-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/04-nota-protegida-mobile-dark.png
        light: ../../../assets/projects/onmymind/04-nota-protegida-mobile-light.png
  - alt: "A product with its current price, the drop and six months of price history."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/05-precios-desktop-dark.png
        light: ../../../assets/projects/onmymind/05-precios-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/05-precios-mobile-dark.png
        light: ../../../assets/projects/onmymind/05-precios-mobile-light.png
links:
  demo: https://onmymind.pages.dev/
  repo: https://github.com/FranBas6/OnMyMind
howIWork:
  - I design each screen before building it.
  - I work in phases, on branches off develop, with small commits.
  - Every database security rule has its own pgTAP tests.
uiNote: true
---
