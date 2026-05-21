<script setup lang="ts">
/**
 * <CustomLayout> —— 一个“完全自定义”的页面布局。
 *
 * 当某个页面的 frontmatter 写了 `layout: custom` 时，
 * Layout.vue 会渲染本组件，而不是默认主题的布局。
 *
 * 这种布局完全脱离默认主题的导航栏 / 侧边栏 / 大纲，
 * 由我们自己提供 header / main / footer 结构，
 * 正文则通过 VitePress 内置的 <Content/> 组件渲染（即把
 * Markdown 编译后的内容插入到指定位置）。
 *
 * useData() 用来读取当前页 frontmatter，便于在 header 中
 * 展示页面标题等信息。
 */
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="custom-layout">
    <header class="custom-layout__header">
      <h1>{{ frontmatter.title || '自定义布局页面' }}</h1>
      <p>{{ frontmatter.subtitle || '此页面由 CustomLayout.vue 完整接管渲染' }}</p>
    </header>

    <main class="custom-layout__main">
      <!--
        <Content/> 是 VitePress 内置组件：
        它会把当前 Markdown 文件编译后的正文渲染到这里。
        没有它，自定义布局就只会显示 header / footer 而看不到内容。
      -->
      <Content />
    </main>

    <footer class="custom-layout__footer">
      由 <code>CustomLayout.vue</code> 渲染 · 没有默认主题的导航栏与侧边栏
    </footer>
  </div>
</template>
