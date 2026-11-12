# Portfolio de Francisco José Bas Guil: plan del proyecto

> Versión pública del plan. El original completo, con rutas locales y nombres internos, es privado y no se sube al repositorio. Esta versión tiene el mismo contenido sin esos datos.

Este documento recoge todas las decisiones del portfolio personal de Fran como desarrollador. La planificación ya está hecha y aprobada. Si algo no está aquí y no puede deducirse de los repositorios, se pregunta: no se inventan datos sobre Fran ni sobre sus proyectos.

Se trabaja por fases y con puntos de control. **Al terminar cada fase, se para, se resume lo hecho y se espera confirmación antes de empezar la siguiente.**

## 1. Por dónde empezar

1. Leer este documento entero.
2. Crear `.gitignore` con la carpeta `.private/` **antes de cualquier otra cosa y antes del primer commit** (ver apartado 4).
3. Guardar el plan completo en `.private/plan-full.md`. Es la fuente de verdad del proyecto y nunca se sube.
4. Escribir `docs/plan.md` (este documento) como versión pública del plan: sin rutas locales ni nombres de los repositorios de FleetX. Esos repositorios se llaman aquí solo "FleetX web", "FleetX app" y "servicio de correo de FleetX", y los demás por su nombre de proyecto ("YourFavs", "OnMyMind").
5. Ejecutar solo la **fase 1** (apartado 12) y parar.

El plan completo contiene rutas locales y nombres internos de FleetX porque hacen falta para trabajar. Por eso el original solo puede vivir en `.private/`. Nada de lo que se escriba en `docs/`, `CLAUDE.md`, `README.md`, el código, los comentarios o los mensajes de commit puede incluirlos. Si `CLAUDE.md` necesita las rutas, remite a `.private/plan-full.md` en lugar de copiarlas.

## 2. Quién soy y qué es el portfolio

- Francisco José Bas Guil, Software Developer full stack en FleetX (Frakt24), Orihuela (Alicante), desde 01/2026.
- FleetX es un TMS SaaS multi-tenant para empresas de transporte noruegas, con app móvil para conductores (Android e iOS). Trabajo en la plataforma web (Laravel) y en la app (Flutter), en inglés a diario con equipo y clientes noruegos.
- Enlaces: `github.com/FranBas6` · `linkedin.com/in/franbasguil` · email público `franbasguil@gmail.com`. Mi teléfono no se publica en ningún sitio.

El portfolio debe ser elegante, sencillo y profesional, sin animaciones excesivas. De lectura rápida: quien entre debe entender en un minuto quién soy y qué he hecho, y poder profundizar si quiere. Debe verse que trabajo en web (Laravel) y en móvil (Flutter), y que integro IA y OCR en producto real. Tiene que ser fácil añadir proyectos nuevos.

## 3. Fuentes

| Qué | Uso |
| --- | --- |
| Portfolio | Único sitio donde se escribe |
| YourFavs | Solo lectura |
| OnMyMind | Solo lectura |
| FleetX web | Solo lectura, privado |
| FleetX app | Solo lectura, privado |
| Servicio de correo de FleetX | Solo lectura, privado |
| Resumen de mi trabajo en FleetX (`fleetx-logros.md`, privado) | Fuente principal del contenido de FleetX |
| Fuente del banner de LinkedIn (HTML y PNG, privados) | Referencia de estilo visual |
| CV web en español (sin teléfono) | Se copia a `public/cv/francisco-bas-guil-cv-es.pdf` |
| CV web en inglés (sin teléfono) | Se copia a `public/cv/francisco-bas-guil-cv-en.pdf` |
| Lista de términos prohibidos, ya revisada | Se copia a `.private/forbidden-terms.txt` (apartado 4) |

Las rutas de cada fuente están solo en el plan privado. Todos los archivos necesarios de fuera de los repositorios están en una única carpeta privada de fuentes; no se accede a ninguna otra carpeta del equipo.

No se abren archivos `.env`, claves, certificados ni credenciales de ningún repositorio: no hacen falta.

No se modifica nada fuera de la carpeta del portfolio: ni archivos, ni ramas, ni commits en los otros repositorios.

Los nombres de las carpetas de los tres repositorios de FleetX son nombres internos: se aplica el apartado 4.

Los dos CV se copian a `public/cv/` con esos nombres exactos, sin espacios ni tildes. Solo se usan esas dos versiones web; cualquier otro CV lleva el teléfono y no se publica.

## 4. Regla de FleetX: qué no se puede publicar

El repositorio del portfolio será **público** (`FranBas6/PortfolioFranBas`; en el plan original, `FranBas6/portfolio`). El código de FleetX es privado. Se pueden leer los tres repositorios de FleetX para entender y verificar qué hice, pero al portfolio solo llega **qué hice, con qué tecnologías y por qué es interesante**.

Nunca puede aparecer en el repositorio del portfolio (ni en contenido, ni en código, ni en comentarios, ni en mensajes de commit, ni en `docs/`):

- Código de FleetX, ni fragmentos ni pseudocódigo calcado.
- Capturas de pantalla o diagramas internos, tampoco redibujados.
- Nombres de clientes, de compañeros o datos de cuentas.
- Nombres internos: nombres de repositorios (incluidos los nombres de sus carpetas), de servicios, tablas, clases, ramas, tickets o entornos. Tampoco en `CLAUDE.md` ni en `README.md`.
- Cifras de negocio de la empresa. En los proyectos de FleetX, `metrics` solo admite cifras mías (commits, funcionalidades, errores resueltos…).

Sí se puede: nombrar la empresa, pero solo donde indica el apartado 6 ("FleetX" en las páginas de sus proyectos y "FleetX (Frakt24)" en la experiencia, como en mi CV), describir los módulos al nivel de detalle del resumen privado de mi trabajo en FleetX y nombrar tecnologías.

Cómo se aplica:

- **Carpeta `.private/`**, en `.gitignore` desde antes del primer commit. Ahí va todo lo que no debe subirse:
  - `.private/plan-full.md`: el plan completo, con rutas y nombres de repositorios.
  - `.private/forbidden-terms.txt`: la lista de términos prohibidos, uno por línea; las líneas que empiezan por `#` son comentarios. No se muestra, no se copia a ningún otro sitio y sus términos no se usan en ejemplos, pruebas, comentarios ni mensajes de commit.
  - `.private/fleetx-notes.md`: notas de la revisión de los repositorios de FleetX.
  - Una copia del resumen de mi trabajo en FleetX, si resulta cómodo tenerla cerca. No se copia a ninguna otra carpeta.
- **Control automático:** `scripts/check-content.mjs` busca los términos de la lista en todo el contenido (apartado 8).
- **Control humano:** el script solo detecta nombres. Cada texto de FleetX lo leo yo contra `docs/fleetx-rules.md` antes de darlo por bueno. Se señala cualquier frase dudosa.
- La revisión de los repositorios de FleetX sirve para **comprobar y afinar** lo que ya dice el resumen (fechas, alcance, cifras mías). No añade detalles nuevos al portfolio.

## 5. Stack

- **Astro**, salida estática, sin React ni otro framework de interfaz. Versión estable actual, consultando su documentación para las colecciones de contenido y el enrutado i18n en lugar de dar por hecha una API.
- **Colecciones de contenido de Astro**, con Markdown y YAML por idioma validados con esquema.
- **Tailwind CSS 4**, con los tokens de diseño como variables CSS.
- **i18n nativo de Astro**, sin librerías. Integración oficial de sitemap.
- **Manrope variable autoalojada** en `public/fonts/`, sin peticiones a Google Fonts.
- **JavaScript mínimo:** menú móvil y botón de copiar el email. El selector de idioma es un enlace.
- **Netlify:** hosting, redirección de la raíz y Netlify Forms para el formulario. Sitio: `franbasguil.netlify.app`.
- Sin analítica, sin cookies y sin scripts de terceros, salvo que yo lo pida.

## 6. Mapa del sitio y estructura de las páginas

```text
/                              → redirige según idioma del navegador (apartado 9)
/es/                           Inicio
/es/proyectos/<slug>/          Página de proyecto (5)
/es/privacidad/                Privacidad
/en/                           Home
/en/projects/<slug>/           Project page (5)
/en/privacy/                   Privacy
/404                           Página no encontrada, bilingüe
/cv/francisco-bas-guil-cv-es.pdf · /cv/francisco-bas-guil-cv-en.pdf
```

Experiencia, habilidades y contacto son secciones del inicio, sin página propia.

### Dónde se nombra FleetX

El portfolio es mío, no de la empresa, así que FleetX no aparece arriba. Solo se nombra en dos sitios:

- **La sección de Experiencia del inicio:** "Software Developer · FleetX (Frakt24) · 01/2026 – actualidad" y sus líneas.
- **Las páginas de los proyectos de empresa:** en la ficha de datos y, si hace falta, en su texto y su SEO.

No se nombra en ningún otro lugar: ni en la cabecera, ni en la presentación, ni en los subtítulos o tarjetas de proyectos, ni en el bloque de más trabajo profesional, ni en el pie. Tampoco en el título y la descripción SEO del inicio, en las imágenes para compartir ni en los datos estructurados de persona. En esos sitios se habla de "un TMS SaaS para empresas de transporte" o de trabajo "profesional" o "en producción".

### Inicio (debe leerse entero en un minuto)

1. **Cabecera fija:** nombre, anclas a Proyectos, Experiencia, Habilidades y Contacto, selector ES/EN y botón de CV.
2. **Presentación:** nombre, rol y una frase de dos líneas como máximo, sin nombre de empresa. Debajo, tres ideas en una línea: web con Laravel, móvil con Flutter, IA y OCR en producción. Botones "ver proyectos" y "descargar CV", e iconos de GitHub y LinkedIn.
3. **Proyectos:** cinco tarjetas en dos grupos con subtítulo, en este orden:
   - "En producción" (en inglés, "In production"): transporte a granel, pedidos desde el correo con IA, app de conductores.
   - "Proyectos personales" (en inglés, "Personal projects"): OnMyMind, YourFavs.

   Cada tarjeta lleva etiqueta de origen ("Profesional" o "Personal"; en inglés, "Professional" o "Personal"), etiquetas de plataforma (web, móvil, IA), título, una frase, cuatro o cinco tecnologías y enlace a su página; las personales, además, demo y repositorio. En la tarjeta de YourFavs, lo primero que se lee es el chat en tiempo real.
4. **Más trabajo profesional** (en inglés, "More professional work"): lista compacta bajo las tarjetas, sin páginas propias y sin nombrar la empresa. Dos menciones cortas de dos líneas (permisos de transporte especial; asistente de IA y formación) y los seis puntos del nivel 2 del resumen de FleetX, a una línea cada uno. El nivel 3 no se incluye.
5. **Experiencia:** "Software Developer · FleetX (Frakt24) · 01/2026 – actualidad" con dos o tres líneas, los otros tres puestos con una línea cada uno y la formación en dos líneas.
6. **Habilidades:** seis grupos de etiquetas (backend, frontend, móvil, IA, datos, calidad y herramientas). Solo lo que aparece en la experiencia o en los proyectos. Idiomas aparte, en una línea.
7. **Contacto:** email con botón de copiar, GitHub y LinkedIn; y formulario con nombre, email, mensaje, campo trampa antispam y línea de privacidad con enlace a la página de privacidad.
8. **Pie:** enlaces, privacidad y selector de idioma repetido.

### Página de proyecto (plantilla común, se lee en dos minutos)

1. Cabecera: enlace de vuelta a proyectos, etiquetas, título y frase resumen.
2. Ficha: periodo, rol, plataformas y enlaces. En los proyectos de empresa, también la empresa: es el único sitio de la página donde tiene que aparecer "FleetX".
3. Qué es: dos frases.
4. Qué hice: de cuatro a seis puntos cortos.
5. Tecnologías.
6. Por qué es interesante: una o dos frases.
7. Cierre: proyecto anterior y siguiente, y llamada a contacto.

| | Proyecto de FleetX | Proyecto personal |
| --- | --- | --- |
| Imágenes | Una ilustración abstracta en el estilo del banner, sin nada del producto real. Ninguna captura | Galería de capturas, móvil y escritorio |
| Enlaces | Ninguno | Demo y repositorio |
| Cifras | Solo mías | Tests, migraciones, ADRs, commits |
| Aviso | "Proyecto de empresa: el código es privado" | "La interfaz está en español", solo en la versión inglesa |
| Bloque extra | Ninguno | "Cómo trabajo", en tres líneas |

## 7. Arquitectura de carpetas

```text
portfolio/
├── astro.config.mjs          # URL del sitio, idiomas (es, en), sitemap
├── netlify.toml              # build, cabeceras de seguridad y caché, redirección de /
├── package.json · tsconfig.json
├── .gitignore                # incluye .private/
├── CLAUDE.md                 # reglas del proyecto, incluida la de FleetX; sin rutas ni nombres internos
├── README.md
│
├── .private/                 # NUNCA se sube: plan completo, términos prohibidos y notas de FleetX
│
├── docs/
│   ├── plan.md               # este documento: versión pública del plan
│   ├── design-system.md      # tokens y componentes; BORRADOR hasta que yo lo apruebe
│   ├── content-guide.md      # cómo añadir un proyecto, tono, longitudes, regla de metrics
│   └── fleetx-rules.md       # el apartado 4 de este documento
│
├── scripts/
│   └── check-content.mjs     # controles de contenido (apartado 8)
│
├── public/
│   ├── cv/                   # los dos PDF
│   ├── fonts/                # Manrope variable
│   ├── og/                   # imagen para compartir, una por idioma
│   └── favicon.svg · robots.txt
│
└── src/
    ├── content.config.ts     # esquemas de todo el contenido
    ├── content/              # TEXTOS: lo único que se toca para editar
    │   ├── projects/
    │   │   ├── es/           # bulk-transport.md, email-orders-ai.md, driver-app.md,
    │   │   └── en/           #   onmymind.md, yourfavs.md (mismo nombre en los dos)
    │   ├── site/             # es.yaml · en.yaml
    │   ├── experience/       # es.yaml · en.yaml
    │   ├── more-fleetx/      # es.yaml · en.yaml
    │   ├── skills/           # skills.yaml (compartido)
    │   └── legal/            # es/privacy.md · en/privacy.md
    ├── i18n/
    │   ├── ui.ts             # textos de interfaz
    │   ├── routes.ts         # equivalencias de rutas (proyectos ↔ projects)
    │   └── utils.ts          # idioma actual, URL de la otra versión
    ├── assets/
    │   ├── projects/yourfavs/ · onmymind/ · fleetx/
    │   └── illustrations/
    ├── styles/
    │   ├── tokens.css
    │   └── global.css
    ├── layouts/BaseLayout.astro
    ├── components/
    │   ├── layout/           # Header, Footer, LanguageSwitcher, Seo, SkipLink
    │   ├── home/             # Hero, Projects, MoreFleetx, Experience, Skills, Contact
    │   ├── project/          # ProjectCard, ProjectFacts, Gallery, ProjectNav, PrivateNotice
    │   └── ui/               # Button, Tag, SectionHeading, Icon, ContactForm
    ├── views/                # HomeView, ProjectView, PrivacyView (sin idioma fijo)
    └── pages/                # solo rutas; cada archivo elige idioma y llama a una vista
        ├── index.astro       # página mínima de reserva con enlaces a /es/ y /en/, sin indexar
        ├── 404.astro
        ├── es/  index.astro · proyectos/[slug].astro · privacidad.astro
        └── en/  index.astro · projects/[slug].astro · privacy.astro
```

Principios:

- **Contenido separado del código.** Ningún componente lleva frases escritas: todo sale de `src/content/` o de `src/i18n/ui.ts`.
- **Añadir un proyecto son dos archivos** (uno por idioma) más sus imágenes. Tarjeta, página y sitemap salen solos.
- **Mismo nombre de archivo en los dos idiomas** para emparejar traducciones. La URL de cada idioma la da el campo `slug`.
- **Páginas finas, vistas compartidas,** para no duplicar nada entre idiomas.

## 8. Modelo de contenido

### Proyectos (`src/content/projects/<idioma>/<id>.md`)

Todos los campos van en la cabecera del Markdown; el cuerpo queda libre.

| Campo | Qué es | Traducible |
| --- | --- | --- |
| `slug` | Parte final de la URL en ese idioma | Sí |
| `kind` | `company` o `personal` | No |
| `company` | Nombre de la empresa, solo si es `company`. Se muestra en la ficha de la página del proyecto, nunca en la tarjeta | No |
| `order` | Posición dentro de su grupo | No |
| `draft` | Si es `true`, no se publica | No |
| `title` | Título | Sí |
| `summary` | Frase de la tarjeta y de la cabecera de la página | Sí |
| `period` | `start` y `end` con formato `2026-10`; sin `end` significa "actualidad" | No |
| `role` | Mi papel, en una línea | Sí |
| `platforms` | Lista entre `web`, `mobile`, `ai` | No |
| `stack` | Identificadores de `skills.yaml`; la tarjeta muestra los cinco primeros | No |
| `whatItIs` | Qué es | Sí |
| `whatIDid` | Lista de cuatro a seis puntos | Sí |
| `whyItMatters` | Por qué es interesante | Sí |
| `metrics` | Cifras opcionales: valor y etiqueta | Etiqueta |
| `cover` | Imagen principal y texto alternativo, obligatoria | Texto alternativo |
| `links` | Demo y repositorio | No |
| `gallery` | Capturas: imagen, texto alternativo y `mobile` o `desktop` | Texto alternativo |
| `howIWork` | Tres líneas sobre el método | Sí |
| `uiNote` | Si es `true`, la versión inglesa avisa de que la interfaz está en español | No |
| `seo` | Título y descripción propios; si faltan, se usan `title` y `summary` | Sí |

Reglas del esquema:

- Un proyecto `company` **no admite** `links`, `gallery`, `howIWork` ni `uiNote`: la compilación falla si aparecen. El aviso de código privado sale solo, por ser `company`.
- `stack` solo acepta identificadores que existan en `skills.yaml`.

Los cinco proyectos:

| Archivo | `kind` | `slug` es | `slug` en | Periodo |
| --- | --- | --- | --- | --- |
| `bulk-transport` | company | `transporte-a-granel` | `bulk-transport` | 2026-10 → actualidad |
| `email-orders-ai` | company | `pedidos-desde-el-correo-con-ia` | `ai-email-orders` | 2026-09 → 2026-10 |
| `driver-app` | company | `app-de-conductores` | `driver-app` | 2026-03 → actualidad |
| `onmymind` | personal | `onmymind` | `onmymind` | 2026-09 → actualidad |
| `yourfavs` | personal | `yourfavs` | `yourfavs` | 2025-05 → actualidad |

Demos: YourFavs en `https://yourfavs.netlify.app`, OnMyMind en `https://onmymind.pages.dev/`. Repositorios: `https://github.com/FranBas6/YourFavs` y `https://github.com/FranBas6/OnMyMind`.

Si alguna fecha del resumen de FleetX no coincide con esta tabla, manda la tabla. El transporte a granel y la app de conductores siguen en curso: van sin `end`.

### Resto de colecciones

| Archivo | Contenido |
| --- | --- |
| `site/es.yaml`, `en.yaml` | Presentación (nombre, rol, frase y las tres ideas), email, enlaces, idiomas que hablo, ruta del CV y SEO del inicio |
| `experience/es.yaml`, `en.yaml` | `jobs`: puesto, empresa, lugar, fechas, una línea de resumen y hasta tres puntos. `education`: título, centro y años |
| `more-fleetx/es.yaml`, `en.yaml` | `mentions`: permisos de transporte especial (sep 2026) y asistente de IA y formación (jun–jul 2026), con título, dos líneas y tecnologías. `lines`: los seis del nivel 2, con título y una línea |
| `skills/skills.yaml` | Seis grupos; cada tecnología con identificador y nombre visible |
| `legal/es/privacy.md`, `en/privacy.md` | Texto de privacidad |

Los rótulos de interfaz (menú, botones, campos del formulario, títulos de los grupos de habilidades, subtítulos de los grupos de proyectos) van en `i18n/ui.ts`.

### Datos de experiencia y formación (del CV)

| Puesto | Empresa y lugar | Fechas | Resumen |
| --- | --- | --- | --- |
| Software Developer | FleetX (Frakt24), Orihuela, presencial | 01/2026 – actualidad | TMS SaaS multi-tenant (Laravel 10, PHP 8.3, MariaDB, Livewire, JavaScript) y app de conductores (Flutter/Dart, Firebase) |
| Soporte Técnico | Mercaluz – EAS Electric, Redován | 07/2025 – 08/2025 | Soporte a usuarios (hardware, software y red) y mantenimiento de equipos |
| Desarrollador (prácticas FCT) | Damián Montoya – Abogados Asociados, Murcia | 03/2025 – 06/2025 | Módulos en Odoo 18 con Python y SQL para automatizar procesos internos |
| Técnico Informático (prácticas FCT) | Ticarum – Universidad de Murcia, Espinardo | 03/2023 – 06/2023 | Mantenimiento y reparación de equipos, soporte técnico e inventario |

Formación: CFGS Desarrollo de Aplicaciones Multiplataforma (2023–2025) y CFGM Sistemas Microinformáticos y Redes (2021–2023), ambos en el IES Las Espeñetas, Orihuela.

Idiomas: español nativo; inglés profesional (B2), idioma de trabajo diario.

Stack en FleetX: Laravel 10, PHP 8.3, MariaDB, Livewire, JavaScript, Flutter/Dart, Firebase (Firestore, FCM, Crashlytics), LLMs, Google ML Kit, Docker.

### Longitudes máximas

| Texto | Máximo |
| --- | --- |
| Título de proyecto | 45 caracteres |
| `summary` | 150 caracteres |
| `whatItIs` | 300 caracteres |
| Cada punto de `whatIDid` | 110 caracteres, entre 4 y 6 puntos |
| `whyItMatters` | 200 caracteres |
| Frase de presentación | 160 caracteres |
| Línea de nivel 2 | 120 caracteres |
| Mención corta de FleetX | 220 caracteres |
| Descripción SEO | Entre 120 y 160 caracteres |

Estas longitudes se documentan en `content-guide.md` y el script las lee desde un único sitio.

### `scripts/check-content.mjs`

Se ejecuta antes de cada compilación y comprueba:

1. **Paridad:** cada proyecto existe en los dos idiomas y con los mismos campos.
2. **Campos no traducibles idénticos** entre el archivo español y el inglés.
3. **Imágenes:** ningún proyecto sin `cover`, y todas las rutas de imagen existen.
4. **Longitudes:** avisa de cualquier texto que supere su máximo.
5. **Términos prohibidos:** busca los de `.private/forbidden-terms.txt` en `src/`, `docs/`, `CLAUDE.md` y `README.md`, con estas reglas:
   - No distingue mayúsculas de minúsculas.
   - Busca por palabra completa, para que un nombre corto no salte dentro de otra palabra. Los límites de palabra entienden letras con tilde, la ñ y la å, ø y æ: se construyen con `\p{L}` y `\p{N}` y el flag `u`, no con `\b`.
   - Excepción: un término que termina en `-` se busca como prefijo, para que `X-` detecte `X-1234`.
   - Cuando encuentra algo, muestra solo el archivo y la línea, nunca el término.
   - Lleva tests con casos inventados: una palabra con tilde, una palabra dentro de otra más larga (que no debe saltar) y un prefijo con guion. Nunca con términos de la lista.

   Si el archivo no existe (como ocurrirá en la compilación de Netlify), se salta este control con un aviso visible. En local debe pasarse siempre antes de subir cambios: un hook de `pre-push` lo ejecuta y falla si el archivo falta o hay coincidencias.

## 9. Internacionalización

- **Rutas:** los dos idiomas llevan prefijo (`/es/`, `/en/`) y ninguno vive en la raíz. Los segmentos se traducen (`proyectos` ↔ `projects`, `privacidad` ↔ `privacy`).
- **Redirección de la raíz, en `netlify.toml`, no en JavaScript.** Español solo si el navegador prefiere español; inglés para todos los demás:

```toml
[[redirects]]
  from = "/"
  to = "/es/"
  status = 302
  force = true
  conditions = { Language = ["es"] }

[[redirects]]
  from = "/"
  to = "/en/"
  status = 302
  force = true
```

  Es temporal (302) a propósito. Las páginas interiores nunca redirigen por idioma. No está verificado cómo trata Netlify a un navegador que lista varios idiomas: se prueba en la fase 5.

- **Selector de idioma:** un enlace a la misma página en el otro idioma, con texto "ES / EN", sin banderas, sin JavaScript, sin cookies. El idioma activo se marca también para lectores de pantalla.
- **Sin texto de reserva:** si falta una clave en un idioma o un proyecto en un idioma, la compilación falla.
- **Fechas:** se guardan como `2026-10` y se muestran según el idioma ("oct 2026" / "Oct 2026", "actualidad" / "present").
- **Inglés británico,** como en mi CV ("licence", "customise").
- **Términos fijos:** el módulo se llama "transporte a granel" en español y **"Bulk transport"** en inglés, en todo el sitio. Tecnologías, FleetX, YourFavs y OnMyMind no se traducen.
- **SEO por página y por idioma:** título y descripción propios, atributo `lang`, URL canónica a sí misma, `hreflang` para `es`, `en` y `x-default` (**`x-default` apunta a la versión inglesa**), y datos para compartir con una imagen por idioma.
- **SEO de sitio:** sitemap con alternativas de idioma, `robots.txt` enlazando el sitemap, y datos estructurados de persona en el inicio (nombre, puesto, GitHub y LinkedIn; sin empresa). El título y la descripción SEO del inicio y las imágenes para compartir tampoco nombran la empresa. La raíz y la 404 no se indexan.

## 10. Sistema de diseño (BORRADOR)

El detalle está en [`design-system.md`](design-system.md), marcado como **BORRADOR** hasta que lo apruebe tras revisar los bocetos de la fase 3. Resumen:

- Referencia de estilo: mi banner de LinkedIn. Es una escena nocturna de escritorio: fondo oscuro en degradado de azul marino a morado, resplandor azulado de pantallas y un toque de luz cálida de lámpara.
- Solo modo oscuro en la primera versión, con tokens con nombre de función para que un modo claro futuro sea cambiar valores.
- Manrope variable, escala de espaciado de 4 a 96 px, contenedor de 1.120 px, diseño primero para móvil.
- Requisitos responsive y de accesibilidad (WCAG AA) no negociables: sin scroll horizontal desde 360 px, zonas táctiles de 44 px, foco visible, respeto al movimiento reducido.

## 11. Qué revisar en cada repositorio (fase 2)

| Repositorio | Qué mirar | Qué sale de ahí |
| --- | --- | --- |
| YourFavs | README en los dos idiomas, planes, migraciones, tests (pgTAP) y el chat en tiempo real | Ficha del proyecto con cifras actualizadas |
| OnMyMind | README, los ADRs, tests (Vitest y pgTAP), cifrado en el dispositivo, cola offline y seguimiento de precios | Ficha del proyecto con cifras actualizadas |
| FleetX web | Mi historial de commits y los módulos descritos en el resumen de FleetX | Fechas, alcance y cifras mías verificadas |
| FleetX app | Mi historial de commits: transporte a granel, incidencias, hojas de horas, modo sin conexión | Lo mismo |
| Servicio de correo de FleetX | Mi historial de commits | Precisar la ficha de pedidos con IA |

Para filtrar mis commits, se usa el autor configurado en cada repositorio; si hay dudas, se pregunta.

Datos de partida de los proyectos personales, que se verifican y actualizan con los repositorios:

- **YourFavs:** web app para seguir películas y series. Chat en tiempo real, individual y de grupo, con Supabase Realtime y permisos en base de datos (RLS); importación desde IMDb y Letterboxd; migración de Firebase a Supabase; 344 tests de base de datos (pgTAP); PWA. Stack: Astro 5 (SSR), TypeScript, Tailwind, Supabase (PostgreSQL), Netlify Functions, API de TMDB. Su página lleva la atribución de TMDB que ya usa la app.
- **OnMyMind:** app de listas offline-first (PWA). Listas compartidas en tiempo real, cifrado en el dispositivo (AES-GCM y WebAuthn/Face ID), cola de cambios offline, seguimiento automático de precios con Edge Functions y pg_cron, Web Push, 13 ADRs. El README da 1.143 tests de app y 352 de base de datos: se usan las cifras desglosadas que se encuentren. Stack: React 19, TypeScript, TanStack Query/Router, Tailwind, Supabase, Deno.
- Las dos apps tienen la interfaz solo en español: de ahí el campo `uiNote`.

**Capturas:** los dos repositorios ya tienen capturas en claro y en oscuro. Se usan las versiones oscuras. Por proyecto, una portada y tres o cuatro capturas, mezclando móvil y escritorio. La portada de YourFavs es la del chat. En OnMyMind faltan capturas de la lista compartida en vivo y de la nota protegida: las aporto yo. Antes de usar cualquier captura, reviso las elegidas para que no salgan datos reales.

## 12. Fases

Tres puntos de control míos: contenido aprobado, bocetos aprobados y revisión final antes de publicar.

### Fase 1: montaje y estructura

- Proyecto Astro con Tailwind, idiomas, sitemap y repositorio Git local. No se crea el repositorio remoto ni se sube nada hasta que yo lo diga.
- `.gitignore` con `.private/` antes del primer commit, y el plan completo en `.private/plan-full.md`.
- Estructura completa del apartado 7 y esquemas del apartado 8.
- Documentos: `docs/plan.md` (versión pública), `content-guide.md`, `fleetx-rules.md`, `CLAUDE.md` y `design-system.md` (BORRADOR).
- Antes del primer commit, se busca en todo lo que vaya a subirse las rutas locales y los nombres de las carpetas de los repositorios de FleetX, y se confirma que no aparecen.
- Páginas en HTML semántico **sin diseño**, con contenido de prueba claramente marcado, para validar rutas, selector de idioma, `hreflang` y sitemap.
- `check-content.mjs`, el hook de `pre-push` y `netlify.toml` con la redirección de la raíz.
- Los dos CV web copiados a `public/cv/` desde la carpeta privada de fuentes.

No se crea ningún componente con diseño. Se cierra cuando compila, las rutas responden en los dos idiomas y el script pasa.

### Fase 2: revisión de repositorios y contenido

1. Revisar los repositorios personales y actualizar cifras.
2. Revisar los de FleetX; notas solo en `.private/fleetx-notes.md`.
3. Redactar el contenido en español. Muchos puntos del resumen de FleetX pasan de 110 caracteres: se recortan y **se me enseñan las versiones cortas junto a las originales** antes de darlas por buenas.
4. Con el español aprobado, redactar el inglés.
5. Pasar el control de términos y darme los textos de FleetX para leerlos contra `fleetx-rules.md`.
6. Redactar el texto de privacidad como plantilla corta (responsable: yo; finalidad: responder al mensaje; el formulario lo gestiona Netlify) y pasármelo para revisarlo.

Se cierra cuando apruebo todos los textos y no queda contenido de prueba.

### Fase 3: diseño en Claude Design

Esta fase la hago yo en Claude Design. La parte de Claude Code:

- Antes: preparar lo que llevaré a Claude Design (`design-system.md` en borrador y el contenido real del inicio, de una página de proyecto de FleetX y de una personal).
- Primero se hacen bocetos, en móvil y escritorio, del inicio, de una página de proyecto de FleetX y de una personal. Yo los reviso.
- Después: con mis cambios, actualizar tokens y componentes en `design-system.md`. Deja de ser borrador solo cuando yo lo apruebe.
- Al final llegan el resto de piezas: estados, formulario, privacidad, 404, ilustraciones e imágenes para compartir.

**No se implementa ningún componente con diseño hasta que yo apruebe los bocetos y `design-system.md`.**

### Fase 4: implementación

Orden: tokens, componentes base, cabecera y pie, inicio, páginas de proyecto, formulario, SEO y pasada de calidad.

Se cierra cuando:

- Lighthouse da 95 o más en rendimiento, accesibilidad, buenas prácticas y SEO, en móvil y en los dos idiomas.
- Todo el sitio se recorre y se usa con teclado.
- Se ha hecho una pasada con lector de pantalla por el inicio y una página de proyecto.
- Cada pantalla coincide con su boceto aprobado.

Cada cambio visual se comprueba en un navegador real, en móvil y escritorio, antes de darlo por hecho.

### Fase 5: publicación

- Repositorio público `FranBas6/PortfolioFranBas` y despliegue en Netlify como `franbasguil.netlify.app`.
- Prueba de la redirección con el navegador en español, en inglés y en un tercer idioma.
- Prueba del formulario de principio a fin, incluido que el mensaje me llega.
- Comprobación de `hreflang`, sitemap y vista previa al compartir en LinkedIn.
- Alta en Google Search Console.
- Última lectura mía de los textos de FleetX ya en producción.
- Actualizo los dos CV (se generan fuera del portfolio) con el enlace al portfolio y sustituyo los dos PDF de `public/cv/` con los mismos nombres.
- Añado el enlace al portfolio en LinkedIn y GitHub.

## 13. Forma de trabajar

- Una fase cada vez; al terminar, resumen y espera.
- En cada punto de control, se comprueba cada página a 375 px, 768 px y 1.280 px de ancho en un navegador real y se dice qué se ha revisado.
- Antes de cada fase, se explica en pocas líneas qué se va a hacer.
- Commits pequeños y descriptivos. No se sube nada al remoto sin que yo lo pida.
- Si una decisión no está en este documento, se propone con una recomendación en lugar de improvisarla, y se anota cuando la apruebe en el plan privado y en este documento, en este último sin rutas ni nombres internos.
- Conversación en español. El código, los nombres de archivos y los commits, en inglés.

## 14. Decisiones aprobadas después del plan

### 2026-11-11 · Repositorio y ramas

- **Repositorio:** git local desde la fase 1. El remoto `FranBas6/portfolio` se crea en la fase 5, como dice el plan.
- **Autor de los commits:** el email privado de GitHub de Fran (`…@users.noreply.github.com`), configurado solo en este repositorio. Los commits se asocian a su cuenta sin exponer ningún email.
- **Ramas:** `main` y `develop`. Nunca se trabaja directamente en ninguna de las dos: cada cambio sale de `develop` en su propia rama, con nombre en inglés.
  - `phase/<n>-<tema>` para una fase (`phase/2-content`). Se une a `develop` con merge commit (`--no-ff`) para que cada fase quede como un bloque en el historial.
  - `feat/…`, `fix/…`, `docs/…`, `chore/…` para lo demás. Se unen sin merge commit (`--ff-only`).
  - Después del merge, la rama se borra (en local y en el remoto, si se subió).
  - `main` avanza hasta `develop` solo cuando Fran aprueba una fase. Desde la fase 5, `main` es lo que está en producción.
- **Hook `pre-push`:** además del contenido y de los mensajes de commit, revisa los nombres de las ramas y etiquetas que se suben, porque son públicos mientras existen en el remoto.

### 2026-11-11 · Cierre de la fase 1

- **Node:** Node 24 LTS, fijado en `.nvmrc` y en Netlify. Astro 7 necesita 22.23.4 o superior. La versión de Node por defecto del equipo no se cambia, porque la usan otros proyectos: en esta carpeta se ejecuta `nvm use`.
- **Apartado 10 de este plan:** queda como resumen con enlace a `design-system.md`, que es la única fuente del diseño, para que no haya dos versiones que se desincronicen.
- **Licencia:** todos los derechos reservados (código y contenido). El repositorio es público para poder verlo, no para reutilizarlo. La fuente Manrope mantiene su licencia OFL.
- **Meses:** tres letras fijas en los dos idiomas ("sep 2026" / "Sep 2026"), en lugar del formato de Intl, que escribe "sept" / "Sept".
- **Fase 1 aprobada:** `main` avanza hasta `develop`.

### 2026-11-11 · El trabajo profesional va en Experiencia, no en Proyectos

Sustituye a lo que dicen los apartados 6, 8 y 10 sobre proyectos de empresa.

- **Proyectos:** solo los personales, en una única lista sin subgrupos ni etiqueta de origen. **YourFavs va primero** y OnMyMind después.
- **Experiencia:** todo el trabajo profesional se cuenta aquí, como en el CV. Cada puesto es una línea de tiempo con:
  - fechas;
  - empresa y puesto;
  - una línea sobre la empresa o el trabajo;
  - puntos con título en negrita (hasta 7);
  - una línea de tecnologías.
- **Se eliminan:** las páginas de proyectos de FleetX (transporte a granel, pedidos desde el correo con IA, app de conductores), el bloque "Más trabajo profesional", el aviso de código privado y las ilustraciones abstractas de FleetX. Todo ese contenido pasa a la entrada de FleetX en Experiencia.
- **FleetX** solo se nombra en la sección de Experiencia del inicio.
- **YourFavs:** el seguimiento de películas y series va delante. El chat es una función más, no lo primero de la tarjeta ni la portada.
- **Contenido de FleetX:**
  - sin cifras de commits;
  - sin duración del transporte a granel;
  - sin fechas en permisos ni en el asistente;
  - el asistente de IA es trabajo conjunto con un compañero.
- **Capturas** de YourFavs y OnMyMind: las hacen los agentes de esos proyectos con cuentas de demo, al final de la fase 2. Las portadas deben explicar en qué consiste cada app, no una función secundaria.
- Cada texto, en la experiencia y en los proyectos, nombra las tecnologías con las que está hecho.

### 2026-11-11 · Galería con cuatro versiones por pantalla

- Cada captura de un proyecto existe en cuatro versiones: escritorio oscuro, escritorio claro, móvil oscuro y móvil claro. Enseñan lo mismo, con los mismos datos de demo.
- En la página del proyecto, un selector para toda la galería permite elegir escritorio o móvil, y oscuro o claro. Se hará **sin JavaScript** (botones de opción y CSS), en la fase 4, con el diseño aprobado.
- La portada es una sola imagen: la pantalla principal en escritorio y en oscuro.
- Las capturas las hacen los agentes de cada proyecto con cuentas de demo y datos inventados, y Fran las revisa antes de usarlas.

### 2026-11-11 · Bocetos aprobados (fase 3, entrega 2)

- Fran aprueba los bocetos del inicio y de la página de proyecto (YourFavs), en móvil y escritorio.
- **Experiencia, opción B:** ficha del puesto actual (fija en escritorio) con tecnologías como chips, puntos en filas con etiquetas de plataforma, tarjetas para los puestos anteriores y franja de formación. Nada de línea de tiempo, guiones ni tecnologías separadas por barras.
- Cada punto de la experiencia puede llevar `platforms` (Web, Móvil, IA). Sus textos empiezan en mayúscula.
- **Proyectos:** YourFavs destacado a todo el ancho en escritorio y OnMyMind en una tarjeta secundaria.
- **Galería:** rejilla en escritorio y carrusel con scroll-snap en móvil, sin JavaScript. Por defecto, escritorio y oscuro.
- **Luz cálida:** solo en la ilustración de la presentación.
- **Tokens nuevos:** `accent-hover` y `border-strong`. La escala de espaciado gana 20 y 40 px.
- `docs/design-system.md` recoge todo esto y sigue en BORRADOR hasta que Fran apruebe el sistema completo, tras la tercera entrega.

### 2026-11-11 · Tercera entrega de diseño

- **Estados, formulario, privacidad, 404, ilustración, icono e imágenes para compartir:** recogidos en `docs/design-system.md`.
- **Color nuevo `danger`** para los errores del formulario, y `accent-strong` como estado pulsado.
- **Corrección de accesibilidad:** el foco de la opción elegida del selector de la galería va en `bg-base` (9,5:1), no en `text` (1,8:1).
- **Rutas nuevas:** `/es/gracias/` y `/en/thanks/` (página de «Mensaje enviado» de Netlify Forms), con `noindex` y fuera del sitemap.
- **Tercer uso de JavaScript:** el estado «Enviando…» del formulario, como mejora progresiva.
- **Textos aprobados:** «Mensaje enviado», «Gracias por escribirme. Te responderé lo antes posible.» y los dos mensajes de error, con su versión en inglés.
- **Presentación en móvil sin ilustración.**
- **Credenciales C2PA:** la ilustración y el favicon conservan la credencial de contenido de Anthropic que llevan incrustada.

### 2026-11-11 · Sistema de diseño aprobado

- Fran aprueba `docs/design-system.md` completo. Deja de ser borrador y pasa a ser la referencia de la fase 4.
- Se cierra la fase 3.

### 2026-11-11 · Menú móvil desplegable

- El menú móvil deja de ocupar toda la pantalla: baja solo hasta su contenido y la página queda oscurecida debajo. Tocar la zona oscurecida lo cierra, igual que «Cerrar», Escape o elegir un enlace.

### 2026-11-11 · Stack principal en la presentación

- Debajo de las tres ideas, una fila «Stack principal» («Main stack») con las tecnologías que Fran más usa ahora: Laravel, PHP, Flutter, Dart y MariaDB, como chips.
- Viene del campo `mainStack` de `site/*.yaml` (ids de `skills.yaml`), igual en los dos idiomas.

### 2026-11-11 · Fase 4 cerrada

- Implementación completa del diseño aprobado. Lighthouse en móvil: 100 en las cuatro categorías, en los dos idiomas.
- Content-Security-Policy estricta (sin `'unsafe-inline'`); nada de scripts ni estilos en línea.
- La pasada con lector de pantalla (VoiceOver) la hace Fran antes de publicar.
- La ilustración de la presentación se queda como está.

### 2026-11-11 · Publicación del repositorio

- Antes de publicar se revisó todo el historial (archivos de cada commit, nombres de archivo, mensajes y ramas): sin términos prohibidos, rutas locales ni archivos privados.
- Repositorio público creado y subidas `main` (rama por defecto) y `develop`.
- **Nombre:** `FranBas6/PortfolioFranBas` en lugar de `FranBas6/portfolio`, a petición de Fran, coherente con YourFavs y OnMyMind. GitHub redirige el nombre antiguo. La web sigue siendo `franbasguil.netlify.app`.

### 2026-11-12 · Sin pasada con lector de pantalla

- Fran decide no hacer la pasada manual con VoiceOver que pedía la fase 4. Se acepta la verificación automática: accesibilidad 100 en Lighthouse (móvil, en producción, los dos idiomas), un solo `h1` por página y encabezados sin saltos, zonas con nombre, ningún enlace, botón o imagen sin nombre, y todo el sitio usable con teclado.

### 2026-11-12 · Fase 5 cerrada: portfolio publicado

**Publicado en `franbasguil.netlify.app`**, desde el repositorio público, con despliegue automático en cada push a `main`.

Verificado en producción:
- **Redirección de `/`:** español solo si es el idioma preferido del navegador (Netlify mira solo el primero de la lista); el resto, inglés. Probado con español, inglés, alemán, portugués, francés con el español en segundo lugar y sin cabecera de idioma.
- **Rutas:** las páginas responden con 200, una dirección inexistente devuelve la 404 bilingüe, y sin barra final redirige a la versión con barra.
- **Cabeceras:** Content-Security-Policy estricta y el resto de cabeceras de seguridad, sin violaciones en la web real. Caché larga para archivos con hash y fuentes, y de una hora para los CV.
- **Insignia «Powered by Netlify»** desactivada en Netlify: la inyectaba al servir la página y la CSP la bloqueaba.
- **Formularios:** detección activada, los dos formularios registrados, aviso por email y prueba real recibida.
- **SEO:** propiedad verificada en Google Search Console con un archivo HTML en `public/` (no se borra) y sitemap enviado; la vista previa al compartir en LinkedIn muestra la imagen, el título y la descripción.
- **Lighthouse (móvil, producción):** 100 en rendimiento, accesibilidad, buenas prácticas y SEO, en los dos idiomas.
- **CV:** sustituidos por las versiones con el enlace al portfolio.

Pendiente de Fran: el enlace al portfolio en sus perfiles de LinkedIn y GitHub.

Ideas para más adelante: logo de cada proyecto en su tarjeta y en su página; estadísticas de visitas sin cookies (sin romper la CSP ni la promesa de privacidad); revisar en Search Console que el sitemap pasa a «Correcto».

### 2026-11-12 · Logo de cada proyecto

- Cada proyecto puede llevar su logo (campo opcional `logo`, igual en los dos idiomas): su icono de app, a la izquierda del título, en la tarjeta del inicio y en la cabecera de su página. Elegida la opción «junto al título» frente a «encima del título», que alargaba las tarjetas.
- Tamaños: 32 px en la tarjeta (40 px en la destacada en escritorio) y 40 / 56 px en la cabecera. Decorativo, con `alt=""`, y un anillo de 1 px para que los iconos oscuros se distingan del fondo.
- YourFavs: la claqueta sobre su fondo oscuro, como su icono de app. OnMyMind: su icono de app tal cual, con su credencial de contenido.
- Detalle en `design-system.md` («Ilustraciones y recursos»).

### 2026-11-12 · Estadísticas de visitas sin cookies

- **GoatCounter**, elegido frente a la analítica de Netlify (en el plan gratuito solo muestra el día actual o el anterior) y Cloudflare Web Analytics (script y envío a dominios de Cloudflare). Gratis para webs personales, código abierto, sin cookies ni nada guardado en el navegador del visitante, no guarda IPs y los datos están en la Unión Europea.
- El script (`count.v5.js`, versión fija comprobada con la huella que publica GoatCounter) se sirve desde la propia web: `script-src` sigue en `'self'` y la CSP solo añade la dirección de envío en `connect-src`.
- Se recogen datos agregados: página, web de origen, navegador, sistema, tamaño de pantalla y país. El idioma y las visitas individuales quedan desactivados en GoatCounter.
- La página de privacidad lo explica en los dos idiomas (apartado «Estadísticas de visitas»).
- Las visitas de Fran se excluyen entrando una vez en `/#toggle-goatcounter` desde cada navegador; las de `localhost` no se cuentan.
