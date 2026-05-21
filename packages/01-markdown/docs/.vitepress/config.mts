import { defineConfig } from 'vitepress'

// VitePress 1.6.4 配置文件
// 主题：Markdown 进阶语法学习 demo
export default defineConfig({
  // 站点语言，影响 <html lang> 以及无障碍读屏
  lang: 'zh-CN',
  title: 'Markdown 进阶',
  description: '一个可运行的 VitePress 1.6.4 学习 demo，系统讲解 Markdown 进阶语法。',

  // markdown-it 相关能力开关
  markdown: {
    // 开启数学公式渲染（底层使用 markdown-it-mathjax3）
    math: true,
    // 为所有代码块全局开启行号
    lineNumbers: true,
  },

  // parts/ 目录下的文件只是「被包含的片段」，不应生成独立页面
  srcExclude: ['**/parts/**'],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '主题',
        items: [
          { text: '代码块增强', link: '/code-blocks' },
          { text: '代码片段导入', link: '/snippets' },
          { text: '数学公式', link: '/math' },
          { text: '文件包含', link: '/includes' },
          { text: '容器与组件', link: '/containers' },
        ],
      },
    ],

    sidebar: [
      {
        text: '开始',
        items: [{ text: '介绍', link: '/' }],
      },
      {
        text: 'Markdown 进阶语法',
        items: [
          { text: '代码块增强', link: '/code-blocks' },
          { text: '代码片段导入', link: '/snippets' },
          { text: '数学公式', link: '/math' },
          { text: '文件包含', link: '/includes' },
          { text: '容器与组件', link: '/containers' },
        ],
      },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '本页目录',
    },
  },
})
