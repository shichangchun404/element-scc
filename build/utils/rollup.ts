import glob from 'fast-glob'
import { rollup } from 'rollup'
import VueMacros from 'unplugin-vue-macros/rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'

import { buildConfig } from './config'
import { compRoot } from './path'

const banner = `/*! Scc ui v1.0.0 */\n`

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist',]
  return files.filter((path) => {
      const result = !excludes.some((exclude) => path.includes(exclude))
      return result
    }
  )
}

export function writeBundles(bundle, options) {
  return Promise.all(options.map((option) => bundle.write(option)))
}

export const buildModules = async () => {
  const files = await glob('*.{js,ts,vue}', {
    cwd: compRoot,
    absolute: true,
    onlyFiles: true,
  })
  const input = excludeFiles(files)
  
  const bundle = await rollup({
    input,
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false,
          }),
          vueJsx: vueJsx(),
        },
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: ['vue'],
    treeshake: false,
  })
  await writeBundles(
    bundle,
    Object.entries(buildConfig).map(([module, config]) => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
        banner
      }
    })
  )
}