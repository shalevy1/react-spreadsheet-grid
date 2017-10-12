const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-2']
                    }
                }]
            },
            // [\\\/] - as the "/" delimiter to make the RegExp work in Unix and Windows
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['last 2 versions', 'ie 8', 'ie 9', 'iOS 7', 'android 3', 'android 4']
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    node: {
        fs: "empty"
    },
    resolve: {
      modules: [
          path.resolve('.'),
          'node_modules'
      ]
    },
    entry: [
        './src/table/index.js'
    ],
    output: {
        path: __dirname + '/lib',
        filename: 'bundle.js',
        publicPath: '/'
    }
};

module.exports = config;
