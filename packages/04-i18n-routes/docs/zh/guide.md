# 国际化指南

本页一步步讲解本 demo 中 **i18n** 是如何搭建的。

## 核心思想

在 VitePress 中，**页面的语言由它的文件位置决定**，而不是由某个 frontmatter
字段决定。你只需在 `.vitepress/config.mts` 的 `locales` 字段里声明一次语言，
其余的一切 VitePress 会根据目录树自动推导出来。

## 1. 声明 locales

本配置暴露了两个 locale：

```ts
// docs/.vitepress/config.mts
export default defineConfig({
  title: 'VitePress i18n & Routes Lab', // 由所有 locale 共享

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: { /* 英文 nav + sidebar */ },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/',
      themeConfig: { /* 中文 nav + sidebar */ },
    },
  },
})
```

- key `root`是特殊的：它是**默认 locale**，**没有 URL 前缀**。
- 其他任何 key（这里是 `zh`）会成为**路径前缀** —— 它的页面放在
  `docs/<key>/` 下，并以 `/<key>/...` 提供。
- `label` 是导航栏语言切换菜单里显示的文字。
- `lang` 会成为 `<html lang="...">` 属性的值。
- `link`（供非 root locale 使用）告诉语言菜单跳转到哪里。

## 2. 放置文件

```
docs/
├─ index.md            → /            （英文首页）
├─ guide.md            → /guide       （英文）
├─ dynamic-routes.md   → /dynamic-routes
└─ zh/
   ├─ index.md         → /zh/         （中文首页）
   ├─ guide.md         → /zh/guide    （中文，本页）
   └─ dynamic-routes.md → /zh/dynamic-routes
```

英文（root）文件直接放在 `docs/` 下。中文文件以相同的文件名镜像放在
`docs/zh/` 里。VitePress 会自动把它们配对，这样语言切换器就能在对应页面
之间跳转。

## 3. 给每个 locale 配独立的主题配置

本地化的站点需要本地化的导航。每个 locale 都有自己的 `themeConfig`，
而且**每个链接都必须带上正确的前缀**：

- 英文 `nav` / `sidebar` 链接：`/guide`、`/dynamic-routes`、`/packages/`
- 中文 `nav` / `sidebar` 链接：`/zh/guide`、`/zh/dynamic-routes`、`/packages/`

如果中文 sidebar 指向了 `/guide`，就会把读者送回英文页面 —— 而错误的路径
还会触发**死链构建报错**。

> 注意：本 demo 中 `/packages/`（生成的示例包列表）由两个 locale 共享，
> 所以两个导航栏都链接到同一个 `/packages/` URL。

## 4. 避免死链

`vitepress build` 会因为任何无法解析的站内链接而失败。两条规则能保护你：

1. 在一个 locale 内部，始终用该 locale 的前缀来写链接。
2. 如果必须跨 locale 链接，请使用**完整路径**
   （例如英文页面链接到 `/zh/guide`）。

作为最后的兜底手段，你可以在配置里设置 `ignoreDeadLinks: true`，
但修正链接永远是更好的做法。

## 下一步

- 在[动态路由](/zh/dynamic-routes)中了解如何用程序生成页面。
- 浏览[生成的示例包页面](/packages/)。
- 切换到[本指南的英文版](/guide)。
