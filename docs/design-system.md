# Sistema de diseño

> **⚠ BORRADOR.** Los bocetos de la fase 3 (entrega 2) están **aprobados** desde el 2026-11-11, y este documento ya recoge sus valores. Deja de ser borrador cuando Fran apruebe el sistema completo, después de la tercera entrega (estados, formulario, privacidad, 404, ilustración, icono e imágenes para compartir). Hasta entonces no se implementa ningún componente con diseño.

Los tokens están en `src/styles/tokens.css` (bloque `@theme` de Tailwind 4): cada uno es a la vez variable CSS (`var(--color-surface)`) y utilidad (`bg-surface`). Si cambia un valor aquí, cambia allí, y al revés.

La especificación de cada pantalla, al píxel, está en el handoff de Claude Design (`.private/design_handoff_portfolio_fase3/README.md` y los `.dc.html` de la entrega 2). Este documento recoge el sistema: tokens, reglas y componentes.

## Referencia de estilo

El banner de LinkedIn de Fran. Es una escena nocturna de escritorio: fondo oscuro en degradado de azul marino a morado, resplandor azulado de pantallas y un toque de luz cálida de lámpara.

Solo hay modo oscuro en la primera versión. Los tokens llevan nombre de función, no de color, para que un modo claro futuro sea cambiar valores.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `bg-deep` | `#06060f` | Pie y banda de la galería |
| `bg-base` | `#0a0f24` | Fondo de página y texto del botón principal |
| `bg-glow` | `#120d2b` | Zona morada de los degradados |
| `surface` | `#161a38` | Tarjetas, formulario, aviso de interfaz |
| `surface-raised` | `#1e2347` | Tarjeta al pasar el ratón, campos, etiquetas de tecnología |
| `border` | `#2a3060` | Líneas, separadores, bordes de tarjetas y de botones de icono |
| `border-strong` | `#3a4278` | **Nuevo.** Borde de tarjeta al pasar el ratón y del hueco de la ilustración |
| `border-field` | `#7078b0` | Campos, botón secundario, borde del selector, tarjeta «¿Hablamos?» |
| `text` | `#eef0fb` | Titulares y texto principal |
| `text-secondary` | `#b8bedb` | Párrafos, enlaces del menú y del pie, etiquetas de tecnología |
| `text-muted` | `#8f96b8` | Fechas, notas, rótulos de la ficha, pies de captura |
| `accent` | `#a5b4fc` | Botón principal, enlaces, rol en la presentación, foco, opción elegida del selector |
| `accent-hover` | `#c3cdfd` | **Nuevo.** Fondo del botón principal al pasar el ratón (`bg-base` encima: ≈ 11:1) |
| `accent-strong` | `#7aa2f7` | Reservado para estados activos y pulsados (tercera entrega) |
| `warm` | `#ffd7a0` | **Solo** en la ilustración de la presentación (la lámpara) |

**Contraste** con estos valores: todo el texto y los acentos superan 4,5:1 sobre todos los fondos y superficies (peor caso, `text-muted` sobre `surface-raised`: 5,2:1); el botón principal con texto `bg-base` sobre `accent` da 9,5:1 y sobre `accent-hover` unos 11:1; `border-field` da entre 3,6:1 y 4,8:1. `border` y `border-strong` son decorativos. **Si cambia algún valor, se recalcula.**

### Colores de editor

`#c792ea`, `#82aaff`, `#89ddff`, `#c3e88d`, `#f78c6c`, `#ffcb6b`. Solo en ilustraciones y en las etiquetas de plataforma. Nunca en texto corrido, en botones ni en las etiquetas de habilidades.

| Plataforma | Color | Fondo de la etiqueta | Borde de la etiqueta |
| --- | --- | --- | --- |
| Web | `#82aaff` (`editor-blue`) | `rgba(130,170,255,0.08)` | `rgba(130,170,255,0.45)` |
| Móvil | `#c3e88d` (`editor-green`) | `rgba(195,232,141,0.07)` | `rgba(195,232,141,0.45)` |
| IA | `#c792ea` (`editor-purple`) | `rgba(199,146,234,0.08)` | `rgba(199,146,234,0.45)` |

El color va solo en un cuadradito de 8 × 8 px (radio de 2 px); el texto de la etiqueta siempre en `text`. Las tres ideas de la presentación usan la misma asignación, con un cuadradito de 10 × 10 px y radio de 3 px.

### Luz cálida

Solo en la ilustración de la presentación, como el resplandor de la lámpara. Ningún otro elemento usa `warm`: ni puntos, ni fechas, ni la ficha del proyecto.

### Degradados

- **Presentación (escritorio):** `radial-gradient(60% 90% at 72% 10%, rgba(70,110,255,0.26), rgba(90,60,200,0.10) 55%, transparent 80%)` sobre `linear-gradient(100deg, #0a0f24 0%, #120d2b 45%, #0b0a1c 75%, #0a0f24 100%)`.
- **Presentación (móvil):** `radial-gradient(130% 60% at 80% 0%, …)` con los mismos colores, sobre un lineal vertical `#0a0f24 → #120d2b 70% → #0a0f24`.
- **Cabecera de la página de proyecto:** el mismo patrón, con el resplandor a 0,22 y 0,08.
- **Cabecera fija:** `rgba(10,15,36,0.88)` (0,9 en móvil), con `backdrop-filter: blur(12px)` y borde inferior de 1 px en `border`.

`#0b0a1c` sale del banner: es un punto intermedio del degradado, no un token.

### Profundidad

Resplandores azules, nunca sombras negras:
- tarjeta de proyecto al pasar el ratón: `0 24px 64px -24px rgba(80,130,255,0.45)`;
- portada en la página de proyecto (escritorio): `0 40px 120px -40px rgba(80,130,255,0.45)`.

## Tipografía

Manrope variable (200–800), autoalojada en `public/fonts/`, con fuentes del sistema como reserva. Interlineado de 1,6 en texto corrido y de 1,05 a 1,15 en titulares. Cifras tabulares en fechas y cifras. Unos 65 caracteres por línea como máximo; nada por debajo de 14 px.

| Nivel | Móvil | Escritorio | Peso | Notas |
| --- | --- | --- | --- | --- |
| Nombre en la presentación | 40 | 64 | 800 | −0,025 / −0,03 em |
| Título de proyecto (h1) | 40 | 64 | 800 | −0,025 / −0,03 em |
| Rol en la presentación | 20 | 26 | 700 | `accent` |
| Título de sección (h2) | 28 | 36 | 800 | −0,02 em |
| Apartado de la página de proyecto (h2) | 20 | 24 | 800 | |
| Título de la tarjeta destacada | 20 | 32 | 700 / 800 | |
| Título de tarjeta | 20 | 22 | 700 | |
| Empresa en la ficha del puesto actual | 24 | 26 | 800 | |
| Empresa en la tarjeta de puesto anterior | 18 | 18 | 700 | |
| Título de un punto de experiencia | 18 | 19 | 700 | |
| Cifra | 32 | 48 | 800 | |
| Texto destacado (frase, resumen, «Por qué es interesante») | 18 | 20 | 500 | |
| Texto | 16 | 17 | 400 | |
| Grupo de habilidades (h3) | 16 | 17 | 700 | |
| Enlaces del menú y del pie, rótulos de campo | 15 | 15 | 600 | |
| Etiquetas y notas | 14 | 14 | 600 | |
| Nombre en la cabecera | 16 | 17 | 800 | |

## Espaciado y forma

- Escala: 4, 8, 12, 16, **20**, 24, 32, **40**, 48, 64 y 96 px (20 y 40 son nuevos).
- Contenedor de 1.120 px; margen lateral de 20 px en móvil y de 32 px como mínimo en escritorio.
- Separación entre secciones: 64 px en móvil y 96 px en escritorio.
- Cortes de pantalla: 640, 768 y 1.024 px. Diseño primero para móvil: el boceto de 375 px vale hasta `md` y el de 1.280 px desde `lg`; entre los dos se interpola.
- Radios:
  - botones y campos: 8 px;
  - tarjetas y formulario: 16 px;
  - etiquetas y pastilla de periodo: 999 px;
  - selector de galería: 10 px por fuera y 7 px por dentro;
  - portada en móvil: 12 px;
  - capturas de escritorio: 12 px (10 px en el carrusel);
  - capturas de móvil: 18 px (16 px en el carrusel).
- Alturas: cabecera de 64 px (móvil) y 72 px (escritorio); botones de 48 px; botones de icono de 48 × 48 px; etiquetas de 28 a 32 px.

## Responsive (requisitos, no borrador)

- Sin scroll horizontal en ninguna página desde 360 px de ancho. El carrusel de la galería se desplaza dentro de sí mismo.
- Navegación usable en el móvil (menú plegable) y selector de idioma accesible.
- Botones y enlaces de al menos 44 px de alto.
- Imágenes adaptables con el componente `Image` de Astro, sin deformarse.
- Cuerpo de 16 px como mínimo.
- Formulario de contacto cómodo en pantalla táctil.

## Componentes

| Grupo | Componentes |
| --- | --- |
| Estructura | Cabecera fija (con «Proyectos» activo en la página de proyecto), menú móvil a pantalla completa, selector de idioma «ES / EN», pie, enlace de salto al contenido |
| Base | Botón principal y secundario, botón de icono (48 × 48), etiqueta de tecnología, etiqueta de plataforma, pastilla de periodo, título de sección, icono SVG en línea |
| Inicio | Presentación con hueco para la ilustración, tarjeta de proyecto destacada, tarjeta de proyecto secundaria (horizontal) y vertical (móvil), experiencia, grupo de habilidades, bloque de contacto con botón de copiar |
| Experiencia | Ficha fija del puesto actual (`sticky` en escritorio, con tecnologías como chips), fila de punto con etiquetas de plataforma, tarjeta de puesto anterior, franja de formación |
| Proyecto | Cabecera, ficha en cuatro columnas (filas en móvil), aviso de interfaz (solo en inglés), portada, apartado de contenido (título a la izquierda), cifra, galería con selector, tarjeta de proyecto siguiente con miniatura, tarjeta «¿Hablamos?» |
| Galería | Selector de dispositivo y modo (`fieldset` con radios, sin JavaScript), rejilla en escritorio, carrusel con `scroll-snap` en móvil, enlace «Ampliar» |
| Formulario | Campo, área de texto, línea de privacidad; los estados de error y enviado llegan en la tercera entrega |

**Salen de la entrega 1:** la línea de tiempo con columna de fechas, punto y línea vertical; los puntos con guion en la experiencia; las tecnologías como texto separado por barras; el punto cálido de la ficha del proyecto.

Cada componente interactivo tiene estados de reposo, ratón encima, foco de teclado, pulsado y desactivado (tercera entrega).

### Experiencia

- **Puesto actual (FleetX):** ficha con pastilla de periodo, empresa, «**puesto** · lugar», resumen y tecnologías como chips. A su lado, los puntos en filas: título a la izquierda, etiquetas de plataforma (`platforms` de cada punto) a la derecha y texto debajo.
- **Puestos anteriores:** tarjetas con pastilla de periodo, empresa, «puesto · lugar», resumen y tecnologías como chips, si las hay.
- **Formación:** franja con el título a la izquierda y los dos estudios en columnas.
- En móvil todo se apila; la ficha no es `sticky`.

### Galería

- Radios visualmente ocultos pero accesibles, y la opción elegida con relleno `accent` y texto `bg-base` en 700, no solo con otro tono.
- Las cuatro versiones de cada captura están en el marcado. Con `:has()` se muestra solo la elegida, y las ocultas llevan `loading="lazy"`.
- Valor por defecto: **escritorio y oscuro**, que coincide con la portada.
- Escritorio: la primera captura a lo ancho y el resto en dos columnas; las de móvil, en cinco columnas.
- Móvil: carrusel sin flechas ni puntos, donde siempre asoma la captura siguiente. Cada captura ocupa el 90 % (escritorio) o el 82 % (móvil) del ancho, con un enlace «Ampliar ↗» a una versión grande en WebP (no al PNG original).

## Movimiento y accesibilidad (WCAG AA)

- Transiciones de 160 ms en controles y 180 ms en tarjetas (`background`, `color`, `border-color`, `box-shadow`). Sin animaciones al hacer scroll ni efectos de escritura.
- Con `prefers-reduced-motion: reduce`, sin transiciones.
- Foco visible: anillo de 2 px en `accent` con `outline-offset: 2px`, mediante `:focus-visible`.
- Zonas táctiles de 44 px como mínimo.
- La información nunca depende solo del color: las etiquetas de plataforma llevan texto, el idioma activo va subrayado y con `aria-current`, y la opción elegida del selector tiene relleno.
- Las anclas de la cabecera llevan `scroll-margin-top` igual al alto de la cabecera fija más un margen.

## JavaScript

Solo en dos sitios, y el sitio funciona sin él:
- **Menú móvil:** cambia `aria-expanded`, Escape lo cierra, el foco vuelve al botón y se bloquea el scroll del cuerpo. Sin JavaScript, la navegación sigue siendo accesible.
- **Copiar email:** `navigator.clipboard.writeText`. El botón pasa a «Email copiado» durante 2 s y se anuncia con `aria-live`. Sin JavaScript, el botón no aparece y queda el enlace `mailto:`.

## Ilustraciones y recursos

- **Iconos:** SVG en línea, con trazo de 1,6 a 2 px y `currentColor`, con `aria-hidden="true"`. Los de GitHub y LinkedIn son sus logotipos oficiales.
- **Pendientes (tercera entrega):** escena de la presentación (con la luz cálida), icono del sitio y las dos imágenes para compartir (1200 × 630, una por idioma, sin nombre de empresa).
- **Presentación en móvil:** sin ilustración (propuesta pendiente de confirmar).
