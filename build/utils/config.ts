import { resolve } from 'path'
import { sccOutput } from './path'

export const buildConfig = {
  esm: {
    module: 'ESNext', // tsconfig输出的结果ES模块
    format: 'esm', // 配置格式化后的模块规范
    ext: 'mjs',
    output: {
      name: 'es', // 打包到path目录（dist）下的哪个目录
      path: resolve(sccOutput,"es") 
    },
    bundle: 'shicc/es'
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: resolve(sccOutput,"lib")
    },
    bundle: 'shicc/lib'
  }
}

export type BuildConfig = typeof buildConfig