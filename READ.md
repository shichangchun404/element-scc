## vue3 + TS 组件库
### 一  搭建 `monorepo`环境
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

### 二 搭建测试环境
> 在项目根目录play里单独起一个vue项目
```
pnpm create vite play --template vue-ts
```
> 配置typings/vue-shim.d.ts
> 在根目录启动play目录下的启动脚本 
```
  "scripts": {
    "dev": "pnpm -C play dev"
  },
```
