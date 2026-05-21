---
title: 博客首页
description: 用 VitePress 数据加载器渲染的文章列表首页。
---

<script setup>
// 从数据加载器导入构建期算好的文章列表。
// data 是 posts.data.mts 中 transform 返回值的「具名导出」。
import { data as posts } from './posts.data.mts'

// 把 ISO 日期格式化成中文可读形式。
// 纯字符串运算，不依赖浏览器 API，因此在 SSR 期间也能安全执行。
function formatDate(raw) {
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}
</script>

# 博客首页

欢迎来到这个 VitePress 1.6.4 学习 demo。下面的文章列表**不是手写的**——它由数据加载器 `posts.data.ts` 在构建期扫描 `docs/posts/*.md` 自动生成。

新增或删除一篇文章，这个列表会随之更新，无需改动本页面。

## 全部文章

<ul class="post-list">
  <li v-for="post of posts" :key="post.url" class="post-item">
    <h3 class="post-title">
      <a :href="post.url">{{ post.title }}</a>
    </h3>
    <p class="post-meta">
      <span>{{ formatDate(post.date) }}</span>
      <span>·</span>
      <span>{{ post.author }}</span>
      <span v-for="tag of post.tags" :key="tag" class="post-tag">{{ tag }}</span>
    </p>
    <!-- excerpt 是加载器渲染好的 HTML 摘要，用 v-html 注入。
         内容来自我们自己的 Markdown，安全可控。 -->
    <div class="post-excerpt" v-html="post.excerpt"></div>
  </li>
</ul>

<style scoped>
.post-list {
  list-style: none;
  padding: 0;
}
.post-item {
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.post-title {
  margin: 0 0 6px;
  border: none;
  padding: 0;
}
.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 8px;
}
.post-tag {
  background: var(--vp-c-default-soft);
  border-radius: 4px;
  padding: 1px 8px;
  font-size: 12px;
}
.post-excerpt {
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>

---

想了解这一切背后的原理，请阅读[数据加载原理](/data-loading)；想按标签浏览文章，请前往[全部标签](/tags)。
