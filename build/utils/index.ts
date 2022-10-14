import { spawn } from 'child_process'
import { projectRoot } from './path'

export const withTashName = (name,fn) => Object.assign(fn, {displayName:name})

// 开启一个子进程运行脚本
export const run = async (command:string)=>{
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ')
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    })
    app.on('close',resolve)
  })
  
}