const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@mocks': path.resolve(__dirname, '__mocks__'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@entities': path.resolve(__dirname, 'src/entities'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@icons': path.resolve(__dirname, 'src/shared/assets/icons'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        // hot: true,
        open: true,
        port: 3000,
    },
    performance: {
        hints: false,
    },
    infrastructureLogging: {
        level: 'verbose',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 30,
            minSize: 20000,
            maxSize: 200000,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                    chunks: 'all',
                    priority: -10,
                },
                common: {
                    name: 'common',
                    minChunks: 2, // Модули, которые используются как минимум в двух местах, будут выделены в отдельный чанк.
                    chunks: 'all',
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
