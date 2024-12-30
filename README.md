### 仅截图

使用js实现了一个简易截图功能。
截图：
 - [x] 形状绘制
 - [x] 形状拖拽
 - [x] 线条绘制
 - [x] 线条拖拽
 - [x] 箭头绘制
 - [x] 箭头拖拽
 - [x] 文字输入
 - [ ] 文字框拖拽(不会)
 - [ ] 删除绘制的形状(不会)
 - [x] 马赛克绘制
 - [x] 保存
 - [x] 下载
 - [x] 撤销
 - [x] 固钉

### 开发
```
pnpm install
```
```
pnpm dev
```

### 使用
```
pnpm install
```
```
pnpm build
```

### 更改图标
在`build`文件夹下找到`icon.png`文件，替换掉`build/icon.png`文件即可。
必须要生成一个至少 512x512px 的图标。可以使用ffmpeg等工具进行转换。
```
ffmpeg -i input.jpg -vf "scale=512:512" output.jpg
```

### 打包体积
目前我将渲染进程的依赖写入了`package.json`的`devDependencies`字段。
只有主进程的依赖才放在`dependencies`字段。

### 灵感来自
https://github.com/027xiguapi/pear-rec
仅实现这个项目的其中一个小功能，即截图功能。
