const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
        })
    ],
    module:{
        rules:[{
            test:/\.css$/i,
            use:['style-loader','css-loader']
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type:"asset/resource",
        },
        ],
    },
};
