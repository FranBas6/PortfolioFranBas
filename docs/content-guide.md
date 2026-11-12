# Guía de contenido

Todo el texto del sitio está en `src/content/` (contenido) y en `src/i18n/ui.ts` (rótulos de interfaz). Los componentes no llevan frases escritas.

Después de cualquier cambio:

```bash
npm run check:content   # paridad, campos, imágenes, longitudes y términos prohibidos
npm run build           # también ejecuta el control y valida los esquemas
```

## Añadir un proyecto

Los proyectos son **solo personales**: el trabajo profesional se cuenta en la Experiencia. Son dos archivos con **el mismo nombre**, uno por idioma, más sus imágenes. La tarjeta del inicio, la página del proyecto, el `hreflang` y el sitemap salen solos.

1. Elige un id en inglés, en minúsculas y con guiones: `my-project`.
2. Pon las imágenes en `src/assets/projects/<id>/`.
3. Crea `src/content/projects/es/<id>.md` y `src/content/projects/en/<id>.md`. Copia uno existente como plantilla.
4. Rellena la cabecera con los campos de la tabla de abajo. Los campos no traducibles deben ser **idénticos** en los dos archivos.
5. Si una tecnología no existe todavía, añádela a `src/content/skills/skills.yaml` (con `id` y `name`) en su grupo.
6. Ejecuta `npm run check:content` y `npm run build`.

Para preparar un proyecto sin publicarlo, pon `draft: true` en los dos archivos.

### Campos

| Campo | Qué es | Traducible | Notas |
| --- | --- | --- | --- |
| `slug` | Parte final de la URL en ese idioma | Sí | Minúsculas y guiones. Único por idioma |
| `order` | Posición en la lista de proyectos | No | Entero desde 1 (YourFavs es el 1) |
| `draft` | `true` = no se publica | No | Por defecto `false` |
| `title` | Título | Sí | |
| `summary` | Frase de la tarjeta y de la cabecera | Sí | También es la descripción SEO si no hay `seo` |
| `period` | `start` y `end`, formato `"2026-10"` | No | Sin `end` = "actualidad". Entre comillas |
| `role` | Mi papel, en una línea | Sí | |
| `platforms` | Lista de `web`, `mobile`, `ai` | No | |
| `stack` | Ids de `skills.yaml` | No | La tarjeta muestra los cinco primeros: ordénalos por importancia |
| `whatItIs` | Qué es, en dos frases | Sí | |
| `whatIDid` | Lista de 4 a 6 puntos | Sí | Mismo número de puntos en los dos idiomas |
| `whyItMatters` | Por qué es interesante, una o dos frases | Sí | |
| `metrics` | Lista de `value` y `label` | Solo `label` | Ver la regla de cifras |
| `logo` | Ruta relativa a un SVG cuadrado (icono de app) | No | Opcional. Decorativo, sin `alt` |
| `cover` | `src` (ruta relativa) y `alt` | Solo `alt` | Obligatoria |
| `links` | `demo` y `repo` | No | Obligatorio |
| `gallery` | Lista de `src`, `alt` y `type` (`mobile` o `desktop`) | Solo `alt` | Opcional |
| `howIWork` | Tres líneas sobre el método | Sí | Obligatorio |
| `uiNote` | `true` si la interfaz solo está en español | No | La versión inglesa lo avisa |
| `seo` | `title` y `description` propios | Sí | Opcional |

El esquema (`src/content.config.ts`) hace fallar la compilación si falta un campo obligatorio, si un número de puntos no es el permitido o si `stack` usa un id que no existe.

## Longitudes máximas

Los valores viven en un único sitio, `scripts/content-limits.mjs`, que es lo que usa el control. Pasarse genera un aviso, no un error.

| Texto | Máximo |
| --- | --- |
| Título de proyecto | 45 caracteres |
| `summary` | 150 caracteres |
| `whatItIs` | 300 caracteres |
| Cada punto de `whatIDid` | 110 caracteres (entre 4 y 6 puntos) |
| `whyItMatters` | 200 caracteres |
| Frase de presentación (`tagline`) | 160 caracteres |
| Línea de un puesto (`jobs[].summary`) | 120 caracteres |
| Punto de un puesto (`highlights`, título + texto) | 220 caracteres (hasta 7 puntos) |
| Descripción SEO | Entre 120 y 160 caracteres |

Si un proyecto no tiene `seo.description`, la descripción SEO es su `summary`, y también se comprueba.

## Regla de cifras (`metrics`)

- **Proyectos:** tests, migraciones, commits. Siempre verificadas en el repositorio. Los ADRs de OnMyMind no son públicos: no se citan.
- **Experiencia:** solo cifras de Fran (por ejemplo, fallos de producción resueltos), nunca de negocio de la empresa, y sin cifras de commits.

## Tono

- Primera persona, frases cortas y concretas. Qué hice y por qué importa, sin adjetivos de relleno.
- Se lee en un minuto (inicio) o en dos (página de proyecto): si sobra, se recorta.
- Inglés británico ("licence", "customise", "organise").
- Términos fijos: "transporte a granel" en español y **"Bulk transport"** en inglés. Las tecnologías, FleetX, YourFavs y OnMyMind no se traducen.
- No se inventan datos: todo sale del CV, de los repositorios o del resumen de Fran.

## Experiencia

Todo el trabajo profesional va en `experience/<idioma>.yaml`, como en el CV: por cada puesto, fechas, empresa, puesto, lugar, una línea (`summary`), hasta 7 puntos (`highlights`, con `title` en negrita opcional y `text`) y la línea de tecnologías (`stack`, ids de `skills.yaml`). Cada texto nombra las tecnologías con las que está hecho.

## Dónde se puede nombrar la empresa

Solo en la Experiencia. Todo lo demás está en [`fleetx-rules.md`](fleetx-rules.md); léelo antes de escribir cualquier texto sobre FleetX.

## Resto del contenido

| Archivo | Contenido |
| --- | --- |
| `site/<idioma>.yaml` | Presentación, stack principal (`mainStack`, ids de `skills.yaml`, igual en los dos idiomas), email, enlaces, idiomas, ruta del CV, SEO del inicio e imagen para compartir |
| `experience/<idioma>.yaml` | Puestos (`period` en `"YYYY-MM"`, `highlights`, `stack`) y formación (`years`) |
| `skills/skills.yaml` | Grupos de tecnologías, compartido por los dos idiomas. El título de cada grupo está en `ui.ts` (`skills.group.<id>`) |
| `legal/<idioma>/privacy.md` | Texto de privacidad |
| `src/i18n/ui.ts` | Rótulos de interfaz. Los dos idiomas deben tener las mismas claves o la compilación falla |

## Contenido de prueba

Mientras no esté el contenido real, los textos provisionales llevan `[PRUEBA]` (español) o `[PLACEHOLDER]` (inglés). El control indica cuántos archivos los conservan; la fase 2 termina cuando no queda ninguno.
