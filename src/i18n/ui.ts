import type { Lang } from './routes';

/*
 * Interface labels. Components never contain sentences: they read them from
 * here or from src/content/. Both languages must have exactly the same keys;
 * the check at the bottom makes the build fail otherwise (no fallback text).
 *
 * British English, as in the CV. Fixed terms: "transporte a granel" /
 * "Bulk transport"; technologies, FleetX, YourFavs and OnMyMind are never
 * translated.
 */

const es = {
  'site.skipLink': 'Saltar al contenido',
  'site.mainNav': 'Navegación principal',
  'site.menu': 'Menú',

  'nav.projects': 'Proyectos',
  'nav.experience': 'Experiencia',
  'nav.skills': 'Habilidades',
  'nav.contact': 'Contacto',
  'nav.cv': 'CV',

  'lang.switcherLabel': 'Idioma',
  'lang.es': 'Español',
  'lang.en': 'English',
  'lang.current': 'idioma actual',

  'hero.viewProjects': 'Ver proyectos',
  'hero.downloadCv': 'Descargar CV',

  'projects.title': 'Proyectos',
  'projects.viewProject': 'Ver proyecto',
  'projects.demo': 'Demo',
  'projects.repo': 'Repositorio',

  'platform.web': 'Web',
  'platform.mobile': 'Móvil',
  'platform.ai': 'IA',

  'experience.title': 'Experiencia',
  'experience.education': 'Formación',
  'experience.languages': 'Idiomas',

  'skills.title': 'Habilidades',
  'skills.group.backend': 'Backend',
  'skills.group.frontend': 'Frontend',
  'skills.group.mobile': 'Móvil',
  'skills.group.ai': 'IA',
  'skills.group.data': 'Datos',
  'skills.group.quality-tools': 'Calidad y herramientas',

  'contact.title': 'Contacto',
  'contact.email': 'Email',
  'contact.copyEmail': 'Copiar email',
  'contact.copied': 'Email copiado',
  'contact.form.name': 'Nombre',
  'contact.form.email': 'Email',
  'contact.form.message': 'Mensaje',
  'contact.form.honeypot': 'No rellenes este campo',
  'contact.form.submit': 'Enviar',
  'contact.form.privacy': 'Uso tus datos solo para responderte.',
  'contact.form.privacyLink': 'Privacidad',

  'project.back': 'Volver a proyectos',
  'project.facts': 'Ficha del proyecto',
  'project.period': 'Periodo',
  'project.role': 'Rol',
  'project.platforms': 'Plataformas',
  'project.links': 'Enlaces',
  'project.whatItIs': 'Qué es',
  'project.whatIDid': 'Qué hice',
  'project.stack': 'Tecnologías',
  'project.whyItMatters': 'Por qué es interesante',
  'project.metrics': 'En cifras',
  'project.gallery': 'Capturas',
  'project.howIWork': 'Cómo trabajo',
  'project.uiNote': 'La interfaz está en español.',
  'project.previous': 'Proyecto anterior',
  'project.next': 'Proyecto siguiente',
  'project.contactCta': '¿Hablamos?',

  'date.present': 'actualidad',

  'footer.links': 'Enlaces',
  'footer.privacy': 'Privacidad',

  'notFound.title': 'Página no encontrada',
  'notFound.text': 'La página que buscas no existe.',
  'notFound.home': 'Ir al inicio',

  'root.title': 'Elige idioma',

  'site.menuClose': 'Cerrar',
  'link.newTab': '(se abre en una pestaña nueva)',
  'contact.form.sending': 'Enviando…',
  'contact.form.errorRequired': 'Rellena este campo.',
  'contact.form.errorEmail': 'Escribe un email válido, como nombre@dominio.com.',
  'gallery.device': 'Dispositivo',
  'gallery.desktop': 'Escritorio',
  'gallery.mobile': 'Móvil',
  'gallery.theme': 'Modo',
  'gallery.dark': 'Oscuro',
  'gallery.light': 'Claro',
  'gallery.enlarge': 'Ampliar',
  'thanks.title': 'Mensaje enviado',
  'thanks.text': 'Gracias por escribirme. Te responderé lo antes posible.',
  'thanks.home': 'Volver al inicio',
  'privacy.updated': 'Actualizada el',
  'privacy.home': 'Ir al inicio',
  'notFound.label': 'Error 404',
} as const;

type UiKey = keyof typeof es;

const en = {
  'site.skipLink': 'Skip to content',
  'site.mainNav': 'Main navigation',
  'site.menu': 'Menu',

  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.cv': 'CV',

  'lang.switcherLabel': 'Language',
  'lang.es': 'Español',
  'lang.en': 'English',
  'lang.current': 'current language',

  'hero.viewProjects': 'View projects',
  'hero.downloadCv': 'Download CV',

  'projects.title': 'Projects',
  'projects.viewProject': 'View project',
  'projects.demo': 'Demo',
  'projects.repo': 'Repository',

  'platform.web': 'Web',
  'platform.mobile': 'Mobile',
  'platform.ai': 'AI',

  'experience.title': 'Experience',
  'experience.education': 'Education',
  'experience.languages': 'Languages',

  'skills.title': 'Skills',
  'skills.group.backend': 'Backend',
  'skills.group.frontend': 'Frontend',
  'skills.group.mobile': 'Mobile',
  'skills.group.ai': 'AI',
  'skills.group.data': 'Data',
  'skills.group.quality-tools': 'Quality and tools',

  'contact.title': 'Contact',
  'contact.email': 'Email',
  'contact.copyEmail': 'Copy email',
  'contact.copied': 'Email copied',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.message': 'Message',
  'contact.form.honeypot': 'Do not fill in this field',
  'contact.form.submit': 'Send',
  'contact.form.privacy': 'I only use your details to reply to you.',
  'contact.form.privacyLink': 'Privacy',

  'project.back': 'Back to projects',
  'project.facts': 'Project facts',
  'project.period': 'Period',
  'project.role': 'Role',
  'project.platforms': 'Platforms',
  'project.links': 'Links',
  'project.whatItIs': 'What it is',
  'project.whatIDid': 'What I did',
  'project.stack': 'Technologies',
  'project.whyItMatters': 'Why it matters',
  'project.metrics': 'In numbers',
  'project.gallery': 'Screenshots',
  'project.howIWork': 'How I work',
  'project.uiNote': 'The interface is in Spanish.',
  'project.previous': 'Previous project',
  'project.next': 'Next project',
  'project.contactCta': 'Shall we talk?',

  'date.present': 'present',

  'footer.links': 'Links',
  'footer.privacy': 'Privacy',

  'notFound.title': 'Page not found',
  'notFound.text': 'The page you are looking for does not exist.',
  'notFound.home': 'Go to the home page',

  'root.title': 'Choose a language',

  'site.menuClose': 'Close',
  'link.newTab': '(opens in a new tab)',
  'contact.form.sending': 'Sending…',
  'contact.form.errorRequired': 'Please fill in this field.',
  'contact.form.errorEmail': 'Enter a valid email, such as name@domain.com.',
  'gallery.device': 'Device',
  'gallery.desktop': 'Desktop',
  'gallery.mobile': 'Mobile',
  'gallery.theme': 'Mode',
  'gallery.dark': 'Dark',
  'gallery.light': 'Light',
  'gallery.enlarge': 'Enlarge',
  'thanks.title': 'Message sent',
  'thanks.text': "Thanks for getting in touch. I'll reply as soon as I can.",
  'thanks.home': 'Back to the home page',
  'privacy.updated': 'Last updated',
  'privacy.home': 'Go to the home page',
  'notFound.label': 'Error 404',
} as const satisfies Record<UiKey, string>;

export const ui: Record<Lang, Record<UiKey, string>> = { es, en };
export type { UiKey };

// Fail the build if one language has a key the other lacks.
{
  const esKeys = Object.keys(es).sort().join('\n');
  const enKeys = Object.keys(en).sort().join('\n');
  if (esKeys !== enKeys) {
    const missing = (a: object, b: object) => Object.keys(a).filter((k) => !(k in b));
    throw new Error(
      `src/i18n/ui.ts: keys differ between languages. ` +
        `Missing in en: [${missing(es, en).join(', ')}]. Missing in es: [${missing(en, es).join(', ')}].`,
    );
  }
}
