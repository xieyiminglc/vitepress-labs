<script setup lang="ts">
/**
 * <Tag> —— 一个行内标签组件。
 *
 * 这个组件会在 theme/index.ts 的 enhanceApp 中被“全局注册”，
 * 因此任意 Markdown 页面里都可以直接写 <Tag ... />，无需 import。
 *
 * props 使用 TypeScript 类型标注：
 *   text  标签文字（必填）
 *   type  标签样式风格（可选，默认 'default'）
 */
type TagType = 'default' | 'brand' | 'warning' | 'danger'

const props = withDefaults(
  defineProps<{
    text: string
    type?: TagType
  }>(),
  {
    type: 'default',
  },
)
</script>

<template>
  <span class="demo-tag" :class="`demo-tag--${props.type}`">{{ props.text }}</span>
</template>
