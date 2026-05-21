// docs/packages/[pkg].paths.ts
//
// paths 加载器 / paths loader.
//
// VitePress 在构建时调用它来决定 [pkg].md 应该生成哪些页面。
// 必须 `export default` 一个带 `paths()` 方法的对象。
//
// `paths()` 返回一个数组，每一项形如 { params: { ... } }：
//   - `params.pkg`  → 替换文件名里的 [pkg]，决定最终 URL（/packages/<pkg>）。
//   - 其余的键      → 不进入 URL，作为数据通过全局 `$params` 传给模板。
//
// 在真实项目中，`paths()` 还可以读取 JSON、调用 API，或扫描文件系统。
// 这里我们直接内联造 4 个示例包。

interface PackageEntry {
  params: {
    pkg: string
    title: string
    version: string
    description: string
  }
}

export default {
  paths(): PackageEntry[] {
    return [
      {
        params: {
          pkg: 'core',
          title: '@lab/core',
          version: '2.1.0',
          description:
            'The runtime shared by every other package — utilities, types and the plugin host. 所有其他包共享的运行时。',
        },
      },
      {
        params: {
          pkg: 'router',
          title: '@lab/router',
          version: '1.4.2',
          description:
            'A tiny client-side router demonstrating how dynamic routes resolve. 一个演示动态路由如何解析的小型客户端路由器。',
        },
      },
      {
        params: {
          pkg: 'i18n',
          title: '@lab/i18n',
          version: '0.9.0',
          description:
            'Locale detection and message loading helpers for multilingual sites. 面向多语言站点的 locale 检测与文案加载工具。',
        },
      },
      {
        params: {
          pkg: 'cli',
          title: '@lab/cli',
          version: '3.0.1',
          description:
            'The command-line tool that scaffolds, builds and previews a lab project. 用于脚手架、构建与预览实验项目的命令行工具。',
        },
      },
    ]
  },
}
