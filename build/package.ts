// 专门打包util 指令 hook
import { resolve } from 'path'
import { series, parallel, src, dest } from 'gulp'
import gulpTs from 'gulp-typescript'
import { buildConfig } from './utils/config'
import { buildOutput, compRoot, projectRoot, utilsRoot } from './utils/path'
import { withTaskName } from './utils'
import { buildModules } from './utils/rollup'

export const buildUtils = (dirname, name)=> {
  // 拿到模块配置
  const tasks = Object.entries(buildConfig).map(([module,config])=>{
    const output = resolve(dirname,'dist', config.output.name)
    return series(
      withTaskName(`build:${module}`, ()=>{
        const tsConfig = resolve(projectRoot, 'tsconfig.json') // ts配置文件路径
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return src(inputs).pipe(gulpTs.createProject(tsConfig, {
          declaration: true,
          strict: false,
          module: config.module
        })()).pipe(dest(output))
      }),
      
      withTaskName(`copy:${module} ${dirname}`, ()=>{
        return src(`${output}/**`).pipe(dest(resolve(buildOutput, config.output.name, name)))
      })
    )
  })
  return parallel(...tasks)
}

export const buildComponents = () => {
  return series(
    withTaskName(`build:components`, async ()=>{
      buildModules()
    })
  )
}