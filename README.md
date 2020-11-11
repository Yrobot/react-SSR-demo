# Yrobot test Server-Side-Rendering

## 运行
```
yarn // 安装依赖
npm start
```

## 一些解释  
__rollup作用__：将传统前端写法（jsx、esm等）转换为node支持的js代码`output.js`，利用postcss打包css文件到static文件夹下   
__server.js__：引入rollup打包完的js文件，读取虚拟dom，利用`ReactDOMServer.renderToString`将虚拟dom的树结构转换为HtmlString，将HtmlString塞入html文件流中 并 作为接口返回。 

## 过程中产生的疑问
1. 但是react的事件是怎么注入的?
```
1. server端将HtmlString注入原本SPA虚拟DOM树应该被渲染的位置  
2. reactDom.hydrate在客户端执行时会去查看当前html中是否存在服务端渲染的dom，如果存在则不会重复渲染，而会把事件在当前dom树一一进行绑定  
```