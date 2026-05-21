import { defineConfig } from 'vitepress'

// VitePress 站点级配置。
// 这里只配置“站点信息 + 导航/侧边栏”，主题的外观与行为由
// docs/.vitepress/theme/index.ts 决定（自定义主题）。
export default defineConfig({
  // GitHub Pages 子路径：本地 dev 用 '/'，CI 构建时由 BASE 环境变量注入
  base: process.env.BASE || '/',
  // 站点语言：影响 <html lang> 以及默认主题的内置文案方向。
  lang: 'zh-CN',
  title: 'VitePress 自定义主题',
  description: '一个可运行的 VitePress 1.6.4 学习 demo：自定义主题与布局',

  // 让 build 对死链更严格，保证站内链接都指向真实页面。
  // （VitePress 默认就会因死链失败，这里显式声明意图。）
  ignoreDeadLinks: false,

  themeConfig: {
    // 顶部导航栏。
    nav: [
      { text: '首页', link: '/' },
      { text: '插槽机制', link: '/slots' },
      { text: '全局组件', link: '/global-components' },
      { text: '自定义布局', link: '/custom-layout' },
    ],

    // 侧边栏：覆盖站点内所有页面。
    sidebar: [
      {
        text: '开始',
        items: [{ text: '首页', link: '/' }],
      },
      {
        text: '自定义主题与布局',
        items: [
          { text: '插槽机制', link: '/slots' },
          { text: '全局组件', link: '/global-components' },
          { text: '自定义布局', link: '/custom-layout' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: '基于 VitePress 1.6.4 的学习 demo',
      copyright: 'Copyright © 2026',
    },
  },
})
