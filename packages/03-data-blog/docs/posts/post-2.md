---
title: createContentLoader 实战
date: 2024-02-14
author: 小米
tags:
  - VitePress
  - createContentLoader
  - 博客
description: 用 createContentLoader 扫描 Markdown 文章，生成可直接渲染的文章列表数据。
---

# createContentLoader 实战

如果你要做的是博客这类「一堆 Markdown 文件聚合成列表」的场景，VitePress 提供了一个专门的辅助函数 `createContentLoader`，省去了自己写文件扫描逻辑的麻烦。

它接收一个相对于 `docs` 源目录的 glob 模式，比如 `posts/*.md`，会自动帮你收集到所有匹配文件的 `url`、`frontmatter`、`excerpt` 等信息。

<!-- more -->

最常用的两个选项是 `excerpt` 和 `transform`。把 `excerpt` 设为 `true`，加载器会把正文中第一个 `<!-- more -->` 之前的内容（或按分隔符）渲染成 HTML 摘要。`transform` 则让你在数据交付给页面之前做一次「整形」：挑出你真正需要的字段、做排序、做过滤。

一个典型的博客加载器会在 `transform` 里把每篇文章映射成 `{ url, title, date, author, tags, excerpt }`，再按日期倒序排序，这样首页拿到 `data` 就能直接渲染，不需要任何额外处理。本 demo 的 `docs/posts.data.ts` 就是这么写的，你可以打开对照着看。
