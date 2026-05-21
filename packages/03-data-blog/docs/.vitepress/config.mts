import { defineConfig } from 'vitepress'

// VitePress 1.6.4 站点配置
// 本 demo 主题：构建期数据加载（Data Loading）与博客
export default defineConfig({
  // 站点语言，会写入 <html lang="...">
  lang: 'zh-CN',
  title: 'VitePress 数据加载与博客',
  description:
    '一个可运行的 VitePress 1.6.4 学习 demo，演示 .data.ts 构建期数据加载器与简易博客。',

  // 关闭死链检查会掩盖问题，这里保持默认（死链会让 build 失败），
  // 因此所有站内链接都必须指向真实页面。
  themeConfig: {
    nav: [
      { text: '博客首页', link: '/' },
      { text: '全部标签', link: '/tags' },
      { text: '数据加载原理', link: '/data-loading' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '博客首页', link: '/' },
          { text: '全部标签', link: '/tags' },
          { text: '数据加载原理', link: '/data-loading' }
        ]
      },
      {
        text: '博客文章',
        items: [
          { text: '为什么需要构建期数据加载', link: '/posts/post-1' },
          { text: 'createContentLoader 实战', link: '/posts/post-2' },
          { text: 'SSR 安全地渲染数据', link: '/posts/post-3' },
          { text: '用标签组织你的博客', link: '/posts/post-4' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
