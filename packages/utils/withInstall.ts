import type { App, Plugin } from 'vue'

// 类型必须导出 否则无法生成.d.ts文件
export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp:T) => {
  (comp as SFCWithInstall<T>).install = (app:App)=>{
    app.component((comp as any).name, comp as Plugin)
  }
  return comp as SFCWithInstall<T>
}
