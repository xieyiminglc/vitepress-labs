# 容器与组件

除了代码相关的增强，VitePress 还提供了一批用于「内容强调」的能力：自定义容器、GitHub 风格 alert、内置组件和 raw 容器。

## 自定义容器

自定义容器用 `:::` 开始、`:::` 结束，中间夹一个类型关键字。VitePress 内置了 `info`、`tip`、`warning`、`danger`、`details` 五种类型，会渲染成不同颜色的提示框。

**写法**：

```md
::: info
这是一条「信息」提示。
:::

::: tip
这是一条「技巧」提示。
:::

::: warning
这是一条「警告」提示。
:::

::: danger
这是一条「危险」提示。
:::
```

**效果**：

::: info
这是一条「信息」提示，常用于补充说明。
:::

::: tip
这是一条「技巧」提示，常用于给出最佳实践。
:::

::: warning
这是一条「警告」提示，常用于提醒潜在问题。
:::

::: danger
这是一条「危险」提示，常用于强调高风险操作。
:::

### 自定义标题

紧跟在类型关键字后面的文字会成为容器的标题，覆盖默认标题。

**写法**：

```md
::: danger 注意
删库操作不可恢复，请务必先备份。
:::
```

**效果**：

::: danger 注意
删库操作不可恢复，请务必先备份。
:::

### 可折叠的 details 容器

`details` 类型会渲染成一个可点击展开/收起的折叠块。

**写法**：

```md
::: details 点击查看完整配置
这里是被折叠起来的内容。
:::
```

**效果**：

::: details 点击查看完整配置
这里是被折叠起来的内容，默认收起，点击标题展开。

```ts
export default { title: 'My Site' }
```
:::

## GitHub 风格 alert

VitePress 也支持 GitHub 风格的 alert 语法：在引用块（`>`）的第一行写 `[!类型]`。共有五种类型。

**写法**：

```md
> [!NOTE]
> 一般性的提示信息。

> [!TIP]
> 有助于做得更好的建议。

> [!IMPORTANT]
> 用户需要知道的关键信息。

> [!WARNING]
> 需要立即关注、可能有风险的内容。

> [!CAUTION]
> 某些操作可能带来的负面后果。
```

**效果**：

> [!NOTE]
> 一般性的提示信息。

> [!TIP]
> 有助于做得更好的建议。

> [!IMPORTANT]
> 用户需要知道的关键信息。

> [!WARNING]
> 需要立即关注、可能有风险的内容。

> [!CAUTION]
> 某些操作可能带来的负面后果。

## 内置组件 Badge

VitePress 全局注册了 `<Badge>` 组件，可以直接在 Markdown 里使用，常用于在标题旁标注版本或状态。`type` 支持 `info`、`tip`、`warning`、`danger`。

**写法**：

```md
### 标题文字 <Badge type="tip" text="^1.6.4" />
```

**效果**：

行内徽标示例：稳定特性 <Badge type="tip" text="stable" />、
实验特性 <Badge type="warning" text="experimental" />、
已废弃 <Badge type="danger" text="deprecated" />、
普通信息 <Badge type="info" text="default" />。

## raw 容器

VitePress 的样式（尤其是 Tailwind 之类的工具类）有时会和页面里的自定义 HTML 冲突。`::: raw` 容器会用一个带 `vp-raw` 类的 `<div>` 包裹内容，使其样式不受站点全局样式影响。

**写法**：

```md
::: raw
<div>这里的内容被 vp-raw 包裹，可以安全地嵌入自定义 HTML。</div>
:::
```

**效果**：

::: raw
<div>这里的内容被 <code>vp-raw</code> 包裹，可以安全地嵌入自定义 HTML 而不被站点样式干扰。</div>
:::

## 小结

| 特性 | 语法 |
| --- | --- |
| 自定义容器 | `::: tip` / `info` / `warning` / `danger` / `details` |
| 自定义标题 | `::: danger 注意` |
| GitHub alert | `> [!NOTE]` / `[!TIP]` / `[!IMPORTANT]` / `[!WARNING]` / `[!CAUTION]` |
| 徽标组件 | `<Badge type="tip" text="..." />` |
| raw 容器 | `::: raw` |

回到[首页](/)看看完整的主题导航。
