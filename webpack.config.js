const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const devEnv = require('./src/environments/environment.ts');
const stagEnv = require('./src/environments/environment.stag.ts');
const prodEnv = require('./src/environments/environment.prod.ts');

let environmentConfig;

function setEnvirnmentConfig(env) {
    console.log('env -> ', env);

    switch (env) {
        case 'dev':
            environmentConfig = devEnv;
            break;
        case 'stag': 
            environmentConfig = stagEnv;
            break;
        case 'prod':
            environmentConfig = prodEnv;
            break;
        default:
            break;
    }
    return environmentConfig;
}

module.exports = env => {
    setEnvirnmentConfig(env);

    return {
        entry: './src/index',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin(environmentConfig)
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        }
    };
};