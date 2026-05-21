---
title: SSR 安全地渲染数据
date: 2024-03-20
author: 阿强
tags:
  - VitePress
  - SSR
description: VitePress 页面会经过服务端渲染，介绍如何写出在 SSR 环境下不会报错的模板与脚本。
---

# SSR 安全地渲染数据

VitePress 的页面在构建时会先在 Node 环境里跑一遍服务端渲染（SSR），生成 HTML，然后再到浏览器里「激活」（hydration）。这意味着你的 `<script setup>` 代码会在没有 `window`、`document` 的环境下执行一次。

如果在组件顶层直接访问浏览器专属的 API，构建就会失败。所以「SSR 安全」是写 VitePress 页面时必须时刻记住的一条原则。

<!-- more -->

好消息是，数据加载器返回的 `data` 天生就是 SSR 安全的：它是构建期算好的纯数据，序列化后既能在服务端用、也能在客户端用，两端结果完全一致。

需要小心的是那些只在浏览器里才有意义的逻辑。如果确实要用 `window`，把它放进 `onMounted` 里，或者用 VitePress 提供的 `<ClientOnly>` 组件把相关标记包起来。本 demo 的首页和标签页只渲染静态数据，因此天然 SSR 安全，不需要这些额外处理。
