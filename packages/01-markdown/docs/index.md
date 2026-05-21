---
layout: home

hero:
  name: Markdown 进阶
  text: VitePress 1.6.4 学习 demo
  tagline: 系统讲解 VitePress 在标准 Markdown 之上提供的进阶语法能力
  actions:
    - theme: brand
      text: 从代码块增强开始
      link: /code-blocks
    - theme: alt
      text: 查看数学公式
      link: /math

features:
  - title: 代码块增强
    details: 行高亮、聚焦、彩色 diff、错误/警告标注与代码组。
    link: /code-blocks
  - title: 代码片段导入
    details: 直接从真实源码文件导入代码，支持命名区域与行高亮。
    link: /snippets
  - title: 数学公式
    details: 基于 mathjax3 的行内与块级 LaTeX 公式渲染。
    link: /math
  - title: 文件包含
    details: 用 @include 把公共片段拼装进多个页面。
    link: /includes
  - title: 容器与组件
    details: 自定义容器、GitHub 风格 alert、Badge 组件与 raw 容器。
    link: /containers
---

## 关于这个 demo

这是一个**可运行的 VitePress 1.6.4 学习 demo**，主题是 **Markdown 进阶语法**。

标准 Markdown 只能满足基础排版需求，而 VitePress 在 [markdown-it](https://github.com/markdown-it/markdown-it) 的基础上扩展了大量面向「技术文档」的增强语法。本 demo 把这些能力拆分成若干主题页，每一页都遵循同一种结构：

1. **先讲解** —— 说明这个特性解决什么问题、语法是什么；
2. **再示例** —— 给出可在本站直接看到效果的真实示例。

## 主题导航

- [代码块增强](/code-blocks)：行高亮 `{1,4-6}`、聚焦 `[!code focus]`、diff `[!code ++]`、错误/警告标注、`:no-line-numbers`，以及 `code-group` 代码组。
- [代码片段导入](/snippets)：用 `<<<` 语法从真实文件导入代码，含命名区域与行高亮。
- [数学公式](/math)：行内 `$...$` 与块级 `$$...$$` 公式。
- [文件包含](/includes)：用 `@include` 复用 Markdown 片段。
- [容器与组件](/containers)：自定义容器、GitHub alert、`<Badge>` 组件与 `raw` 容器。

## 本地运行

```bash
# 在仓库根目录执行
pnpm --filter vitepress-lab-markdown dev      # 启动开发服务器
pnpm --filter vitepress-lab-markdown build    # 生产构建
pnpm --filter vitepress-lab-markdown preview  # 预览构建产物
```
