/// <binding BeforeBuild='Run - Development' />
"use strict";

var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfills: "./app/polyfills.ts",
        main: "./app/main.ts"
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
            },
            { test: /\.html/, loader: 'html-loader?minimize=false' }
        ]
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
};