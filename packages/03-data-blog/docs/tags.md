---
title: 全部标签
description: 按标签聚合展示所有博客文章。
---

<script setup>
// tags.data.mts 产出的是「标签 -> 文章数组」的映射对象。
import { data as tagMap } from './tags.data.mts'

// 取出所有标签名，方便用 v-for 遍历。
// 对象键的顺序已在加载器里按标签名排好。
const tags = Object.keys(tagMap)

function formatDate(raw) {
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
</script>

# 全部标签

本页把所有文章按 `frontmatter.tags` 聚合。数据来自 `tags.data.ts`——同一批 Markdown 文件，换一个加载器就得到了完全不同的视图。

当前共有 **{{ tags.length }}** 个标签。

<div v-for="tag of tags" :key="tag" class="tag-block">
  <h2 :id="'tag-' + tag">
    {{ tag }}
    <span class="tag-count">{{ tagMap[tag].length }} 篇</span>
  </h2>
  <ul>
    <li v-for="post of tagMap[tag]" :key="post.url">
      <a :href="post.url">{{ post.title }}</a>
      <span class="tag-post-meta">{{ formatDate(post.date) }} · {{ post.author }}</span>
    </li>
  </ul>
</div>

<style scoped>
.tag-block {
  margin-bottom: 8px;
}
.tag-count {
  font-size: 13px;
  font-weight: normal;
  color: var(--vp-c-text-2);
  margin-left: 8px;
}
.tag-post-meta {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-left: 8px;
}
</style>

---

回到[博客首页](/)查看按时间排序的完整列表。
