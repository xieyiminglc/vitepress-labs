// docs/snippets/demo.ts
// 这是一个真实存在的 TypeScript 文件，供 snippets.md 通过 <<< 语法导入。

/** 货币格式化的配置选项 */
export interface FormatOptions {
  /** ISO 货币代码，例如 'CNY'、'USD' */
  currency: string
  /** 保留的小数位数 */
  fractionDigits?: number
}

/**
 * 把数字格式化为带货币符号的字符串。
 * @param value 待格式化的数值
 * @param options 格式化选项
 */
export function formatCurrency(value: number, options: FormatOptions): string {
  const { currency, fractionDigits = 2 } = options
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}

/** 计算一组价格的总和 */
export function sum(prices: number[]): number {
  return prices.reduce((total, price) => total + price, 0)
}

// #region usage
// 下面这段是「使用示例」命名区域，会被 snippets.md 单独导入。
const cart = [19.9, 5, 128.5]
const total = sum(cart)
const display = formatCurrency(total, { currency: 'CNY' })

console.log(`购物车合计：${display}`)
// #endregion usage
