import { defineConfig } from 'vitepress'

// VitePress 1.6.4 —— i18n（国际化）与动态路由 demo
//
// 关键点：
// 1. 通过顶层 `locales` 字段声明多语言。
// 2. `root` locale 的页面文件直接放在 `docs/` 顶层。
// 3. 其他 locale（这里是 `zh`）的页面文件放在与 key 同名的子目录 `docs/zh/` 下。
// 4. 每个 locale 可以拥有独立的 `themeConfig`（独立的 nav / sidebar）。
//    nav / sidebar 里的链接必须带上对应 locale 的路径前缀。
export default defineConfig({
  // GitHub Pages 子路径：本地 dev 用 '/'，CI 构建时由 BASE 环境变量注入
  base: process.env.BASE || '/',
  // 一个共享的顶层 title，会被所有 locale 继承（除非某个 locale 自己覆盖）。
  title: 'VitePress i18n & Routes Lab',

  // VitePress build 默认会因为死链（dead link）失败。
  // 本 demo 已确保所有站内链接都能解析，因此保持默认的严格校验。
  // 如果你在扩展本 demo 时遇到难以避免的跨 locale 链接问题，
  // 可以临时把下面一行设为 true 兜底。
  ignoreDeadLinks: false,

  locales: {
    // ---- root locale：英文 ----
    // root locale 的页面放在 docs/ 顶层，URL 没有语言前缀。
    root: {
      label: 'English',
      lang: 'en',
      description: 'Learn VitePress internationalization and dynamic routes.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide' },
          { text: 'Dynamic Routes', link: '/dynamic-routes' },
          { text: 'Packages', link: '/packages/' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/' },
              { text: 'i18n Guide', link: '/guide' },
            ],
          },
          {
            text: 'Routing',
            items: [
              { text: 'Dynamic Routes', link: '/dynamic-routes' },
              { text: 'Generated Packages', link: '/packages/' },
            ],
          },
        ],
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
      },
    },

    // ---- zh locale：简体中文 ----
    // 非 root locale 的页面放在与 key 同名的子目录（docs/zh/）下，
    // `link` 指向该 locale 的入口，必须带 `/zh/` 前缀。
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/',
      description: '学习 VitePress 的国际化与动态路由。',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide' },
          { text: '动态路由', link: '/zh/dynamic-routes' },
          { text: '示例包', link: '/packages/' },
        ],
        sidebar: [
          {
            text: '开始上手',
            items: [
              { text: '介绍', link: '/zh/' },
              { text: 'i18n 指南', link: '/zh/guide' },
            ],
          },
          {
            text: '路由',
            items: [
              { text: '动态路由', link: '/zh/dynamic-routes' },
              { text: '生成的示例包', link: '/packages/' },
            ],
          },
        ],
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        langMenuLabel: '切换语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
      },
    },
  },
})
