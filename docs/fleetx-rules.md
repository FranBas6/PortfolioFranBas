# Regla de FleetX: qué se puede publicar

Este repositorio es **público**. El código de FleetX es privado. Los repositorios de FleetX se pueden leer para entender y verificar qué hizo Fran, pero al portfolio solo llega **qué hizo, con qué tecnologías y por qué es interesante**.

Cada texto sobre FleetX lo lee Fran contra este documento antes de darlo por bueno. Ante cualquier frase dudosa, se señala en lugar de decidir.

## Nunca

En ningún archivo del repositorio: contenido, código, comentarios, mensajes de commit, `docs/`, `CLAUDE.md` ni `README.md`.

- Código de FleetX, ni fragmentos ni pseudocódigo calcado.
- Capturas de pantalla o diagramas internos, tampoco redibujados.
- Nombres de clientes, de compañeros o datos de cuentas.
- Nombres internos: de repositorios (incluidos los nombres de sus carpetas), servicios, tablas, clases, ramas, tickets o entornos.
- Cifras de negocio de la empresa. En los proyectos de FleetX, `metrics` solo admite cifras de Fran (commits, funcionalidades, errores resueltos…).
- Rutas locales del equipo de Fran.

## Sí

- Nombrar la empresa, **solo** en estos sitios:
  - **Experiencia del inicio:** "Software Developer · FleetX (Frakt24) · 01/2026 – actualidad" y sus líneas.
  - **Páginas de los proyectos de empresa:** en la ficha de datos (campo `company`) y, si hace falta, en su texto y su SEO.
- Describir los módulos al nivel de detalle del resumen privado del trabajo de Fran en FleetX.
- Nombrar tecnologías.

En el resto del sitio no se nombra la empresa: ni en la cabecera, ni en la presentación, ni en los subtítulos o tarjetas de proyectos, ni en el bloque de más trabajo profesional, ni en el pie, ni en el título y la descripción SEO del inicio, ni en las imágenes para compartir, ni en los datos estructurados de persona. Ahí se habla de "un TMS SaaS para empresas de transporte" o de trabajo "profesional" o "en producción".

## Cómo se aplica

- **`.private/`** está en `.gitignore` desde antes del primer commit y nunca se sube. Contiene el plan completo, la lista de términos prohibidos (`forbidden-terms.txt`) y las notas de la revisión de los repositorios de FleetX.
- **Control automático:** `scripts/check-content.mjs` busca los términos de la lista en todo lo que se va a publicar y en los mensajes de los commits que se van a subir. Muestra solo archivo y línea, nunca el término. El hook de `pre-push` lo ejecuta y bloquea la subida si la lista falta o hay coincidencias.
- **Control humano:** el script solo detecta nombres. El resto (nivel de detalle, cifras, capturas) lo revisa Fran.
- La lista de términos no se muestra, no se copia fuera de `.private/` y sus términos no se usan en ejemplos, pruebas, comentarios ni mensajes de commit. Los tests del script usan términos inventados.
- La revisión de los repositorios de FleetX sirve para **comprobar y afinar** lo que ya dice el resumen de Fran (fechas, alcance, cifras suyas). No añade detalles nuevos al portfolio.

## Lista de comprobación para cada texto de FleetX

- [ ] No nombra clientes, compañeros, repositorios, servicios, tablas, clases, ramas, tickets ni entornos.
- [ ] No describe más detalle que el resumen privado de Fran.
- [ ] Las cifras, si las hay, son de Fran, no de la empresa.
- [ ] "FleetX" solo aparece donde está permitido.
- [ ] Las imágenes son ilustraciones abstractas, sin nada del producto real.
- [ ] `npm run check:content:strict` pasa sin errores.
