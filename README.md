# vitepress-labs

VitePress 进阶学习 demo 集合，使用 **pnpm workspace** 管理：依赖只装一次，每个 demo 都能独立运行。

## 环境

```bash
cd vitepress-labs
pnpm install        # 一次性安装所有 demo 的依赖
```

## Demo 列表

| 包名 | 目录 | 知识点 |
| --- | --- | --- |
| `vitepress-lab-markdown` | `packages/01-markdown` | Markdown 进阶：代码组/行高亮/diff、代码片段导入 `<<<`、数学公式、`@include` |
| `vitepress-lab-theme` | `packages/02-theme` | 自定义主题：扩展默认主题、Layout 插槽、自定义 Layout、全局组件、CSS 变量 |
| `vitepress-lab-data-blog` | `packages/03-data-blog` | 数据加载：`createContentLoader` 博客列表与标签、`.data.ts` 加载器 |
| `vitepress-lab-i18n-routes` | `packages/04-i18n-routes` | 国际化 `locales`、动态路由 `[param].md` + paths 加载器 |

## 运行

在 `vitepress-labs/` 目录下：

```bash
pnpm dev:markdown      # 启动 Markdown 进阶 demo
pnpm dev:theme         # 启动自定义主题 demo
pnpm dev:data-blog     # 启动数据加载与博客 demo
pnpm dev:i18n-routes   # 启动 i18n 与动态路由 demo

pnpm build             # 构建全部 demo
```

也可以进入单个 demo 目录操作：

```bash
cd packages/01-markdown
pnpm dev
```

## 学习顺序建议

1. 先看仓库根目录的 `vitepress-demo`（基础：配置、导航、首页、在 Markdown 用 Vue、运行时 API）。
2. 再按 `01 → 04` 顺序逐个运行本目录的 demo。
