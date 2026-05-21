# Internationalization Guide

This page explains how the **i18n** setup in this demo works, step by step.

## The core idea

In VitePress, **a page's language is determined by where its file lives**, not by
any frontmatter flag. You declare your languages once in `.vitepress/config.mts`
under the `locales` field, and VitePress derives the rest from the directory tree.

## 1. Declare the locales

The config exposes two locales:

```ts
// docs/.vitepress/config.mts
export default defineConfig({
  title: 'VitePress i18n & Routes Lab', // shared by every locale

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: { /* English nav + sidebar */ },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/',
      themeConfig: { /* Chinese nav + sidebar */ },
    },
  },
})
```

- The key `root` is special: it is the **default locale** and has **no URL prefix**.
- Any other key (here `zh`) becomes a **path prefix** — its pages live under
  `docs/<key>/` and are served at `/<key>/...`.
- `label` is the text shown in the language-switch menu in the nav bar.
- `lang` becomes the `<html lang="...">` attribute.
- `link` (used by non-root locales) tells the language menu where to jump.

## 2. Place the files

```
docs/
├─ index.md            → /            (English home)
├─ guide.md            → /guide       (English, this page)
├─ dynamic-routes.md   → /dynamic-routes
└─ zh/
   ├─ index.md         → /zh/         (Chinese home)
   ├─ guide.md         → /zh/guide
   └─ dynamic-routes.md → /zh/dynamic-routes
```

The English (root) files sit directly in `docs/`. The Chinese files mirror the
same names inside `docs/zh/`. VitePress pairs them up automatically so the
language switcher can jump between matching pages.

## 3. Give each locale its own theme config

A localized site needs localized navigation. Each locale gets its own
`themeConfig`, and **every link must carry the right prefix**:

- English `nav` / `sidebar` links: `/guide`, `/dynamic-routes`, `/packages/`
- Chinese `nav` / `sidebar` links: `/zh/guide`, `/zh/dynamic-routes`, `/packages/`

If a Chinese sidebar pointed at `/guide`, it would send readers back to English —
and a wrong path would also trigger a **dead-link build error**.

> Note: `/packages/` (the generated package list) is shared by both locales in
> this demo, so both nav bars link to the same `/packages/` URL.

## 4. Avoid dead links

`vitepress build` fails on any unresolved internal link. Two rules keep you safe:

1. Inside a locale, always link with that locale's prefix.
2. If you must link across locales, use the **fully-qualified** path
   (e.g. an English page linking to `/zh/guide`).

As a last-resort escape hatch you can set `ignoreDeadLinks: true` in the config,
but fixing the links is always preferable.

## Next steps

- Learn how pages can be generated programmatically in [Dynamic Routes](/dynamic-routes).
- Browse the [generated package pages](/packages/).
- Switch to the [Chinese version of this guide](/zh/guide).
