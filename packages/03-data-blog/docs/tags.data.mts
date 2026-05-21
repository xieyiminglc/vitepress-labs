// tags.data.mts —— 标签聚合数据加载器
//
// 同样基于 createContentLoader 扫描 docs/posts/*.md，
// 但 transform 产出的是「标签 -> 文章数组」的映射，供标签索引页使用。
// 用 .mts 扩展名同样是为了以 ESM 方式打包加载器。

import { createContentLoader } from 'vitepress'

// 标签页里展示一篇文章所需的字段。
export interface TaggedPost {
  url: string
  title: string
  date: string
  author: string
}

// 最终数据形态：标签名 -> 该标签下的文章列表。
export type TagsData = Record<string, TaggedPost[]>

declare const data: TagsData
export { data }

export default createContentLoader('posts/*.md', {
  transform(raw) {
    // 先把原始数据整理成扁平的文章列表，并按日期倒序。
    const posts = raw
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title ?? '无标题',
        date: frontmatter.date ?? '',
        author: frontmatter.author ?? '佚名',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : []
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))

    // 遍历每篇文章的每个标签，聚合成映射。
    const map: TagsData = {}
    for (const post of posts) {
      for (const tag of post.tags) {
        if (!map[tag]) map[tag] = []
        map[tag].push({
          url: post.url,
          title: post.title,
          date: post.date,
          author: post.author
        })
      }
    }

    // 按标签名排序，保证页面渲染顺序稳定。
    return Object.keys(map)
      .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
      .reduce<TagsData>((sorted, tag) => {
        sorted[tag] = map[tag]
        return sorted
      }, {})
  }
})
