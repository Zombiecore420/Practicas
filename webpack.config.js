const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' ); //ayuda a renderear el webpack(html,css,multimedia)
const MiniCssExtractPlugin=require('Mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve( __dirname, 'dist' ), //donde se guarda
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },


            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },


            {
                /**SE ARREGLS LA REGLA PARA QUE PUEDA LEER */
                test:/\.(s*)css$/,
                use:[{
                    loader:MiniCssExtractPlugin.loader,
                },
                    'css-loader',
                    'sass-loader'
                ]
            },


            {
                /**CREAMOS REGLAS PARA LOS ARCHIVOS FILE CUALQUIER ELEMENTO QUE
                 * SEA UTILIZADO CON PNGM GIF,JPG*/
                test: /\.(png|gif|jpg)$/,
                use:[{
                    'loader':'file-loader',
                    options:{
                        name:'assets/[hash].(text)'
                    }
                }] 
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: './index.html',
        } ),
    ],
};