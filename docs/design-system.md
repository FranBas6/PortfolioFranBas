# Sistema de diseño

> **⚠ BORRADOR.** Punto de partida, no un diseño cerrado. Los valores pueden cambiar tras la revisión de los bocetos de la fase 3. Deja de ser borrador solo cuando Fran lo apruebe. Hasta entonces no se implementa ningún componente con diseño.

Los tokens están en `src/styles/tokens.css` (bloque `@theme` de Tailwind 4): cada uno es a la vez variable CSS (`var(--color-surface)`) y utilidad (`bg-surface`). Si cambia un valor aquí, cambia allí, y al revés.

## Referencia de estilo

El banner de LinkedIn de Fran. Es una escena nocturna de escritorio: fondo oscuro en degradado de azul marino a morado, resplandor azulado de pantallas y un toque de luz cálida de lámpara.

Solo hay modo oscuro en la primera versión. Los tokens llevan nombre de función, no de color, para que un modo claro futuro sea cambiar valores.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `bg-deep` | `#06060f` | Final del degradado, pie |
| `bg-base` | `#0a0f24` | Fondo principal |
| `bg-glow` | `#120d2b` | Zona morada del degradado |
| `surface` | `#161a38` | Tarjetas |
| `surface-raised` | `#1e2347` | Tarjeta al pasar el ratón, campos |
| `border` | `#2a3060` | Líneas decorativas |
| `border-field` | `#7078b0` | Borde de campos del formulario |
| `text` | `#eef0fb` | Titulares y texto principal |
| `text-secondary` | `#b8bedb` | Párrafos |
| `text-muted` | `#8f96b8` | Fechas, notas |
| `accent` | `#a5b4fc` | Enlaces, botón principal, foco |
| `accent-strong` | `#7aa2f7` | Estados activos, detalles |
| `warm` | `#ffd7a0` | Luz de lámpara: un único toque por pantalla |

**Colores de editor** (`#c792ea`, `#82aaff`, `#89ddff`, `#c3e88d`, `#f78c6c`, `#ffcb6b`): solo en ilustraciones y en las etiquetas de plataforma (uno para web, uno para móvil, uno para IA). Nunca en texto corrido ni en botones.

**Contraste** ya calculado con estos valores: todo el texto y los acentos superan 4,5:1 sobre todos los fondos y superficies (peor caso, `text-muted` sobre `surface-raised`: 5,2:1); el botón principal con texto oscuro sobre `accent` da 9,5:1; `border-field` da entre 3,6:1 y 4,8:1. **Si cambia algún valor, se recalcula.**

## Tipografía

Manrope variable (autoalojada en `public/fonts/`), con fuentes del sistema como reserva.

| Nivel | Tamaño (móvil → escritorio) | Peso |
| --- | --- | --- |
| Nombre en la presentación | 40 → 64 px | 800 |
| Título de sección | 28 → 36 px | 800 |
| Título de tarjeta | 20 → 22 px | 700 |
| Texto destacado | 18 → 20 px | 500 |
| Texto | 16 → 17 px | 400 |
| Etiquetas y notas | 14 px | 600 |

Interlineado de 1,6 en texto corrido y 1,1 en titulares; unos 65 caracteres por línea como máximo; nada por debajo de 14 px.

## Espaciado y forma

- Escala: 4, 8, 12, 16, 24, 32, 48, 64 y 96 px.
- Contenedor de 1.120 px; margen lateral de 20 px en móvil y 32 px en escritorio.
- Separación entre secciones: 64 px en móvil y 96 px en escritorio.
- Radios: 8 px en botones y campos, 16 px en tarjetas, redondeo total en etiquetas.
- Cortes de pantalla: 640, 768 y 1.024 px; diseño primero para móvil.
- Rejilla de proyectos: una columna en móvil y dos desde tableta (solo hay proyectos personales).
- Profundidad con resplandores suaves en azul, no con sombras negras.

## Responsive (requisitos, no borrador)

El sitio se diseña y se implementa primero para móvil y se amplía para tableta y escritorio.

- Sin scroll horizontal en ninguna página desde 360 px de ancho.
- Navegación usable en el móvil (menú plegable o equivalente) y selector de idioma accesible.
- Botones y enlaces de al menos 44 px de alto.
- Imágenes adaptables (`srcset`/`sizes` o el componente `Image` de Astro), sin deformarse.
- Texto legible sin zoom: cuerpo de 16 px como mínimo.
- Tarjetas de proyecto en una columna en el móvil.
- Formulario de contacto cómodo en pantalla táctil.

## Componentes

| Grupo | Componentes |
| --- | --- |
| Estructura | Cabecera fija, menú móvil, selector de idioma, pie, enlace de salto al contenido |
| Base | Botón (principal, secundario, de texto), etiqueta de tecnología, etiqueta de plataforma, título de sección, subtítulo de grupo, icono |
| Inicio | Presentación, tarjeta de proyecto, línea de tiempo de experiencia (fechas, empresa, puesto, línea, puntos con título en negrita, línea de tecnologías), grupo de habilidades, bloque de contacto |
| Proyecto | Cabecera, ficha de datos, lista de puntos, cifras, galería, aviso de interfaz en español, navegación anterior y siguiente |
| Formulario | Campo, área de texto, mensaje de error, estado de enviado |

Cada componente interactivo tiene estados de reposo, ratón encima, foco de teclado, pulsado y desactivado.

## Movimiento y accesibilidad (WCAG AA)

- Transiciones de 150 a 200 ms en enlaces, botones y tarjetas. Sin animaciones al hacer scroll ni efectos de escritura.
- Se respeta la preferencia de movimiento reducido del sistema.
- Foco visible: anillo de 2 px en `accent`.
- Zonas táctiles de 44 px como mínimo.
- La información nunca depende solo del color: las etiquetas de plataforma llevan texto.

## Ilustraciones

Vectoriales, salen de la fase 3:

- Escena de la presentación.
- Icono del sitio.
- Las dos imágenes para compartir (una por idioma), sin nombre de empresa.
