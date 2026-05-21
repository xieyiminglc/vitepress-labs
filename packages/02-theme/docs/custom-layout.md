---
layout: custom
title: 自定义布局演示
subtitle: 这一页完全脱离默认主题，由 CustomLayout.vue 渲染
---

# 自定义布局

你现在看到的这个页面**没有默认主题的导航栏、侧边栏和右侧大纲**。
它的 header / main / footer 全部由 `docs/.vitepress/theme/CustomLayout.vue`
提供，正文则通过内置的 `<Content/>` 组件渲染。

## 它是怎么生效的

关键是本页 frontmatter 里的这一行：

```yaml
---
layout: custom
title: 自定义布局演示
subtitle: 这一页完全脱离默认主题，由 CustomLayout.vue 渲染
---
```

自定义主题的 `Layout.vue` 会通过 `useData()` 读取 `frontmatter`，
并据此分流：

```vue
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import CustomLayout from './CustomLayout.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <!-- layout: custom 时走完全自定义布局 -->
  <CustomLayout v-if="frontmatter.layout === 'custom'" />
  <!-- 其它页面仍包裹默认主题布局 -->
  <Layout v-else>
    <!-- ...向插槽注入内容... -->
  </Layout>
</template>
```

## 插槽 vs 自定义布局

- **[插槽机制](/slots)**：在默认主题**内部**的指定位置塞入内容，
  适合“局部增强”，导航栏 / 侧边栏等仍由默认主题提供。
- **自定义布局**（本页）：完全**不要**默认主题的结构，自己写
  header / main / footer，适合落地页、营销页等特殊页面。

## CustomLayout 里发生了什么

`CustomLayout.vue` 的结构大致是：

```vue
<template>
  <div class="custom-layout">
    <header class="custom-layout__header">
      <h1>{{ frontmatter.title }}</h1>
      <p>{{ frontmatter.subtitle }}</p>
    </header>
    <main class="custom-layout__main">
      <Content />   <!-- Markdown 正文渲染在这里 -->
    </main>
    <footer class="custom-layout__footer">...</footer>
  </div>
</template>
```

- 顶部紫色 header 里的标题和副标题来自本页 frontmatter 的
  `title` / `subtitle`。
- 你正在阅读的这段正文，就是被 `<Content/>` 渲染进 `<main>` 的。
- 底部是自定义 footer。

## 返回

看完后可以回到[首页](/)，或继续了解[全局组件](/global-components)。
