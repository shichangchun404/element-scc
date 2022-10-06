## vue3 + TS 组件库
一  搭建 `monorepo`环境
> 使用pnpm安装包速度快，磁盘空间利用率高，使用pnpm可以快速搭建mororepo。这里使用pnpm + workspace来实现mororepo
```
npm install pnpm -g 
pnpm install
pnpm install vue typescript
```
> 使用pnpm必须建立.npmrc文件。shamefully-hoist=true,否则安装模块无法放置到node_modules目录下。
> 初始化ts配置文件 pnpm tsc --init
> 创建pnpm-workspace.yaml文件，配置项目组件目录。
> 根目录引用项目中的依赖
pnpm install @shicc/components @shicc/theme-chalk @shicc/utils  -w
