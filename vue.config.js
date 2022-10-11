const ExtractTextPlugin = require('terser-webpack-plugin');

const webpack = require('webpack');
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// 是否为开发环境（生产环境或测试环境）
const isProduction = process.env.NODE_ENV == 'production';
console.log(process.env.NODE_ENV);
// const isProduction = false

// 多线程执行
let HappyPack = require('happypack');
let os = require('os');
let happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// 本地环境是否需要使用cdn
const devNeedCdn = false;

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// cdn链接npm
const cdn = {
	// cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
	externals: {
		vue: 'Vue',
		vuex: 'Vuex',
		'vue-router': 'VueRouter',
		// 'element-ui': 'ElementUI',
		"element-ui": "ELEMENT",
	},
	// cdn的css链接
	css: [
		'https://cdn.staticfile.org/element-ui/2.15.0/theme-chalk/index.min.css'
	],
	// cdn的js链接
	js: [
		'https://cdn.staticfile.org/vue/2.6.11/vue.min.js',
		'https://cdn.staticfile.org/vuex/3.6.2/vuex.min.js',
		'https://cdn.staticfile.org/vue-router/3.2.0/vue-router.min.js',
		"https://cdn.staticfile.org/element-ui/2.15.0/index.min.js"
	],
};

module.exports = {
	publicPath: process.env.NODE_ENV === 'development' ? '/' : 'https://yitaibox-cdn.dbchain.cloud/ytaibox_web/dist/',
	// publicPath: '/',
	css: {
		loaderOptions: {
			// 全局css
			sass: {
				prependData: `@import "./src/assets/scss/_variable";`,
			},
			postcss: {
				plugins: [
					require('autoprefixer')(),
					// require("postcss-px-to-viewport")(
					// 	{
					// 		unitToConvert: "px",    // 需要转换的单位，默认为"px"
					// 		viewportWidth: 375,   // 视窗的宽度，对应pc设计稿的宽度，一般是1920   375
					// 		viewportHeight: 1782,// 视窗的高度，对应的是我们设计稿的高度,
					// 		unitPrecision: 3,        // 单位转换后保留的精度
					// 		propList: [        // 能转化为vw的属性列表
					// 			"*"
					// 		],
					// 		viewportUnit: "vw",        // 希望使用的视口单位
					// 		fontViewportUnit: "vw",        // 字体使用的视口单位
					// 		selectorBlackList: ['._pc_', '-scrollbar', '_pc','._new_'],    // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
					// 		minPixelValue: 1,        // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
					// 		mediaQuery: false,        // 媒体查询里的单位是否需要转换单位
					// 		replace: true,        // 是否直接更换属性值，而不添加备用属性
					// 		// exclude: /(\/|\\)(node_modules)(\/|\\)/,        // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文
					// 		exclude: [/(\/|\\)(node_modules)(\/|\\)/, /\/src\/views\/newPc\//, /\/src\/views\/newMobile\//]
					// 	},
					// )
					// ,
					require("postcss-px-to-viewport")(
						{
							unitToConvert: "px",    // 需要转换的单位，默认为"px"
							viewportWidth: 414,   // 视窗的宽度，对应pc设计稿的宽度，一般是1920   375
							viewportHeight: 1782,// 视窗的高度，对应的是我们设计稿的高度,
							unitPrecision: 3,        // 单位转换后保留的精度
							propList: [        // 能转化为vw的属性列表
								"*"
							],
							viewportUnit: "vw",        // 希望使用的视口单位
							fontViewportUnit: "vw",        // 字体使用的视口单位
							selectorBlackList: ['._pc_', '-scrollbar', '_pc','_not_viewport'],    // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
							minPixelValue: 1,        // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
							mediaQuery: false,        // 媒体查询里的单位是否需要转换单位
							replace: true,        // 是否直接更换属性值，而不添加备用属性
							// exclude: /(\/|\\)(node_modules)(\/|\\)/,        // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文
							exclude: [/(\/|\\)(node_modules)(\/|\\)/,/(\/|\\)(newPc)(\/|\\)/,/(\/|\\)(pc)(\/|\\)/,/(\/|\\)(mobile)(\/|\\)/, /\/src\/views\/newPc\//,/\/src\/views\/pc\//,/\/src\/views\/mobile\//]
						},
					)
					,
					require("postcss-px-to-viewport")(
						{
							unitToConvert: "px",    // 需要转换的单位，默认为"px"
							viewportWidth: 1440,   // 视窗的宽度，对应pc设计稿的宽度，一般是1920   375
							viewportHeight: 900,// 视窗的高度，对应的是我们设计稿的高度,
							unitPrecision: 3,        // 单位转换后保留的精度
							propList: [        // 能转化为vw的属性列表
								"*"
							],
							viewportUnit: "rem",        // 希望使用的视口单位
							fontViewportUnit: "rem",        // 字体使用的视口单位
							selectorBlackList: ['._mobile_', '-scrollbar','_not_viewport','._pc_', '_pc',],    // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
							minPixelValue: 1,        // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
							mediaQuery: false,        // 媒体查询里的单位是否需要转换单位
							replace: true,        // 是否直接更换属性值，而不添加备用属性
							// exclude: /(\/|\\)(node_modules)(\/|\\)/,        // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文
							exclude: [/(\/|\\)(node_modules)(\/|\\)/, /\/src\/views\/newMobile\//]
						}
					)
				]
			}

		},
	},
	productionSourceMap: true, //生产去除map
	chainWebpack: config => {
		// ============压缩图片 start============
		config.module
			.rule('images')
			.use('image-webpack-loader')
			.loader('image-webpack-loader')
			.options(
				// { bypassOnDebug: true }
				{
					disable: true, // webpack@2.x and newer
					quality: '65-80',
					speed: 4,
				}
			)
			.end();
		// ============压缩图片 end============
		// console.log(config);
		// console.log(config.plugin('html'));
		// ============注入cdn start============
		config.plugin('html').tap(args => {
			// 生产环境或本地需要cdn时，才注入cdn
			if (isProduction || devNeedCdn) args[0].cdn = cdn;
			return args;
		});
		// ============注入cdn start============
		// 编译分析
		// config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
		// 	{
		// 		analyzerMode: 'static',
		// 	},
		// ]);
	},

	configureWebpack: config => {
		// 用cdn方式引入，则构建时要忽略相关资源
		if (isProduction || devNeedCdn) config.externals = cdn.externals;

		// 生产环境相关配置
		console.log(isProduction);
		// if (isProduction) {  
		// 代码压缩
		config.plugins.push(
			new ExtractTextPlugin({
				terserOptions: {
					//生产环境自动删除console
					compress: {
						// warnings: false, // 若打包错误，则注释这行
						drop_debugger: true,
						drop_console: true,
						pure_funcs: ['//console.log', 'console.log'],
						// pure_funcs: [],
					},
				},
				sourceMap: false,
				parallel: true,
			}),

			// 多线程构建
			new HappyPack({
				id: 'babel',
				loaders: [
					{
						loader: 'babel-loader',
					},
				],
				threadPool: happyThreadPool,
			}),
			new HappyPack({
				id: 'css',
				// 如何处理 .css 文件，用法和 Loader 配置中一样
				loaders: ['css-loader'],
				// 使用共享进程池中的子进程去处理任务
				threadPool: happyThreadPool,
			})
		);

		// gzip压缩
		// gzip压缩  测试环境下
		// if (process.env.NODE_ENV === 'production'  process.env.VUE_APP_FLAG === 'test') {
		console.log('测试环境');
		const productionGzipExtensions = ['html', 'js', 'css'];
		config.plugins.push(
			new CompressionWebpackPlugin({
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
				threshold: 10240, // 只有大小大于该值的资源会被处理 10240
				minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
				deleteOriginalAssets: false, // 删除原文件
			})
		);
		// }
		// 	// 公共代码抽离
		config.optimization = {
			splitChunks: {
				cacheGroups: {
					vendor: {
						chunks: 'all',
						test: /node_modules/,
						name: 'vendor',
						minChunks: 1,
						maxInitialRequests: 5,
						minSize: 0,
						priority: 100,
					},
					common: {
						chunks: 'all',
						test: /[\\/]src[\\/]js[\\/]/,
						name: 'common',
						minChunks: 2,
						maxInitialRequests: 5,
						minSize: 0,
						priority: 60,
					},
					styles: {
						name: 'styles',
						test: /\.(sa|sc|c)ss$/,
						chunks: 'all',
						enforce: true,
					},
					runtimeChunk: {
						name: 'manifest',
					},
				},
			},
		};
		// }
	},
};
