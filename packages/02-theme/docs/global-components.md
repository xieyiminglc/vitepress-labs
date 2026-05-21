# 全局组件

VitePress 的 Markdown 文件本质上会被编译成 Vue 组件。因此你可以在
Markdown 里直接写 Vue 组件标签。

通常使用一个组件需要先 `import`。但如果一个组件**到处都要用**，
逐页 import 就很啰嗦。这时可以在自定义主题的 `enhanceApp` 中
**全局注册**它，之后任意 Markdown 页面都能直接使用，无需 import。

## 如何全局注册

在 `docs/.vitepress/theme/index.ts` 中：

```ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Tag from './Tag.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册：注册一次，全站可用
    app.component('Tag', Tag)
  },
} satisfies Theme
```

本 demo 注册的 `<Tag>` 组件定义在 `docs/.vitepress/theme/Tag.vue`，
它的 props 用 TypeScript 标注：

- `text: string` —— 标签文字（必填）
- `type?: 'default' | 'brand' | 'warning' | 'danger'` —— 风格（可选）

## 直接在 Markdown 中使用

下面这些 `<Tag>` 标签**没有任何 import**，全靠全局注册才能工作：

状态示例：<Tag text="默认" /> <Tag text="品牌" type="brand" /> <Tag text="警告" type="warning" /> <Tag text="危险" type="danger" />

可以把它嵌在句子中间，例如这个特性目前是 <Tag text="实验性" type="warning" /> 的，
请谨慎在生产中使用；而这个 API 已经 <Tag text="稳定" type="brand" /> 了。

也可以在列表里多次使用：

- 构建速度：<Tag text="快" type="brand" />
- 兼容性：<Tag text="良好" />
- 已知问题：<Tag text="少量" type="warning" />
- 破坏性变更：<Tag text="无" type="brand" />

在表格中同样可用：

| 模块 | 状态 |
| --- | --- |
| 自定义主题 | <Tag text="已完成" type="brand" /> |
| 插槽注入 | <Tag text="已完成" type="brand" /> |
| 自定义布局 | <Tag text="已完成" type="brand" /> |
| 国际化 | <Tag text="待办" type="default" /> |

## 小结

- Markdown 即 Vue 组件，所以可以在 `.md` 里写组件标签。
- 高频组件适合在 `enhanceApp` 里 `app.component()` 全局注册。
- 组件本身要保持 **SSR 安全**：不要在 `<script setup>` 顶层访问
  `window` / `document`，需要时用 `onMounted` 或 `<ClientOnly>`。

下一步可以看看[自定义布局](/custom-layout)，了解如何彻底接管页面渲染。
