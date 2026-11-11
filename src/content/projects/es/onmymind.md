---
slug: onmymind
order: 2
draft: false
title: OnMyMind
summary: App de listas offline-first para sacarlo todo de la cabeza (tareas, compras, notas y eventos), con listas compartidas en tiempo real.
period:
  start: "2026-09"
role: Proyecto personal, de la idea al despliegue
platforms: [web, mobile]
stack: [react, typescript, tanstack, supabase, pwa, tailwind, postgresql, rls, deno, edge-functions, pg-cron, web-push, vitest, pgtap]
whatItIs: Una PWA instalable y responsive, hecha con React y Supabase y pensada primero para el móvil, en la que primero capturas y luego organizas. Las listas admiten cualquier tipo de elemento, sublistas, seguimiento de precios, vista de hoy y notas protegidas.
whatIDid:
  - "Listas compartidas en tiempo real con Supabase Realtime: la base de datos (RLS) decide qué ve cada uno."
  - Cifrado en el dispositivo de las notas protegidas (AES-GCM), con desbloqueo por Face ID (WebAuthn).
  - Modo sin conexión con TanStack Query, con una cola de cambios en IndexedDB que se reproduce en orden.
  - Seguimiento automático de precios con Edge Functions y pg_cron, y avisos de bajada por Web Push.
  - Fechas en lenguaje natural en español, y repeticiones que se calculan igual en TypeScript y en SQL.
whyItMatters: Junta en una app pequeña problemas difíciles de verdad (offline, tiempo real, cifrado y seguridad en la base de datos), todo cubierto con tests.
metrics:
  - value: "1250+"
    label: tests (Vitest y pgTAP)
  - value: "32"
    label: migraciones de base de datos
cover:
  src: ../../../assets/projects/onmymind/00-portada-desktop-dark.png
  alt: "OnMyMind en escritorio: la barra lateral con listas de todo tipo y un viaje abierto con tareas, compras y notas."
gallery:
  - alt: "Captura rápida que entiende «el viernes a las 21h» y lo guarda como evento."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/01-captura-desktop-dark.png
        light: ../../../assets/projects/onmymind/01-captura-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/01-captura-mobile-dark.png
        light: ../../../assets/projects/onmymind/01-captura-mobile-light.png
  - alt: "La vista Hoy, con la agenda y lo que vence de cada lista."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/02-hoy-desktop-dark.png
        light: ../../../assets/projects/onmymind/02-hoy-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/02-hoy-mobile-dark.png
        light: ../../../assets/projects/onmymind/02-hoy-mobile-light.png
  - alt: "Una lista compartida en vivo entre dos personas."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/03-compartida-desktop-dark.png
        light: ../../../assets/projects/onmymind/03-compartida-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/03-compartida-mobile-dark.png
        light: ../../../assets/projects/onmymind/03-compartida-mobile-light.png
  - alt: "Una nota protegida, que se desbloquea con Face ID o con la clave."
    images:
      desktop:
        dark: ../../../assets/projects/onmymind/04-nota-protegida-desktop-dark.png
        light: ../../../assets/projects/onmymind/04-nota-protegida-desktop-light.png
      mobile:
        dark: ../../../assets/projects/onmymind/04-nota-protegida-mobile-dark.png
        light: ../../../assets/projects/onmymind/04-nota-protegida-mobile-light.png
  - alt: "Un producto con su precio actual, la bajada y el historial de seis meses."
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
  - Diseño cada pantalla antes de programarla.
  - Trabajo por fases, en ramas que salen de develop, con commits pequeños.
  - Cada regla de seguridad de la base de datos tiene sus tests en pgTAP.
uiNote: true
---
