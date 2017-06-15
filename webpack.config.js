module.exports = {
   

    entry: "./app/assets/scripts/App.js",
    output: {
        //change from path: "./app/temp/scripts" because of not an absolute path error
        path:  __dirname + '/app/temp/scripts',
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}