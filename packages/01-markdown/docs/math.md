# 数学公式

技术文档经常需要排版数学公式。VitePress 通过 [markdown-it-mathjax3](https://github.com/tani/markdown-it-mathjax3) 插件支持 LaTeX 语法的公式渲染。

## 如何开启

数学公式默认是关闭的，需要在配置里显式开启。本 demo 已经在 `docs/.vitepress/config.mts` 里设置好了：

```ts
export default defineConfig({
  markdown: {
    math: true, // 开启数学公式（底层使用 mathjax3）
  },
})
```

> 开启后还需要安装 `markdown-it-mathjax3` 依赖（本 demo 已安装）。

## 行内公式

用一对单美元符号 `$...$` 包裹公式，公式会和文字排在同一行。

**写法**：

```md
质能方程 $E = mc^2$ 描述了质量与能量的等价关系。
当 $a \neq 0$ 时，方程 $ax^2 + bx + c = 0$ 有两个解。
```

**效果**：

质能方程 $E = mc^2$ 描述了质量与能量的等价关系。
当 $a \neq 0$ 时，方程 $ax^2 + bx + c = 0$ 有两个解。

## 块级公式

用一对双美元符号 `$$...$$` 包裹公式，公式会独占一块并居中显示。

### 一元二次方程求根公式

**写法**：

```md
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

**效果**：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 求和式

**写法**：

```md
$$
\sum_{i=1}^{n} i = \frac{n(n + 1)}{2}
$$
```

**效果**：

$$
\sum_{i=1}^{n} i = \frac{n(n + 1)}{2}
$$

### 更多示例

下面是一个矩阵和一个极限的例子，展示 mathjax3 对复杂结构的支持：

$$
A = \begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
\qquad
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

## 小结

| 类型 | 语法 | 效果 |
| --- | --- | --- |
| 行内公式 | `$ ... $` | 与文字同行 |
| 块级公式 | `$$ ... $$` | 独占一块、居中 |

下一步，去看看如何用 [@include 复用 Markdown 片段](/includes)。
