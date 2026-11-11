---
slug: yourfavs
order: 1
draft: false
title: YourFavs
summary: Web app para seguir películas y series episodio a episodio, descubrir qué ver y compartirlo con amigos.
period:
  start: "2025-05"
role: Proyecto personal, de la idea al despliegue
platforms: [web, mobile]
stack: [astro, typescript, supabase, tmdb-api, supabase-realtime, netlify-functions, tailwind, pgtap, pwa]
whatItIs: Una web app para llevar todo lo que ves en un solo sitio, con películas y series episodio a episodio, listas, valoraciones y recomendaciones. Se renderiza en el servidor, se instala como una app y es responsive, del móvil al escritorio.
whatIDid:
  - Seguimiento episodio a episodio, listas y recomendaciones con Astro (SSR) y la API de TMDB.
  - Importación desde IMDb, Letterboxd y una cuenta de TMDB, con opción de deshacer.
  - "Migración del backend de Firebase a Supabase: autenticación y datos a PostgreSQL."
  - Llamadas a TMDB reducidas de 30–40 a 2–5 por página, con una caché en PostgreSQL.
  - "Chat 1:1 y de grupo en tiempo real con Supabase Realtime: avisos sin contenido y acceso controlado por RLS."
  - Rediseño completo en nueve fases sobre un sistema de diseño con tokens.
whyItMatters: Es mi proyecto más largo. Lo empecé en 2025, migré su backend entero a Supabase y sigue en desarrollo activo.
metrics:
  - value: "344"
    label: tests de base de datos (pgTAP)
  - value: "27"
    label: migraciones de base de datos
  - value: "400+"
    label: commits
cover:
  src: ../../../assets/projects/yourfavs/00-portada-desktop-dark.png
  alt: "Portada de YourFavs: lo que toca hoy y las series que estás viendo, con el próximo episodio de cada una."
gallery:
  - alt: "Ficha de una serie con temporadas, progreso y episodios coloreados por nota."
    images:
      desktop:
        dark: ../../../assets/projects/yourfavs/01-serie-desktop-dark.png
        light: ../../../assets/projects/yourfavs/01-serie-desktop-light.png
      mobile:
        dark: ../../../assets/projects/yourfavs/01-serie-mobile-dark.png
        light: ../../../assets/projects/yourfavs/01-serie-mobile-light.png
  - alt: "Ficha de una película con la barra de acciones."
    images:
      desktop:
        dark: ../../../assets/projects/yourfavs/02-pelicula-desktop-dark.png
        light: ../../../assets/projects/yourfavs/02-pelicula-desktop-light.png
      mobile:
        dark: ../../../assets/projects/yourfavs/02-pelicula-mobile-dark.png
        light: ../../../assets/projects/yourfavs/02-pelicula-mobile-light.png
  - alt: "Lista de favoritos en orden, con la nota de cada título."
    images:
      desktop:
        dark: ../../../assets/projects/yourfavs/03-listas-desktop-dark.png
        light: ../../../assets/projects/yourfavs/03-listas-desktop-light.png
      mobile:
        dark: ../../../assets/projects/yourfavs/03-listas-mobile-dark.png
        light: ../../../assets/projects/yourfavs/03-listas-mobile-light.png
  - alt: "Importación desde IMDb, Letterboxd y TMDB, con la opción de deshacer."
    images:
      desktop:
        dark: ../../../assets/projects/yourfavs/04-importar-desktop-dark.png
        light: ../../../assets/projects/yourfavs/04-importar-desktop-light.png
      mobile:
        dark: ../../../assets/projects/yourfavs/04-importar-mobile-dark.png
        light: ../../../assets/projects/yourfavs/04-importar-mobile-light.png
  - alt: "Chat con una amiga, con una propuesta de qué ver y un plan para el sábado."
    images:
      desktop:
        dark: ../../../assets/projects/yourfavs/05-chat-desktop-dark.png
        light: ../../../assets/projects/yourfavs/05-chat-desktop-light.png
      mobile:
        dark: ../../../assets/projects/yourfavs/05-chat-mobile-dark.png
        light: ../../../assets/projects/yourfavs/05-chat-mobile-light.png
links:
  demo: https://yourfavs.netlify.app
  repo: https://github.com/FranBas6/YourFavs
howIWork:
  - Escribo un plan antes de programar cada bloque grande.
  - Diseño primero en Claude Design y después lo implemento.
  - Commits pequeños y comprobados, unidos a develop con merges --no-ff.
uiNote: true
seo:
  description: YourFavs, web app para seguir películas y series episodio a episodio, hecha con Astro y Supabase, con tiempo real y 344 tests de base de datos.
---

Este producto usa la API de TMDB pero no está avalado ni certificado por TMDB.
