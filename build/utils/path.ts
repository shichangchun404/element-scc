import { resolve } from 'path'

export const projectRoot = resolve(__dirname,'../../')
export const pkgRoot = resolve(projectRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')
export const hookRoot = resolve(pkgRoot, 'hooks')

// dist
export const buildOutput = resolve(projectRoot,'dist')