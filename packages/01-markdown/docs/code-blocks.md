# 代码块增强

VitePress 使用 [Shiki](https://shiki.style/) 高亮代码，并在标准围栏代码块（三个反引号）之上提供了大量增强语法：行高亮、聚焦、彩色 diff、错误/警告标注、行号开关与代码组。

本页所有示例都可以在渲染后的页面里直接看到效果。

## 行高亮

在语言标识后面用花括号写行号，可以高亮指定行。支持单行 `{4}`、范围 `{4-6}`，以及用逗号组合 `{1,4-6}`。

**写法**（注意花括号紧跟在语言标识后）：

````md
```ts{1,4-6}
const a = 1
const b = 2
const c = 3
const sum = a + b + c
console.log(sum)
export default sum
```
````

**效果**：

```ts{1,4-6}
const a = 1
const b = 2
const c = 3
const sum = a + b + c
console.log(sum)
export default sum
```

## 聚焦（focus）

在某一行结尾加上注释 `// [!code focus]`，该行会保持清晰，其余行会变模糊；鼠标移到代码块上时恢复正常。适合在长代码里强调一行。

**写法**：

````md
```ts
function setup() {
  const count = ref(0) // [!code focus]
  return { count }
}
```
````

**效果**：

```ts
function setup() {
  const count = ref(0) // [!code focus]
  return { count }
}
```

## 彩色 diff

用 `// [!code ++]` 标记新增行（绿色），用 `// [!code --]` 标记删除行（红色）。常用于展示「改动前后」的对比。

**写法**：

````md
```ts
export default {
  data() {
    return {
      msg: 'Removed text', // [!code --]
      msg: 'Added text' // [!code ++]
    }
  }
}
```
````

**效果**：

```ts
export default {
  data() {
    return {
      msg: 'Removed text', // [!code --]
      msg: 'Added text' // [!code ++]
    }
  }
}
```

## 错误与警告标注

用 `// [!code error]` 把一行标红、用 `// [!code warning]` 把一行标黄，用来突出问题代码。

**写法**：

````md
```ts
const user = null
console.log(user.name) // [!code error]
const list = []
list[100] // [!code warning]
```
````

**效果**：

```ts
const user = null
console.log(user.name) // [!code error]
const list = []
list[100] // [!code warning]
```

## 行号开关

本 demo 在 `config.mts` 里设置了 `markdown.lineNumbers: true`，所以**默认所有代码块都有行号**。

如果想为**单个代码块**关闭行号，在语言标识后加 `:no-line-numbers`：

````md
```ts:no-line-numbers
// 这个代码块没有行号
const x = 42
```
````

**效果（无行号）**：

```ts:no-line-numbers
// 这个代码块没有行号
const x = 42
```

反过来，如果全局没开行号，也可以为单个代码块用 `:line-numbers` 单独开启。还能用 `:line-numbers=2` 指定起始行号。

## 代码组

`::: code-group` 容器可以把多个代码块组合成「带标签页」的代码组，读者点击标签切换。每个代码块的标签写在语言标识后的方括号里，例如 `[npm]`。

**写法**：

````md
::: code-group

```sh [npm]
npm install vitepress
```

```sh [pnpm]
pnpm add vitepress
```

```sh [yarn]
yarn add vitepress
```

:::
````

**效果**：

::: code-group

```sh [npm]
npm install vitepress
```

```sh [pnpm]
pnpm add vitepress
```

```sh [yarn]
yarn add vitepress
```

:::

代码组里同样支持行高亮等增强语法，例如下面这组配置文件：

::: code-group

```ts [config.ts]
export default {
  title: 'My Site', // [!code focus]
  description: 'A VitePress site'
}
```

```json [config.json]
{
  "title": "My Site",
  "description": "A VitePress site"
}
```

:::

## 小结

| 特性 | 语法 |
| --- | --- |
| 行高亮 | <code>```ts{1,4-6}</code> |
| 聚焦 | `// [!code focus]` |
| 新增行 | `// [!code ++]` |
| 删除行 | `// [!code --]` |
| 错误标注 | `// [!code error]` |
| 警告标注 | `// [!code warning]` |
| 关闭行号 | <code>```ts:no-line-numbers</code> |
| 代码组 | `::: code-group` + `[标签]` |

下一步，去看看如何[从真实文件导入代码片段](/snippets)。
