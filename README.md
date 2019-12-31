## 安装webpack-cli -D表示是开发依赖
+ npm i webpack-cli -D

## 安装webpack-dev-server
+ npm i webpack-dev-server -D

## 安装html-webpack-plugin
+ npm i html-webpack-plugin -D

## 安装style-loader和css-loader
+ npm i css-loader style-loader

## 安装clean-webpack-plugin每次重新
+ npm install --save-dev clean-webpack-plugin

## 安装file-loader@4解析文件路径,默认是5.0的版本,5.0的和html-withimg-loader不兼容
+ npm install file-loader@4 -D

## 安装html-loader解析html中的<img src=""/>中的src路径
+ npm install html-loader -D

## 注意
+ esModule
+ Type: Boolean Default: true
+ 启用CommonJS模块语法：esModule: false
+ 写到这里我发现,无论是使用html-loader还是html-withimg-loader,只要是在url-loader或者file-loader的options下面添加esModule:false就会完美兼容,可能是url-loader3.0+以及file-loader5.0+更新后的缘故,如果使用url-loader3.0-以及file-loader5.0-以下的版本,不用添加esModule:false

## Tips
+ 当需要给打包后的文件划分目录的时候,如果选项是filename,则直接在前面加上目录名即可,例如：filename: 'css/index.css';比如像img这种文件没有filename选项,则在outputPath的目录名后加/,例如:outputPath: 'img/';如果在output中设置publicPath,则在outputPath的目录名前后加/,例如:outputPath: '/img/';如果在url-loader的options中设置publicPath,则会覆盖outputPath