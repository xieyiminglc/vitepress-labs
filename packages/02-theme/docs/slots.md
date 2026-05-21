# 插槽机制

VitePress 默认主题的布局组件并不是“铁板一块”。它在很多关键位置
预留了**具名插槽（named slots）**，允许在「不 fork 整个主题」的前提下，
把自定义内容插入到默认布局的指定位置。

## 怎么用插槽

扩展默认主题时，我们用自己的 `Layout.vue` 包裹默认布局组件，
然后用 `<template #插槽名>` 向它注入内容：

```vue
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
// 模板里不能用带点的标签名，所以先解构取出 Layout
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <MyBanner />
    </template>
  </Layout>
</template>
```

> 注意：`DefaultTheme.Layout` 含有点号，不能直接作为标签名写在模板里。
> 必须先 `const { Layout } = DefaultTheme`，再写 `<Layout>`。

## 本 demo 注入了哪些插槽

本 demo 的 `docs/.vitepress/theme/Layout.vue` 一共向 **4 个插槽**注入了内容。
你可以在站点不同位置看到它们：

| 插槽名 | 出现位置 | 本 demo 注入的内容 | 在哪个页面能看到 |
| --- | --- | --- | --- |
| `doc-before` | 普通文档页正文「之前」 | `<MyBanner/>` 横幅组件 | 本页正文最上方那条紫色横幅 |
| `doc-footer-before` | 文档页「上一页 / 下一页」导航之前 | 一段灰色说明文字 | 本页正文最底部、翻页导航上方 |
| `home-features-after` | 首页 features 区块「之后」 | 一段说明文字 | [首页](/) features 卡片下方 |
| `nav-bar-content-after` | 顶部导航栏内容「之后」 | 文字标记「自定义主题」 | 页面顶部导航栏右侧 |

### 逐一对照

- **页面顶部正文上方的紫色横幅** —— 来自 `doc-before` 插槽，
  其内容是 `MyBanner.vue` 组件。
- **顶部导航栏右侧的「自定义主题」小字** —— 来自 `nav-bar-content-after` 插槽。
- **本页最底部、翻页导航之前的灰色说明** —— 来自 `doc-footer-before` 插槽。
- **首页 features 下方的说明文字** —— 来自 `home-features-after` 插槽，
  只在 `layout: home` 的[首页](/)出现，普通文档页看不到。

## 小结

- 插槽让你在**不重写默认主题**的情况下做局部定制。
- 默认主题还有许多其它插槽（如 `aside-top`、`sidebar-nav-before` 等），
  用法完全一致。
- 想彻底脱离默认主题时，应改用[自定义布局](/custom-layout)。
