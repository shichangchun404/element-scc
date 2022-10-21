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
pnpm install @element-scc/components @element-scc/theme-chalk @element-scc/utils  -w

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

### 打包流程
> 利用构建工具gulp做代码转换
```
pnpm install gulp @types/gulp sucrase -w -D
```
> 1 将sass打包css
```
// 安装依赖
pnpm install sass gulp-sass @types/gulp-sass @types/sass @types/autoprefixer gulp-autoprefixer @types/gulp-clean-css gulp-clean-css -w -D

// 执行脚本
pnpm run  --filter "./packages/**" --parallel build 
```
> 2 打包packages下的utils
```
// 安装依赖
pnpm install gulp-typescript -w -D

```
在utils目录下创建gulpfile.ts执行文件，在packages.json中配置构建指令
```
"scripts": {
  "build": "gulp"
},
```
> 3 打包packages下的components
```
pnpm install fast-glob rollup unplugin-vue-macros @vitejs/plugin-vue @vitejs/plugin-vue-jsx @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-esbuild  -w -D
```