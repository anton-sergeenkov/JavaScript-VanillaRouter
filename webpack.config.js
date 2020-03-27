const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: {
			disableDotRule: true
		},
		stats: 'errors-only',
		port: 3001
	},
	resolve: {
        extensions: ['.js']
    },
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(css)/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							sourceMap: true
						}
					},
					{
					    loader: 'postcss-loader',
					    options: {
							config: { path: './postcss.config.js' },
					        sourceMap: true
					    }
					},
				]
			},
			{
				test: /\.(jpe?g|png|svg|gif|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					},
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './public/index.html'}),
		new MiniCssExtractPlugin({
        	filename: '[name].css'
		})
	]
}
