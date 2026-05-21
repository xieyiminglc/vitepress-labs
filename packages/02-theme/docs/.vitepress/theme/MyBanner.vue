<script setup lang="ts">
/**
 * <MyBanner> —— 一个通过插槽展示的小横幅组件。
 *
 * 它本身没有任何特殊逻辑，关键在于“在哪里被渲染”：
 * Layout.vue 会把它放进默认主题的某个具名插槽（本 demo 放在
 * `doc-before` 插槽），于是每个文档页正文上方都会出现这个横幅。
 *
 * 组件保持 SSR 安全：不在顶层访问 window / document。
 */
</script>

<template>
  <div class="my-banner">
    <span class="my-banner__title">来自插槽的横幅 · </span>
    <span>
      这条横幅由 <code>MyBanner.vue</code> 渲染，通过默认主题的
      <code>doc-before</code> 插槽注入到每个文档页正文上方。
    </span>
  </div>
</template>
