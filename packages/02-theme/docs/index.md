---
layout: home

hero:
  name: VitePress 自定义主题
  text: 自定义主题与布局
  tagline: 一个可运行的 VitePress 1.6.4 学习 demo，演示如何扩展默认主题
  actions:
    - theme: brand
      text: 插槽机制
      link: /slots
    - theme: alt
      text: 全局组件
      link: /global-components
    - theme: alt
      text: 自定义布局
      link: /custom-layout

features:
  - title: 扩展默认主题
    details: 通过 extends 继承 VitePress 默认主题，只覆盖需要改动的部分（布局、样式、组件）。
  - title: 自定义 Layout 与插槽
    details: 用自己的 Layout.vue 替换根布局，并向默认主题暴露的具名插槽注入内容。
  - title: 全局组件与 CSS 变量
    details: 在 enhanceApp 中全局注册组件，并通过覆盖 --vp-c-brand-* 等变量来换肤。
---

## 关于本 demo

这是 `vitepress-labs` 工作区中的 **02-theme** 包，主题是 **自定义主题与布局**。

本页是一个 `layout: home` 首页。请注意 features 区块**下方**有一段文字 ——
它并不来自本 Markdown 文件，而是自定义主题向默认主题的
`home-features-after` 插槽注入的内容。这正是「向默认主题插槽注入内容」的效果。

### 阅读顺序

1. [插槽机制](/slots) —— 默认主题暴露了哪些插槽，本 demo 在每处注入了什么。
2. [全局组件](/global-components) —— 在 Markdown 中直接使用全局注册的 `<Tag>` 组件。
3. [自定义布局](/custom-layout) —— 一个 `layout: custom` 页面，正文由 `CustomLayout.vue` 渲染。
