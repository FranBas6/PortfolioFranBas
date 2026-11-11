// Maximum text lengths (plan, section 8), in characters.
// Single source of truth: scripts/check-content.mjs reads them from here and
// docs/content-guide.md documents them. Exceeding one is a warning, not an error.

export const LIMITS = {
  projectTitle: { max: 45, label: 'project title' },
  summary: { max: 150, label: 'summary' },
  whatItIs: { max: 300, label: 'whatItIs' },
  whatIDidItem: { max: 110, label: 'whatIDid point' },
  whyItMatters: { max: 200, label: 'whyItMatters' },
  tagline: { max: 160, label: 'home introduction' },
  moreWorkLine: { max: 120, label: 'more-work line' },
  moreWorkMention: { max: 220, label: 'more-work mention' },
  seoDescription: { min: 120, max: 160, label: 'SEO description' },
};
