# webpack

> 参考文档      

[webpack4.x 入门一篇足矣](https://juejin.im/post/5b2b9a00e51d45587b48075e)

- 安装 webpack
    -
    npm install webpack --save-dev
    
- 安装 webpack-cli
    -
    npm install webpack-cli --save-dev
    
- 安装 webpack-dev-server
    -
    npm install webpack-dev-server --save-dev

- 安装 html-webpack-plugin
    -
    npm install html-webpack-plugin --save-dev
        
- 安装 clean-webpack-plugin
    -
    npm install clean-webpack-plugin --save-dev
    
- 安装 style-loader \ css-loader
    -
    npm i style-loader css-loader --save-dev    
    
- 安装 extract-text-webpack-plugin 注意： webpack 4 不要使用，会报错  
    -
    npm i -D extract-text-webpack-plugin postcss-loader less-loader sass-loader 

- 安装 mini-css-extract-plugin
    -
    npm i -D mini-css-extract-plugin node-sass postcss-loader less-loader sass-loader autoprefixer

- 打包命令
    -
    webpack --mode development  
    或者  
    npm run build
    
- 运行
    -
    webpack-dev-server  
    或者  
    npm run dev
    
> 插件库源码地址
  
[插件源码 - github](https://github.com/webpack-contrib)

[插件文档 - webpackjs](https://www.webpackjs.com/plugins/)

> loader

[文档 - webpackjs](https://www.webpackjs.com/loaders/)

> 安装eslint 语法检查

`
npm install eslint eslint-config-enough babel-eslint eslint-loader --save-dev
`

package.json
`
{
  "eslintConfig": {
    "extends": "enough",
    "env": {
      "browser": true,
      "node": true
    }
  }
}
`

