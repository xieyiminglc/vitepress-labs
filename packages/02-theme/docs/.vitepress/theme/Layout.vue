<script setup lang="ts">
/**
 * <Layout> —— 自定义主题的布局根组件。
 *
 * 它负责在“两种渲染方式”之间做选择：
 *
 *  1. frontmatter.layout === 'custom'
 *     -> 渲染我们自己的 <CustomLayout/>，完全脱离默认主题。
 *
 *  2. 其它情况
 *     -> 包裹默认主题的 Layout，并向它的若干“具名插槽”注入内容。
 *
 * 关键点：
 *  - 通过 useData() 读取 frontmatter。
 *  - 默认主题的布局组件挂在 DefaultTheme.Layout 上。Vue 模板里
 *    不允许使用带点的标签名（<DefaultTheme.Layout> 不合法），
 *    所以先用解构取出：const { Layout } = DefaultTheme，
 *    再在模板里写 <Layout>。
 */
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import CustomLayout from './CustomLayout.vue'
import MyBanner from './MyBanner.vue'

// 取出默认主题的布局组件，得到一个合法的标签名 <Layout>。
const { Layout } = DefaultTheme

// 读取当前页面的 frontmatter，用来判断是否走完全自定义布局。
const { frontmatter } = useData()
</script>

<template>
  <!-- 情况 1：完全自定义布局 -->
  <CustomLayout v-if="frontmatter.layout === 'custom'" />

  <!-- 情况 2：包裹默认主题布局，并向其插槽注入内容 -->
  <Layout v-else>
    <!--
      下面每个 #xxx 都对应默认主题暴露的一个具名插槽。
      VitePress 默认主题提供了很多插槽，这里演示 4 个：
    -->

    <!-- doc-before：文档页正文「之前」。这里放入横幅组件。 -->
    <template #doc-before>
      <MyBanner />
    </template>

    <!-- doc-footer-before：文档页「上一页/下一页」导航之前。 -->
    <template #doc-footer-before>
      <div class="custom-doc-footer-note">
        本段文字来自自定义主题向 <code>doc-footer-before</code> 插槽注入的内容。
      </div>
    </template>

    <!-- home-features-after：首页 features 区块「之后」。 -->
    <template #home-features-after>
      <div class="custom-home-after">
        本段文字来自自定义主题向 <code>home-features-after</code> 插槽注入的内容，
        只会出现在 <code>layout: home</code> 的首页。
      </div>
    </template>

    <!-- nav-bar-content-after：顶部导航栏内容「之后」。 -->
    <template #nav-bar-content-after>
      <span class="nav-after-flag">自定义主题</span>
    </template>
  </Layout>
</template>

<style scoped>
.custom-doc-footer-note {
  margin: 16px 0;
  padding: 10px 14px;
  font-size: 13px;
  border-radius: 8px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
.custom-home-after {
  max-width: 1152px;
  margin: 0 auto;
  padding: 16px 24px 48px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
