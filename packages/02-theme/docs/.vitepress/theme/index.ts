/**
 * 自定义主题入口。
 *
 * VitePress 约定：当 `docs/.vitepress/theme/index.ts` 存在并默认
 * 导出一个 Theme 对象时，它就会作为站点主题被加载。
 *
 * 本 demo 的做法是「扩展默认主题」(extending default theme)：
 *  - extends: DefaultTheme  —— 继承默认主题的全部能力；
 *  - Layout                —— 用我们自己的 Layout.vue 覆盖布局；
 *  - enhanceApp            —— 在这里全局注册组件、装插件等。
 *
 * `satisfies Theme` 让 TypeScript 校验该对象符合 Theme 类型，
 * 同时又保留对象自身的精确类型。
 */
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// 导入自定义样式（覆盖 VitePress 主题 CSS 变量）。
import './custom.css'

// 自定义布局组件。
import Layout from './Layout.vue'

// 需要全局注册的组件。
import Tag from './Tag.vue'

export default {
  // 继承默认主题：保留导航栏、侧边栏、搜索、代码块等所有能力。
  extends: DefaultTheme,

  // 用自定义布局替换默认主题的根布局组件。
  Layout,

  // enhanceApp 在 Vue 应用创建后调用，可拿到 app 实例。
  enhanceApp({ app }) {
    // 全局注册 <Tag>：任意 Markdown 页面都能直接使用，无需 import。
    app.component('Tag', Tag)
  },
} satisfies Theme
