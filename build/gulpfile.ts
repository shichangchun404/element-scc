import { series, parallel} from 'gulp'
import { run } from './utils'

const withTashName = (name,fn) => Object.assign(fn, {displayName:name})

export default series(
  withTashName('clear dist', async ()=> run('rm -rf ./dist')),
  withTashName('build packages', async ()=> run('pnpm --filter package --parallel build'))
)