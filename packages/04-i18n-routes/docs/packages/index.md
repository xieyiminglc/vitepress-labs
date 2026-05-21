# Packages / 示例包

This page is an **ordinary Markdown page** that links to every page produced by
the dynamic route `packages/[pkg].md`.

本页是一个**普通的 Markdown 页面**，链接到动态路由 `packages/[pkg].md`
生成的每一个页面。

## Generated pages / 生成的页面

The four links below all resolve to dynamically generated routes. Their content
is rendered from `[pkg].paths.ts` via `$params`:

下面四个链接都指向动态生成的路由，它们的内容由 `[pkg].paths.ts` 经 `$params` 渲染：

- [`@lab/core`](/packages/core) — the shared runtime / 共享运行时。
- [`@lab/router`](/packages/router) — a tiny client-side router / 小型客户端路由器。
- [`@lab/i18n`](/packages/i18n) — locale detection helpers / locale 检测工具。
- [`@lab/cli`](/packages/cli) — the project command-line tool / 项目命令行工具。

## How the links work / 链接是如何工作的

Each `/packages/<pkg>` URL maps to one entry in `[pkg].paths.ts`, where
`params.pkg` supplies the final path segment. Adding a package is as simple as
appending another entry to the `paths()` array — no new `.md` file required.

每个 `/packages/<pkg>` URL 对应 `[pkg].paths.ts` 中的一个条目，由
`params.pkg` 提供最后的路径片段。新增一个包只需在 `paths()` 数组里
追加一个条目即可 —— 不需要新建 `.md` 文件。

## Related / 相关

- [Dynamic Routes guide](/dynamic-routes) / [动态路由指南](/dynamic-routes)
- [中文动态路由指南](/zh/dynamic-routes)
