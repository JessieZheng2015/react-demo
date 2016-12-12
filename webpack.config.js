var webpack = require('webpack');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        path: __dirname,
        filename: './dist/scripts/main.js'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                loaders: [
                    'url?limit=10000&name=src/images/[name].[ext]?[hash:7]',
                    'image-webpack?{bypassOnDebug:true,progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.(woff|eot|ttf|woff2|svg)$/,
                loader: 'file-loader?name=dist/font/[name].[ext]?[hash:7]'
            },{
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};