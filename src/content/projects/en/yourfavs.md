---
slug: yourfavs
order: 1
draft: false
title: YourFavs
summary: Web app to track films and TV series episode by episode, find what to watch next and share it with friends.
period:
  start: "2025-05"
role: Personal project, from idea to deployment
platforms: [web, mobile]
stack: [astro, typescript, supabase, tmdb-api, supabase-realtime, netlify-functions, tailwind, pgtap, pwa]
whatItIs: A web app to keep everything you watch in one place, with films and series episode by episode, lists, ratings and recommendations. It is server-rendered, installs like an app and is responsive, from mobile to desktop.
whatIDid:
  - Episode-by-episode tracking, lists and recommendations with Astro (SSR) and the TMDB API.
  - Import from IMDb, Letterboxd and a TMDB account, with undo.
  - "Backend migration from Firebase to Supabase: authentication and data moved to PostgreSQL."
  - TMDB calls cut from 30–40 to 2–5 per page, with a PostgreSQL cache.
  - "One-to-one and group real-time chat with Supabase Realtime: content-free pings and access enforced by RLS."
  - Full redesign in nine phases on a token-based design system.
whyItMatters: It is my longest-running project. I started it in 2025, moved its whole backend to Supabase and it is still in active development.
metrics:
  - value: "344"
    label: database tests (pgTAP)
  - value: "27"
    label: database migrations
  - value: "400+"
    label: commits
cover:
  src: ../../../assets/illustrations/placeholder-cover.svg
  alt: YourFavs screenshot showing the home page and what you are watching, on mobile and desktop
links:
  demo: https://yourfavs.netlify.app
  repo: https://github.com/FranBas6/YourFavs
howIWork:
  - I write a plan before coding each large piece of work.
  - Design comes first, in Claude Design, and then I build it.
  - Small, verified commits, merged into develop with --no-ff.
uiNote: true
seo:
  description: YourFavs, a web app to track films and TV series episode by episode, built with Astro and Supabase, with real-time features and 344 database tests.
---

This product uses the TMDB API but is not endorsed or certified by TMDB.
