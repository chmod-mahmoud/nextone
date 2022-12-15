import HTMLWebpackPlugin from 'html-webpack-plugin'
import {resolve} from 'path'


export default ({mode}) => {
    const isProd = mode == 'production'
    const filename = isProd? 'nextone[hash].min.js': 'nextone.js'
    const devtool = isProd? '': 'source-map'
    return {
        mode,
        devtool,
        entry: resolve('src/index.tsx'),
        output: {
            filename,
            path: resolve('dist')
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: resolve('public/index.html')
            }),
        ],
        resolve: {
            extensions: [
                ".ts",
                ".tsx",
                ".js",
                ".jsx",
                ".css",
                ".png",
                ".json"
            ],
            alias: {
                "@": resolve('./src')
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        }
    }
}