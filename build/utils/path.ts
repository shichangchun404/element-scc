import { resolve } from 'path'

export const projectRoot = resolve(__dirname,'../../')
export const pkgRoot = resolve(projectRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')
export const utilsRoot = resolve(pkgRoot, 'utils')
export const sccRoot = resolve(pkgRoot, 'element-scc')

// dist
export const buildOutput = resolve(projectRoot,'dist')
// dist/scc-element
export const sccOutput = resolve(buildOutput,'element-scc')

export const sccPackage = resolve(sccRoot, 'package.json')
export const utilPackage = resolve(utilsRoot, 'package.json')

