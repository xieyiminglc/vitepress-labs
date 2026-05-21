---
layout: home

hero:
  name: VitePress 国际化与路由
  text: 国际化（i18n）与动态路由
  tagline: 一个可运行的 VitePress 1.6.4 学习 demo
  actions:
    - theme: brand
      text: i18n 指南
      link: /zh/guide
    - theme: alt
      text: 动态路由
      link: /zh/dynamic-routes
    - theme: alt
      text: English
      link: /

features:
  - title: 基于 locale 的路由
    details: root locale 的页面放在 docs/，zh locale 的页面放在 docs/zh/。VitePress 会自动把目录映射成 URL 前缀。
  - title: 每个 locale 独立的主题配置
    details: 每个 locale 拥有自己的 nav 与 sidebar，让每种语言的导航都自然顺畅。
  - title: 用 $params 实现动态路由
    details: 一个 [pkg].md 模板搭配 [pkg].paths.ts，为每个包生成一个页面，内容全部由 $params 渲染。
---

## 本 demo 涵盖的内容

本包是一个动手实验室，演示两个常常一起出现的 VitePress 特性：

1. **国际化（i18n）** —— 让同一个站点以多种语言提供。
2. **动态路由** —— 用一个 Markdown 模板生成大量页面。

### i18n 是如何接线的

VitePress 完全根据页面的**文件位置**来判断它属于哪种语言：

| 文件路径                  | Locale            | URL          |
| ------------------------- | ----------------- | ------------ |
| `docs/index.md`           | `root`（英文）    | `/`          |
| `docs/guide.md`           | `root`（英文）    | `/guide`     |
| `docs/zh/index.md`        | `zh`（中文）      | `/zh/`       |
| `docs/zh/guide.md`        | `zh`（中文）      | `/zh/guide`  |

`root` locale 没有路径前缀；其他每个 locale 都使用一个以其 `locales` key
命名的子目录。完整讲解见 [i18n 指南](/zh/guide)。

### 动态路由是如何工作的

一对同名兄弟文件驱动了动态路由：

- `packages/[pkg].md` —— 页面**模板**。
- `packages/[pkg].paths.ts` —— **paths 加载器**，列出每个具体页面。

请阅读[动态路由](/zh/dynamic-routes)，然后浏览
[生成的示例包页面](/packages/)。
