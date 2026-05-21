---
# 这是动态路由的页面模板。
# 它会为 [pkg].paths.ts 中每一个 paths() 条目渲染一次。
#
# 模板里通过全局 `$params` 访问当前条目的 params 对象。
# frontmatter 中的表达式也能使用 $params。
title: Package
---

# {{ $params.title }}

> Generated dynamically from `packages/[pkg].md` + `packages/[pkg].paths.ts`.
> 由 `packages/[pkg].md` 与 `packages/[pkg].paths.ts` 动态生成。

| Field       | Value                  |
| ----------- | ---------------------- |
| Package id  | `{{ $params.pkg }}`    |
| Version     | `{{ $params.version }}` |

## Description / 描述

{{ $params.description }}

## How this page exists / 这个页面是怎么来的

This page was **not written by hand**. A single template file `[pkg].md` is
rendered once for every entry returned by `[pkg].paths.ts`. The current entry's
data is exposed through the global `$params` object:

本页**不是手写的**。一个模板文件 `[pkg].md` 会为 `[pkg].paths.ts` 返回的
每个条目渲染一次。当前条目的数据通过全局 `$params` 对象暴露：

- `$params.pkg` → `{{ $params.pkg }}` — also the URL segment (`/packages/{{ $params.pkg }}`).
- `$params.title` → `{{ $params.title }}`
- `$params.version` → `{{ $params.version }}`
- `$params.description` → see above / 见上文。

## Navigation / 导航

- Back to the [package list](/packages/) / 返回[示例包列表](/packages/)。
- Learn the mechanism in [Dynamic Routes](/dynamic-routes) / 在[动态路由](/dynamic-routes)中了解原理。
