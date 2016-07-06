#Browserify

[Browserify —— 利用Node.js实现JS模块化加载](http://www.tuicool.com/articles/QZVzeuU)

浏览器中使用node的api
Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库。
	

	安装：npm install -g browserify

	编译：browserify main.js > bundle.js

	直接拿到浏览器使用：<script src="bundle.js"></script>

#Webpack

[webpack傻瓜式指南](https://zhuanlan.zhihu.com/p/20367175)

	
	安装：npm install webpack -g

	安装 html-webpack-plugin 插件： npm install html-webpack-plugin --save-dev

	安装 webpack-dev-server 插件： npm install webpack-dev-server --save-dev

	使用loader方式加载各种资源：
	npm install style-loader css-loader url-loader babel-loader sass-loader file-loader --save-dev

	添加第三方库
	npm install jquery moment --save-dev

	添加ES6支持
	npm install babel-loader babel-preset-es2015 --save-dev

#typescript使用node的api

	npm install async --save-dev
	tsd install async --save