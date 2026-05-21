// posts.data.mts —— 博客文章列表数据加载器
//
// 文件名匹配 .data.(m)js / .data.(m)ts，VitePress 在构建期会识别它，
// 调用其默认导出的 load() 方法，并把返回值作为「具名导出 data」交给页面：
//   import { data } from './posts.data.mts'
//
// 这里用 .mts 扩展名，是为了让加载器始终以 ESM 方式被打包，
// 从而能正常 import 仅提供 ESM 的 vitepress 包。
//
// createContentLoader 的 glob 相对于 docs 源目录，这里匹配 docs/posts/*.md。

import { createContentLoader } from 'vitepress'

// 单篇文章经过 transform 后的数据结构。
export interface Post {
  url: string
  title: string
  date: string
  author: string
  tags: string[]
  excerpt: string
}

// 让页面里 `import { data } from './posts.data.mts'` 能获得正确类型。
declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  // 渲染摘要：截取正文中 <!-- more --> 之前的部分并转成 HTML。
  excerpt: true,
  // transform 在数据交付给页面前做一次整形。
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        url,
        title: frontmatter.title ?? '无标题',
        date: frontmatter.date ?? '',
        author: frontmatter.author ?? '佚名',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        excerpt: excerpt ?? ''
      }))
      // 按日期倒序：最新的文章排在最前。
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
})
