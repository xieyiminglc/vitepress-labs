---
title: 数据加载原理
description: 讲解 VitePress 的 .data.ts 数据加载器：load/watch 形态、createContentLoader、构建期计算与 HMR。
---

<script setup>
// 导入「普通数据加载器」buildinfo.data.mts 的数据。
import { data as buildinfo } from './buildinfo.data.mts'
</script>

# 数据加载原理

VitePress 内置了一套**数据加载（Data Loading）**机制：你可以在构建期把数据准备好，直接喂给页面，而不必在浏览器里再发请求。本页讲清楚它的工作方式。

## 加载器文件长什么样

只要文件名匹配 `*.data.js` / `*.data.ts`（`.mjs` / `.mts` 同样被识别），VitePress 就把它当作一个数据加载器。加载器需要默认导出一个**带 `load()` 方法的对象**：

```ts
// example.data.mts
export default {
  // 可选：监听额外的文件，这些文件变化时会重新执行 load()
  watch: ['./some/glob/*.md'],
  // 必需：构建期被调用，返回值就是页面拿到的数据
  load() {
    return { hello: 'world' }
  }
}
```

页面通过**具名导出 `data`** 来消费它返回的结果：

```ts
import { data } from './example.data.ts'
// 此时 data === { hello: 'world' }
```

注意消费端拿到的永远是名为 `data` 的导出，而不是加载器对象本身。为了让 TypeScript 正确推断类型，加载器文件里通常会补一行声明：

```ts
declare const data: MyDataType
export { data }
```

## load / watch 两个要点

- **`load()`**：构建期执行一次，返回任意可序列化的数据。它运行在 Node 环境，可以读文件系统、调用本地 API、做计算。
- **`watch`**：一个 glob 字符串或数组。开发服务器会监听这些文件，命中变化时重新跑 `load()`，从而触发热更新（HMR）——你改一篇文章，页面数据立刻刷新，无需重启。

## createContentLoader：内容加载器

如果数据来源就是一批 Markdown 文件（典型的博客 / 文档列表），不必手写文件扫描逻辑。VitePress 提供了辅助函数 `createContentLoader`：

```ts
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw.map(/* 整形 */).sort(/* 排序 */)
  }
})
```

- glob 模式（如 `posts/*.md`）**相对于 `docs` 源目录**。
- `excerpt: true` 会渲染文章摘要。
- `transform` 在数据交付页面前做最后整形，可以挑字段、排序、过滤。
- 它的返回值本身就是一个合法的加载器对象（内部已经配好 `watch` 和 `load`），可直接作为默认导出。

本 demo 的 `posts.data.mts` 与 `tags.data.mts` 都基于它实现。

> 小贴士：本 demo 把加载器文件命名为 `.data.mts` 而非 `.data.ts`。因为
> `vitepress` 包是纯 ESM，而 `.mts` 扩展名能保证加载器始终以 ESM 方式打包，
> 从而正常 `import` 它。如果包的 `package.json` 标注了 `"type": "module"`，
> 用 `.data.ts` 也可以。

## 数据在构建期计算

这是数据加载最关键的特性：`load()` 在 `vitepress build` 时执行，返回值会被**序列化后内联**进生成的 JavaScript。也就是说：

- 浏览器打开页面时数据已经在手，**没有额外网络请求**；
- 产物是纯静态资源，可直接部署到任意 CDN；
- 内容在 HTML 里就渲染好，**对 SEO 与分享卡片友好**。

代价是数据是「构建时快照」，内容更新需要重新构建。对文档、博客这类站点，这个取舍非常划算。

## 开发期支持 HMR

在 `vitepress dev` 下，加载器配合 `watch` 提供热更新：被监听的文件一变化，VitePress 重新执行 `load()`，引用了 `data` 的页面随即局部刷新。开发体验上和改普通源码几乎没有区别。

## 实证：buildinfo 数据

下面的数据来自本 demo 的 `buildinfo.data.ts`——一个不依赖 Markdown 的**普通加载器**，它只是返回构建时刻和 Node 版本：

<ul>
  <li>构建时刻 builtAt：<code>{{ buildinfo.builtAt }}</code></li>
  <li>构建所用 Node 版本：<code>{{ buildinfo.node }}</code></li>
</ul>

这个时间戳是**构建那一刻**被写死的——刷新页面它也不会变。这恰恰证明了：加载器里的代码运行在构建期的 Node 环境，而不是你浏览器的运行期。

---

理解了原理，可以回到[博客首页](/)看文章列表是怎么渲染出来的，或前往[全部标签](/tags)查看标签聚合。
