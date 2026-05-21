---
layout: home

hero:
  name: VitePress i18n & Routes
  text: Internationalization and Dynamic Routing
  tagline: A runnable VitePress 1.6.4 learning demo
  actions:
    - theme: brand
      text: i18n Guide
      link: /guide
    - theme: alt
      text: Dynamic Routes
      link: /dynamic-routes
    - theme: alt
      text: 简体中文
      link: /zh/

features:
  - title: Locale-based routing
    details: The root locale lives in docs/, while the zh locale lives in docs/zh/. VitePress maps directories to URL prefixes automatically.
  - title: Per-locale theme config
    details: Each locale carries its own nav and sidebar so navigation reads naturally in every language.
  - title: Dynamic routes with $params
    details: A single [pkg].md template paired with [pkg].paths.ts generates one page per package, all rendered from $params.
---

## What this demo covers

This package is a hands-on lab for two VitePress features that often appear together:

1. **Internationalization (i18n)** — serving the same site in multiple languages.
2. **Dynamic routes** — generating many pages from a single Markdown template.

### How i18n is wired up

VitePress decides a page's language purely from its **file location**:

| File path                | Locale | URL                  |
| ------------------------ | ------ | -------------------- |
| `docs/index.md`          | `root` (English) | `/`         |
| `docs/guide.md`          | `root` (English) | `/guide`    |
| `docs/zh/index.md`       | `zh` (中文)       | `/zh/`      |
| `docs/zh/guide.md`       | `zh` (中文)       | `/zh/guide` |

The `root` locale has no path prefix; every other locale uses a subdirectory
named after its `locales` key. See the [i18n Guide](/guide) for the full walk-through.

### How dynamic routes work

A pair of sibling files drives dynamic routing:

- `packages/[pkg].md` — the page **template**.
- `packages/[pkg].paths.ts` — the **paths loader** that lists every concrete page.

Read [Dynamic Routes](/dynamic-routes) and then browse the
[generated package pages](/packages/).
