# 动态路由

有时你需要**许多共享同一套布局的页面** —— 比如每个包一个页面、每个产品
一个页面、每个作者一个页面。手写每一个 `.md` 文件无法规模化。VitePress
用**动态路由**来解决这个问题。

## 两文件模式

一个动态路由由一对**同名兄弟文件**构成：

```
docs/packages/
├─ [pkg].md         ← 页面模板（文件名里含有一个 [param]）
├─ [pkg].paths.ts   ← paths 加载器（相同基础名 + .paths.ts）
└─ index.md         ← 一个普通页面，链接到生成的各页面
```

- `[pkg].md` 里的方括号标记了一个**动态片段**。`pkg` 就是参数名。
- `[pkg].paths.ts` 导出要生成的**具体页面列表**。

## 1. paths 加载器

`[pkg].paths.ts` 必须 `export default` 一个带 `paths()` 方法的对象。
每个返回项都有一个 `params` 对象，它的键用来填充路由：

```ts
// docs/packages/[pkg].paths.ts
export default {
  paths() {
    return [
      {
        params: {
          pkg: 'core',
          title: '@lab/core',
          version: '2.1.0',
          description: '所有其他包共享的运行时。',
        },
      },
      // ……更多的包
    ]
  },
}
```

`params.pkg` 的值会替换 URL 中的 `[pkg]`，生成 `/packages/core`。
任何**额外的键**（`title`、`version`、`description`）不会出现在 URL 里
—— 它们作为数据传给模板。

## 2. 页面模板

`[pkg].md` 会**为每个返回项渲染一次**。在模板内部，全局 `$params`
对象暴露当前项的 `params`：

```md
# {{ $params.title }}

**版本：** {{ $params.version }}

{{ $params.description }}
```

`$params` 在任意 Markdown 表达式中均可用，也可以在 `<script setup>` 中
通过 `useData().params` 访问。同样的数据也可以在 frontmatter 表达式里使用。

## 3. 链接到生成的页面

生成的页面是真实的路由，所以你可以像链接任何普通页面一样链接它们。
[`packages/` 索引页](/packages/)列出了每一个生成的包，并链接到它的
`/packages/<pkg>` URL。

## 为什么用动态路由？

- **单一数据源** —— 布局只改一次，所有页面同步更新。
- **数据驱动** —— 加载器可以在 `paths()` 里读取 JSON、调用 API，或扫描文件系统。
- **构建时生成** —— 页面在你运行 `vitepress build` 时生成，因此产物是完全
  静态的，路由也是真实、可被爬取的 URL。

## 动手试试

- 打开[生成的示例包列表](/packages/)，点进每一个包看看。
- 阅读 [i18n 指南](/zh/guide)，了解它如何与本地化结合。
- 切换到[英文版](/dynamic-routes)。
