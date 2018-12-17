const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// Since webpack 4 we will need to set in what mode webpack is running
	mode: 'development',
	// This will be the entry file for all of our React code
	entry: ['./client/index.jsx'],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.join(__dirname, '/public/js/'),
		filename: 'bundle.js',
		publicPath: '/public/js/',
	},
	// Adding babel loader to compile our javascript and jsx files
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'env'],
					},
				},
			},
			{
				exclude: /node_modules/,
				test: /\.css$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};