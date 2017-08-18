/// <binding BeforeBuild='Run - Development' />
"use strict";

var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfills: "./Scripts/polyfills.ts",
        main: "./Scripts/app.ts"
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    output: {
// ReSharper disable once UndeclaredGlobalVariableUsing
        path: path.join(__dirname, "./wwwroot/"),
        filename: "[name].js"
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },

    module: {
        loaders: [
            {
                test: /\.ts$/, exclude: /node_modules/, loaders: [
                    'ts-loader'
                    , 'angular2-template-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
};