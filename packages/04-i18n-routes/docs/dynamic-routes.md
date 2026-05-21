# Dynamic Routes

Sometimes you need **many pages that share one layout** — for example, a page per
package, per product, or per author. Writing each `.md` file by hand does not
scale. VitePress solves this with **dynamic routes**.

## The two-file pattern

A dynamic route is built from a pair of **sibling files with the same base name**:

```
docs/packages/
├─ [pkg].md         ← the page template (contains a [param] in its name)
├─ [pkg].paths.ts   ← the paths loader (same base name + .paths.ts)
└─ index.md         ← an ordinary page that links to the generated ones
```

- The square brackets in `[pkg].md` mark a **dynamic segment**. `pkg` is the
  parameter name.
- `[pkg].paths.ts` exports the **list of concrete pages** to generate.

## 1. The paths loader

`[pkg].paths.ts` must `export default` an object with a `paths()` method. Each
returned entry has a `params` object whose keys fill in the route:

```ts
// docs/packages/[pkg].paths.ts
export default {
  paths() {
    return [
      {
        params: {
          pkg: 'core',
          title: '@lab/core',
          version: '2.1.0',
          description: 'The runtime shared by every other package.',
        },
      },
      // ...more packages
    ]
  },
}
```

The `params.pkg` value replaces `[pkg]` in the URL, producing
`/packages/core`. Any **extra keys** (`title`, `version`, `description`) are
not part of the URL — they are passed to the template as data.

## 2. The page template

`[pkg].md` is rendered **once per entry**. Inside it, the global `$params`
object exposes the current entry's `params`:

```md
# {{ $params.title }}

**Version:** {{ $params.version }}

{{ $params.description }}
```

`$params` is available in any Markdown expression and in `<script setup>` via
`useData().params`. You can also access the same data in frontmatter expressions.

## 3. Linking to generated pages

Generated pages are real routes, so you link to them like any other page. The
[`packages/` index](/packages/) lists every generated package and links to its
`/packages/<pkg>` URL.

## Why use dynamic routes?

- **One source of truth** — change the layout once, every page updates.
- **Data-driven** — the loader can read JSON, call an API, or scan the file
  system inside `paths()`.
- **Build-time** — pages are generated when you run `vitepress build`, so the
  output is fully static and the routes are real, crawlable URLs.

## Try it

- Open the [generated package list](/packages/) and click into each package.
- Read the [i18n Guide](/guide) to see how this fits with localization.
- Switch to the [Chinese version](/zh/dynamic-routes).
