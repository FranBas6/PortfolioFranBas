# CLAUDE.md

Personal portfolio of Francisco José Bas Guil (Fran). Static Astro site, Spanish and English, deployed on Netlify. **This repository is public.**

## Read first

- `.private/plan-full.md`: the full plan and source of truth, including local paths and source locations. Private, never committed. Never copy paths or internal names from it into any other file.
- `docs/plan.md`: public version of the plan.
- `docs/fleetx-rules.md`: what may and may not be published about FleetX. **Mandatory before writing any FleetX text.**
- `docs/content-guide.md`: content model, lengths, tone, how to add a project.
- `docs/design-system.md`: design tokens and components. **DRAFT until Fran approves it.**

## Working rules

- Work one phase at a time (plan, section 12). At the end of each phase: stop, summarise, wait for confirmation. Before each phase, explain the plan in a few lines.
- Talk to Fran in Spanish. Code, file names and commit messages in English.
- Small, descriptive commits. Never push or create remotes unless Fran asks. The remote (`FranBas6/portfolio`) is created in phase 5.
- A decision that is not in the plan is proposed with a recommendation, never improvised. Once approved, record it in `.private/plan-full.md` and in `docs/plan.md` (section 14), the latter without paths or internal names.
- Never invent facts about Fran or Fran's projects. If something is not in the plan or the repositories, ask.
- No design work until the phase 3 sketches and `docs/design-system.md` are approved.
- Check every visual change in a real browser at 375, 768 and 1280 px.

## Branches

- Never commit directly to `main` or `develop`. Every change starts on a branch cut from `develop`.
- Names, in English: `phase/<n>-<topic>` for a phase (`phase/2-content`); `feat/…`, `fix/…`, `docs/…`, `chore/…` for anything smaller (`fix/month-format`).
- A phase branch is merged into `develop` with a merge commit (`git merge --no-ff`, message `merge(phase <n>): …`) so each phase stays one block in the history. Smaller branches are fast-forwarded (`git merge --ff-only`).
- Delete the branch after merging, locally and on the remote if it was pushed.
- `main` is fast-forwarded to `develop` only when Fran approves a phase. From phase 5 on, `main` is what is in production.
- Branch and tag names are public while they exist on the remote: the pre-push hook checks them for forbidden terms too.
- Commit author for this repository: Fran's GitHub noreply address (set in the local git config).

## FleetX rule (summary; full text in docs/fleetx-rules.md)

Only *what Fran did, with which technologies and why it matters* reaches this repository. Never: FleetX code (not even paraphrased), screenshots or internal diagrams, client or colleague names, internal names (repositories and their folders, services, tables, classes, branches, tickets, environments), company business figures, or local paths. This applies to content, code, comments, `docs/`, this file, `README.md` and commit messages.

Professional work is told only in the Experience section (`src/content/experience/`), CV-style. "FleetX" appears only there. Projects are personal only; there are no company project pages and no company images of any kind.

The forbidden-term list lives in `.private/forbidden-terms.txt`. Never print it, copy it, or use its terms in examples, tests, comments or commit messages.

## Commands

```bash
npm run dev                    # local server
npm run build                  # runs check-content first, then astro build
npm run check:content          # content checks; skips the term list with a warning if missing
npm run check:content:strict   # same, but the term list is required (used by pre-push)
npm test                       # tests for the forbidden-term matcher
```

Node 24, pinned in `.nvmrc` (Astro 7 needs ≥ 22.23.4; Netlify also builds with 24). Run `nvm use` in this folder first: the machine's default Node is older and is used by other projects, so never change the global nvm default.

## Architecture

- `src/content/`: all text. Projects are Markdown with all fields in the frontmatter, one file per language with the same file name; the URL comes from `slug`. Schemas in `src/content.config.ts`.
- `src/i18n/`: `routes.ts` builds every URL (also used by `astro.config.mjs` for sitemap alternates), `ui.ts` holds interface labels (both languages must have the same keys), `utils.ts` has language, date and project-pairing helpers.
- `src/views/`: language-agnostic views. `src/pages/` only picks the language and renders a view.
- `scripts/check-content.mjs`: parity, non-translatable fields, images, lengths (`scripts/content-limits.mjs`) and forbidden terms. The pre-push hook (`.githooks/pre-push`) runs it with `--strict` and also scans the messages of the commits being pushed.
- Root `/` is redirected by language in `netlify.toml` (302); `src/pages/index.astro` is only a non-indexed fallback.
