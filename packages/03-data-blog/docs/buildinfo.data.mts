// buildinfo.data.mts —— 一个「普通」数据加载器（非内容加载器）
//
// 不是所有数据都来自 Markdown 文件。数据加载器最通用的形态就是直接
// 导出一个带 load() 方法的对象：VitePress 在构建期调用 load()，
// 把返回值作为具名导出 data 交给页面。
//
// 这里我们记录「构建发生的时刻」和「构建所用的 Node 版本」，
// 用来直观地说明：加载器里的代码是在构建期、Node 环境下执行的。

export interface BuildInfo {
  // 构建时刻（ISO 字符串）。
  builtAt: string
  // 执行构建的 Node 版本。
  node: string
}

declare const data: BuildInfo
export { data }

export default {
  // 如果需要监听额外文件变化触发 HMR，可以再加一个 watch 字段；
  // 本例数据不依赖任何文件，所以省略。
  load(): BuildInfo {
    return {
      builtAt: new Date().toISOString(),
      node: process.version
    }
  }
}
