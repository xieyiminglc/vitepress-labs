# 代码片段导入

文档里的示例代码常常需要和真实源码保持一致。如果把代码手抄进 Markdown，源码一改文档就过时了。VitePress 提供了 `<<<` 语法，可以**直接从真实文件导入代码**，保证文档与源码同步。

## 路径前缀 `@`

导入路径中的 `@` 会被解析到**源目录**，即本项目的 `docs` 目录。所以 `@/snippets/demo.ts` 实际指向 `docs/snippets/demo.ts`。

也可以用相对当前 Markdown 文件的相对路径，例如 `./snippets/demo.ts`。本页统一使用 `@`。

## 导入整个文件

只要一行 `<<<` 加文件路径，就能把整个文件作为代码块嵌入。VitePress 会根据扩展名自动选择高亮语言。

**写法**：

```md
<<< @/snippets/demo.ts
```

**效果**：

<<< @/snippets/demo.ts

## 导入命名区域

如果只想展示文件的一部分，可以在源文件里用 `// #region 名称` 与 `// #endregion 名称` 包裹一段代码，然后在导入路径后用 `#名称` 引用。

本页用的 `docs/snippets/demo.ts` 中就有一个名为 `usage` 的区域：

```ts
// #region usage
const cart = [19.9, 5, 128.5]
const total = sum(cart)
// ...
// #endregion usage
```

**写法**：

```md
<<< @/snippets/demo.ts#usage
```

**效果**（注意 `#region` / `#endregion` 标记行本身不会被渲染出来）：

<<< @/snippets/demo.ts#usage

## 导入时附加行高亮

`<<<` 语法同样支持[代码块增强](/code-blocks)里的行高亮。在路径后用花括号写行号即可。如果要同时显式指定语言，把语言写在花括号里，例如 `{2,5 ts}`。

**写法**：

```md
<<< @/snippets/demo.ts{2,5 ts}
```

**效果**（第 2 行和第 5 行被高亮，并显式指定语言为 `ts`）：

<<< @/snippets/demo.ts{2,5 ts}

行高亮也可以和命名区域组合使用，例如 `<<< @/snippets/demo.ts#usage{2}`。

## 小结

| 用途 | 语法 |
| --- | --- |
| 导入整个文件 | `<<< @/snippets/demo.ts` |
| 导入命名区域 | `<<< @/snippets/demo.ts#usage` |
| 附加行高亮 | `<<< @/snippets/demo.ts{2,5}` |
| 行高亮 + 指定语言 | `<<< @/snippets/demo.ts{2,5 ts}` |

下一步，去看看[数学公式](/math)的写法。
