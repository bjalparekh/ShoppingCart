var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
			js:'./src/javascripts/app.js',
			css: './src/stylesheets/main.scss'
		},
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    stats: {
        color: true,
        reasons: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        },
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style','css!sass'),
				}
			],
    },
		plugins: [
        new ExtractTextPlugin('main.css', {allChunks: false})
    ]
}
