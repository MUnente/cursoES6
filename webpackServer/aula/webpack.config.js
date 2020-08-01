module.exports = {
    entry: './src/main.js', // Qual é o arquivo principal (main)
    output: { // Qual lugar e arquivo eu devo enviar o código convertido em ES6
        path: __dirname + '/public', // __dirname é o diretório raiz
        filename: 'bundle.js' // nome do arquivo
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};