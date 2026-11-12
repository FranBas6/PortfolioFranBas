# Sistema de diseño

> **✅ Aprobado** por Fran el 2026-11-11. Recoge las tres entregas de la fase 3: bocetos, estados, formulario, páginas y recursos. Es la referencia de la implementación (fase 4). Cualquier cambio posterior se propone, se aprueba y se anota aquí y en el plan.

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
| `accent-strong` | `#7aa2f7` | Estado **pulsado** de botones, enlaces, tarjetas y selectores |
| `danger` | `#ff9d9d` | **Nuevo.** Borde, icono y mensaje de un campo con error |
| `warm` | `#ffd7a0` | **Solo** en la ilustración de la presentación (la lámpara) |

**Contraste** con estos valores: todo el texto y los acentos superan 4,5:1 sobre todos los fondos y superficies (peor caso, `text-muted` sobre `surface-raised`: 5,2:1); el botón principal con texto `bg-base` sobre `accent` da 9,5:1 y sobre `accent-hover` unos 11:1; `border-field` da entre 3,6:1 y 4,8:1; `danger` da entre 7,6:1 y 10,1:1 y `accent-strong` entre 6,0:1 y 8,0:1 sobre fondos y superficies, y `bg-base` sobre `accent-strong`, 7,5:1. `border` y `border-strong` son decorativos. **Si cambia algún valor, se recalcula.**

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
| Estructura | Cabecera fija (con «Proyectos» activo en la página de proyecto), menú móvil desplegable sobre la página oscurecida, selector de idioma «ES / EN», pie, enlace de salto al contenido |
| Base | Botón principal y secundario, botón de icono (48 × 48), etiqueta de tecnología, etiqueta de plataforma, pastilla de periodo, título de sección, icono SVG en línea |
| Inicio | Presentación con la ilustración y una fila «Stack principal» con las tecnologías más usadas (chips, `mainStack` de `site/*.yaml`), tarjeta de proyecto destacada (con el logo del proyecto junto al título), tarjeta de proyecto secundaria (horizontal) y vertical (móvil), experiencia, grupo de habilidades, bloque de contacto con botón de copiar |
| Experiencia | Ficha fija del puesto actual (`sticky` en escritorio, con tecnologías como chips), fila de punto con etiquetas de plataforma, tarjeta de puesto anterior, franja de formación |
| Proyecto | Cabecera (logo del proyecto junto al `h1`), ficha en cuatro columnas (filas en móvil), aviso de interfaz (solo en inglés), portada, apartado de contenido (título a la izquierda), cifra, galería con selector, tarjeta de proyecto siguiente con miniatura, tarjeta «¿Hablamos?» |
| Galería | Selector de dispositivo y modo (`fieldset` con radios, sin JavaScript), rejilla en escritorio, carrusel con `scroll-snap` en móvil, enlace «Ampliar» |
| Formulario | Campo, área de texto, mensaje de error con icono, línea de privacidad, botón «Enviar» con estado «Enviando…» |
| Páginas | «Mensaje enviado», página de texto legal (título fijo a la izquierda), 404 bilingüe con barra superior mínima |

**Salen de la entrega 1:** la línea de tiempo con columna de fechas, punto y línea vertical; los puntos con guion en la experiencia; las tecnologías como texto separado por barras; el punto cálido de la ficha del proyecto.

Cada componente interactivo tiene estados de reposo, ratón encima, foco de teclado, pulsado y desactivado (ver «Estados»).

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

## Estados

Foco en todo: `outline: 2px solid var(--color-accent); outline-offset: 2px` con `:focus-visible`, salvo donde se indica. El ratón encima va solo en `@media (hover: hover)`; en pantalla táctil la respuesta es el pulsado (`:active`), con `-webkit-tap-highlight-color: transparent`.

| Componente | Ratón encima | Pulsado | Desactivado o propio |
| --- | --- | --- | --- |
| Botón principal | `accent-hover` | `accent-strong` | `surface-raised` con texto `text-muted`. **Enviando:** igual, con un arco que gira (quieto con movimiento reducido) y «Enviando…» |
| Botón secundario | fondo `surface-raised` | fondo `surface`, borde `accent-strong` | borde `border`, texto `text-muted` |
| Botón de icono | fondo `surface-raised`, icono `text` | fondo `surface`, borde `accent-strong` | No se desactiva: sin enlace, no se pinta |
| Copiar email | como el secundario | como el secundario | **Copiado:** ✓ en `accent` y «Email copiado» 2 s, con `aria-live="polite"` |
| «Ver proyecto →», «Contacto →» | `text`, subrayado de 2 px en `accent`, flecha +2 px | `accent-strong`, subrayado | Anillo con radio de 4 px |
| Demo, Repositorio, Ampliar, pie, Volver | `text`, subrayado de 2 px en `accent` | `accent-strong`, subrayado | Anillo con radio de 4 px |
| Enlace del menú (escritorio) | `text` sobre `surface` | `surface-raised` con línea inferior de 2 px en `accent-strong` | **Activo:** `text` sobre `surface` y `aria-current="page"` |
| Enlace del menú (móvil) | — | `surface-raised` con barra izquierda de 3 px en `accent-strong` | — |
| Selector «ES / EN» | `text`, subrayado en `border-strong` | `accent-strong`, subrayado | Anillo hacia dentro (`-2px`). **Actual:** no es enlace, subrayado en `accent` y `aria-current` |
| Tarjeta de proyecto | `surface-raised`, borde `border-strong`, resplandor azul | `surface`, borde `accent-strong`, sin resplandor | Foco: anillo en la tarjeta con `:has(.card-link:focus-visible)` |
| Proyecto siguiente | `surface-raised`, borde `border-strong`, flecha +3 px | borde y flecha en `accent-strong` | Sin siguiente, no se pinta |
| «¿Hablamos?» | fondo `surface`, «Contacto» subrayado | fondo `bg-base`, borde `accent-strong` | — |
| Galería, opción no elegida | `text` sobre `surface-raised` | `accent-strong` con texto `bg-base` | Anillo hacia dentro (`-2px`) |
| Galería, opción elegida | — | — | **Foco: anillo de 2 px en `bg-base` hacia dentro (`-4px`), 9,5:1 sobre `accent`.** (El handoff lo ponía en `text`, que solo da 1,8:1 y no cumple el 3:1 de WCAG.) |

**Tarjeta clicable entera:** el enlace del título lleva un `::after` que cubre la tarjeta, y «Demo» y «Repositorio» van por encima con `position: relative; z-index: 1`. Una sola parada de tabulación por tarjeta, más los enlaces secundarios.

## Formulario

- **Campo:** reposo con borde `border-field`; ratón encima con borde `text-secondary`; foco con borde `accent` y anillo.
- **Error:** borde `danger`, icono de 18 px (círculo con «!») dentro del campo a la derecha y mensaje de 14 px, 600, en `danger`, a 8 px. Nunca solo con color.
- **Sin JavaScript:** `:user-invalid`, que solo se activa cuando la persona ha tocado el campo o ha intentado enviar. Con `placeholder=" "` y `:placeholder-shown` se distingue el campo vacío («Rellena este campo.») del email mal escrito («Escribe un email válido, como nombre@dominio.com.»). El aviso propio del navegador se mantiene.
- **Enviando:** botón desactivado con «Enviando…», `aria-busy="true"` en el formulario y campos `readonly`.
- **Enviado:** Netlify Forms lleva a la página «Mensaje enviado» del idioma (`action` del formulario).

## Páginas

- **Mensaje enviado** (`/es/gracias/`, `/en/thanks/`, `noindex` y fuera del sitemap): cabecera y pie normales, el degradado de la presentación, un círculo con ✓ en `accent`, el título «Mensaje enviado», la frase de agradecimiento y el botón «← Volver al inicio».
- **Privacidad:** «← Ir al inicio»; en escritorio, el título y la fecha de actualización fijos a la izquierda y cada sección del Markdown a la derecha, separada por líneas; en móvil, apilado.
- **404** (`noindex`): sin navegación ni selector de idioma, solo una barra con el nombre. «Error 404» y el mensaje en inglés y en español, cada uno con su `lang` y su botón al inicio de su idioma. En escritorio, dos columnas; en móvil, el inglés primero.

## Movimiento y accesibilidad (WCAG AA)

- Transiciones de 160 ms en controles y 180 ms en tarjetas (`background`, `color`, `border-color`, `box-shadow`). Sin animaciones al hacer scroll ni efectos de escritura.
- Con `prefers-reduced-motion: reduce`, sin transiciones.
- Foco visible: anillo de 2 px en `accent` con `outline-offset: 2px`, mediante `:focus-visible`.
- Zonas táctiles de 44 px como mínimo.
- La información nunca depende solo del color: las etiquetas de plataforma llevan texto, el idioma activo va subrayado y con `aria-current`, y la opción elegida del selector tiene relleno.
- Las anclas de la cabecera llevan `scroll-margin-top` igual al alto de la cabecera fija más un margen.

## JavaScript

Solo en tres sitios de la interfaz, y el sitio funciona sin él:
- **Menú móvil:** es un `<details>` que funciona sin JavaScript. El panel baja solo hasta su contenido (enlaces, ES / EN y CV) y debajo la página queda oscurecida (`rgba(6,6,15,0.7)`). El script añade que Escape, tocar la zona oscurecida o elegir un enlace lo cierren, devuelve el foco al botón y bloquea el scroll del cuerpo mientras está abierto. (Cambio aprobado el 2026-11-11: el boceto lo ponía a pantalla completa.)
- **Copiar email:** `navigator.clipboard.writeText`. El botón pasa a «Email copiado» durante 2 s y se anuncia con `aria-live`. Sin JavaScript, el botón no aparece y queda el enlace `mailto:`.
- **Enviando el formulario:** desactiva el botón, cambia su texto a «Enviando…» y marca el formulario con `aria-busy`. Sin JavaScript se envía igual.

Aparte, sin efecto en la interfaz: el script de estadísticas de GoatCounter (`public/js/count.v5.js`, versión fija copiada de la oficial y comprobada con su huella), cargado con `async` en todas las páginas. Se sirve desde la propia web; la CSP solo abre `connect-src` a su dirección de envío.

## Ilustraciones y recursos

- **Iconos:** SVG en línea, con trazo de 1,6 a 2 px y `currentColor`, con `aria-hidden="true"`. Los de GitHub y LinkedIn son sus logotipos oficiales.
- **Escena de la presentación:** `src/assets/illustrations/hero-scene.svg` (1000 × 800, 5:4), con `alt=""` porque es decorativa. Solo desde `lg`: en móvil no se pinta ni se descarga. La luz cálida, solo en la lámpara y sus reflejos.
- **Logo de cada proyecto:** su icono de app (cuadrado, esquinas al 22 %), a la izquierda del título y en la misma línea. Tarjeta: 32 px, y 40 px en la destacada desde `lg`; separación de 12 px. Cabecera de la página: 40 px y 56 px desde `lg`; separación de 14 y 18 px. Anillo de 1 px en `border-strong` para que los iconos oscuros se vean sobre `surface`. Decorativo, con `alt=""`: el nombre va al lado. Sale del repositorio de cada proyecto (YourFavs: la claqueta sobre su fondo oscuro, como su icono de app; OnMyMind: su icono de app, tal cual). Campo opcional `logo`; sin él, el título va solo.
- **Icono del sitio:** `public/favicon.svg` (monograma «FB» en `accent`) y `public/apple-touch-icon.png` (180 × 180).
- **Imágenes para compartir:** `public/og/og-es.png` y `og-en.png` (1200 × 630), con nombre, rol y frase del idioma, sin nombre de empresa. Si cambia la frase, se regeneran.
- **Presentación en móvil:** sin ilustración.
- **Credenciales de contenido:** la ilustración y el favicon llevan incrustada la credencial C2PA de Anthropic que indica que los generó Claude. Se conservan a propósito: al optimizar los SVG hay que mantener la etiqueta `<metadata>`.
