# 文件包含

当多个页面需要复用同一段 Markdown 内容时，可以把这段内容抽成「片段文件」，再用 `@include` 指令把它包含进来。这样就能做到「一处修改、处处生效」。

## 基本语法

`@include` 写在一个 HTML 注释里，路径相对于当前 Markdown 文件：

```md
<!-- @include: ./parts/_intro.md -->
```

构建时，VitePress 会把这一行**原地替换**成目标文件的全部内容。

下面是把 `./parts/_intro.md` 完整包含进来的效果（虚线之间的内容来自片段文件）：

---

<!-- @include: ./parts/_intro.md -->

---

## 按行范围包含

如果只想包含片段文件的某几行，可以在路径后用花括号写行范围。语法和[代码片段导入](/snippets)的行号选择类似：

```md
<!-- @include: ./parts/_intro.md{1,3} -->
```

`{1,3}` 表示包含第 1 行到第 3 行。下面是只包含 `_intro.md` 第 1 到第 3 行的效果：

---

<!-- @include: ./parts/_intro.md{1,3} -->

---

## 片段文件为什么不会变成页面

默认情况下，`docs/` 下的每个 `.md` 文件都会被 VitePress 当作一个页面、生成对应路由。但片段文件只是「零件」，不应该单独成页。

本 demo 把所有片段放在 `docs/parts/` 目录，并在 `config.mts` 里配置了：

```ts
export default defineConfig({
  // parts/ 下的文件只作为 @include 的片段，不生成独立页面
  srcExclude: ['**/parts/**'],
})
```

`srcExclude` 接受一组 glob，匹配到的文件会被排除出路由系统。这样 `docs/parts/_intro.md` 就只能被 `@include` 引用，而不会出现一个可访问的 `/parts/_intro` 页面。

## 小结

| 用途 | 语法 |
| --- | --- |
| 包含整个片段 | `<!-- @include: ./parts/_intro.md -->` |
| 按行范围包含 | `<!-- @include: ./parts/_intro.md{1,3} -->` |
| 排除片段路由 | `srcExclude: ['**/parts/**']` |

下一步，去看看[容器与组件](/containers)。
