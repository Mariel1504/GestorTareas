const path = require('path');

module.exports = {
    entry: './src/index.js',//punto de entrada de la aplicasion 
    output:{
        filename:'bundle.js',// nombre del archivo de salida 
        path: path.resolve(__dirname, 'dist'),// carpeta de salida
        },
        module: {
            rules: [
                {
                    test: /\.css$/, // regex para identificaer archisvos css
                    use: ['style-loader', 'css-loader'], //loaders para procesar archivos
                },
                {
                    tes: /\.js$/, // redex para identificar archivos js
                    exclude: /node_modules/, // excluir la carpeta de node_moduls
                    use: {
                        loader: 'babel-loader',//para pasar js moderno a js mas antiguo para todos los navegadores
                        Options: {
                            presets: ['@babel/present-env'],
                        },
                    },
                },
            ],
        },
        
}
