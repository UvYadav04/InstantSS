const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: {
        background: './src/background.js',
        popup: './src/popup.js',
        content: './src/content.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js', // Output files will be named background.bundle.js and popup.bundle.js
    },
    mode: 'production',
    plugins: [
        new copyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/i,  // Match image files
                type: 'asset/resource',  // Use Webpack 5's asset/resource to emit files
                generator: {
                    filename: 'images/[name][hash][ext]',  // Output the images to 'dist/images/'
                },
            },
        ],
    },
    optimization: {
        minimize: false,  // or configure terser options to exclude specific parts
    }
};
