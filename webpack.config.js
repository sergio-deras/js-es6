
module.exports = {
    entry: [__dirname + '/build/app/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
               loader: 'babel-loader',
               test: /\.js$/,
               exclude: /node_modules/
            }
        ]
    },
    devServer:{
        port: 3003,
        contentBase: __dirname + '/build',
        inline: true
    }
}